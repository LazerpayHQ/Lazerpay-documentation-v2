export const snippets = {
    api:
        `export default function App({ Component, pageProps }) {
        return (
            <>
                <DefaultSeo {...siteConfig.seo} />
                <Component {...pageProps} />
            </>
        )
    }`,
    customerInfoHTML:
        `
        <form id="paymentForm">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email-address" />
            </div>
            <div class="form-group">
                <label for="amount">Amount</label>
                <input type="number" id="amount" required />
            </div>
            <div class="form-submit">
                <button type="submit" onclick="payWithLazerpay()"> Pay with Lazerpay </button>
            </div>
        </form>
        `,
    customerInfoJS:
        `
    <script>
        https: //cdn.jsdelivr.net/gh/LazerPay-Finance/checkout-build@main/checkout@1.0.1/dist/index.min.js
    </script>
    <script>
        const paymentForm = document.getElementById('paymentForm');

        paymentForm.addEventListener("submit", payWithLazerpay, false);
    </script>
    `,
    customerInfoPostCURL:
        `
    curl --location --request POST 'https://api.lazerpay.engineering/api/v1/transaction/initialize' \

    --header 'x-api-key: YOUR_PUBLIC_KEY' \

    --data-raw '{
        "customer_name": "Abdulfatai Suleiman",
        "customer_email": "static@gmail.com",
        "currency": "USD",
        "coin": "USDT",
        "amount": "10",
        accept_partial_payment:"true"
    }’
    `,
    customerInfoPostNode:
        `
    suck --location --request POST 'https://api.lazerpay.engineering/api/v1/transaction/initialize' \
    --header 'x-api-key: YOUR_PUBLIC_KEY' \
    --data-raw '{
        "customer_name": "Abdulfatai Suleiman",
        "customer_email": "static@gmail.com",
        "currency": "USD",
        "coin": "USDT",
        "amount": "10",
        accept_partial_payment:"true"
    }’
    `,
    customerInfoReq201:
        `
    {
        "message": "Transaction initialized successfully",
        "status": "success",
        "data": {
            "reference": "wfqweweqrtwerwrtwer45354545",
            "businessName": "Lazerpay Finance",
            "businessEmail": "abdulfataisuleiman67@gmail.com",
            "businessLogo": "https://res.cloudinary.com/lazer/image/upload/v1637512933/logo-default_ufyz0x.svg",
            "customerName": "Abdulfatai Suleiman",
            "customerEmail": "staticdev20046@gmail.com",
            "address": "0xcA20e971400F81F97fEc5416A963e8FA7F81aaE3",
            "coin": "BUSD",
            "cryptoAmount": 50.5,
            "currency": "USD",
            "fiatAmount": 50,
            "feeInCrypto": 0.5,
            "network": "testnet",
            "acceptPartialPayment": true
        }
        "statusCode": 201
    }
    `,
    customerInfoReq401:
        `
    {
        "message": "Transaction failed",
        "status": "failed",
        "statusCode": 401
    }
    `,
    nodeSDKSample:
        `
    const LazerPay = require('lazerpay-node-sdk');

    const lazerpay = new LazerPay(LAZER_PUBLIC_KEY, LAZER_SECRET_KEY);

    const payment_tx = async () => {
        try {
            const transaction_payload = {
                reference: 'W6b8hV55l0435t3545435', // Replace with a reference you generated
                customer_name: 'iamnotstatic.eth',
                customer_email: 'abdulfataisuleiman67@gmail.com',
                coin: 'USDC',
                currency: 'USD',
                fiatAmount: '100',
                acceptPartialPayment: true // By default it's false
            };

            const response = await lazerpay.Payment.initializePayment(transaction_payload);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    `,
    nodeSDKSampleResponse:
        `
    {
        "reference": "wfqweweqrtwerwrtwer45354545",
        "businessName": "Lazerpay Finance",
        "businessEmail": "abdulfataisuleiman67@gmail.com",
        "businessLogo": "https://res.cloudinary.com/lazer/image/upload/v1637512933/logo-default_ufyz0x.svg",
        "customerName": "Abdulfatai Suleiman",
        "customerEmail": "staticdev20046@gmail.com",
        "address": "0xcA20e971400F81F97fEc5416A963e8FA7F81aaE3",
        "coin": "BUSD",
        "cryptoAmount": 50.5,
        "currency": "USD",
        "fiatAmount": 50,
        "feeInCrypto": 0.5,
        "network": "testnet",
        "acceptPartialPayment": true
    }
    `, cryptoTransferPostCurl: `
    curl --location --request POST 'https://api.lazerpay.engineering/api/v1/transfer'\

    --header 'x-api-key: YOUR_SECRET_KEY' \

    --data-raw '{
        "amount": "1",
        "recipent": "0x0B4d358D349809037003F96A3593ff9015E89efA",
        "coin": "USDT",
        "blockchain": "Binance Smart Chain",
    }’
    `, cryptoTransferRequest401: `
    {
        "message": "Insufficient funds, check your balance and try again",
        "statusCode": 400,
        "status": "error"
    }
    `, cryptoTransferRequest201: `
    {
        "message": "Transfer recipient created successfully",
        "status": "success",
        "data": {
            "id": "926492db-7143-480a-8d3e-15395249329f",
            "createdAt": "2022-03-04T08:23:15.847Z",
            "updatedAt": "2022-03-15T14:14:02.871Z",
            "transactionHash": "0x91a2f4dd90f66b5d24f3e7fe1943c28952b9c93b9d4343dc21933ad55bca34bc",
            "walletAddress": "0xb826Bc3C775B7ec8a673066502E79B5F9104a426",
            "coin": "USDT",
            "amount": 1,
            "reference": "l3X93c4Ks8",
            "recipient": "0x0B4d358D349809037003F96A3593ff9015E89efA"
        },
        "statusCode": 200
    }
    `, crytoTransferSnippetJS: `
    const Lazerpay = require('lazerpay-node-sdk');

    const lazerpay = new Lazerpay(LAZER_PUBLIC_KEY, LAZER_SECRET_KEY);

    const crypto_payout_tx = async () => {
        const crypto_payout_tx = async () => {
            amount: 1,
            recipient: '0x0B4d358D349809037003F96A3593ff9015E89efA', // address must be a bep20 address
            coin: 'BUSD',
            blockchain:’Binance Smart Chain’
        };

        try {
            const response = await lazer.Payout.transferCrypto(transaction_payload);
            console.log(response.error);
        } catch (e) {
            console.log(e);
        }

    };
    `
}
