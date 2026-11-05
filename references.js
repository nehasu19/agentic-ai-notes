// Reading list: public articles, papers and guides on agentic AI, as citations with links.
// Format: topic | author or publisher | year | title | link (without https://)
const REFERENCES_RAW = `
1|Agrawal|2022|ChatGPT and how AI disrupts industries|hbr.org/2022/12/chatgpt-and-how-ai-disrupts-industries
1|Alammar|2018|The illustrated transformer|jalammar.github.io/illustrated-transformer/
1|Bergmann|2023|What is LangChain?|www.ibm.com/think/topics/langchain
1|Castro|2025|Beware, another ChatGPT trend threatens your privacy: here's how to stay safe|www.techradar.com/computing/cyber-security/beware-another-chatgpt-trend-threatens-your-privacy-heres-how-to-stay-safe
1|Caswell|2025|I've created thousands of AI images and these are the best AI image generators of 2025|www.tomsguide.com/best-picks/best-ai-image-generators
1|Chui|2023|The state of AI in 2023: Generative AI's breakout year|www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023-generative-ais-breakout-year
1|Codingscape|2024|LLMs with largest context windows|codingscape.com/blog/llms-with-largest-context-windows
1|Coshow|2024|Top strategic technology trends for 2025: Agentic AI|www.gartner.com/en/documents/5850847
1|DataFeedWatch|2025|11 best AI advertising examples of 2025|www.datafeedwatch.com/blog/best-ai-advertising-examples
1|Dialzara|2024|AI voice cloning for brand customization: Guide|dialzara.com/blog/ai-voice-cloning-for-brand-customization-guide/
1|EE Times|2025|The evolution of voice in automotive|www.eetimes.com/the-evolution-of-voice-in-automotive/
1|Gadesha|2025|What is chain of thought (CoT) prompting?|www.ibm.com/think/topics/chain-of-thoughts
1|GeeksforGeeks|2024|Difference between batch processing and real-time processing system|www.geeksforgeeks.org/operating-systems/difference-between-batch-processing-and-real-time-processing-system/
1|Germanos|2021|Privacy issues in voice assistant ecosystems|arxiv.org/abs/2109.01606
1|Goodfellow|2014|Generative adversarial nets|proceedings.neurips.cc/paper_files/paper/2014/file/f033ed80deb0234979a61f95710dbe25-Paper.pdf
1|Grace|2025|Real-time sentiment analysis in call centers: Enhancing customer experience and operational efficiency|www.researchgate.net/publication/389272205_Real-Time_Sentiment_Analysis_in_Call_Centers_Enhancing_Customer_Experience_and_Operational_Efficiency
1|Haenlein|2019|A brief history of artificial intelligence: On the past, present, and future of artificial intelligence|www.researchgate.net/profile/Michael-Haenlein/publication/334539401_A_Brief_History_of_Artificial_Intelligence_On_the_Past_Present_and_Future_of_Artificial_Intelligence/links/60cd82e5a6fdcc01d482dc23/A-Brief-History-of-Artificial-Intelligence-On-the-Past-Present-and-Future-of-Artificial-Intelligence.pdf
1|Hightower|2025|A global dress distributor gave AI a chance|www.businessinsider.com/wholesale-formal-gown-distributor-using-ai-for-ecommerce-operations
1|IBM|n.d.|Deep Blue|www.ibm.com/history/deep-blue
1|Investopedia|2024|The Turing test: What is it, what can pass it, and limitations|www.investopedia.com/terms/t/turing-test.asp
1|Klingler|2024|AlexNet: A revolutionary deep learning architecture|viso.ai/deep-learning/alexnet/
1|Langate|2024|AI in medical imaging: Transforming healthcare diagnostics|langate.com/ai-in-medical-imaging-transforming-healthcare-diagnostics/
1|Lawton|2025|History of generative AI innovations spans 9 decades|www.techtarget.com/searchenterpriseai/tip/History-of-generative-AI-innovations-spans-9-decades
1|Lucent Innovation|2024|Diffusion models for generative AI, explained|www.lucentinnovation.com/blogs/it-insights/what-are-diffusion-models-in-generative-ai
1|Marr|2024|How generative AI is revolutionizing customer service|www.forbes.com/sites/bernardmarr/2024/01/26/how-generative-ai-is-revolutionizing-customer-service/
1|McKinsey|2024|What is generative AI?|www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai
1|Mollick|2022|ChatGPT is a tipping point for AI|hbr.org/2022/12/chatgpt-is-a-tipping-point-for-ai
1|Moon Technolabs|2025|Top 15 generative AI use cases with application and benefits|www.moontechnolabs.com/blog/generative-ai-use-cases/
1|Mozilla|2023|Mozilla AI guide: AI basics|ai-guide.future.mozilla.org/content/ai-basics/
1|Murphy|2023|The evolution of chatbots and generative AI|www.techtarget.com/searchcustomerexperience/infographic/The-evolution-of-chatbots-and-generative-AI
1|Nguyen|2025|The 7 best AI image generators: features, pricing, and use cases|indieboosting.com/blog/the-7-best-ai-image-generators-features-pricing-and-use-cases
1|OpenAI|2023|What are tokens and how to count them?|help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them
1|OpenAI|2025|OpenAI o3 and o4-mini system card|cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf
1|Paul|2024|OpenAI launches new series of AI models with "reasoning" abilities|www.reuters.com/technology/artificial-intelligence/openai-launches-new-series-ai-models-solve-hard-problems-2024-09-12/
1|Patrizio|2025|Four tech companies eyeing nuclear power for AI energy|www.techtarget.com/whatis/feature/Three-tech-companies-eyeing-nuclear-power-for-AI-energy
1|PYMNTS|2024|Multimodal AI impacts retail from voice assistants to checkout-free shopping|www.pymnts.com/artificial-intelligence-2/2024/multimodal-ai-impacts-retail-from-voice-assistants-to-checkout-free-shopping/
1|Singla|2024|The state of AI in early 2024: Gen AI adoption spikes and starts to generate value|www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2024
1|Stöffelbauer|2023|How large language models work|medium.com/data-science-at-microsoft/how-large-language-models-work-91c362f5b78f
1|Topal|2023|What is mode collapse in GANs?|medium.com/@miraytopal/what-is-mode-collapse-in-gans-d3428a7bd9b8
1|Tong|2024|Exclusive: OpenAI working on new reasoning technology under code name "Strawberry" (Reuters)|www.reuters.com/technology/artificial-intelligence/openai-working-new-reasoning-technology-under-code-name-strawberry-2024-07-12/
1|Tordjman|2025|How AI agents are opening the golden era of customer experience|www.bcg.com/publications/2025/how-ai-agents-opening-golden-era-customer-experience
1|Wood|2018|Does use of text-to-speech and related read-aloud tools improve reading comprehension for students with reading disabilities?|doi.org/10.1177/0022219416688170
1|Peters|2025|Duolingo will replace contract workers with AI|www.theverge.com/news/657594/duolingo-ai-first-replace-contract-workers
2|BigDATAwire|2024|People to watch 2024: Harrison Chase|www.bigdatawire.com/people-to-watch-2024-harrison-chase/
2|Bisht|2025|Open source in the age of AI|www.mckinsey.com/capabilities/mckinsey-digital/our-insights/tech-forward/open-source-in-the-age-of-ai
2|Deshmukh|2025|Generic AI code assistants are failing enterprise teams: it's time for a new approach|www.tabnine.com/blog/generic-ai-code-assistants-are-failing-enterprise-teams-its-time-for-a-new-approach/
2|Forbes|n.d.|Harrison Chase|www.forbes.com/profile/harrison-chase/
2|GBHackers|2024|Ollama AI platform flaw let attackers execute remote code|gbhackers.com/ollama-ai-platform-remote-code-execution-flaw/
2|GeeksforGeeks|2024|Ollama explained: Transforming AI accessibility and language processing|www.geeksforgeeks.org/ollama-explained-transforming-ai-accessibility-and-language-processing/
2|GeeksforGeeks|n.d.|Goal-based AI agents|www.geeksforgeeks.org/goal-based-ai-agents/
2|GeeksforGeeks|n.d.|Model-based reflex agents in AI|www.geeksforgeeks.org/model-based-reflex-agents-in-ai/
2|GeeksforGeeks|n.d.|Utility-based agents in AI|www.geeksforgeeks.org/utility-based-agents-in-ai/
2|Guda|2023|Challenges and criticisms of LangChain|shashankguda.medium.com/challenges-criticisms-of-langchain-b26afcef94e7
2|Gutowska|n.d.|What is a multi-agent system?|www.ibm.com/think/topics/multiagent-system
2|Harkar|2025|What is vibe coding?|www.ibm.com/think/topics/vibe-coding
2|Hostinger|2025|What is Ollama?|www.hostinger.com/tutorials/what-is-ollama
2|Jundanian|2024|CrewAI pricing: Is it worth the cost?|www.lindy.ai/blog/crew-ai-pricing
2|Karpathy|2025|Post introducing the term "vibe coding" (X)|x.com/karpathy/status/1886192184808149383
2|Kerner|2025|The risks of AI-generated code are real: here's how enterprises can manage the risk|venturebeat.com/ai/the-risks-of-ai-generated-code-are-real-heres-how-enterprises-can-manage-the-risk
2|Kerner|2025|Vibe coding at enterprise scale: AI tools now tackle the full development lifecycle|venturebeat.com/ai/vibe-coding-at-enterprise-scale-ai-tools-now-tackle-the-full-development-lifecycle/
2|Knight|2025|OpenAI launches an agentic, web-based coding tool|www.wired.com/story/openai-launches-an-agentic-web-based-coding-tool/
2|Koh|2025|GitLab: How "vibe coding" and agentic AI are changing the rules of software development|techedt.com/gitlab-how-vibe-coding-and-agentic-ai-are-changing-the-rules-of-software-development
2|Latterner|2024|Guide of AI agent types with examples|medium.com/@thomas.latterner/guide-of-ai-agent-types-with-examples-79f94a741d44
2|Learneroo|n.d.|Simple-reflex agents|www.learneroo.com/modules/89/nodes/469
2|Lee|2025|Securing AI in 2025: A risk-based approach to AI controls and governance|www.sans.org/blog/securing-ai-in-2025-a-risk-based-approach-to-ai-controls-and-governance/
2|Loucks|2025|Autonomous generative AI agents: Under development|www2.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2025/autonomous-generative-ai-agents-still-under-development.html
2|Lunden|2021|n8n raises $12M for its "fair code" approach to low-code workflow automation|techcrunch.com/2021/04/26/n8n-raises-12m-for-its-fair-code-approach-to-low-code-workflow-automation/
2|Malec|2025|Open-source LLMs vs closed: Unbiased guide for innovative companies (2025)|hatchworks.com/blog/gen-ai/open-source-vs-closed-llms-guide/
2|Marr|2024|Navigating the generative AI divide: Open-source vs. closed-source solutions|www.forbes.com/sites/bernardmarr/2024/04/22/navigating-the-generative-ai-divide-open-source-vs-closed-source-solutions/
2|Marshall|2024|The enterprise verdict on AI models: Why open source will win|venturebeat.com/ai/the-enterprise-verdict-on-ai-models-why-open-source-will-win/
2|Maxx|2025|How to pronounce n8n (it's not what you think) and the hidden story behind numeronyms|blog.stackademic.com/how-to-pronounce-n8n-its-not-what-you-think-and-the-hidden-story-behind-numeronyms-c823ff283569
2|Mehta|2025|A quarter of startups in YC's current cohort have codebases that are almost entirely AI-generated|techcrunch.com/2025/03/06/a-quarter-of-startups-in-ycs-current-cohort-have-codebases-that-are-almost-entirely-ai-generated/
2|Milvus|n.d.|How do multi-agent systems handle conflicts?|milvus.io/ai-quick-reference/how-do-multiagent-systems-handle-conflicts
2|Milvus|n.d.|What is agent coordination in multi-agent systems?|milvus.io/ai-quick-reference/what-is-agent-coordination-in-multiagent-systems
2|n8n.io|n.d.|What is n8n?|n8n.io/
2|Number Analytics|2025|Your guide to mastering heterogeneous agents in complex AI systems|www.numberanalytics.com/blog/mastering-heterogeneous-agents-complex-ai-systems
2|Patel|2025|Workday's new head of product wants you to like Workday as much as he does|www.theverge.com/decoder-podcast-with-nilay-patel/667538/workday-gerrit-kazmaier-enterprise-software-ai-interview
2|Pedrazzini|2025|Open-source agentic frameworks: LangGraph vs. CrewAI and more|blog.premai.io/open-source-agentic-frameworks-langgraph-vs-crewai-more/
2|PyImageSearch|2024|Inside look: Exploring Ollama for on-device AI|app.daily.dev/posts/inside-look-exploring-ollama-for-on-device-ai-djhbb1ndz
2|Sapkota|2025|Vibe coding vs. agentic coding (preprint)|arxiv.org/abs/2505.19443
2|Sidashin|2024|My experience using n8n, from a developer perspective|pixeljets.com/blog/n8n/
2|Snaith|2025|If DeepSeek wants to be a real disruptor, it should go much further on data transparency|theodi.org/news-and-events/blog/if-deepseek-wants-to-be-a-real-disruptor-it-should-go-much-further-on-data-transparency/
2|Sutcliffe|2025|Is your enterprise organization vibe coding?|www.nasuni.com/blog/is-your-enterprise-organization-vibe-coding/
2|Tan|2024|How enterprises can ride the AI coding wave|www.computerweekly.com/news/366615277/How-enterprises-can-ride-the-AI-coding-wave
2|TEDAI San Francisco|n.d.|Harrison Chase|tedai-sanfrancisco.ted.com/speakers/harrison-chase/
2|VideoSDK|n.d.|Multi-AI agents: Architectures, frameworks, and real-world applications|www.videosdk.live/developer-hub/ai/multi-ai-agent
2|Tolios|2025|A brief introduction to Ollama|medium.com/data-science-collective/a-brief-introduction-to-ollama-36f0ffd597c0
2|Wiggers|2024|CrewAI uses third-party models to build AI agent teams|finance.yahoo.com/news/crewai-uses-third-party-models-110014253.html
2|Winland|n.d.|What is crewAI?|www.ibm.com/think/topics/crew-ai
2|Yasar|2024|What is LangChain and how to use it: A guide|www.techtarget.com/searchenterpriseai/definition/LangChain
3|Anisuzzaman|2025|Fine-tuning large language models for specialized use cases|www.sciencedirect.com/science/article/pii/S2949761224001147
3|Ashworth|2024|How to use Discord: A beginner's guide|www.wired.com/story/how-to-use-discord/
3|Awan|2025|Control your Spotify playlist with an MCP server|www.kdnuggets.com/control-spotify-playlist-with-mcp-server
3|Awati|2024|Slack software|www.techtarget.com/searchcontentmanagement/definition/Slack-software
3|Basiuk|2024|Integrating LLMs with existing software systems: Challenges and solutions|differ.blog/p/integrating-llms-with-existing-software-systems-challenges-and-solutions-873654
3|DigitalDefynd|2025|How can agentic AI be used for digital transformation?|digitaldefynd.com/IQ/agentic-ai-in-digital-transformation/
3|Ferrer|2024|Fine-tuning LLMs: A guide with examples|www.datacamp.com/tutorial/fine-tuning-large-language-models
3|Halaiko|2023|The evolution of system design: From single server to a scalable infrastructure|d9nich.medium.com/the-evolution-of-system-design-a-journey-from-single-server-to-a-scalable-infrastructure-4936428f594c
3|InStandart|2025|AI integration into legacy systems|instandart.com/blog/ai-development/ai-integration-into-legacy-systems/
3|International Business Magazine|2025|Why is fine-tuning essential for domain-specific AI solutions?|intlbm.com/2025/05/13/why-is-fine-tuning-essential-for-domain-specific-ai-solutions/
3|La Vigne|2025|Model Context Protocol: Discover the missing link in AI integration|www.redhat.com/en/blog/model-context-protocol-discover-missing-link-ai-integration
3|Lazarev|2024|Navigating the challenges of AI integration in legacy IT systems|lumen-it.ai/navigating-the-challenges-of-ai-integration-in-legacy-it-systems/
3|Lu|2023|Direct preference optimization: Your language model is secretly a reward model (preprint)|doi.org/10.48550/arXiv.2305.18290
3|Lu|2025|Fine-tuning large language models for domain adaptation: training strategies, scaling, model merging and synergistic capabilities|doi.org/10.1038/s41524-025-01564-y
3|Milne|2024|AI tools show biases in ranking job applicants' names according to perceived race and gender|www.washington.edu/news/2024/10/31/ai-bias-resume-screening-race-gender/
3|Moore|2024|Zapier review|www.pcmag.com/reviews/zapier
3|Pfundstein|2024|MCP-Gsuite MCP server|playbooks.com/mcp/markuspfundstein/mcp-gsuite
3|Pot|2024|Notion review|www.pcmag.com/reviews/notion
3|Roshanaei|2024|Talk, listen, connect: How humans and AI evaluate empathy in responses to emotionally charged narratives (preprint)|arxiv.org/abs/2409.15550
3|Se|2025|What is MCP, and why is everyone suddenly talking about it?|huggingface.co/blog/Kseniase/mcp
3|Sharma|2025|Humanizing AI agents: Emotion detection and empathy in collaborative workflows|www.forbes.com/councils/forbestechcouncil/2025/02/03/humanizing-ai-agents-emotion-detection-and-empathy-in-collaborative-workflows/
3|Sharma|2026|What is WordPress MCP server and how to use it: Guide for agencies|instawp.com/wordpress-mcp/
3|Streets|2024|Empathetic AI: How genAI virtual agents will be leveraged|www.icmi.com/resources/2024/empathetic-ai-and-virtual-agents
3|Venter|2025|n8n review: what is it capable of?|cybernews.com/ai-tools/n8n-review/
3|Weatherbed|2025|Figma will let your AI access its design servers|www.theverge.com/news/679439/figma-dev-mode-mcp-server-beta-release
3|Wikipedia|n.d.|2023 Optus outage|en.wikipedia.org/wiki/2023_Optus_outage
3|Yasar|2025|What is LangChain and how to use it: A guide|www.techtarget.com/searchenterpriseai/definition/LangChain
3|Zarecki|2025|Salesforce MCP: Connecting AI agents to enterprise data|www.k2view.com/blog/salesforce-mcp/
3|Zartis Team|n.d.|Integrating AI agents in legacy systems: Challenges and opportunities|www.zartis.com/integrating-ai-agents-in-legacy-systems-challenges-and-opportunities/
3|Zola|2021|Python|www.techtarget.com/whatis/definition/Python
4|Allen|2024|New York City defends AI chatbot that advised entrepreneurs to break laws|www.reuters.com/technology/new-york-city-defends-ai-chatbot-that-advised-entrepreneurs-break-laws-2024-04-04/
4|Anisuzzaman|2025|Fine-tuning large language models for specialized use cases|www.sciencedirect.com/science/article/pii/S2949761224001147
4|Barański|2025|Investigation of Whisper ASR hallucinations induced by non-speech audio (preprint)|arxiv.org/abs/2501.11378
4|Bedayn|2024|Class action lawsuit on AI-related discrimination reaches final settlement|apnews.com/article/artificial-intelligence-ai-lawsuit-discrimination-bias-1bc785c24a1b88bd425a8fa367ab2b23
4|Belanger|2024|Air Canada has to honor a refund policy its chatbot made up|www.wired.com/story/air-canada-chatbot-refund-policy/
4|BHM Healthcare Solutions|2024|AI hallucination in healthcare use|bhmpc.com/2024/12/ai-hallucination/
4|Bond|2024|A political consultant faces charges and fines for Biden deepfake robocalls|www.npr.org/2024/05/23/nx-s1-4977582/fcc-ai-deepfake-robocall-biden-new-hampshire-political-operative
4|Burke|2024|Researchers say an AI-powered transcription tool used in hospitals invents things no one ever said|apnews.com/article/ai-artificial-intelligence-health-business-90020cdf5fa16c79ca2e5b6c4c9bbb14
4|Damiani|2019|A voice deepfake was used to scam a CEO out of $243,000|www.forbes.com/sites/jessedamiani/2019/09/03/a-voice-deepfake-was-used-to-scam-a-ceo-out-of-243000/
4|Dayal|2025|The role of human oversight in ensuring safe deployment of large language models (LLMs)|www.digitaldividedata.com/blog/human-oversight-in-ensuring-safe-deployment-of-large-language-models
4|Deloitte|2026|The state of AI in the enterprise|www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html
4|Ekechi|2024|AI-infused chatbots for customer support: A cross-country evaluation of user satisfaction in the USA and the UK|doi.org/10.51594/ijmer.v6i4.1057
4|Garcia|2025|Avoiding legal traps: How to use agentic AI in healthcare|www.forbes.com/councils/forbestechcouncil/2025/05/08/avoiding-legal-traps-how-to-use-agentic-ai-in-healthcare/
4|Heath|2023|AI lawsuits spread to health|www.bioethics.com/archives/71373
4|Ianzito|2025|Bogus ads use Elon Musk's image to steal victims' savings|www.aarp.org/money/scams-fraud/elon-musk-scams/
4|IBM|2021|What is the NIST cybersecurity framework?|www.ibm.com/think/topics/nist
4|Koenecke|2024|Careless Whisper: Speech-to-text hallucination harms (preprint)|doi.org/10.48550/arXiv.2402.08021
4|Kosinski|2024|What is a prompt injection attack?|www.ibm.com/think/topics/prompt-injection
4|McNulty|2023|EEOC secures first workplace artificial intelligence settlement|www.gtlaw.com/en/insights/2023/8/eeoc-secures-first-workplace-artificial-intelligence-settlement
4|Milmo|2024|Company worker in Hong Kong pays out £20m in deepfake video call scam|www.theguardian.com/world/2024/feb/05/hong-kong-company-deepfake-video-conference-call-scam
4|Northwestern|2023|The rise of artificial intelligence and deepfakes|buffett.northwestern.edu/documents/buffett-brief_the-rise-of-ai-and-deepfake-technology.pdf
4|Offenhartz|2024|NYC's AI chatbot was caught telling businesses to break the law|apnews.com/article/new-york-city-chatbot-misinformation-6ebc71db5b770b9969c906a7ee4fae21
4|Park|2023|Generative agents: Interactive simulacra of human behavior (preprint)|doi.org/10.48550/arXiv.2304.03442
4|Roshanaei|2024|Talk, listen, connect: Navigating empathy in human-AI interactions (preprint)|arxiv.org/html/2409.15550v1
4|Sato|2025|Chicago Sun-Times publishes made-up books and fake experts in AI debacle|www.theverge.com/ai-artificial-intelligence/670510/chicago-sun-times-ai-generated-reading-list
4|Schreiber|2025|New AI tool counters health insurance denials decided by automated algorithms|www.theguardian.com/us-news/2025/jan/25/health-insurers-ai
4|Sheps|2024|What is the Lockheed Martin Cyber Kill Chain?|www.aquasec.com/cloud-native-academy/application-security/cyber-kill-chain/
4|Sjouwerman|2024|Five steps to decoding AI-powered impersonation attacks|www.forbes.com/councils/forbestechcouncil/2024/06/21/five-steps-to-decoding-ai-powered-impersonation-attacks/
4|Streets|2024|Empathetic AI: How genAI virtual agents will be leveraged|www.icmi.com/resources/2024/empathetic-ai-and-virtual-agents
4|Stryker|n.d.|What is AI agent perception?|www.ibm.com/think/topics/ai-agent-perception
4|U.S. Equal Employment Opportunity Commission|2022|EEOC sues iTutorGroup for age discrimination|www.eeoc.gov/newsroom/eeoc-sues-itutorgroup-age-discrimination
4|Uzoka|2024|Leveraging AI-powered chatbots to enhance customer service efficiency and future opportunities in automated support|doi.org/10.51594/csitrj.v5i10.1676
4|Wakefield|2022|Deepfake presidents used in Russia-Ukraine war|www.bbc.com/news/technology-60780142
4|Wei|2022|Chain-of-thought prompting elicits reasoning in large language models|doi.org/10.48550/arXiv.2201.11903
4|Wired|2024|This prompt can make an AI chatbot identify and extract personal details from your chats|www.wired.com/story/ai-imprompter-malware-llm/
5|Abu-Shakra|2025|EY announces large-scale integration of leading-edge AI technology into global Assurance technology platform|www.ey.com/en_gl/newsroom/2025/04/ey-announces-large-scale-integration-of-leading-edge-ai-technology-into-global-assurance-technology-platform
5|Aftab|2024|Microsoft Copilot Studio: Building copilots with agent capabilities|www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/microsoft-copilot-studio-building-copilots-with-agent-capabilities/
5|Exabeam|n.d.|Agentic AI: How it works and 7 real-world use cases|www.exabeam.com/explainers/ai-cyber-security/agentic-ai-how-it-works-and-7-real-world-use-cases/
5|IBM|n.d.|AI agents for human resources (HR)|www.ibm.com/products/watsonx-orchestrate/ai-agent-for-hr
5|Altman|2025|Reflections|blog.samaltman.com/reflections
5|AWS Marketplace|n.d.|AI-powered financial advisory platform for banks and wealth firms|aws.amazon.com/marketplace/pp/prodview-nxmucxiyys4dm
5|AWS Marketplace|n.d.|HR agentic assistant proof of concept|aws.amazon.com/marketplace/pp/prodview-6i6mf2fwh7meq
5|Blacet|2025|From concept to impact: Agentic AI use cases that prove the power of intelligent automation|www.moveworks.com/us/en/resources/blog/agentic-ai-examples-use-cases
5|Blanton|2025|What can IT do about shadow AI?|jumpcloud.com/blog/what-can-it-do-about-shadow-ai
5|bluebash|2025|Agentic AI copilots in industrial automation|www.bluebash.co/blog/agentic-ai-copilots-industrial-automation/
5|CybSafe|2024|Oh Behave! The annual cybersecurity attitudes and behaviors report 2024 to 2025|www.cybsafe.com/whitepapers/oh-behave-the-annual-cybersecurity-attitudes-and-behaviors-report-24-25/
5|Deloitte|2022|With $1.4B investment, Deloitte looks to reshape the future of learning and development|www.prnewswire.com/news-releases/with-1-4b-investment-deloitte-looks-to-reshape-the-future-of-learning-and-development-301702421.html
5|DigitalDefynd|2024|10 ways Nike uses artificial intelligence|digitaldefynd.com/IQ/ways-nike-use-ai/
5|Dilmegani|2025|40+ agentic AI use cases with real-life examples in 2025|research.aimultiple.com/agentic-ai/
5|Edwards|2025|Hugging Face clones OpenAI's deep research in 24 hours|arstechnica.com/ai/2025/02/after-24-hour-hackathon-hugging-faces-ai-research-agent-nearly-matches-openais-solution/
5|Kore.ai|n.d.|Empowering financial advisors with intelligent, secure AI support|www.kore.ai/empowering-financial-advisors-with-intelligent-secure-ai-support/
5|Fast Company|2023|IKEA's generative AI furniture designs are trippy, retro, inspiring|www.fastcompany.com/90871133/ikea-generative-ai-furniture-design
5|Fast Company|2025|Crocs just found the perfect use case for AI|www.fastcompany.com/91277587/crocs-ai-jibbitz
5|Gartner|2025|Gartner predicts agentic AI will autonomously resolve 80% of common customer service issues without human intervention by 2029|www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290
5|Gutowska|n.d.|What are AI agents?|www.ibm.com/think/topics/ai-agents
5|Haynes|2025|Build a profitable advisory team without breaking the bank|www.salesforce.com/blog/ai-agents-for-wealth-management/
5|Kass-Hout|2024|How agentic AI systems can solve the three most pressing problems in healthcare today|www.gehealthcare.com/insights/article/how-agentic-ai-systems-can-solve-the-three-most-pressing-problems-in-healthcare-today
5|King|2025|The path to medical superintelligence|microsoft.ai/new/the-path-to-medical-superintelligence/
5|Kolata|2024|ChatGPT defeated doctors at diagnosing illness|www.nytimes.com/2024/11/17/health/chatgpt-ai-doctors-diagnosis.html
5|Krantz|2024|Shadow AI|www.ibm.com/think/topics/shadow-ai
5|Laviola|2025|What is agentic AI and how can it be used in healthcare?|healthtechmagazine.net/article/2025/05/what-is-agentic-ai-in-healthcare-perfcon
5|Loten|2023|PricewaterhouseCoopers to pour $1 billion into generative AI|www.wsj.com/articles/pricewaterhousecoopers-to-pour-1-billion-into-generative-ai-cac2cedd
5|Lungren|2025|Developing next-generation cancer care management with multi-agent orchestration|www.microsoft.com/en-us/industry/blog/healthcare/2025/05/19/developing-next-generation-cancer-care-management-with-multi-agent-orchestration/
5|Marr|2025|The amazing ways L'Oréal is using AI to transform the beauty industry|www.forbes.com/sites/bernardmarr/2025/07/07/lorals-ai-weapon-could-kill-traditional-beauty-industry-forever/
5|Martyr|2025|AI agent architecture: Core principles and tools in 2025|orq.ai/blog/ai-agent-architecture
5|Maurer|2023|KPMG plans $2 billion investment in AI and cloud services|www.wsj.com/articles/kpmg-plans-2-billion-investment-in-ai-and-cloud-services-e4fd0dd5
5|Mend.io|2025|Shadow AI: Examples, risks, and 8 ways to mitigate them|www.mend.io/blog/shadow-ai-examples-risks-and-8-ways-to-mitigate-them/
5|Muennighoff|2025|s1: Simple test-time scaling|arxiv.org/abs/2501.19393
5|Nellis|2025|Oracle rolls out AI agents for sales professionals|www.reuters.com/technology/artificial-intelligence/oracle-rolls-out-ai-agents-sales-professionals-2025-01-21/
5|NexGen Cloud|2025|Top 5 use cases of generative AI in the automotive industry|www.nexgencloud.com/blog/case-studies/top-use-cases-of-generative-ai-in-the-automotive-industry
5|Nori|2025|Sequential diagnosis with language models|www.microsoft.com/en-us/research/publication/sequential-diagnosis-with-language-models/
5|NovaSky|2025|Sky-T1: Train your own O1 preview model within $450|novasky-ai.github.io/posts/sky-t1/
5|Hugging Face|2025|Open-source DeepResearch: Freeing our search agents|huggingface.co/blog/open-deep-research
5|PC Gamer|2025|This aerospike rocket engine designed by generative AI just completed its first hot fire test|www.pcgamer.com/hardware/this-aerospike-rocket-engine-designed-by-generative-ai-just-completed-its-first-hot-fire-test/
5|Pitt|2024|Beauty in the age of technology: L'Oréal's Viva Tech 2024 launches|beautymatter.com/articles/loreals-viva-tech-2024-launches
5|Pierce|2025|Mitigating shadow AI: A guide for safer productivity and innovation|www.structured.com/blog/mitigating-shadow-ai/
5|Reco|2024|What is shadow AI?|www.reco.ai/learn/shadow-ai
5|Ripla|2024|Strategic roadmaps for enterprise AI maturity: Crawl, walk, run, fly|www.linkedin.com/pulse/strategic-roadmaps-enterprise-ai-maturity-crawl-walk-andre-ybsie
5|Rosenberg|2024|How can AI help financial advisors?|www.investopedia.com/how-can-ai-help-financial-advisors-8385520
5|Satish|2025|RAG is dead: Why enterprises are shifting to agent-based AI architectures|www.techradar.com/pro/rag-is-dead-why-enterprises-are-shifting-to-agent-based-ai-architectures
5|Zylo|n.d.|Shadow AI explained: Causes, consequences, and best practices for control|zylo.com/blog/shadow-ai/
5|Silver|2025|Crawl, walk, run: A strategic guide to implementing artificial intelligence in your organization|www.linkedin.com/pulse/crawl-walk-run-strategic-guide-implementing-your-mark-silver-tcuzc/
5|Simbie AI|2025|7 agentic AI use cases in healthcare for 2025|www.simbie.ai/agentic-ai-use-cases-in-healthcare/
5|ManageEngine|n.d.|Simplify IT service operations with Copilot in Microsoft Teams|www.manageengine.com/products/service-desk/ai/copilot.html
5|Slesarenko|2025|Five-phase framework for AI agent implementation|onereach.ai/blog/ai-agent-implementation-strategy-for-it-leaders/
5|Swan|2024|Beyond the shadows: A guide to mitigating shadow AI in your organization|www.linkedin.com/pulse/beyond-shadows-guide-mitigating-shadow-ai-your-phillip-swan-zzvic
5|Tan|2025|Unbundling the BPO: How AI will disrupt outsourced work|a16z.com/unbundling-the-bpo-how-ai-will-disrupt-outsourced-work/
5|Workativ|n.d.|The HR chatbot that actually does the work|workativ.com/ai-agent/hr/
5|Verschueren|2025|Getting started with agentic analytics: A crawl-walk-run framework|www.biztory.com/blog/getting-started-with-agentic-analytics
5|Zendesk|2024|What is shadow AI?|www.zendesk.com/in/blog/shadow-ai/
6|Agility at Scale|2025|From pilot to production: Scaling AI projects in the enterprise|agility-at-scale.com/implementing/scaling-ai-projects/
6|Allganize|2025|Resistance to AI: Governance and cultural challenges|www.allganize.ai/en/blog/resistance-to-ai-governance-and-cultural-challenges
6|Attupurathu|2025|Organizational resistance to AI: Strategic approach|www.linkedin.com/pulse/organizational-resistance-ai-strategic-approach-attupurathu-pcwgc
6|Brodsky|2024|The hidden costs of AI: How generative models are reshaping corporate budgets|www.ibm.com/think/insights/ai-economics-compute-cost
6|Chinoy|2024|Measuring gen AI success: A deep dive into the KPIs you need|cloud.google.com/transform/gen-ai-kpis-measuring-ai-success-deep-dive
6|Cloud Security Alliance|2025|Navigating the human factor: Addressing employee resistance to AI adoption|cloudsecurityalliance.org/artifacts/navigating-the-human-factor
6|Cprime|n.d.|Change management in AI adoption: Effective strategies for managing organizational change while implementing AI|www.cprime.com/change-management-in-ai-adoption-effective-strategies-for-managing-organizational-change-while-implementing-ai/
6|Creasey|2025|Mapping AI adoption research insights to ADKAR|www.linkedin.com/pulse/mapping-ai-adoption-research-insights-adkar-tim-creasey-ptjrc/
6|Dastin|2018|Amazon scraps secret AI recruiting tool that showed bias against women|www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G/
6|De Sousa|2025|Driving AI adoption: A natural alignment with the ADKAR model|www.linkedin.com/pulse/driving-ai-adoption-natural-alignment-adkar-model-pl%C3%ADnio-de-sousa-uko1f
6|Dement|n.d.|Launching a successful AI pilot program: A guide for executives|www.scottmadden.com/insight/launching-a-successful-ai-pilot-program-a-guide-for-executives/
6|Dhruv|2025|AI agent technology stack: Breakdown of the AI agent stack|www.aalpha.net/blog/ai-agent-technology-stack/
6|Dworniczak|2025|Kotter's change model 2025: Still relevant in digital|www.linkedin.com/pulse/kotters-change-model-2025-still-relevant-digital-dworniczak-pmp-lpenf
6|Garg|n.d.|5 steps to overcome employee resistance to AI-based tech|www.uknowva.com/blogs/overcome-employee-resistance-to-tech
6|Gosden|2024|Deploying AI agents: A practical guide for FS leaders|www.linkedin.com/pulse/deploying-ai-agents-practical-guide-fs-leaders-matt-gosden-p4ule
6|Hilgers|2025|7 ways agentic AI pilots get stuck, and how to move ahead|www.salesforce.com/blog/agentic-ai-pilot-launch/
6|IBM|2025|How AI-focused change management can build trust and accelerate business value|www.ibm.com/think/insights/change-management-responsible-ai
6|Ikigai Colors|2024|AI and change management: A practical framework for leaders|ikigai-colors.com/index.php/2024/09/19/ai-and-change-management-a-practical-framework-for-leaders/
6|Marr|2024|11 barriers to effective AI adoption and how to overcome them|www.forbes.com/sites/bernardmarr/2024/05/10/11-barriers-to-effective-ai-adoption-and-how-to-overcome-them/
6|Miesbauer|2025|Barriers to AI adoption: Challenges and solutions|www.agiloft.com/blog/barriers-to-ai-adoption/
6|von Moltke|n.d.|How to conduct a change readiness assessment (with template)|www.aihr.com/blog/change-readiness-assessment-template/
6|Nasstar|2024|Navigating AI and change management: How to embrace digital transformation|www.nasstar.com/insights/navigating-ai-and-change-management
6|Paige|2025|AI project scaling strategy: Stop running pilots that stall|www.bainsquared.com/post/ai-project-scaling-strategy-stop-running-pilots-that-stall
6|Rajadurai|2025|From delays to precision: How AI is optimizing last-mile deliveries|www.infosys.com/iki/perspectives/ai-optimizing-last-mile-deliveries.html
6|Reji|2025|AI job loss: 40% of roles at risk, experts warn|economictimes.indiatimes.com/tech/artificial-intelligence/ai-job-loss-40-of-roles-at-risk-experts-warn/articleshow/120894138.cms
6|Ross|2017|IBM pitched its Watson supercomputer as a revolution in cancer care|www.statnews.com/2017/09/05/watson-ibm-cancer/
6|Salian|2024|Leveraging ADKAR for successful AI adoption|www.margonline.com/blog/leveraging-adkar-for-successful-ai-adoption/
6|Schwartz|2024|Overcoming resistance to AI adoption: Strategies for success|www.scoutos.com/blog/overcoming-resistance-to-ai-adoption-strategies-for-success
6|Ströhfeldt|2025|ADKAR, AI, and the "D" that demands our attention|www.linkedin.com/pulse/adkar-ai-d-demands-our-attention-4sight-business-environment-xa3nf
6|Sumrak|2025|AI voice agents: what they are and how they work in 2025|www.assemblyai.com/blog/ai-voice-agents
6|Toleti|2025|Why AI must solve its last-mile integration problem|builtin.com/artificial-intelligence/ai-last-mile-integration
6|Verma|2025|40+ AI voice agent use cases by industry: Retail, finance and more|www.biz4group.com/blog/ai-voice-agent-use-cases
6|BrainyQuote|n.d.|Jaan Tallinn quote|www.brainyquote.com/quotes/jaan_tallinn_818388
6|YouAccel|n.d.|Adapting Kotter's change model for AI and automation|youaccel.com/lesson/adapting-kotters-change-model-for-ai-and-automation/premium
7|Agarwal|2024|How generative AI can help banks manage risk and compliance|www.mckinsey.com/capabilities/risk-and-resilience/our-insights/how-generative-ai-can-help-banks-manage-risk-and-compliance
7|Ahmed|2025|Enhance Gemini model security with content filters and system instructions|cloud.google.com/blog/products/ai-machine-learning/enhance-gemini-model-security-with-content-filters-and-system-instructions
7|Australian Government|n.d.|The 10 guardrails: Voluntary AI safety standard|www.industry.gov.au/publications/voluntary-ai-safety-standard/10-guardrails
7|Centers for Disease Control and Prevention|2024|Health Insurance Portability and Accountability Act of 1996 (HIPAA)|www.cdc.gov/phlp/php/resources/health-insurance-portability-and-accountability-act-of-1996-hipaa.html
7|Chan|2024|Visibility into AI agents|arxiv.org/html/2401.13138v1
7|Dargan|2022|Security and privacy in cloud-, edge- and fog-based schemes|www.sciencedirect.com/science/article/abs/pii/B9780323906159000219
7|Diligent|2026|AI governance: What it is, why it matters and how to implement it|www.diligent.com/resources/blog/ai-governance
7|European Parliament|2023|EU AI Act: First regulation on artificial intelligence|www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence
7|Exabeam|n.d.|The intersection of GDPR and AI and 6 compliance best practices|www.exabeam.com/explainers/gdpr-compliance/the-intersection-of-gdpr-and-ai-and-6-compliance-best-practices/
7|Farrell|2025|Regulatory tech: How AI is shaping the next era of compliance in government|www.govloop.com/community/blog/regulatory-tech-how-ai-is-shaping-the-next-era-of-compliance-in-government/
7|Federal Trade Commission|2024|FTC announces crackdown on deceptive AI claims and schemes|www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes
7|Fisher Phillips|2024|AI governance 101: 10 steps your business should take|www.fisherphillips.com/en/news-insights/ai-governance-101-10-steps-your-business-should-take.html
7|Fitzgerald|2024|Understanding compliance gap analysis: A key component of compliance programs|secureframe.com/blog/compliance-gap-analysis
7|Gillis|2024|AI governance: Best practices and challenges|www.techtarget.com/searchenterpriseai/definition/AI-governance
7|International Association of Privacy Professionals|2025|Key terms for AI governance|iapp.org/resources/article/key-terms-for-ai-governance/
7|International Organization for Standardization|2023|ISO/IEC 42001: Artificial intelligence management system|www.iso.org/standard/81230.html
7|Kao|n.d.|What is A/B testing?|www.salesforce.com/ca/marketing/what-is-ab-testing/
7|Lucas|2024|Sandboxing agentic AI workflows with WebAssembly|developer.nvidia.com/blog/sandboxing-agentic-ai-workflows-with-webassembly/
7|Mărcuță|2025|The role of AI in ensuring GDPR compliance for customer service chatbots|moldstud.com/articles/p-the-role-of-ai-in-ensuring-gdpr-compliance-for-customer-service-chatbots
7|Masood|2025|Establishing trust in AI agents, part I: Monitoring, control, reliability, and accuracy|medium.com/@adnanmasood/establishing-trust-in-ai-agents-i-monitoring-control-reliability-and-accuracy-f440664df5fd
7|Mohapatra|2025|Human-in-the-loop: The right balance of automation and oversight|blog.cognitiveview.com/human-in-the-loop-ai-governance-the-right-balance-of-automation-oversight/
7|Morrone|2025|"Humans in the loop" make AI work, for now|www.axios.com/2025/03/06/humans-in-the-loop-ai
7|Muse|2025|6 ways sandboxes prepare your Agentforce for the real world|www.salesforce.com/blog/agentforce-testing/
7|National Conference of State Legislatures|2023|Approaches to regulating artificial intelligence: A primer|www.ncsl.org/technology-and-communication/approaches-to-regulating-artificial-intelligence-a-primer
7|National Institute of Standards and Technology|2023|AI risk management framework (AI RMF) 1.0|www.nist.gov/itl/ai-risk-management-framework
7|Norton|2025|How can tech leaders manage emerging generative AI risks today while keeping the future in mind?|www.deloitte.com/us/en/insights/topics/digital-transformation/four-emerging-categories-of-gen-ai-risks.html
7|Pancholi|2025|AI, data privacy, and ethics: Navigating the digital dilemma|ijmsrt.com/storages/download-paper/IJMSRT25JUN053
7|Potter|2025|Navigating the future of AI governance: Insights and best practices|www.onetrust.com/blog/navigating-the-future-of-ai-governance-insights-and-best-practices/
7|Prescient Security|2025|How FAIRLY AI strengthened their AI governance by achieving ISO 42001 compliance|prescientsecurity.com/case-studies/fairly-ai-case-study
7|QAwerk|2025|The future of AI agent testing: Trends to watch in 2025|qawerk.com/blog/ai-agent-testing-trends/
7|Rezaeikhonakdar|2023|AI chatbots and challenges of HIPAA compliance for AI developers and vendors|www.cambridge.org/core/services/aop-cambridge-core/content/view/C873B37AF3901C034FECAEE4598D4A6A/S1073110524000159a.pdf/ai_chatbots_and_challenges_of_hipaa_compliance_for_ai_developers_and_vendors.pdf
7|Riskonnect|n.d.|AI governance: 5 ways to embed AI oversight into GRC|riskonnect.com/ai/ai-governance-embed-ai-oversight-grc/
7|Sally|2025|Agentic AI: A short introduction and key legal considerations|www.tlt.com/insights-and-events/insight/a-short-introduction-of-agentic-ai-and-key-legal-considerations/
7|Sanford|2021|How to build accountability into your AI|hbr.org/2021/08/how-to-build-accountability-into-your-ai
7|Scytale|n.d.|HIPAA business associate|scytale.ai/glossary/hipaa-business-associate/
7|Shaw|2025|The role of AI governance in autonomous intelligence|acuvate.com/blog/role-of-ai-governance-in-autonomous-ai/
7|Smith|2025|What CISOs need to know about AI governance frameworks|www.techtarget.com/searchsecurity/tip/What-CISOs-need-to-know-about-AI-governance-frameworks
7|Stewart|2024|CCPA vs GDPR: AI data privacy comparison|dialzara.com/blog/ccpa-vs-gdpr-ai-data-privacy-comparison
7|Stewart|2024|AI compliance audit: Step-by-step guide|dialzara.com/blog/ai-compliance-audit-step-by-step-guide
7|Stryker|n.d.|What is AI agent evaluation?|www.ibm.com/think/topics/ai-agent-evaluation
7|The Hacker News|2025|AI agents act like employees with root access: here's how to regain control|thehackernews.com/2025/07/ai-agents-act-like-employees-with-root.html
7|Trantopoulos|2025|Will your gen AI strategy shape your future or derail it?|hbr.org/2025/07/will-your-gen-ai-strategy-shape-your-future-or-derail-it
7|Uspenskyi|2025|Tackling regulatory compliance challenges with AI agents|springsapps.com/knowledge/top-compliance-problems-solved-by-ai-agents-real-world-case-studies
7|Vinkle|2025|The new era of privacy enforcement: Why CCPA compliance can't wait|cheq.ai/blog/the-new-era-of-privacy-enforcement-why-ccpa-compliance-cant-wait/
7|Zendesk Team|2025|Performing A/B testing for advanced AI agents|support.zendesk.com/hc/en-us/articles/8357758896410-Performing-A-B-testing-for-advanced-AI-agents
8|Bose|2025|Who takes the blame when AI makes a medical mistake?|www.news-medical.net/health/Who-Takes-the-Blame-When-AI-Makes-a-Medical-Mistake.aspx
8|Chalmers|2025|Commonwealth Bank backtracks on AI job cuts as call volumes rise|www.abc.net.au/news/2025-08-21/cba-backtracks-on-ai-job-cuts-as-chatbot-lifts-call-volumes/105679492
8|Damiani|2019|A voice deepfake was used to scam a CEO out of $243,000|www.forbes.com/sites/jessedamiani/2019/09/03/a-voice-deepfake-was-used-to-scam-a-ceo-out-of-243000/
8|Dastin|2018|Amazon scraps secret AI recruiting tool that showed bias against women|www.reuters.com/article/amazon-com-jobs-automation-idINKCN1MK08G/
8|Desai|2023|5 things to know about AI model cards|iapp.org/news/a/5-things-to-know-about-ai-model-cards
8|Georgieva|2024|AI will transform the global economy|www.imf.org/en/Blogs/Articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity
8|Kaushik|2024|5 key principles of responsible AI every business leader should know|medium.com/%40kumarakaushik/5-key-principles-of-responsible-ai-every-business-leader-should-know-283a7cb107a5
8|Moltzau|2019|Exploring the Partnership on AI|alexmoltzau.medium.com/exploring-the-partnership-on-ai-9495ff845a39
8|Parkes-Hupton|2025|Ethical questions raised over Hungry Jack's AI drive-through|www.news.com.au/finance/work/careers/ethical-questions-raised-over-hungry-jacks-ai-drivethrough/news-story/f138e2c4956d5b5faa3da26edf985bbe
8|Satell|2020|AI fairness isn't just an ethical issue|hbr.org/2020/10/ai-fairness-isnt-just-an-ethical-issue
8|Swenson|2024|FCC bans AI-generated voices in robocalls that can deceive voters|www.pbs.org/newshour/politics/fcc-bans-ai-generated-voices-in-robocalls-that-can-deceive-voters
`;
const REFERENCES = REFERENCES_RAW.trim().split('\n').map(l => {
  const [topic, author, year, title, url] = l.split('|');
  return { topic: +topic, author, year, title, url: 'https://' + url };
});
