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
        `       <form id="paymentForm">
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
        </form>`,
    customerInfoJS:
        `   <script>
        https: //cdn.jsdelivr.net/gh/LazerPay-Finance/checkout-build@main/checkout@1.0.1/dist/index.min.js
    </script>
    <script>
        const paymentForm = document.getElementById('paymentForm');
        
        paymentForm.addEventListener("submit", payWithLazerpay, false);
    </script>`,
    customerInfoPostCURL:
        `   curl --location --request POST 'https://api.lazerpay.engineering/api/v1/transaction/initialize' \
    
    --header 'x-api-key: YOUR_PUBLIC_KEY' \
    
    --data-raw '{
        "customer_name": "Abdulfatai Suleiman",
        "customer_email": "static@gmail.com",
        "currency": "USD",
        "coin": "USDT",
        "amount": "10",
        accept_partial_payment:"true"
    }’`,
    customerInfoPostNode:
        `   suck --location --request POST 'https://api.lazerpay.engineering/api/v1/transaction/initialize' \
    --header 'x-api-key: YOUR_PUBLIC_KEY' \
    --data-raw '{
        "customer_name": "Abdulfatai Suleiman",
        "customer_email": "static@gmail.com",
        "currency": "USD",
        "coin": "USDT",
        "amount": "10",
        accept_partial_payment:"true"
    }’`,
    customerInfoReq201:
        `   {
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
    }`,
    customerInfoReq401:
        `   {
        "message": "Transaction failed",
        "status": "failed",
        "statusCode": 401
    }`,
    nodeSDKSample:
        `    const LazerPay = require('lazerpay-node-sdk');

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
        }`,
    nodeSDKSampleResponse:
        `   {
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
    }`,
    verifyPaymentGetCURL:
        `    curl --location --request GET 'https://api.lazerpay.engineering/api/v1/transaction/initialize' \

    --header 'x-api-key: YOUR_PUBLIC_KEY' \
    `,
    verifyPaymentGetResponse200:
        `{
        "status": "success",
        "statusCode": 200,
        "message": "Verification successful",
        "data": {
            "id": "92924b81-11fd-418f-bc4f-3ddab7e79e6b",
            "reference": "nGfVSuX3IK",
            "senderAddress": "0x451dEFC27B45808078e875556AF06bCFdC697BA4",
            "recipientAddress": "0xCfe4e688c47Af0689224da9B9bAB51B4dA38D11c",
            "actualAmount": 0.51,
            "amountPaid": 0.51,
            "amountPaidFiat": 299.7984,
            "fiatAmount": 300,
            "amountReceived": 0.52,
            "amountReceivedFiat": 305.6768,
            "coin": "BUSD",
            "currency": "NGN",
            "hash": "0xc80d9fa8ba4b13c685ad12ffdeb2a6f803f7c3832f51cc0376e5ff9a74c6fd93",
            "blockNumber": 16684797,
            "type": "received",
            "acceptPartialPayment": true,
            "status": "confirmed",
            "network": "mainnet",
            "blockchain": "Binance Smart Chain",
            "customer": {
                "id": "1c4d885e-4058-45f0-8d74-ff79fe439e75",
                "customerName": "Abdulfatai Suleiman",
                "customerEmail": "abdulfataisuleiman67@gmail.com",
                "customerPhone": null
            }
            "paymentLink": {},
            "paymentButton": {},
            "feeInCrypto": 0.01
        }`,
    verifyPaymentGetResponse404:
        `{
        "message": "Transaction not found",
        "status": "error"
        "statusCode": 404,
    }`,
    verifyPaymentNodeSDK:
        `const LazerPay = require('lazerpay-node-sdk');
    const lazerpay = new LazerPay(LAZER_PUBLIC_KEY, LAZER_SECRET_KEY);
    const confirm_tx = async () => {
        const confirm_tx = async () => {
            try {
                const payload = {
                    identifier: 'address generated or the reference generated by you from initializing payment',
                };
                const response = await lazerpay.Payment.confirmPayment(payload);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    };
    `,
    webhookPayload:
        `{
        "id": "378b53b2-28fd-4cbd-8fe1-6786d251b7d4",
        "reference": "MBnOcItpOaP0wkBWzx",
        "senderAddress": "0x451dEFC27B45808078e875556AF06bCFdC697BA4",
        "senderAddress": "0x451dEFC27B45808078e875556AF06bCFdC697BA4",
        "recipientAddress": "0x062FA9157C498C8Ca4E6AF204c132EDE2500e260",
        "actualAmount": 0.51,
        "amountPaid": 0.5,
        "amountPaidFiat": 292.385,
        "fiatAmount": 300,
        "amountReceived": 0.52,
        "amountReceivedFiat": 304.0804,
        "coin": "BUSD",
        "currency": "NGN",
        "hash": "0xe929d55dde3717987191674616a0d3bbcf4b63080434b71fde41ec86aeab5fdd",
        "blockNumber": 16509617,
        "type": "received",
        "acceptPartialPayment": true,
        "status": "confirmed",
        "network": "mainnet",
        "blockchain": "Binance Smart Chain",
        "paymentLink": {},
        "paymentButton": {},
        "customer": {
            "id": "1c4d885e-4058-45f0-8d74-ff79fe439e75",
            "customerName": "Abdulfatai Suleiman",
            "customerEmail": "abdulfataisuleiman67@gmail.com",
            "customerPhone”:null
        },
        "merchantAddress": "0xFdd5352384162C3342aD018AF61d77538Bdb1257",
        "feeInCrypto": 0.01,
        "webhookType": "DEPOSIT_TRANSACTION"
    }`,
    webhookValidateSignature:
        `var crypto = require('crypto');
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
    `
}
