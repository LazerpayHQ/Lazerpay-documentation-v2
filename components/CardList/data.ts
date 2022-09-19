export interface CardWithImage {
  title: string
  desc: string
  route: string
}

export const libraryGetStarted: CardWithImage[] = [
  {
    title: 'Libraries',
    desc: 'Find documentation libraries for all Lazerpay products.',
    route: 'libraries/libraries',
  },
  {
    title: 'Plugins',
    desc: 'Official and open source softwares for accepting crypto payments.',
    route: 'libraries/plugin',
  },
]
