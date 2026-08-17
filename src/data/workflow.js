export const workflow = {
  title: 'How I work',
  intro:
    "Every product is different, so every process is. This is the shape most of my work takes — and where AI has actually changed it, which is less about the phases than about how early something real exists.",
  phases: [
    {
      title: 'research',
      items: [
        'Gaining domain knowledge',
        'Market and competitor research',
        'User interviews and field studies',
        'Persona definition',
      ],
      ai: "AI shortens the desk research and helps me synthesise interview notes into patterns. It doesn't replace talking to people — in a domain this specialised, the useful things are still said out loud by someone who does the job.",
    },
    {
      title: 'planning',
      items: [
        'Definition of desired business benefits',
        'High-level functions and flows',
        'Friction and gap analysis to identify the main issues',
        'Turning UML diagrams into user journeys',
        'Information architecture, drafted with AI, as the backbone for what gets built next',
      ],
      ai: 'I use AI to pressure-test a process map before anyone builds against it — walking the edge cases and the unhappy paths that would otherwise surface three sprints later. It also drafts the first pass of the information architecture, fast enough to argue with instead of waiting on.',
    },
    {
      title: 'UX design',
      items: [
        'Sketching base screens',
        'Building core flows with as minimal UI as possible',
        'Checking flows against tech feasibility and business requirements',
      ],
      ai: "This is where the workflow changed most. Rather than stopping at a static wireframe, I build a working prototype with Claude Code and deploy it myself — so validation happens against something people can click through, not something they have to imagine.",
      pivot: true,
    },
    {
      title: 'UI design',
      items: [
        'Improving flows with UI components, layouts, animations and proper copywriting',
        'Definition of snowflake components',
        'Responsive design across 5 viewports',
        'Continuous documentation of features in the repo',
      ],
      ai: "AI takes the repetitive component, layout and copy work, and keeps the repo's documentation current as features ship. What stays mine is defining the snowflake components — the one-off, high-stakes screens where a generated pattern would flatten what makes the product distinct.",
    },
    {
      title: 'testing',
      items: ['Usability testing', 'A/B testing', 'Measuring impact with analytics'],
      ai: 'Even before there is a deployed prototype, early flows can be heatmap-tested with AI, and the usability tests themselves can run AI-assisted — so feedback starts arriving before a single line of production code exists. Testing a deployed prototype rather than a clickable mock changes what comes back too: feedback about the experience itself, not about the gap between the mock and the thing it stands for.',
    },
    {
      title: 'iteration',
      items: [
        'Feeding findings back into the system, not just the screen',
        'Revisions in hours rather than the next sprint',
      ],
      ai: 'Being able to change the prototype the same day means a disagreement gets settled by trying it, which is usually faster than arguing it — and better evidence than either opinion.',
    },
  ],
}
