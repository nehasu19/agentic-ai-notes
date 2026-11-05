// Token counter for topic 2. Loads OpenAI's open tokenizers (via the gpt-tokenizer package) in the browser.
// If the library cannot load (offline), it falls back to an estimate of about 4 characters per token.
const ENC = {
  o200k_base: 'https://cdn.jsdelivr.net/npm/gpt-tokenizer@4.1.0/esm/encoding/o200k_base.js',
  cl100k_base: 'https://cdn.jsdelivr.net/npm/gpt-tokenizer@4.1.0/esm/encoding/cl100k_base.js'
};
const cache = {};
const MAX_SHOWN = 1500;

async function load(name) {
  if (!cache[name]) cache[name] = import(ENC[name]).catch(() => null);
  return cache[name];
}

function fmt(n) { return Number.isFinite(n) ? n.toLocaleString('en-US') : '0'; }
function money(n) {
  if (!Number.isFinite(n) || n <= 0) return '';
  return n < 0.01 ? '$' + n.toFixed(5) : n < 100 ? '$' + n.toFixed(2) : '$' + Math.round(n).toLocaleString('en-US');
}

export function initTokenCounter(root) {
  const $ = s => root.querySelector(s);
  const text = $('[data-tk="text"]'), enc = $('[data-tk="enc"]'), view = $('[data-tk="view"]');
  const out = { tokens: $('[data-tk="tokens"]'), chars: $('[data-tk="chars"]'), words: $('[data-tk="words"]'), ratio: $('[data-tk="ratio"]'), note: $('[data-tk="note"]') };
  const price = $('[data-tk="price"]'), outTok = $('[data-tk="outtok"]'), outPrice = $('[data-tk="outprice"]'), calls = $('[data-tk="calls"]'), cost = $('[data-tk="cost"]');
  let last = 0, runId = 0;

  async function run() {
    const id = ++runId, value = text.value, name = enc.value;
    const chars = [...value].length, words = (value.trim().match(/\S+/g) || []).length;
    out.chars.textContent = fmt(chars); out.words.textContent = fmt(words);
    const mod = await load(name);
    if (id !== runId) return;
    view.textContent = '';
    if (!mod) {
      last = Math.ceil(chars / 4);
      out.tokens.textContent = '~' + fmt(last);
      out.note.textContent = 'Could not load the tokenizer (offline?). Showing an estimate of about 4 characters per token.';
      view.hidden = true;
    } else {
      const ids = mod.encode(value);
      last = ids.length;
      out.tokens.textContent = fmt(last);
      out.note.textContent = name === 'o200k_base' ? 'Exact for GPT-4o and newer OpenAI models. Other providers split text differently, so treat it as an estimate for them.' : 'Exact for GPT-4 and GPT-3.5 Turbo. Other providers split text differently, so treat it as an estimate for them.';
      view.hidden = last === 0;
      const frag = document.createDocumentFragment();
      ids.slice(0, MAX_SHOWN).forEach((t, i) => {
        const s = document.createElement('span');
        s.className = 'tk tk' + (i % 5);
        s.textContent = mod.decode([t]).replace(/\n/g, '↵\n');
        s.title = 'Token ID ' + t;
        frag.appendChild(s);
      });
      if (ids.length > MAX_SHOWN) { const m = document.createElement('span'); m.className = 'tk-more'; m.textContent = ` … and ${fmt(ids.length - MAX_SHOWN)} more tokens`; frag.appendChild(m); }
      view.appendChild(frag);
    }
    out.ratio.textContent = last ? (chars / last).toFixed(1) : '0';
    calc();
  }

  function calc() {
    const pIn = parseFloat(price.value), nOut = parseFloat(outTok.value) || 0, pOut = parseFloat(outPrice.value) || 0, n = parseFloat(calls.value) || 0;
    if (!last || !n || !(pIn >= 0) || price.value === '') { cost.textContent = 'Enter a price and number of calls to see a cost.'; return; }
    const per = (last * pIn + nOut * pOut) / 1e6;
    cost.innerHTML = `<strong>${money(per) || '$0.00000'}</strong> per call, <strong>${money(per * n) || '$0.00'}</strong> for ${fmt(n)} calls`;
  }

  let t;
  text.addEventListener('input', () => { clearTimeout(t); t = setTimeout(run, 120); });
  enc.addEventListener('change', run);
  [price, outTok, outPrice, calls].forEach(el => el.addEventListener('input', calc));
  root.querySelector('[data-tk="sample"]').addEventListener('click', () => {
    text.value = 'What do I need to rent a car? Which documents should I bring, and can I pick it up at the airport after 10 pm?';
    run(); text.focus();
  });
  root.querySelector('[data-tk="clear"]').addEventListener('click', () => { text.value = ''; run(); text.focus(); });
  run();
}
