import valmisImage from '../assets/other-work/valmis.jpg'
import companyhubImage from '../assets/other-work/companyhub.jpg'
import bluelabImage from '../assets/other-work/bluelab.jpg'

// `facts` carries the concrete detail — scope, team, outcome — so the
// description can stay qualitative instead of turning into a stat list.
export const otherWork = [
  {
    title: 'Valmis design system',
    description:
      'The internal design system behind R34DY’s platform work. Built from atoms and molecules up to entire flow blueprints, so every project in our space could reach for the most optimal, already-proven solution rather than start from scratch.',
    tag: 'Design system',
    facts: ['Easy theme settings', 'Pre-built flow blueprints', 'Angular + React libraries'],
    image: {
      src: valmisImage,
      alt: 'Valmis design system components — buttons, badges, progress bars, toggles and toasts',
    },
    link: null,
  },
  {
    title: 'CompanyHub',
    description:
      'A one-stop entrepreneurship portal for SMEs — finances, HR, inventory and CRM under one roof. Built for owners with no finance background, so the work was in stripping out jargon and guiding people through each task.',
    tag: 'Multi-facing platform design',
    facts: ['Web and mobile', '3 designers', '2,000 companies · 5,000 users'],
    image: {
      src: companyhubImage,
      alt: 'CompanyHub screens: a finance dashboard, an invoicing form and the mobile dashboard',
    },
    link: null,
  },
  {
    title: 'BlueLab',
    description:
      'Redesigned and rebranded the BlueLab website, rebuilding the booking flow at its core. Modularised the steps so they could support several entry points across the site while still reading as one journey, and cut the redundant fields out of a long form.',
    tag: 'Website design and booking system',
    facts: ['2021 — 2022', 'Bounce rate decreased 15–20%', 'Bookings grew despite falling demand'],
    image: {
      src: bluelabImage,
      alt: 'Two steps of the BlueLab booking flow: choosing lab tests, then picking a location, date and time',
    },
    link: null,
  },
]
