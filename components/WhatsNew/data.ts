export interface ITimeline {
    date: Date | any,
    title: string,
    author: string
    desc: string
    label: string
}

export const timelines:ITimeline[] = [
    {
        title: 'A new, improved Laravel SDK',
        date: '2022/05/28',
        author: 'Njoku Emmanuel, CEO',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, ultrices lectus massa posuere in lacus in eu sit. Congue sed lobortis faucibus orci, nibh eget gravida egestas. Gravida nibh iaculis et lacus, gravida consectetur massa, sit.",
        label: 'PAYMENTS'
    },
    {
        title: 'New updates to Transactions',
        date: '2022/05/22',
        author: 'Justice Eziefule, Engineering Lead',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, ultrices lectus massa posuere in lacus in eu sit. Congue sed lobortis faucibus orci, nibh eget gravida egestas. Gravida nibh iaculis et lacus, gravida consectetur massa, sit.",
        label: 'PAYMENTS'
    },
    {
        title: 'Woocomerce Integration',
        date: '2022/05/18',
        author: 'Justice Eziefule, Engineering Lead',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, ultrices lectus massa posuere in lacus in eu sit. Congue sed lobortis faucibus orci, nibh eget gravida egestas. Gravida nibh iaculis et lacus, gravida consectetur massa, sit.",
        label: 'USE CASES'
    }
]