export interface CardWithImage {
    title: string
    desc: string
    route: string
}

export const startPaymentData: CardWithImage[] = [
    {
        title: 'Crypto Transfers',
        desc: 'Withdraw and send crypto to an external wallet using our APIs.',
        route: 'crypto-transfers',
    },
    {
        title: 'Bank Transfers',
        desc: 'Send stable coins directly from your wallet to your local bank account.',
        route: 'bank-transfers',
    },
]

