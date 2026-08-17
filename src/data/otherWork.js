import valmisImage from '../assets/other-work/valmis.jpg'
import companyhubImage from '../assets/other-work/companyhub.jpg'
import bluelabImage from '../assets/other-work/bluelab.jpg'

// `facts` carries the concrete detail — scope, team, outcome — so the
// description can stay qualitative instead of turning into a stat list.
export const otherWork = [
  {
    title: 'Valmis design system',
    description:
      'The internal design system behind R34DY’s platform work — brand guidelines through to components, built so each solution could be customised without rebuilding it.',
    tag: 'Design system',
    facts: ['R34DY', 'Angular + React libraries', 'Brand and components'],
    image: {
      src: valmisImage,
      alt: 'Valmis design system components — buttons, badges, progress bars, toggles and toasts',
    },
    link: null,
  },
  {
    title: 'CompanyHub',
    description:
      'A one-stop entrepreneurship portal for SMEs — finances, HR, inventory and CRM under one roof. Built for owners mostly over 50, so the work was in stripping out financial jargon and guiding people through each task.',
    tag: 'Lead designer',
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
      'Rebuilt the booking flow for a decentralised lab service. Modularised the steps so they could support several entry points across the site while still reading as one journey, and cut the redundant fields out of a long form.',
    tag: 'UX designer',
    facts: ['2021 — 2022', 'Bounce rate down 15–20%', 'Bookings up as demand fell'],
    image: {
      src: bluelabImage,
      alt: 'The BlueLab profile page shown on a laptop',
    },
    link: null,
  },
]
