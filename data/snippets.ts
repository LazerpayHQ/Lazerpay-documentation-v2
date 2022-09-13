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
    createPaymentLinkCURL:
        `curl --location --request POST 'https://api.lazerpay.engineering/api/v1/payment-links' \
    --header 'Authorization: Bearer YOUR_SECRET_KEY' \
    --data-raw '{
        "title": "Model Rocket Design and Construction",
        description": "This is for Model Rocket Design and Construction Book",
        "amount": 100,
        "type": "standard",
        "logo": "https://media.istockphoto.com/photos/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-area-picture-id1309800132",
        "currency": "USD",
        "redirect_url": "https://example.com"
    }’`,
    createPaymentLinkResponse201:
        `{
        "message": "Payment link created",
        "data": {
            "id": "5237aa97-56d2-45fc-923e-1265c227f268",
            "reference": "msdl",
            "title": "model rocket design and construction",
            "description": "This is for Model Rocket Design and Construction Book wqrerertret werewre",
            "amount": "100",
            "currency": "USD",
            "redirectUrl": "https://example.com",
            "logo": "https://media.istockphoto.com/photos/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-area-picture-id1309800132",
            "type": "standard",
            "network": "mainnet",
            "status": "active",
            "paymentUrl": "https://lazerpay.finance/pay/model-rocket-design-and-construction-msdl",
            "createdAt": "2022-04-15T17:04:20.492Z",
            "updatedAt": "2022-04-15T17:04:20.492Z",
        },
        "statusCode": 201,
        "status": "success"
    }`,
    fetchAllPaymentLinkCURL:
        `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/payment-links’ \

--header 'Authorization: Bearer YOUR_SECRET_KEY'`,
    fetchAllPaymentLinkResponse200:
        `{
        "status": "success",
        "statusCode": 200,
        "data": [
            {
                "id": "5237aa97-56d2-45fc-923e-1265c227f268",
                "reference": "msdl",
                "title": "model rocket design and construction",
                "amount": "100",
                "currency": "USD",
                "redirectUrl": "https://example.com",
                "logo": "https://media.istockphoto.com/photos/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-area-picture-id1309800132",
                "type": "standard",
                "network": "mainnet",
                "status": "active",
                "paymentUrl": "https://lazerpay.finance/pay/model-rocket-design-and-construction-msdl",
                "createdAt": "2022-04-15T17:04:20.492Z",
                "updatedAt": "2022-04-15T17:04:20.492Z",
            }
        ],
        "count": 1,
        "currentPage": 1,
        "nextPage": null,
        "prevPage": null,
        "lastPage": 1
    }`,
    fetchPaymentLinkCURL:
        `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/transaction/initialize'  \

--header 'Authorization: Bearer YOUR_SECRET_KEY'`,
    fetchPaymentLinkResponse200:
        `{
        "message": "Payment link retrieved",
        "data": {
            "id": "5237aa97-56d2-45fc-923e-1265c227f268",
            "reference": "msdl",
            "title": "model rocket design and construction",
            "amount": "100",
            "currency": "USD",
            "redirectUrl": "https://example.com",
            "logo": "https://media.istockphoto.com/photos/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-area-picture-id1309800132",
            "type": "standard",
            "network": "mainnet",
            "status": "active",
            "paymentUrl": "https://lazerpay.finance/pay/model-rocket-design-and-construction-msdl",
            "createdAt": "2022-04-15T17:04:20.492Z",
            "updatedAt": "2022-04-15T17:04:20.492Z",
        },
        "statusCode": 200,
        "status": "success"
    }`,
    updatePaymentLinkCURL:
        `curl --location --request POST 'https://api.lazerpay.engineering/api/v1/transaction/initialize' \

--header 'Authorization: Bearer YOUR_SECRET_KEY'
--data-raw '{
    "status": "inactive"
}'`,
    updatePaymentLinkResponse200:
        `{
        "message": "Payment link updated",
        "data": {
            "id": "5237aa97-56d2-45fc-923e-1265c227f268",
            "reference": "msdl",
            "title": "model rocket design and construction",
            "amount": "100",
            "currency": "USD",
            "redirectUrl": "https://example.com",
            "logo": "https://media.istockphoto.com/photos/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-area-picture-id1309800132",
            "type": "standard",
            "network": "mainnet",
            "status": "inactive",
            "paymentUrl": "https://lazerpay.finance/pay/model-rocket-design-and-construction-msdl",
            "createdAt": "2022-04-15T17:04:20.492Z",
            "updatedAt": "2022-04-15T17:04:20.492Z",
        },
        "statusCode": 200,
        "status": "success"
    }`
}
