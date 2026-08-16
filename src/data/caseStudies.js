export const caseStudies = [
  {
    slug: 'companyhub',
    title: 'CompanyHub',
    summary:
      'A one-stop entrepreneurship portal for SMEs — 2,000 companies and 5,000+ users within months of launch.',
    role: 'Lead designer',
    timeline: '2020 — 2023',
    tools: ['Figma', 'Miro'],
    context:
      'Small company owners were drowning in tooling. Finances, taxing, invoices, HR, inventory, CRM and contracts each lived in a different app, and owners had little awareness of the financial opportunities that could actually grow their business. The result was administrative overwhelm and missed opportunity.',
    process:
      'The hard part was the audience: SME owners predominantly over 50, who routinely bounced off complex procedures and financial jargon. We designed for that directly — simplified processes, plain-language microcopy guiding each task, and the elimination of terminology that assumed a finance background.',
    solution:
      'We connected every dot of company administration into a single platform — bank account, taxing and invoices alongside HR, inventory, CRM and contracts — so owners could run daily business in one place while being surfaced relevant finance and learning opportunities.',
    outcome:
      'A few months after launch the portal had 2,000 registered companies and over 5,000 users. Feedback centred on exactly what we designed for: the simplicity of the portal and the range of genuinely relevant services.',
  },
  {
    slug: 'esport-portal',
    title: 'Esport portal',
    summary:
      'A dual-faced tournament platform for esport federations, debuted at a world championship.',
    role: 'Lead designer',
    timeline: '2021 — 2023',
    tools: ['Figma', 'Miro'],
    context:
      'National, regional and international esport federations had nowhere to organise qualifiers and global events, manage national teams, or offer scholarships to pros and casual players. The tangle of organisations, teams, clubs and tournament structures — with no standardised third-party services to lean on — made a comprehensive product genuinely difficult to launch.',
    process:
      'We front-loaded research into how different federations actually operate and how other platforms handle this complexity, then prepared the architecture — especially the database — ahead of time to handle the connections between many layers of organisations, roles and events. Rollout was gradual, sequenced against the season\'s upcoming events: admin side first, where federations operate, then the player-facing side.',
    solution:
      'Two distinct sides of one portal — federation and games — serving 12 separate personas. The balance between complexity and simplicity came from components designed to vary cleanly across role-specific views while still accommodating every necessary function.',
    outcome:
      'The portal debuted at a world championship, where over a thousand players, federation officials, sponsors and team personnel used it before, during and after the event.',
  },
  {
    slug: 'bluelab',
    title: 'BlueLab',
    summary:
      'Rebuilt booking flow for a decentralised lab service — bounce rate down 15–20%, bookings up.',
    role: 'UX designer',
    timeline: '2021 — 2022',
    tools: ['Figma', 'Miro'],
    context:
      'BlueLab was the standout laboratory service during the first wave of the pandemic, thanks to accessible locations across major cities. As the market saturated, an outdated website and booking system became a real liability — the process was complex enough to cause major conversion problems.',
    process:
      'We tried and tested the entire experience ourselves, not just the booking system. What surfaced: users needed multiple entry points into the booking flow, far less manual input, and more clarity on how the service actually works.',
    solution:
      'We modularised the booking steps so they could support multiple entry points across the website while still forming one cohesive journey. Redundant fields and unnecessary steps came out, turning a long form into a slim step-by-step process — with care taken to handle rare scenarios and edge cases rather than designing only for the happy path.',
    outcome:
      'After launch, demand for COVID tests had dropped sharply — yet bookings gradually increased regardless, and website bounce rate fell by 15–20%.',
  },
  {
    slug: 'covibed',
    title: 'Covibed',
    summary:
      'Hospital bed-management software built in 48 hours — winner of the Life Saving category at Hack The Crisis Hungary.',
    role: 'UX/UI design, branding, business specification',
    timeline: '2020',
    tools: ['Figma'],
    context:
      'During the first wave of COVID-19, placing the surge of patients was a bottleneck. No software reported bed capacity across wards, so finding a suitable bed took an average of 20 minutes of phone calls between them.',
    process:
      'The design constraint was unusual and non-negotiable: hospital staff were wearing protection suits with thick gloves. That drove large, highly distinct buttons that stayed pressable through gloves. We also chose a dark theme — protecting staff eyes across long shifts and avoiding waking patients with light from a nurse\'s phone.',
    solution:
      'A web application generating printable QR codes for hospital beds, paired with a mobile app. Staff scan a bed to set availability, type of care and ventilator status; that data aggregates onto a dashboard covering every ward, turning patient placement into a simple lookup.',
    outcome:
      'The project won the Life Saving category at the Hack The Crisis Hungary 48-hour hackathon and drew immediate media and hospital attention. We built a 1.0 with healthcare professionals and it was trialled, though legislative changes ultimately blocked hospital procurement.',
  },
]
