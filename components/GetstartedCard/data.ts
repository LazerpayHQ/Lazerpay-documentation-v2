export interface CardWithImage {
  title: string
  desc: string
  route: string
}

export const startIntegratingData: CardWithImage[] = [
  {
    title: 'Accept Payments',
    desc: 'Let your customers pay using our support payment system',
    route: 'accept-payments',
  },
  {
    title: 'Verify payments',
    desc: 'Automatically verify trasactions after payments using lazerpay verify API ',
    route: 'verify-payments',
  },
]

export const completeYourIntegrationData: CardWithImage[] = [
  {
    title: 'Payments Link',
    desc: 'With payments Link you can share your unique payments link to anyone in the world.',
    route: 'payments-link',
  },
  {
    title: 'Partial Payments',
    desc: 'Accept partial payments from your customers on your platform',
    route: 'payments/partial-payments',
  },
  {
    title: 'Setup Webhooks',
    desc: 'Listen to webhook even whenever certain action occurs.',
    route: 'setup-webhooks',
  },
]

export const testAndGoData: CardWithImage[] = [
  {
    title: 'Make Test Payments',
    desc: "We are goin to describe how you can go about testing Lazerpay's integration",
    route: 'make-test-payments',
  },
  {
    title: 'Go Live',
    desc: 'Learnn about the steps required to make your integration live, and start receiving crypto payments in minutes.',
    route: 'go-live',
  },
]

export const startPaymentData: CardWithImage[] = [
  {
    title: 'Crypto Transfer',
    desc: 'Withdraw and send crypto to an external wallet using our APIs.',
    route: 'crypto-transfers',
  },
  {
    title: 'Bank Transfers',
    desc: 'Send stable coins directly from your wallet to your local bank account. ',
    route: 'bank-transfers',
  },
]
