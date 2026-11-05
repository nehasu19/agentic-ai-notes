// Guided lessons, written in my own words, with real-world examples from public sources.
const LESSONS = {
1: {
  overview: {
    summary: "AI is pushing digital transformation into a new phase: systems can now create content and, increasingly, carry out multistep work on their own. This topic explains what generative AI is, how agents build on it, where they already help in business and government, and why people must stay in charge.",
    parts: [
      ["Lessons 1 to 3", "Digital transformation, generative AI and agentic AI"],
      ["Lessons 4 and 5", "Two worked examples: a marketing agent and a finance assistant"],
      ["Lesson 6", "Why oversight and accountability matter, with real cases"],
      ["Lesson 7", "AI in the public sector"],
      ["Lesson 8", "A checklist to judge whether a workflow suits an agent"],
      ["Then", "Goals, key ideas, a diagram, the glossary and a test"]
    ],
    time: "About 45 minutes"
  },
  lessons: [
    { t: "Digital transformation enters a new phase",
      body: ["Digital transformation means changing how an organization works and creates value by using digital technology, not simply installing new software. The aims are familiar: more value, smoother operations, happier customers.",
             "What is new is the kind of technology involved. Earlier waves digitised records and automated fixed rules. Generative AI creates content, and agentic AI can work through a task in several steps. That moves technology from supporting work to doing parts of it."],
      ex: { h: "Real example: Klarna's customer service assistant",
            p: "In 2024 the payments company Klarna said its AI assistant handled about two-thirds of customer service chats in its first month, the workload of roughly 700 full-time agents. Whole processes, not just single tasks, were being redesigned around AI.",
            src: [["CX Today", "https://www.cxtoday.com/contact-center/klarna-claims-its-new-ai-assistant-does-the-work-of-700-full-time-agents/"], ["Finextra", "https://www.finextra.com/newsarticle/43770/klarnas-ai-chatbot-does-the-equivalent-work-of-700-full-time-humans"]] },
      tip: "Ask of any AI project: which process changes, not just which tool is added?" },

    { t: "Generative AI: creating original content",
      body: ["Generative AI produces new text, images, audio, video or code from a prompt. Chatbots answer almost instantly because a large language model predicts the most likely next token again and again, very fast. Image and video tools usually use diffusion models, which start from noise and refine it step by step into a picture.",
             "Because the output is predicted rather than looked up, it can sound confident and still be wrong. That is called a hallucination, and it is why generated content needs checking before it is used."],
      ex: { h: "Real example: personalised marketing at scale",
            p: "Marketing teams already use generative AI to draft emails, product descriptions and ad variations tailored to different audiences, then test which version works best.",
            src: [["HubSpot: AI personalization use cases", "https://blog.hubspot.com/marketing/ai-personalization-marketing"]] },
      tip: "Generative AI drafts. A person or a check decides whether the draft is right." },

    { t: "Agentic AI: from answers to actions",
      body: ["An agent wraps a model in a loop. It takes a goal, plans a step, acts through a tool (search, a database, email, a calendar), looks at the result and decides the next step. It repeats until the goal is met or it hits a point where a person should decide.",
             "The difference from a chatbot is initiative. A chatbot waits for your next prompt. An agent chains tasks together and acts on what it learns along the way, within the limits you set."],
      compare: [["What it does", "Produces one output", "Pursues a goal over several steps"], ["How it works", "Prompt in, answer out", "Plans, uses tools, checks, adjusts"], ["Who drives", "You decide every step", "It decides the next step, within limits"]],
      tip: "If a task needs several tools and decisions in a row, it is a candidate for an agent." },

    { t: "Example one: the marketing agent",
      body: ["Picture a marketing assistant. Split its work into steps and you can see where generative AI ends and agentic AI begins:",
             "Writing a well-targeted email is generative. Testing several subject lines, scheduling the send, watching how customers respond and changing the offer in real time is agentic: it decides, acts through other systems and adapts without a person handing work along at each step."],
      steps: [["Write the email", "Generative"], ["Test subject lines (A/B)", "Agentic"], ["Schedule the campaign", "Agentic"], ["Adjust offers from responses", "Agentic"]],
      tip: "Fewer hand-offs between people and tools is where most of the time saving comes from." },

    { t: "Example two: the finance assistant",
      body: ["Now picture a finance assistant that produces projections, spots anomalies, runs what-if scenarios and drafts board-ready slides from what it found. Again, the projection and the slides are generative; noticing something odd, choosing which scenarios to test and pulling it all together is agentic.",
             "In practice, banks are already organising agents into small teams, each handling one part of a check, with people stepping in for the exceptions."],
      ex: { h: "Real example: agent teams for bank compliance checks",
            p: "McKinsey describes banks using squads of AI agents for customer due diligence and anti-money-laundering work: one agent gathers client data, another verifies company records, others screen sanctions lists and news, and a quality agent reviews. People handle exceptions and supervise, with one practitioner able to oversee 20 or more agents.",
            src: [["McKinsey", "https://www.mckinsey.com/capabilities/risk-and-resilience/our-insights/how-agentic-ai-can-change-the-way-banks-fight-financial-crime"]] },
      tip: "Agents work best on high-volume, rule-heavy tasks where exceptions can go to a person." },

    { t: "Humans stay in charge",
      body: ["More autonomy does not remove responsibility. Every AI system needs a named owner, clear limits on what it may do alone, human approval for high-impact actions, and an easy way for customers to reach a person.",
             "Two real cases show why. They are not arguments against AI; they show what happens when oversight and accountability are left out of the design."],
      ex: { h: "Real examples: when oversight is missing",
            p: "In 2024 a Canadian tribunal ruled that Air Canada had to honour a refund policy its website chatbot had invented, rejecting the idea that the chatbot was responsible for its own words. And in May 2025 Klarna's CEO said the company would hire human support staff again so customers could always reach a person, after AI-only service proved cheaper but lower in quality.",
            src: [["WIRED on Air Canada", "https://www.wired.com/story/air-canada-chatbot-refund-policy/"], ["Entrepreneur on Klarna", "https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396"]] },
      tip: "Your organization is responsible for what its AI says and does." },

    { t: "AI in the public sector",
      body: ["Government bodies face the same opportunities: faster service delivery, catching fraud, and planning resources such as staff, budgets and infrastructure.",
             "Notice that the example below uses machine learning to flag suspicious payments, which is predictive AI rather than an agent. Many real wins still come from predictive models; agents build on top of them by acting on what they flag."],
      ex: { h: "Real example: US Treasury fraud detection",
            p: "The US Treasury said it prevented and recovered more than $4 billion in fraudulent and improper payments in fiscal year 2024, up from about $653 million the year before. That included $1 billion recovered through machine-learning detection of check fraud.",
            src: [["Nextgov", "https://www.nextgov.com/artificial-intelligence/2024/10/ai-tools-helped-treasury-recover-billions-fraud-and-improper-payments/400368/"]] },
      tip: "Not every AI win needs an agent. Match the tool to the job." },

    { t: "Is this workflow ready for an agent?",
      body: ["The real skill is judging where agents could genuinely help. A quick test helps. A workflow is a good candidate when most of these are true:"],
      checklist: ["It has a clear goal and a clear finish line", "It repeats often, with many steps and hand-offs", "The tools and data it needs can be reached safely", "A mistake can be caught or undone", "There is a natural point for a person to approve"],
      tip: "Start with one workflow that scores well, measure it, then expand." }
  ]
}
};
