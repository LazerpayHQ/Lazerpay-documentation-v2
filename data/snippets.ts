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
    acceptPaymentsHTML:
    `<form id="paymentForm">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" />
        </div>
        <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email-address" />
        </div>
        </div>
        <div class="form-group">
            <label for="amount">Amount</label>
            <input type="number" id="amount" required />
        </div>
        <div class="form-submit">
            <button type="submit" onclick="payWithLazerpay()"> Pay with Lazerpay </button>
        </div>
    </form>`,

    nodeJsSdkSample:
    `const LazerPay = require('lazerpay-node-sdk');

    const lazerpay = new LazerPay(LAZER_PUBLIC_KEY, LAZER_SECRET_KEY);
    const payment_tx = async () => {
        try {
            const transaction_payload = {
                reference: 'W6b8hV55l0435t3545435', // Replace with a reference you generated
                customer_name: 'iamnotstatic.eth',
                customer_email: 'abdulfataisuleiman67@gmail.com',
                coin: 'USDC',
                coin: 'USDC',
                fiatAmount: '100',
                acceptPartialPayment: true // By default it's false
            };

            const response = await lazerpay.Payment.initializePayment(transaction_payload);

            console.log(response);
        } catch (error) {
            console.log(error);
    }`,
    nodeJsSdkSampleResponse:
`{
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
}`
}
