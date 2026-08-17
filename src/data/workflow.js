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
        'High-level business processes',
        'Friction and gap analysis to identify the main issues',
        'Turning UML diagrams into user journeys',
      ],
      ai: 'I use AI to pressure-test a process map before anyone builds against it — walking the edge cases and the unhappy paths that would otherwise surface three sprints later.',
    },
    {
      title: 'UX design',
      items: [
        'Low-fidelity wireframes',
        'Wireframe validation against technology, business and users',
      ],
      ai: "This is where the workflow changed most. Rather than stopping at a static wireframe, I build a working prototype with Claude Code and deploy it myself — so validation happens against something people can click through, not something they have to imagine.",
      pivot: true,
    },
    {
      title: 'UI design',
      items: [
        'Well-structured design system and components',
        'High-fidelity UI including error routes',
        'Responsive design across 5 viewports',
        'Documentation and annotation',
      ],
      ai: 'AI takes the repetitive component work once the system is defined. The tokens, the patterns and the decisions behind them stay mine — a generated component is only as good as the system it is generated from.',
    },
    {
      title: 'testing',
      items: ['Usability testing', 'A/B testing', 'Measuring impact with analytics'],
      ai: 'Testing a deployed prototype rather than a clickable mock changes what comes back: feedback about the experience itself, not about the gap between the mock and the thing it stands for.',
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
