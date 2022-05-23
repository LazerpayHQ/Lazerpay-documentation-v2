import { Routes } from 'utils/get-route-context'

const sidebar: Routes = {
  routes: [
    {
      title: 'Components',
      heading: false,
      routes: [
        {
          title: 'Quick Start',
          path: '/docs/',
          sort: true,
          open: true,
          summarize: true,
          routes: [
            {
              title: 'child 1',
              path: '',
            },
          ]
        }
      ],
    },
  ],
}

export default sidebar
