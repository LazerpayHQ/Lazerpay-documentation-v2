export const snippets = [
  {
    id: {
      acceptPaymentsApi: `
  curl --location --request POST 'https://api.lazerpay.engineering/api/v1/transaction/initialize' \
--header 'x-api-key: YOUR_PUBLIC_KEY' \
--data-raw '{
    "reference": "882f7441b0b03d9f7cff90aadd2c5284",
    "customer_name": "Customer name",
    "customer_email": "customer@gmail.com",
    "coin": "USDT",
    "currency": "USD",
    "amount": 100.05,
     "accept_partial_payment": false // Optional default is false

}'`,
    },
    apiType: 'ApiReq',
    lang: 'javascript',
    labelType: 'POST',
  },
]
