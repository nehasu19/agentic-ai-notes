// Original diagrams for each topic, drawn as inline SVG. Colours come from the site's CSS tokens.
const D = (() => {
  let uid = 0, cur = 'd-arrow';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const box = (x, y, w, h, label, kind = '', sub = '') => {
    const lines = String(label).split('\n');
    const ty = y + h / 2 - (lines.length - 1) * 9 + (sub ? -7 : 0);
    return `<g class="d-node ${kind}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4"/>` +
      lines.map((l, i) => `<text x="${x + w / 2}" y="${ty + i * 18}" text-anchor="middle" dominant-baseline="middle">${esc(l)}</text>`).join('') +
      (sub ? `<text class="d-sub" x="${x + w / 2}" y="${ty + lines.length * 18}" text-anchor="middle" dominant-baseline="middle">${esc(sub)}</text>` : '') + `</g>`;
  };
  const arrow = (x1, y1, x2, y2, dashed) => `<line class="d-line${dashed ? ' d-dash' : ''}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" marker-end="url(#${cur})"/>`;
  const path = (d, dashed) => `<path class="d-line${dashed ? ' d-dash' : ''}" d="${d}" fill="none" marker-end="url(#${cur})"/>`;
  const label = (x, y, t, anchor = 'middle') => `<text class="d-label" x="${x}" y="${y}" text-anchor="${anchor}">${esc(t)}</text>`;
  const svg = (w, h, title, body) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)}" class="diagram">
    <defs><marker id="${cur}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-head" d="M0 0L10 5L0 10z"/></marker></defs>${body}</svg>`;

  const fresh = () => { cur = 'd-arrow-' + (++uid); };
  return {
    loop: () => (fresh(), 0) || svg(640, 330, 'The agent loop: goal, plan, act, observe, repeat until done',
      box(250, 16, 140, 52, 'Goal', 'hi') +
      box(250, 118, 140, 52, 'Plan', '', 'pick the next step') +
      box(470, 118, 150, 52, 'Act', '', 'call a tool or API') +
      box(250, 230, 140, 52, 'Observe', '', 'read the result') +
      box(20, 118, 150, 52, 'Adjust', '', 'update the plan') +
      arrow(320, 68, 320, 116) + arrow(390, 144, 468, 144) +
      path('M545 170 C545 220 450 256 392 256') + path('M250 256 C150 256 95 220 95 172') + path('M170 144 L248 144') +
      box(470, 250, 150, 52, 'Done, or ask\na human', 'soft') + arrow(390, 268, 468, 276, true) +
      label(320, 318, 'Each pass through the loop costs tokens, so more steps means more cost')),

    multi: () => (fresh(), 0) || svg(640, 300, 'Single agent compared with a multi-agent team led by an orchestrator',
      label(120, 24, 'Single agent') + label(440, 24, 'Multi-agent team') +
      box(40, 60, 160, 56, 'One agent', 'hi') + box(40, 170, 160, 52, 'Tools', 'soft', 'search, code, files') + arrow(120, 116, 120, 168) +
      label(120, 262, 'Simple to build and debug') +
      box(360, 44, 160, 52, 'Orchestrator', 'hi', 'splits the work') +
      box(270, 160, 110, 52, 'Researcher') + box(390, 160, 100, 52, 'Writer') + box(500, 160, 110, 52, 'Reviewer') +
      arrow(400, 96, 325, 158) + arrow(440, 96, 440, 158) + arrow(480, 96, 555, 158) +
      label(440, 262, 'Specialists in parallel, but needs coordination') +
      `<line class="d-rule" x1="250" y1="40" x2="250" y2="280"/>`),

    mcp: () => (fresh(), 0) || svg(640, 350, 'An AI agent connects through MCP to many tools and data sources, with a human approval gate',
      box(240, 130, 160, 64, 'AI agent', 'hi', 'MCP client') +
      box(20, 20, 140, 52, 'Calendar', '', 'MCP server') + box(480, 20, 140, 52, 'CRM', '', 'MCP server') +
      box(20, 250, 140, 52, 'Files', '', 'MCP server') + box(480, 250, 140, 52, 'Database', '', 'MCP server') +
      arrow(240, 145, 162, 60) + arrow(400, 145, 478, 60) + arrow(240, 180, 162, 266) + arrow(400, 180, 478, 266) +
      box(250, 16, 140, 48, 'Human approves\nrisky actions', 'soft') + arrow(320, 128, 320, 66, true) +
      label(320, 340, 'One standard plug instead of a custom integration per system')),

    security: () => { fresh();
      const kill = ['Recon', 'Weapon', 'Deliver', 'Exploit', 'Install', 'Control', 'Act'];
      const nist = ['Identify', 'Protect', 'Detect', 'Respond', 'Recover'];
      let b = label(14, 26, 'How an attack unfolds (Cyber Kill Chain)', 'start');
      kill.forEach((k, i) => { b += box(4 + i * 90, 40, 82, 46, k, i === 3 ? 'hi' : ''); if (i) b += arrow(4 + i * 90 - 8, 63, 4 + i * 90 - 1, 63); });
      b += label(14, 140, 'How you defend (NIST Cybersecurity Framework)', 'start');
      nist.forEach((k, i) => { b += box(14 + i * 124, 154, 108, 46, k, 'soft'); if (i) b += arrow(14 + i * 124 - 15, 177, 14 + i * 124 - 1, 177); });
      b += label(320, 236, 'Break the chain early: the sooner a step is blocked, the less it costs');
      return svg(640, 250, 'Attack stages of the Cyber Kill Chain above the five NIST defence functions', b);
    },

    rag: () => (fresh(), 0) || svg(640, 250, 'Retrieval-augmented generation: question, search own documents, add them to the prompt, answer with sources',
      box(10, 70, 120, 60, 'Question') + box(170, 70, 130, 60, 'Search', '', 'own documents') +
      box(340, 70, 130, 60, 'Add to\nprompt') + box(510, 70, 120, 60, 'Answer', 'hi', 'with sources') +
      arrow(130, 100, 168, 100) + arrow(300, 100, 338, 100) + arrow(470, 100, 508, 100) +
      box(170, 170, 130, 52, 'Company\nknowledge', 'soft') + arrow(235, 168, 235, 132, true) +
      label(320, 30, 'Grounds answers in your data instead of the model’s memory')),

    adkar: () => { fresh();
      const s = [['Awareness', 'why change'], ['Desire', 'want to join'], ['Knowledge', 'how to do it'], ['Ability', 'can do it'], ['Reinforcement', 'keep it going']];
      let b = '';
      s.forEach(([t, sub], i) => { b += box(10 + i * 126, 190 - i * 40, 116, 56, t, i === 4 ? 'hi' : '', sub); });
      b += label(10, 26, 'ADKAR: people move up one step at a time', 'start');
      b += label(630, 290, 'A pilot stalls when a step is skipped', 'end');
      return svg(640, 300, 'ADKAR change model drawn as five rising steps', b);
    },

    quadrant: () => (fresh(), 0) || svg(640, 340, 'Risk against speed: four ways to govern an AI use case',
      `<line class="d-axis" x1="70" y1="300" x2="620" y2="300" marker-end="url(#${cur})"/><line class="d-axis" x1="70" y1="300" x2="70" y2="20" marker-end="url(#${cur})"/>` +
      label(345, 330, 'Speed needed') + `<text class="d-label" x="26" y="160" text-anchor="middle" transform="rotate(-90 26 160)">Risk if it goes wrong</text>` +
      box(90, 30, 250, 120, 'Full review', 'soft', 'legal, testing, sign-off') + box(355, 30, 250, 120, 'Sandbox first', 'hi', 'human approves each action') +
      box(90, 165, 250, 120, 'Batch and automate', '', 'light checks') + box(355, 165, 250, 120, 'Ship with monitoring', '', 'fast, watch the logs')),

    plan: () => { fresh();
      const blocks = [['Context', ''], ['Technology', ''], ['Cost', 'topic 1'], ['Security', 'topic 4'], ['Change', 'topic 6'], ['Rollout', 'crawl, walk, run'], ['Governance', 'topic 7'], ['KPIs', 'topic 6']];
      let b = label(320, 24, 'The final plan, built from the earlier topics');
      blocks.forEach(([t, s], i) => { const c = i % 4, r = Math.floor(i / 4); b += box(20 + c * 152, 44 + r * 84, 140, 70, t, i === 7 ? 'hi' : (s.startsWith('topic') ? 'soft' : ''), s); });
      b += box(20, 224, 600, 52, 'Responsible AI: fair, transparent, accountable, contestable', 'hi');
      return svg(640, 290, 'Eight building blocks of the final AI plan resting on responsible AI principles', b);
    }
  };
})();
