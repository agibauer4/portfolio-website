import covibedAppOverview from '../assets/covibed/app-overview.png'
import covibedDashboard from '../assets/covibed/dashboard.png'
import covibedScanQr from '../assets/covibed/scan-qr.png'
import covibedBedManagement from '../assets/covibed/bed-management.png'
import esportFederationProfile from '../assets/esport/federation-profile.jpg'
import esportEventSetup from '../assets/esport/event-setup.jpg'
import esportMobileViews from '../assets/esport/mobile-views.jpg'

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
    card: {
      src: esportFederationProfile,
      alt: 'A national federation profile in the esport portal, showing leadership, upcoming events and national team members',
    },
    sections: [
      {
        title: 'Context',
        body: 'National, regional and international esport federations had nowhere to organise qualifiers and global events, manage national teams, or offer scholarships to pros and casual players. The tangle of organisations, teams, clubs and tournament structures — with no standardised third-party services to lean on — made a comprehensive product genuinely difficult to launch.',
        image: {
          src: esportFederationProfile,
          alt: 'A national federation profile page: crest and mission, contact details, six leadership roles, upcoming events and national team members',
        },
      },
      {
        title: 'Process',
        body: "We front-loaded research into how different federations actually operate and how other platforms handle this complexity, then prepared the architecture — especially the database — ahead of time to handle the connections between many layers of organisations, roles and events. Rollout was gradual, sequenced against the season's upcoming events: admin side first, where federations operate, then the player-facing side.",
        image: {
          src: esportEventSetup,
          alt: 'The admin event review screen for a world championship: event details, title and team compositions, and a sortable table of national federations by continent, country and registration status',
        },
      },
      {
        title: 'Solution',
        body: 'Two distinct sides of one portal — federation and games — serving 12 separate personas. The balance between complexity and simplicity came from components designed to vary cleanly across role-specific views while still accommodating every necessary function.',
        image: {
          src: esportMobileViews,
          alt: 'Three phone screens from the portal: filtering national federations, a most-popular federations ranking, and a published events list',
        },
      },
      {
        title: 'Outcome',
        body: 'The portal debuted at a world championship, where over a thousand players, federation officials, sponsors and team personnel used it before, during and after the event.',
      },
    ],
  },
  {
    slug: 'bluelab',
    hidden: true,
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
      'Hospital bed-management software built in 48 sleep-deprived hours — and it won the Save Life category at Hack the Crisis Hungary.',
    role: 'UX/UI design, branding, business specification',
    timeline: '2020',
    tools: ['Figma', 'Adobe Illustrator'],
    card: {
      src: covibedDashboard,
      alt: 'The Covibed desktop dashboard, showing hospital capacity by ward',
    },
    sections: [
      {
        title: 'Challenge',
        body: 'During the first wave of COVID-19, one of the biggest problems facing Hungarian hospitals was simply placing patients in beds.',
        items: [
          'Staff on the admissions units had no system for checking bed availability across the wards, so finding out how many patients were in each and whether a bed was free meant constant phone calls',
          'Finding a bed for a patient took 20 minutes on average — far too long when people are queuing in the emergency room and time matters',
          'From an IT perspective, the hardest constraint was that helping in healthcare means handling patient health data, which is strictly regulated in the EU',
          'We needed to pivot to an area that does not require patient data at all, while still easing hospital operations at a critical time',
          'We had 48 hours to produce both a product and a video presentation of our work',
        ],
      },
      {
        title: 'Goal',
        body: 'Design and build a system that lets hospital staff identify bed capacity in real time, on both mobile and desktop.',
        items: [
          'Doctors and nurses were wearing protective gear, so the solution had to stay usable while fully geared up',
          'Not only surface bed availability, but give staff an easy routine for keeping the system up to date',
          'Alongside availability, show how each bed is equipped — whether it suits normal, sub-intensive or intensive care',
        ],
      },
      {
        title: 'User interviews',
        body: 'The hackathon gave us direct access to healthcare professionals working on the front line of the pandemic, so we could ask them what they actually needed.',
        items: [
          'Knowing the type of care a bed can provide turned out to be essential, not secondary to availability',
          "We mapped nurses' routines across the day so the system could tie into standard nursing practice — cleaning a bed when a patient is discharged, for example",
          'We learned what had to be visible and highlighted on the desktop dashboard so admissions staff could make decisions at a glance, with zero interaction',
          'Their input was collected and fed directly into the final product',
        ],
      },
      {
        title: 'Solution',
        body: 'A double-sided platform: a mobile app for managing beds from inside the ward, and a desktop app for setting up and monitoring beds across the hospital.',
        items: [
          'On desktop, the admin persona sets up the hospital — creating wards and rooms, assigning personnel to each, and batch-generating QR codes for the beds',
          'On mobile, ward staff (typically nurses) scan the QR code on a bed to set its availability, care type and whether a ventilator is in use',
        ],
        image: {
          src: covibedAppOverview,
          alt: 'Three phones showing the Covibed mobile app: bed management, the ward dashboard and QR code scanning',
        },
      },
      {
        title: 'Setup process',
        body: 'Getting a hospital onto the system, once, before anything else can run.',
        flow: {
          type: 'chain',
          legend: [
            { tone: 'gold', label: 'Admin, on desktop' },
            { tone: 'purple', label: 'System' },
            { tone: 'cream', label: 'On the ward' },
            { tone: 'green', label: 'Nurse, on mobile' },
          ],
          nodes: [
            { tone: 'gold', lines: ['Set up wards', 'and rooms'] },
            { tone: 'purple', lines: ['Batch-generate', 'QR codes'] },
            { tone: 'cream', lines: ['Laminate and', 'zip-tie to beds'] },
            { tone: 'gold', lines: ['Assign staff', 'to their wards'] },
            { tone: 'green', lines: ['Scan beds already', 'occupied'] },
            { tone: 'purple', lines: ['Dashboard live,', 'reflecting reality'] },
          ],
        },
        image: {
          src: covibedScanQr,
          alt: 'The mobile scan screen, showing a laminated QR code attached to a hospital bed',
          width: 'narrow',
        },
      },
      {
        title: 'Regular usage',
        body: 'From then on it is a closed loop: the desktop decides where a patient goes, the bedside records what happened, and the dashboard reflects it straight back.',
        flow: {
          type: 'cycle',
          lanes: [
            { tone: 'purple', label: 'DESKTOP — ADMISSIONS & NURSING STATIONS' },
            { tone: 'green', label: 'MOBILE — AT THE BEDSIDE' },
          ],
          nodes: [
            { tone: 'purple', lines: ['Dashboard open, showing', 'live ward capacity'] },
            { tone: 'gold', lines: ['Patient needs a bed:', 'pick the ward'] },
            { tone: 'green', lines: ['On arrival: scan bed,', 'set care + ventilator'] },
            { tone: 'green', lines: ['On discharge: out of use,', 'clean, set available'] },
          ],
          loopLabel: ['CAPACITY', 'UPDATES LIVE'],
        },
        image: {
          src: covibedDashboard,
          alt: 'The desktop dashboard: hospital capacity by ward, with room-by-room availability',
        },
      },
      {
        title: 'Designing for gloves and night shifts',
        items: [
          'We tested button sizes on mobile against the reality that gloved hands press less accurately — size and spacing were the whole ballgame',
          'We bought several kinds of rubber gloves sold in ordinary shops, so we could feel how different thicknesses and layers affect using a phone',
          'The mobile interface uses a dark theme deliberately: a nurse entering a ward at night should not wake patients with screen light, and it is easier on their own eyes',
        ],
        image: {
          src: covibedBedManagement,
          alt: 'The bed management screen: large, widely spaced buttons for availability, care type and ventilator, on a dark background',
          width: 'narrow',
        },
      },
      {
        title: 'Impact',
        items: [
          'Won the Save Life category at the Hack the Crisis Hungary hackathon',
          'That drew interest from several hospitals who wanted to trial the app, and negotiations started immediately',
          'Media attention let us negotiate with Vodafone and Telekom to whitelist the app for hospital personnel during the pandemic, so using it would not eat into their monthly mobile data',
          'We kept consulting healthcare professionals — running demos and folding feedback back into the product',
          'Within a month and a half the app was ready for hospital use, with four major hospitals queuing up to try it',
          'New regulations and legislation ultimately blocked us from contracting with hospitals as a new vendor',
        ],
      },
    ],
  },
]
