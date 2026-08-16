export const caseStudies = [
  {
    slug: 'secure-file-sharing',
    title: 'Secure file sharing',
    summary:
      'Turning a legacy IT-OT file transfer tool into an enterprise-grade sharing product — air-gapped deployment fully intact, admin-only mindset firmly retired.',
    role: 'Lead product designer',
    timeline: '9 months, ongoing',
    tools: ['Claude Code', 'FigJam', 'Claude', 'Figma'],
    sections: [
      {
        title: 'Challenge',
        body: 'A legacy product built almost entirely for administrators, now expected to serve everyone.',
        items: [
          'Minimal file sharing functionality sitting on top of a legacy IT-OT transfer tool',
          'Poor usability for end-users, since the majority of functions were designed for the admin persona',
          'Too many hurdles to share a file, wrapped in technical language, with no straightforward path',
          'Not a conventional SaaS product — frequently deployed in air-gapped environments on local networks',
          'Significant technical limitations inherited from the legacy back-end',
        ],
        image: true,
      },
      {
        title: 'Goal',
        items: [
          'Reach enterprise SaaS quality while preserving air-gapped operation — which means finding a workaround for every single feature that would otherwise assume an internet connection',
          'Remove as much complexity as possible from the user journeys',
          "Integrate with enterprise directory and storage services — SharePoint, Google Drive, or the client's own internal file storage",
          'Shift the emphasis from internal sharing to external',
        ],
      },
      {
        title: 'Auditing the current experience',
        body: 'The first step was an as-is analysis against the major file sharing services — SharePoint, Google Drive, OneDrive and WeTransfer:',
        items: [
          'The recipient experience was the weakest link: following a share link meant logging in and then being prompted to download, even when download was never the actual intent. Recipients should instead land on the shared file or folder itself, highlighted',
          'Email notifications were inconsistent — sent out of order for multi-recipient shares, too brief to say what to do next, and slower to arrive than expected',
          'Some foundational role-based access control (RBAC) properties were missing entirely',
          'Steps and clicks were benchmarked across 20 real user journeys against those same four services — our product needed more steps than they did in 57% of them',
        ],
        image: true,
      },
      {
        title: 'Design principles',
        body: 'Four principles set the bar for the end-user experience:',
        items: [
          'Solve one single task super well — simple, quick journeys, as little interruption as possible, and smart defaults with advanced controls kept out of the main flow',
          'Hide complexity — end-users do not need to see every background process, only the impact of the ones that affect the task in front of them',
          'Make security visible but simple — end-users are not security experts, so say plainly whether a file is safe, and always pair a blocked file with a next action rather than a dead end',
          'Everything is forbidden, except what is allowed — show only what is actually available instead of disabling it, and avoid full-page wizards that cost people their context',
        ],
      },
      {
        title: 'What makes file sharing work',
        body: 'A structured teardown of the share flows people already use — single file, single folder and multi-item — across the major services. Mapping the common patterns mattered less than mapping the gaps none of them close well:',
        items: [
          'Access management is handled poorly almost everywhere, especially removing access — from a file security perspective, the single most important action in the whole flow',
          'Removing access needs to work recursively, not just on the one folder it was granted from, and it needs to be obvious to the user how and where that removal actually took effect',
          'Multi-select file and folder sharing is a deliberate non-goal: showing precisely who has access to what across a mixed multi-item share gets complex fast, and that complexity is exactly what an end-user-targeted product should not carry',
        ],
      },
      {
        title: 'Solution',
        body: 'The turning point was recognising that "the end-user" was three different people. Serving them properly meant designing an ecosystem rather than a single product — and meeting each of them where they already are.',
        table: {
          headers: ['Segment', 'What they need', 'Where we meet them'],
          rows: [
            [
              'Casual internal users',
              'To send, share and receive files compliantly, without another system to worry about',
              'In the tools they already use — email, file storage and communication channels — through notifications and plugins rather than a destination they have to visit',
            ],
            [
              'Power internal users',
              'A real system: somewhere to automate and configure how sending, sharing and management behave',
              'A simple, intuitive portal for the files they hold internally, focused on external sharing and automation',
            ],
            [
              'External users',
              'To exchange files compliantly, without wanting or needing an account',
              'The share flow itself — no account, no portal to learn, no barrier between them and the file',
            ],
          ],
        },
        closing:
          'The deliberate constraint: the portal stops trying to be another place to do internal work. That stays in SharePoint or Google Drive, where it belongs, and the portal focuses on what it is uniquely for.',
      },
      {
        title: 'How it was built',
        body: 'Nine months, in three phases:',
        items: [
          'One month of research and planning, concluded in a foundational document that lives in the repo — structure, strategy, tactics and the high-level decisions that act as the spine of the product',
          'Three months building iteratively, down to inventing a design language that speaks to end-users rather than administrators',
          'Five months of occasional feature improvements while the admin side was built out',
        ],
      },
      {
        title: 'Designing it with AI',
        body: 'Research evidence was collected on a FigJam board and summarised with Claude. The prototype itself was built with Claude Code — not only visuals and flows, but built-in specifications and guidelines stored as .md files in the repo, so the prototype walks developers through its own implementation. Figma stayed in the mix for experimenting with individual layouts and solutions, and the heat map and usability testing ran largely through AI tools against the real prototype.',
        image: true,
      },
      {
        title: 'Impact',
        items: [
          'A full prototype — visuals, flows, and implementation specs and guidelines that developers can build from directly',
          'Heat map and usability testing on that prototype caught mistakes and misconceptions early, before they could reach development',
          'Users completed the core interaction 80% faster, and testing measured a 70% improvement in completing actions without hesitation or questions',
          'The full product has not shipped yet, but several customers are already waiting in line to try it',
        ],
      },
    ],
  },
  {
    slug: 'esport-portal',
    title: 'Esport portal',
    summary:
      'A two-sided tournament platform for esport federations, thrown in at the deep end for its debut: a world championship.',
    role: 'Lead designer',
    timeline: '2021 — 2023',
    tools: ['Figma', 'Miro'],
    sections: [
      {
        title: 'Context',
        body: 'National, regional and international esport federations had nowhere to organise qualifiers and global events, manage national teams, or offer scholarships to pros and casual players. The tangle of organisations, teams, clubs and tournament structures — with no standardised third-party services to lean on — made a comprehensive product genuinely difficult to launch.',
        image: true,
      },
      {
        title: 'Process',
        body: "We front-loaded research into how different federations actually operate and how other platforms handle this complexity, then prepared the architecture — especially the database — ahead of time to handle the connections between many layers of organisations, roles and events. Rollout was gradual, sequenced against the season's upcoming events: admin side first, where federations operate, then the player-facing side.",
        image: true,
      },
      {
        title: 'Solution',
        body: 'Two distinct sides of one portal — federation and games — serving 12 separate personas. The balance between complexity and simplicity came from components designed to vary cleanly across role-specific views while still accommodating every necessary function.',
        image: true,
      },
      {
        title: 'Outcome',
        body: 'The portal debuted at a world championship, where over a thousand players, federation officials, sponsors and team personnel used it before, during and after the event.',
      },
    ],
  },
  {
    slug: 'bluelab',
    title: 'BlueLab',
    summary:
      'Rebuilt the booking flow for a decentralised lab service — bounce rate down 15–20%, bookings up despite demand for tests falling off a cliff.',
    role: 'UX designer',
    timeline: '2021 — 2022',
    tools: ['Figma', 'Miro'],
    sections: [
      {
        title: 'Context',
        body: 'BlueLab was the standout laboratory service during the first wave of the pandemic, thanks to accessible locations across major cities. As the market saturated, an outdated website and booking system became a real liability — the process was complex enough to cause major conversion problems.',
        image: true,
      },
      {
        title: 'Process',
        body: 'We tried and tested the entire experience ourselves, not just the booking system. What surfaced: users needed multiple entry points into the booking flow, far less manual input, and more clarity on how the service actually works.',
        image: true,
      },
      {
        title: 'Solution',
        body: 'We modularised the booking steps so they could support multiple entry points across the website while still forming one cohesive journey. Redundant fields and unnecessary steps came out, turning a long form into a slim step-by-step process — with care taken to handle rare scenarios and edge cases rather than designing only for the happy path.',
        image: true,
      },
      {
        title: 'Outcome',
        body: 'After launch, demand for COVID tests had dropped sharply — yet bookings gradually increased regardless, and website bounce rate fell by 15–20%.',
      },
    ],
  },
  {
    slug: 'covibed',
    title: 'Covibed',
    summary:
      'Hospital bed-management software built in 48 sleep-deprived hours — and it won the Life Saving category at Hack The Crisis Hungary.',
    role: 'UX/UI design, branding, business specification',
    timeline: '2020',
    tools: ['Figma'],
    sections: [
      {
        title: 'Context',
        body: 'During the first wave of COVID-19, placing the surge of patients was a bottleneck. No software reported bed capacity across wards, so finding a suitable bed took an average of 20 minutes of phone calls between them.',
        image: true,
      },
      {
        title: 'Process',
        body: "The design constraint was unusual and non-negotiable: hospital staff were wearing protection suits with thick gloves. That drove large, highly distinct buttons that stayed pressable through gloves. We also chose a dark theme — protecting staff eyes across long shifts and avoiding waking patients with light from a nurse's phone.",
        image: true,
      },
      {
        title: 'Solution',
        body: 'A web application generating printable QR codes for hospital beds, paired with a mobile app. Staff scan a bed to set availability, type of care and ventilator status; that data aggregates onto a dashboard covering every ward, turning patient placement into a simple lookup.',
        image: true,
      },
      {
        title: 'Outcome',
        body: 'The project won the Life Saving category at the Hack The Crisis Hungary 48-hour hackathon and drew immediate media and hospital attention. We built a 1.0 with healthcare professionals and it was trialled, though legislative changes ultimately blocked hospital procurement.',
      },
    ],
  },
]
