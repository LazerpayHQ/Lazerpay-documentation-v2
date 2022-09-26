export interface MyProps {
    id?: string
    type?: string
    label: string
    title: string
    desc: string
}

export const periphery: MyProps[] = [{
    id: 'email',
    type: 'email',
    label: 'email',
    title: 'Get Notified When Bank Payout is Live',
    desc: `Bank Payout to multiple countries in USD and other local currencies is coming soon. Reach out to <a href="mailto:developers@lazerpay.finance">developers@lazerpay.finance</a> if you have any questions regarding this`
}]