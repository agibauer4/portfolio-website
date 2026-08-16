export const caseStudies = [
  {
    slug: 'secure-file-sharing',
    title: 'Secure file sharing',
    summary:
      'Turning a legacy IT-OT file transfer tool into an enterprise-grade secure sharing product — without giving up air-gapped deployment.',
    role: 'Lead product designer',
    timeline: '2024 — present',
    tools: ['Figma'],
    sections: [
      {
        title: 'Challenge',
        body: 'A legacy product built almost entirely for administrators, now expected to serve everyone.',
        items: [
          'Minimal file sharing functionality sitting on top of a legacy IT-OT transfer tool',
          'Poor usability for end-users, since the majority of functions were designed for the admin persona',
          'Too many hurdles to share a file, wrapped in technical language, with no straightforward path',
          'Not a conventional SaaS product — frequently deployed in air-gapped environments on local networks',
          'Significant technical limitations inherited from the legacy back end',
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
        body: 'The first step was an as-is analysis against the major file sharing services. The recipient side was where the experience broke down most:',
        items: [
          'Sharing with a new guest user sent the notification emails in the wrong order',
          'The download link in the email could not work on its own — the recipient had to be logged in first',
          'Following the portal link meant logging in and then being prompted to download, even when downloading was never the intent of the share',
          'Recipients should instead land on the shared file or folder itself, highlighted, so it is obvious what was shared',
          'Email copy was too brief to tell anyone what to do next',
          'Notifications arrived later than expected, pointing at either the system or SMTP',
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
        body: 'A structured teardown of the share flows people already use — single file, single folder and multi-item — across the major services. Mapping the common patterns mattered less than mapping the gaps none of them close: that is where a security-first product can hold a strategic advantage rather than simply catch up.',
      },
      {
        title: 'Solution',
        body: 'The turning point was recognising that "the end-user" was three different people, and serving them properly meant designing an ecosystem rather than a single product.',
        items: [
          'Casual internal users, who want to send, share and receive files compliantly without another system to worry about',
          'Power internal users, who need a real system — somewhere to automate and configure how sending, sharing and management behave',
          'External users — partners and collaborators who need to exchange files compliantly without wanting or needing an account',
        ],
        image: true,
      },
      {
        title: 'Meeting each of them where they are',
        body: 'Casual users are served where they already work: in their email, file storage and communication channels, through notifications and plugins rather than a destination they have to visit. Power users get a simple, intuitive portal for the files they hold internally — but the portal deliberately stops trying to be another place to do internal work. That stays in SharePoint or Google Drive, and the portal focuses on what it is uniquely for: secure external sharing and automation.',
      },
      {
        title: 'Outcome',
        body: 'Results and impact to be added.',
      },
    ],
  },
  {
    slug: 'esport-portal',
    title: 'Esport portal',
    summary:
      'A dual-faced tournament platform for esport federations, debuted at a world championship.',
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
      'Rebuilt booking flow for a decentralised lab service — bounce rate down 15–20%, bookings up.',
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
      'Hospital bed-management software built in 48 hours — winner of the Life Saving category at Hack The Crisis Hungary.',
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
