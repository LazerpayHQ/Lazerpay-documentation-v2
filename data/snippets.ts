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
    }`
}
`,
  webhookpayload4: `var crypto = require('crypto');
"var secret = process.env.SECRET_KEY;
// Using Express
app.post("/my/webhook/url", function(req, res) {

  //validate event
   var hash = crypto.createHmac('sha256', secret).update(JSON.stringify(req.body), 'utf8').digest('hex');  

   if (hash == req.headers['x-lazerpay-signature']) {
   // Retrieve the request's body
  var event = req.body;
   // Do something with event 
          }
          res.send(200);
      });

`,
};
