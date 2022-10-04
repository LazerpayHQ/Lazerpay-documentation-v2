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
        `<form id="paymentForm">
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
        `<script>
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
    customerInfoPostJs:
        `const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': YOUR_PUBLIC_KEY
    },
    body: JSON.stringify({
        "customer_name": "Abdulfatai Suleiman",
        "customer_email": "static@gmail.com",
        "currency": "USD",
        "coin": "USDT",
        "amount": "10",
        accept_partial_payment:"true"
    })
}
fetch('https://api.lazerpay.engineering/api/v1/transaction/initialize', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    customerInfoReq201:
        `{
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
        `{
    "message": "Transaction failed",
    "status": "failed",
    "statusCode": 401
}`,
    nodeSDKSample:
        `const LazerPay = require('lazerpay-node-sdk');
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
}`,
    nodeSDKSampleResponse:
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
    "fiatRate": 0.9988,
    "cryptoRate": 1.001,
    "network": "testnet",
    "acceptPartialPayment": true
}`,
    verifyPaymentGetCURL:
        `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/transaction/verify/:address_or_reference' \

--header 'x-api-key: YOUR_PUBLIC_KEY' \
`,
    verifyPaymentGetJs:
        `const options = {
    method: 'GET',
    headers: {
        'x-api-key': YOUR_PUBLIC_KEY
    },
}
fetch('https://api.lazerpay.engineering/api/v1/transaction/verify/:address_or_reference', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
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
    createPaymentLinkJs:
        `const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': Bearer YOUR_SECRET_KEY
    },
    body: JSON.stringify({
        "title": "Model Rocket Design and Construction",
        "description": "This is for Model Rocket Design and Construction Book",
        "amount": 100,
        "type": "standard",
        "logo": "https://media.istockphoto.com/photos/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-area-picture-id1309800132",
        "currency": "USD",
        "redirect_url": "https://example.com"
    })
}
fetch('https://api.lazerpay.engineering/api/v1/payment-links', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
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
    createPaymentLinkResponse401:
        `{
    "statusCode": 401,
    "message": "Unsupported request, Please read our API documentation",
    "status": "error"
}`,
    fetchAllPaymentLinkCURL:
        `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/payment-links’ \

--header 'Authorization: Bearer YOUR_SECRET_KEY'`,
    fetchAllPaymentLinkJs:
        `const options = {
    method: 'GET',
    headers: {
        'x-api-key': Bearer YOUR_SECRET_KEY
    }
}
fetch('https://api.lazerpay.engineering/api/v1/payment-links', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
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
        `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/payment-links'  \

--header 'Authorization': 'Bearer YOUR_SECRET_KEY'
         'id_or_reference': 'Bearer ID_OR_REFERENCE'`,
    fetchPaymentLinkJs:
        `const options = {
    method: 'GET',
    headers: {
        'x-api- key': Bearer YOUR_SECRET_KEY,
        'id_or_reference': Bearer ID_OR_REFERENCE
    }
}
fetch('https://api.lazerpay.engineering/api/v1/payment-links', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
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
        `curl --location --request PUT 'https://api.lazerpay.engineering/api/v1/transaction/initialize' \

--header 'x-api- key': Bearer YOUR_SECRET_KEY
--data-raw '{
    "status": "inactive"
}'`,
    updatePaymentLinkJs:
        `const options = {
    method: 'PUT',
    headers: {
        'x-api- key': Bearer YOUR_SECRET_KEY
    },
    body: JSON.stringify({
        "status": "inactive"
    })
}
fetch('https://api.lazerpay.engineering/api/v1/transaction/initialize', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
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
    }`,
    webhookPayload:
        `{
    "id": "378b53b2-28fd-4cbd-8fe1-6786d251b7d4",
    "reference": "MBnOcItpOaP0wkBWzx",
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
    "metadata": {},
    "customer": {
        "id": "1c4d885e-4058-45f0-8d74-ff79fe439e75",
        "name": "Abdulfatai Suleiman",
        "email": "abdulfataisuleiman67@gmail.com",
        "phone": null,
        "shippingAddress": null
    },
    "merchantAddress": "0xFdd5352384162C3342aD018AF61d77538Bdb1257",
    "feeInCrypto": 0.01,
    "fiatRate": 0.9998,
    "cryptoRate": 1,
    "createdAt": "2022-03-30 13:00:42.614077",
    "updatedAt": "2022-03-30 13:03:05.175609",
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
}`,
    cryptoTransferPostCurl:
        `curl --location --request POST 'https://api.lazerpay.engineering/api/v1/transfer'\

--header 'x-api-key: YOUR_SECRET_KEY' \

--data-raw '{
    "amount": "1",
    "recipent": "0x0B4d358D349809037003F96A3593ff9015E89efA",
    "coin": "USDT",
    "blockchain": "Binance Smart Chain",
}’`,
    cryptoTransferPostJs:
        `const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': Bearer YOUR_SECRET_KEY
    },
    body: JSON.stringify({
        "amount": "1",
        "recipent": "0x0B4d358D349809037003F96A3593ff9015E89efA",
        "coin": "USDT",
        "blockchain": "Binance Smart Chain",
    })
}
fetch('https://api.lazerpay.engineering/api/v1/transfer', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    cryptoTransferRequest400:
        `{
    "message": "Insufficient funds, check your balance and try again",
    "statusCode": 400,
    "status": "error"
}`,
    cryptoTransferRequest200:
        `{
    "message": "Crypto transfer initiated successfully",
    "status": "success",
    "statusCode": 200
        
}`,
    crytoTransferSnippetJS:
        `const Lazerpay = require('lazerpay-node-sdk');

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
};`,
    depositWebhookJS: `
    {
        "id": "183f0a97-9de8-4cdc-b130-e8dd5f06caf4",
        "reference": "3H1WTK8k8PC78p6TWEbKptT",
        "senderAddress": "0x8aFDD7Ee323E98adcB59445AE49118673950Ff19",
        "recipientAddress": "0x0B4d358D349809037003F96A3593ff9015E89efA",
        "actualAmount": 100,
        "amountPaid": 100,
        "amountReceived": 100,
        "coin": "USDT",
        "hash": "0xa3ef6266d29c096eb824112fcb32a90d42276bb1c94f88790f3d47a80992a9d8",
        "blockNumber": 19767423,
        "type": "withdrawal",
        "status": "confirmed",
        "network": "mainnet",
        "blockchain": "Binance Smart Chain",
        "metadata": {} ,
        "createdAt": "2022-05-30T20:22:54.674Z",
        "updatedAt": "2022-05-30T20:22:54.674Z",
        "feeInCrypto": 0,
        "webhookType": "CRYPTO_TRANSFER"
    }
    `, validateWebhookJS:
        `{
    var crypto = require('crypto');
    var secret = process.env.SECRET_KEY;
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
}
`,
    getStartedAcceptPaymentPostCURL:
        `curl https://api.lazerpay.com/transaction/initialize 
    -H "Authorization: Bearer YOUR_SECRET_KEY"
    -H "Content-Type: application/json"
    -X POST`,
    createBankPayoutCURL: `curl --location --request POST 'https://api.lazerpay.engineering/api/v1/bank/payouts'\

    --header 'x-api-key: YOUR_SECRET_KEY' \

    --data-raw '{
        "bank_name": "FIRST BANK PLC",
        "bank_code": "11",
        "account_name": "Abdulfatai Suleiman",
        "account_number": "3125343111",
        "currency": "NGN",
        "country": "nigeria",
        "state": "abuja",
        "default": true
    }’`,
    createBankPayoutJs:
        `const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': Bearer YOUR_SECRET_KEY
    },
    body: JSON.stringify({
        "bank_name": "FIRST BANK PLC",
        "bank_code": "11",
        "account_name": "Abdulfatai Suleiman",
        "account_number": "3125343111",
        "currency": "NGN",
        "country": "nigeria",
        "state": "abuja",
        "default": true
    })
}
fetch('https://api.lazerpay.engineering/api/v1/bank/payouts', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    createBankPayout200: `{
        "status": "success",
        "message": "Bank Payout created successfully",
        "data": {
            "bankName": "XXXX BANK LTD.",
            "accountName": "XXX inc",
            "accountNumber": "XXXXXX",
            "accountType": "personal",
            "routingNumber": "XXXXX",
            "currency": "USD",
            "country": "united state of america",
            "state": "california",
            "city": "san francisco, ca",
            "address": "338 spear street",
            "postalCode": "XXXXXX",
            "network": "mainnet",
            "default": true,
            "deleted": false,
            "deletedAt": null,
            "street": null,
            "id": "b008f1ea-ed3b-4187-b269-XXXXXXXX",
            "status": "approved",
            "createdAt": "2022-09-02T14:54:12.984Z",
            "updatedAt": "2022-09-02T14:54:12.984Z"
        },
        "statusCode": 201
    }`,
    createBankPayout404: `{
        // Response
    }`,
    getAllBankPayoutsGetCURL:
        `    curl --location --request GET 'https://api.lazerpay.engineering/api/v1/bank/payouts \

    --header 'x-api-key: YOUR_PUBLIC_KEY' \
    `,
    getAllBankPayoutsGetJs:
        `const options = {
    method: 'GET',
    headers: {
        'x-api-key': Bearer YOUR_SECRET_KEY
    }
}
fetch('https://api.lazerpay.engineering/api/v1/bank/payouts', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    getAllBankPayouts200:
        `   {
        "message": "Bank Payouts retrieved successfully",
        "status": "success",
        "statusCode": 200,
        "data": [
            {
                "id": "b406677c-c028-475f-b029-0df0d39c9321",
                "bankName": "kuda bank",
                "bankCode": "090267",
                "accountName": "suleiman abdulfatai",
                "accountNumber": "2001670835",
                "accountType": null,
                "routingNumber": null,
                "currency": "NGN",
                "country": "nigeria",
                "state": null,
                "city": null,
                "address": null,
                "street": null,
                "postalCode": null,
                "network": "testnet",
                "status": "approved",
                "default": true,
                "deleted": false,
                "createdAt": "2022-08-31T20:55:01.801Z",
                "updatedAt": "2022-08-31T20:55:01.801Z",
                "deletedAt": null
            }
        ],
        "count": 1,
        "currentPage": 1,
        "nextPage": null,
        "prevPage": null,
        "lastPage": 1
    }`,
    deleteBankPayoutCURL:
        `curl --location --request DELETE 'https://api.lazerpay.engineering/api/v1/bank/payouts \

--header 'x-api-key: YOUR_PUBLIC_KEY' \
`,
    deleteBankPayoutJs:
        `const options = {
    method: 'DELETE',
    headers: {
        'ids': ["b406677c-c028-475f-b029-0df0d39c9321"],
        'x-api-key': Bearer YOUR_SECRET_KEY
    }
}
fetch('https://api.lazerpay.engineering/api/v1/bank/payouts', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    deleteBankPayout200:
        `   {
        "status": "success",
        "message": "Bank Payout deleted successfully",
        "statusCode": 200
    }`,
    deleteBankPayout401:
        `   {
        // Response
    }`,
    updateBankPayoutCURL:
        `curl --location --request PATCH 'https://api.lazerpay.engineering/api/v1/bank/payouts/<bank_payout_id>'\

--header 'x-api-key: YOUR_SECRET_KEY' \

--data-raw '{
    "default": true
}’`,
    updateBankPayoutJS:
        `const options = {
    method: 'PATCH',
    headers: {
        'x-api-key': Bearer YOUR_SECRET_KEY
    },
    body: JSON.stringify({
        "default": true
    })
}
fetch('https://api.lazerpay.engineering/api/v1/bank/payouts/<bank_payout_id>', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    updateBankPayout200: `{
        "status": "success",
        "message": "Bank Payout updated successfully",
        "data": {
            "id": "2e7fa635-b495-4788-a4ac-XXXXXX",
            "bankName": "kuda bank",
            "bankCode": "XXXX",
            "accountName": "XXXX XXXX",
            "accountNumber": "XXXXX",
            "accountType": null,
            "routingNumber": null,
            "currency": "NGN",
            "country": "nigeria",
            "state": null,
            "city": null,
            "address": null,
            "street": null,
            "postalCode": null,
            "network": "mainnet",
            "status": "approved",
            "default": true,
            "deleted": false,
            "createdAt": "2022-08-29T17:59:43.449Z",
            "updatedAt": "2022-08-31T21:21:54.900Z",
            "deletedAt": null
        },
        "statusCode": 200
    }`,
    getSupportCountryPayoutCURL: `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/bank/payouts/countries'\

--header 'x-api-key: YOUR_SECRET_KEY' \
    `,
    getSupportCountryPayoutJs:
        `const options = {
    method: 'GET',
    headers: {
        'x-api-key': Bearer YOUR_SECRET_KEY
    }
}
fetch('https://api.lazerpay.engineering/api/v1/bank/payouts/countries', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    getSupportCountryPayout200: `{
    "message": "Bank Payout Countries retrieved successfully",
    "data": [
        {
            "id": "477a477c-30e7-485a-9cc3-5ae54f4e492d",
            "name": "Nigeria",
            "code": "NG",
            "logoUrl": "https://res.cloudinary.com/lazer/image/upload/v1655832428/Countries%20Logo/ngn-logo_tazf8g.svg",
            "network": "testnet",
            "status": "active",
            "createdAt": "2022-08-24T18:40:29.213Z",
            "updatedAt": "2022-08-24T18:40:29.213Z",
            "currencies": [
                {
                    "id": "2581c366-5a31-4250-9fee-ee078c8712e2",
                    "name": "Nigierian Naira",
                    "code": "NGN",
                    "symbol": "₦",
                    "logoUrl": "https://res.cloudinary.com/lazer/image/upload/v1655832428/Countries%20Logo/ngn-logo_tazf8g.svg",
                    "network": "testnet",
                    "status": "active",
                    "createdAt": "2022-08-24T18:40:29.282Z",
                    "updatedAt": "2022-08-24T18:40:29.282Z"
                }
            ]
        },
        ...
    ],
    "statusCode": 200,
    "status": "success"
}`,
    getSupportCurrenciesPayoutCURL: `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/bank/payouts/currencies'\

--header 'x-api-key: YOUR_SECRET_KEY' \
    `,
    getSupportCurrenciesPayoutJs:
        `const options = {
    method: 'GET',
    headers: {
        'x-api-key': Bearer YOUR_SECRET_KEY
    }
}
fetch('https://api.lazerpay.engineering/api/v1/bank/payouts/currencies', options)
.then((response) => response.json())
.then((result) => console.log('Success', result))`,
    getSupportCurrenciesPayout200: `{
    "message": "Bank Payout Currencies retrieved successfully",
    "data": [
        {
            "id": "2581c366-5a31-4250-9fee-ee078c8712e2",
            "name": "Nigierian Naira",
            "code": "NGN",
            "symbol": "₦",
            "logoUrl": "https://res.cloudinary.com/lazer/image/upload/v1655832428/Countries%20Logo/ngn-logo_tazf8g.svg",
            "network": "testnet",
            "status": "active",
            "createdAt": "2022-08-24T18:40:29.282Z",
            "updatedAt": "2022-08-24T18:40:29.282Z"
        },
        ...
    ],
    "statusCode": 200,
    "status": "success"
}`,
    getBanksCURL: `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/bank?country=Nigeria'\

--header 'x-api-key: YOUR_SECRET_KEY' \`
}`,
    getBanksJs:
        `const options = {
    method: 'GET',
    headers: {
        'x-api-key': Bearer YOUR_SECRET_KEY
    }
}
fetch('https://api.lazerpay.engineering/api/v1/bank?country=Nigeria', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    getBanks200: `{
    "status": "success",
    "message": "Banks retrieved successfully",
    "data": [
        {
            "code": "044",
            "name": "Access Bank"
        },
        {
            "code": "023",
            "name": "Citi Bank"
        },
        {
            "code": "050",
            "name": "EcoBank PLC"
        },
        ...
    ],
    "statusCode": 200
}`,
    getPayoutExchangeRateCURL: `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/bank/payouts/rate?coin=DAI&currency={supported_currency}'\

--header 'x-api-key: YOUR_SECRET_KEY' \`
`,
    getPayoutExchangeRateJs:
        `const options = {
    method: 'GET',
    headers: {
        'x-api-key': Bearer YOUR_SECRET_KEY
    }
}
fetch('https://api.lazerpay.engineering/api/v1/bank/payouts/rate?coin=DAI&currency={supported_currency}', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    getPayoutExchangeRate200: `{
    "message": "Bank payout exchange rate retrieved",
    "status": "success",
    "data": {
        "coin": "DAI",
        "currency": "NGN",
        "rate": 690.07
    },
    "statusCode": 200
}`,
    initiateBankPayoutCURL: `curl --location --request POST 'https://api.lazerpay.engineering/api/v1/bank/payouts/initiate'\

--header 'x-api-key: YOUR_SECRET_KEY' \

--data-raw '{
    "bank_payout_id": "3ad00043-f408-4da8-85e1-cbc28fbe0060",
    "coin": "USDT",
    "amount": 1
}’
`,
    initiateBankPayoutJs:
        `const options = {
    method: 'POST',
    headers: {
        'x-api-key': Bearer YOUR_SECRET_KEY
    },
    body: JSON.stringify({
        "bank_payout_id": "3ad00043-f408-4da8-85e1-cbc28fbe0060",
        "coin": "USDT",
        "amount": 1
    })
}
fetch('https://api.lazerpay.engineering/api/v1/bank/payouts/initiate', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    initiateBankPayout200: `{
    "message": "Bank Payout initiated successfully",
    "status": "success",
    "statusCode": 200
}`,
    swapPostCURL:
        `curl --location --request POST 'https://api.lazerpay.engineering/api/v1/transaction/initialize' \

--header 'x-api-key: YOUR_PUBLIC_KEY' \

--data-raw '{
    "from_coin": "USDT",
    "to_coin": "BUSD",
    "amount": 0.01,
    "blockchain": "Binance Smart Chain"
}’`,
    swapPostJs:
        `const options = {
    method: 'POST',
    headers: {
        'x-api-key': Bearer YOUR_PUBLIC_KEY
    },
    body: JSON.stringify({
        "from_coin": "USDT",
        "to_coin": "BUSD",
        "amount": 0.01,
        "blockchain": "Binance Smart Chain"
    })
}
fetch('https://api.lazerpay.engineering/api/v1/transaction/initialize', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))
`,
    swap200:
        `{
    "message": "Crypto swap initiated successfully",
    "status": "success",
    "statusCode": 200
}
`,
    swap400:
        `{
    "message": "Insufficient funds, check your balance and try again",
    "statusCode": 400,
    "status": "error"
}`,
    swapAmountPostCURL:
        `curl --location --request POST 'https://api.lazerpay.engineering/api/v1/swap/amount-out' \

--header 'Authorization: YOUR_SECRET_KEY' \

--data-raw '{
    "from_coin": "USDT",
    "to_coin": "BUSD",
    "amount": 0.01,
    "blockchain": "Binance Smart Chain"
}’`,
    swapAmountPostJs:
        `const options = {
        method: 'POST',
        headers: {
            'Authorization': Bearer YOUR_SECRET_KEY
        },
        body: JSON.stringify({
            "from_coin": "USDT",
            "to_coin": "BUSD",
            "amount": 0.01,
            "blockchain": "Binance Smart Chain"
        })
    }
    fetch('https://api.lazerpay.engineering/api/v1/swap/amount-out', options)
        .then((response) => response.json())
        .then((result) => console.log('Success', result))
    `,
    swapAmountPost201:
        `{
    "message": "Crypto swap amount out retrieved successfully",
    "status": "success",
    "statusCode": 200,
    "data": {
        "fromCoin": "USDT",
        "toCoin": "BUSD",
        "amount": 99.68468056751414
    }
}`,
    swapAmountPost400:
        `{
    "message": "Insufficient funds, check your balance and try again",
    "statusCode": 400,
    "status": "error"
}`,
    swapWebhookJson:
        `{
    "id": "63a51487-a570-45d5-b4ea-d6a9be46d77a",
    "reference": "XebhrfHeO5nhkxGgkb2ag7CB1zI6",
    "senderAddress": "0x8aFDD7Ee323E98adcB59445AE49118673950Ff19",
    "recipientAddress": "0x8aFDD7Ee323E98adcB59445AE49118673950Ff19",
    "actualAmount": 100,
    "amountPaid": 99.98,
    "hash": "0xd8f4d9badc12cfe0f82adf631eee8fd973a9fa801e4918510275c6e9b641b3dc",
    "blockNumber": 19767429,
    "type": "swap",
    "status": "confirmed",
    "network": "mainnet",
    "blockchain": "Binance Smart Chain",
    "metadata": {},
    "fromCoin": "USDT",
    "toCoin": "BUSD",
    "createdAt": "2022-05-30T20:23:12.979Z",
    "updatedAt": "2022-05-30T20:23:12.979Z",
    "feeInCrypto": 0,
    "webhookType": "CRYPTO_SWAP"
}`,
    swapWebhookSample:
        `var crypto = require('crypto');
var secret = process.env.SECRET_KEY;
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
});`,
    stableCoinSwapPostCURL:
        `curl --location --request POST 'https://api.lazerpay.engineering/api/v1/transaction/initialize' \

--header 'x-api-key: YOUR_PUBLIC_KEY' \

--data-raw '{
    "from_coin": "USDT",
    "to_coin": "BUSD",
    "amount": 0.01,
    "blockchain": "Binance Smart Chain"
}’`,
    stableCoinSwapPostJs:
        `const options = {
    method: 'POST',
    headers: {
        'x-api-key': Bearer YOUR_PUBLIC_KEY
    },
    body: JSON.stringify({
        "from_coin": "USDT",
        "to_coin": "BUSD",
        "amount": 0.01,
        "blockchain": "Binance Smart Chain"
    })
};
fetch('https://api.lazerpay.engineering/api/v1/transaction/initialize', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))
`,
    stableCoinSwapPost201:
        `{
    "message": "Crypto swap amount initiated successfully",
    "status": "success",
    "statusCode": 200,
    "data": {
        "fromCoin": "USDT",
        "toCoin": "BUSD",
        "amount": 99.68468056751414
    }
}`,
    stableCoinSwapPost400:
        `{
    "message": "Insufficient funds, check your balance and try again",
    "statusCode": 400,
    "status": "error"
}`,
    allTransactionsPostCurl:
        `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/transactions' \

--Authorization 'x-api-key: YOUR_PUBLIC_KEY' \

                'Content-Type': 'application/JSON' \
                    `,
    allTransactionsPostJs:
        `const options = {
    method: 'GET',
    headers: {
        'Authorization': Bearer YOUR_SECRET_KEY
    }
};
fetch('https://api.lazerpay.engineering/api/v1/transaction/initialize', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))
`,
    allTransactions200:
        `{
    "message": "Transactions retrieved successfully",
    "status": "success",
    "statusCode": 200,
    "data": [
        {
            "id": "93754962-XXX-46a2-9858-XXX",
            "walletId": "XXX-35a2-421f-XXX-d23149572fd7",
            "externalId": null,
            "reference": "Vuzr458xTg",
            "shippingAddress": null,
            "senderAddress": null,
            "recipientAddress": "0x79A0cd9390XXXXX1D0651005128d4884094c",
            "actualAmount": 10,
            "amountPaid": 0,
            "amountPaidFiat": 0,
            "fiatAmount": 10,
            "amountReceived": 0,
            "amountReceivedFiat": 0,
            "fee": 0.1,
            "coin": "BUSD",
            "currency": "USD",
            "hash": null,
            "blockNumber": null,
            "type": "received",
            "acceptPartialPayment": false,
            "status": "pending",
            "network": "testnet",
            "paymentChannel": "crypto_transfer",
            "blockchain": "Binance Smart Chain",
            "fiatRate": 1,
            "cryptoRate": 1,
            "metadata": {},
            "fromCoin": null,
            "toCoin": null,
            "createdAt": "2022-09-05T22:09:57.119Z",
            "updatedAt": "2022-09-05T22:09:57.119Z",
            "customer": {
                "id": "XXXX-71cc-45e3-8562-XXXX",
                "walletId": "33cbb77a-XXX-421f-XXX-d23149572fd7",
                "name": "Abdulfatai Suleiman",
                "email": "abdulfataisuleiman67@gmail.com",
                "shippingAddress": null,
                "phone": null,
                "network": "testnet",
                "createdAt": "2022-09-05T22:09:57.119Z",
                "updatedAt": "2022-09-05T22:09:57.119Z"
            },
            "bankPayout": null
        }
    ]
}`,
    allTransactions400:
        `{
    // Response
}`,
    getTransactionPostCurl:
        `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/transactions/:transaction_id' \

--Authorization 'x-api-key: YOUR_PUBLIC_KEY' \

        'Content-Type': 'application/JSON' \
            `,
    getTransactionPostJs:
        `const options = {
    method: 'GET',
    headers: {
    'Authorization': Bearer YOUR_SECRET_KEY
    }
};
fetch('https://api.lazerpay.engineering/api/v1/transaction/:transaction_id', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))
`,
    getTransaction200:
        `{
    "message": "Transactions retrieved successfully",
    "status": "success",
    "statusCode": 200,
    "data": {
        "id": "93754962-XXX-46a2-9858-XXX",
        "walletId": "XXX-35a2-421f-XXX-d23149572fd7",
        "externalId": null,
        "reference": "Vuzr458xTg",
        "shippingAddress": null,
        "senderAddress": null,
        "recipientAddress": "0x79A0cd9390XXXXX1D0651005128d4884094c",
        "actualAmount": 10,
        "amountPaid": 0,
        "amountPaidFiat": 0,
        "fiatAmount": 10,
        "amountReceived": 0,
        "amountReceivedFiat": 0,
        "fee": 0.1,
        "coin": "BUSD",
        "currency": "USD",
        "hash": null,
        "blockNumber": null,
        "type": "received",
        "acceptPartialPayment": false,
        "status": "pending",
        "network": "testnet",
        "paymentChannel": "crypto_transfer",
        "blockchain": "Binance Smart Chain",
        "fiatRate": 1,
        "cryptoRate": 1,
        "metadata": {},
        "fromCoin": null,
        "toCoin": null,
        "createdAt": "2022-09-05T22:09:57.119Z",
        "updatedAt": "2022-09-05T22:09:57.119Z",
        "customer": {
            "id": "XXXX-71cc-45e3-8562-XXXX",
            "walletId": "33cbb77a-XXX-421f-XXX-d23149572fd7",
            "name": "Abdulfatai Suleiman",
            "email": "abdulfataisuleiman67@gmail.com",
            "shippingAddress": null,
            "phone": null,
            "network": "testnet",
            "createdAt": "2022-09-05T22:09:57.119Z",
            "updatedAt": "2022-09-05T22:09:57.119Z"
        },
        "bankPayout": null
    }
}`,
    getTransaction400:
        `{
    // Response
}`,
    allCustomersPostCurl:
        `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/customers' \

--Authorization 'x-api-key: YOUR_PUBLIC_KEY' \

        'Content-Type': 'application/JSON' \
            `,
    allCustomersPostJs:
        `const options = {
    method: 'GET',
    headers: {
    'Authorization': Bearer YOUR_SECRET_KEY
    }
};
fetch('https://api.lazerpay.engineering/api/v1/transaction/customers', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))
`,
    allCustomers200:
        `{
    "message": "Customers retrieved successfully",
    "status": "success",
    "statusCode": 200,
    "data": [
        {
            "id": "bc48cc84-71cc-XXX-8562-XXXXX",
            "walletId": "33cbb77a-35a2-421f-a733-XXXXX",
            "name": "Abdulfatai Suleiman",
            "email": "abdulfataisuleiman@XXXX.com",
            "shippingAddress": null,
            "phone": null,
            "network": "testnet",
            "createdAt": "2022-09-05T22:09:57.119Z",
            "updatedAt": "2022-09-05T22:09:57.119Z",
            "transactions": [
                {
                    "id": "XXXXXX-731e-46a2-XXXX-3495b35d99a6",
                    "walletId": "XXXXXX-35a2-421f-XXXX-d23149572fd7",
                    "reference": "Vuzr458xTg",
                    "senderAddress": null,
                    "recipientAddress": "0x79A0cd9390384XXXXXXXXX5128d4884094c",
                    "actualAmount": 10,
                    "amountPaid": 0,
                    "amountPaidFiat": 0,
                    "fiatAmount": 10,
                    "amountReceived": 0,
                    "amountReceivedFiat": 0,
                    "fee": 0.1,
                    "coin": "BUSD",
                    "currency": "USD",
                    "hash": null,
                    "blockNumber": null,
                    "type": "received",
                    "acceptPartialPayment": false,
                    "status": "pending",
                    "network": "testnet",
                    "paymentChannel": "crypto_transfer",
                    "blockchain": "Binance Smart Chain",
                    "fiatRate": 1,
                    "cryptoRate": 1,
                    "metadata": {},
                    "fromCoin": null,
                    "toCoin": null,
                    "createdAt": "2022-09-05T22:09:57.119Z",
                    "updatedAt": "2022-09-05T22:09:57.119Z"
                }
            ]
        }
    ],
    "count": 1,
    "currentPage": 1,
    "nextPage": null,
    "prevPage": null,
    "lastPage": 1
}`,
    allCustomers400:
        `{
    // Response
}`,
    getCustomerPostCurl:
        `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/customers/:customer_id' \

--Authorization 'x-api-key: YOUR_SECRET_KEY' \

'Content-Type': 'application/JSON' \
    `,
    getCustomerPostJs:
        `const options = {
    method: 'GET',
    headers: {
        'Authorization': Bearer YOUR_SECRET_KEY
    }
};
fetch('https://api.lazerpay.engineering/api/v1/customers/:customer_id', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))
`,
    getCustomer200:
        `{
    "message": "Customers retrieved successfully",
    "data": [
        "id": "bc48cc84-71cc-XXX-8562-XXXXX",
        "walletId": "33cbb77a-35a2-421f-a733-XXXXX",
        "name": "Abdulfatai Suleiman",
        "email": "abdulfataisuleiman@XXXX.com",
        "shippingAddress": null,
        "phone": null,
        "network": "testnet",
        "createdAt": "2022-09-05T22:09:57.119Z",
        "updatedAt": "2022-09-05T22:09:57.119Z",
        "transactions": [
            {
                "id": "XXXXXX-731e-46a2-XXXX-3495b35d99a6",
                "walletId": "XXXXXX-35a2-421f-XXXX-d23149572fd7",
                "reference": "Vuzr458xTg",
                "senderAddress": null,
                "recipientAddress": "0x79A0cd9390384XXXXXXXXX5128d4884094c",
                "actualAmount": 10,
                "amountPaid": 0,
                "amountPaidFiat": 0,
                "fiatAmount": 10,
                "amountReceived": 0,
                "amountReceivedFiat": 0,
                "fee": 0.1,
                "coin": "BUSD",
                "currency": "USD",
                "hash": null,
                "blockNumber": null,
                "type": "received",
                "acceptPartialPayment": false,
                "status": "pending",
                "network": "testnet",
                "paymentChannel": "crypto_transfer",
                "blockchain": "Binance Smart Chain",
                "fiatRate": 1,
                "cryptoRate": 1,
                "metadata": {},
                "fromCoin": null,
                "toCoin": null,
                "createdAt": "2022-09-05T22:09:57.119Z",
                "updatedAt": "2022-09-05T22:09:57.119Z"
            }
        ]
    },
    "status": "success",
    "statusCode": 200
}`,
    getCustomer400:
        `{
    // Response
}`,
    createProductCurl:
        `curl --location --request POST 'https://api.lazerpay.engineering/api/v1/products' \

--header 'x-api-key: YOUR_PUBLIC_KEY' \

--data-raw '{
    "name": "book",
    "description": "Atomic Habits",
    "amount": "https://my-fake-cover-image.jpeg",
    "blockchain": [ { "currency": "USD", "amount": 80000 } ]
}’`,
    createProductJs:
        `const options = {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_SECRET_KEY',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "name": "book",
        "description": "Atomic Habits",
        "amount": "https://my-fake-cover-image.jpeg",
        "blockchain": [ { "currency": "USD", "amount": 80000 } ]
    })
};
fetch('https://api.lazerpay.engineering/api/v1/products', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    createProduct201:
        `{
    "message": "Product created successfully",
    "data": {
        "name": "not fake product",
        "description": "not fake description",
        "businessId": "3dc8842d-fbdc-41a8-ad61-c023afc3a391",
        "network": "testnet",
        "prices": [
            {
                "id": "f024a92c-ff80-40fe-8cc2-e12e8aa1087d",
                "amount": 80000,
                "currency": {
                    "name": "United States Dollar",
                    "symbol": "USD"
                },
                "pricingType": "standard"
            }
        ],
        "image": {
            "url": "https://my-fake-cover-image.jpeg",
            "createdAt": "2022-09-05T15:14:36.721Z"
        },
        "id": "3a78a41a-305b-4061-aea5-8f0f1994fd00",
        "createdAt": "2022-09-05T15:14:36.721Z",
        "updatedAt": "2022-09-05T15:14:36.721Z",
        "active": true
    },
    "statusCode": 201,
    "status": "success"
}`,
    createProduct400:
        `{
    "statusCode": 400,
    "message": [
        "name must be a string",
        "name should not be empty",
        "description must be a string",
        "description should not be empty"
    ],
    "error": "Bad Request"
}`,
    findProductsCurl:
        `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/products?network={}{{network}}' \

--header 'x-api-key: YOUR_PUBLIC_KEY' \
         
         'Content-Type': 'application/json'
`,
    findProductsJs:
        `const options = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer YOUR_SECRET_KEY',
        'Content-Type': 'application/json'
    }
};
fetch('https://api.lazerpay.engineering/api/v1/products?network={}{{network}}', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    findProducts200:
        `{
    "status": "success",
    "statusCode": 200,
    "data": [
        {
            "id": "3a78a41a-305b-4061-aea5-XXXX",
            "name": "Book",
            "createdAt": "2022-09-05T15:14:36.721Z",
            "updatedAt": "2022-09-05T15:14:36.721Z",
            "description": "Atomic Habits",
            "active": true,
            "businessId": "3dc8842d-XX-XXX-ad61-c023afc3a391",
            "network": "testnet",
            "prices": [
                {
                    "id": "XX-ff80-40fe-XX-e12e8aa1087d",
                    "amount": "80000",
                    "currency": {
                        "name": "United States Dollar",
                        "symbol": "USD"
                    }
                }
            ],
            "image": {
                "url": "https://my-fake-cover-image.jpeg",
                "publicId": "default",
                "folder": "products"
            }
        }
    ],
    "count": 1,
    "currentPage": 1,
    "nextPage": null,
    "prevPage": null,
    "lastPage": 1
}`,
    findProducts400:
        `{
    // Response
}`,
    getProductCurl:
        `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/products/:id' \

--header 'x-api-key: YOUR_PUBLIC_KEY' \
         
         'Content-Type': 'application/json'
`,
    getProductJs:
        `const options = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer YOUR_SECRET_KEY',
        'Content-Type': 'application/json'
    }
};
fetch('https://api.lazerpay.engineering/api/v1/products/:id', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    getProduct200:
        `{
    "message": "Product fetched successfully",
    "data": {
        "id": "978ba584-839a-4af2-a673-4bc3b814b54a",
        "name": "Guccie Purse",
        "createdAt": "2022-07-25T04:56:07.810Z",
        "updatedAt": "2022-07-25T04:56:07.810Z",
        "description": "Bag of Guccie Stuff With sun",
        "active": true,
        "userId": "51afc3cd-cbb3-43ac-a404-db2897915ecc",
        "businessId": "e4b23ecf-9d10-4b4f-9582-20700cf00d1b",
        "network": "testnet",
        "prices": [
            {
                "id": "ec99bcce-7a57-47c2-adc6-b284db779841",
                "createdAt": "2022-07-25T04:56:07.810Z",
                "amount": "8.00",
                "pricingType": "standard",
                "currency": {
                    "id": "dedb6fb9-bc74-4a72-a8ce-f6fcc6435de0",
                    "name": "United States Dollar",
                    "symbol": "USD",
                    "logo": null,
                    "status": "active",
                    "createdAt": "2022-07-22T09:05:15.164Z",
                    "updatedAt": "2022-07-22T09:05:15.164Z"
                },
                "paymentLinks": []
            }
        ],
        "image": {
            "id": "b74d0cd5-f972-454f-9d4d-a29a9255098c",
            "url": "https://res.cloudinary.com/lazer/image/upload/v1654710452/product_img_yfgeb6.png",
            "publicId": "default",
            "createdAt": "2022-07-25T04:56:07.810Z",
            "folder": "products"
        }
    },
    "statusCode": 200,
    "status": "success"
}`,
    getProduct400:
        `{
    // Response
}`,
    updateProductCurl:
        `curl --location --request PUT 'https://api.lazerpay.engineering/api/v1/products/:id' \

--header 'Authorization: Bearer YOUR_SECRET_KEY' \

         'Content-Type': 'application/json'

--data-raw '{
    "name": "fake product name",
    "description": "fake description",
    "cover_photo": "https://my-fake-cover-image-update.jpeg",
    "active": false
}’`,
    updateProductJs:
        `const options = {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_SECRET_KEY',
        'Content-Type': 'application/json'
    }
    body: JSON.stringify({
        "name": "fake product name",
        "description": "fake description",
        "cover_photo": "https://my-fake-cover-image-update.jpeg",
        "active": false
    })
};
fetch('https://api.lazerpay.engineering/api/v1/products/:id', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    updateProduct200:
        `{
    "message": "Product fetched successfully",
    "data": {
        "id": "978ba584-839a-4af2-a673-4bc3b814b54a",
        "name": "Chlorine Bubble Gum",
        "createdAt": "2022-07-25T04:56:07.810Z",
        "updatedAt": "2022-07-25T05:01:28.949Z",
        "description": "Tons Of Gums",
        "active": false,
        "userId": "51afc3cd-cbb3-43ac-a404-db2897915ecc",
        "businessId": "e4b23ecf-9d10-4b4f-9582-20700cf00d1b",
        "network": "testnet",
        "prices": [
            {
                "id": "ec99bcce-7a57-47c2-adc6-b284db779841",
                "createdAt": "2022-07-25T04:56:07.810Z",
                "amount": "8.00",
                "pricingType": "standard",
                "currency": {
                    "id": "dedb6fb9-bc74-4a72-a8ce-f6fcc6435de0",
                    "name": "United States Dollar",
                    "symbol": "USD",
                    "logo": null,
                    "status": "active",
                    "createdAt": "2022-07-22T09:05:15.164Z",
                    "updatedAt": "2022-07-22T09:05:15.164Z"
                },
                "paymentLinks": []
            }
        ],
        "image": {
            "id": "b74d0cd5-f972-454f-9d4d-a29a9255098c",
            "url": "https://res.cloudinary.com/lazer/image/upload/v1654710452/product_img_yfgeb6.png",
            "publicId": "default",
            "createdAt": "2022-07-25T04:56:07.810Z",
            "folder": "products"
        }
    },
    "statusCode": 200,
    "status": "success"
}`,
    updateProduct400:
        `{
    "statusCode": 400,
    "message": [
        "description must be a string",
        "description should not be empty"
    ],
    "error": "Bad Request"
}`,
    getPricesCurl:
        `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/products/:product_id/prices?take=3&page=1' \

--header 'x-api-key: YOUR_PUBLIC_KEY' \
 
         'Content-Type': 'application/json'
`,
    getPricesJs:
        `const options = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer YOUR_SECRET_KEY',
        'Content-Type': 'application/json'
    }
};
fetch('https://api.lazerpay.engineering/api/v1/products/:product_id/prices?take=3&page=1', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    getPrices200:
        `{
    "status": "success",
    "statusCode": 200,
    "data": [
        {
            "id": "69d58386-0b29-449d-9401-57ab11ff7c5d",
            "createdAt": "2022-06-25T17:06:23.531Z",
            "amount": "20.00",
            "pricingType": "standard",
            "currency": {
                "name": "United Emirates Dirham",
                "symbol": "AED"
            },
            "paymentLinks": [
                {
                    "id": "a31b321a-d9cf-4377-bffa-79ffafc3387a",
                    "createdAt": "2022-06-27T08:20:32.705Z",
                    "title": "red silver shit",
                    "slug": "BZa3Suc4",
                    "isActive": true
                },
                {
                    "id": "331162c3-d9cf-4026-9d22-887b8de5f635",
                    "createdAt": "2022-07-06T17:25:37.875Z",
                    "title": "chlorine candy II",
                    "slug": "J6pkthAE",
                    "isActive": true
                },
                {
                    "id": "a29af358-a811-44cd-aab8-8638090434a9",
                    "createdAt": "2022-07-08T18:50:11.315Z",
                    "title": "chlorine candy II",
                    "slug": "G_L9l4Z8",
                    "isActive": true
                },
                {
                    "id": "98ce3ecb-742b-4ded-8420-fee4223cb0a7",
                    "createdAt": "2022-07-08T18:50:19.247Z",
                    "title": "chlorine candy II",
                    "slug": "MDKKrLAC",
                    "isActive": true
                }
            ]
        }
    ],
    "count": 1,
    "currentPage": 1,
    "nextPage": null,
    "prevPage": null,
    "lastPage": 1
}`,
    getPrices400:
        `{
    // Response
}`,
    getLinksByPriceCurl:
        `curl --location --request GET 'https://api.lazerpay.engineering/api/v1/products/:price_id' \

--header 'x-api-key: YOUR_PUBLIC_KEY' \

         'Content-Type': 'application/json'
`,
    getLinksByPriceJs:
        `const options = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer YOUR_SECRET_KEY',
        'Content-Type': 'application/json'
    }
};
fetch('https://api.lazerpay.engineering/api/v1/products/:price_id', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    getLinksByPrice200:
        `{
    "data": [
        {
            "id": "XXX-XX-4bf7-af7f-2cceefcc12bb",
            "createdAt": "2022-06-26T17:30:43.729Z",
            "title": "Candy II",
            "slug": "0B7tKYKB",
            "isActive": true
        },
        {
            "id": "11f0ad05-acd9-XX-99a8-XXXX",
            "createdAt": "2022-06-28T08:34:32.041Z",
            "title": "chlorine candy II",
            "slug": "mEeqzLI3",
            "isActive": true
        }
    ],
    "status": "success",
    "statusCode": 200,
    "message": "Price links fetched successfully"
}`,
    getLinksByPrice400:
        `{
    // Response
}`,
    addPriceCurl:
        `curl --location --request POST 'https://api.lazerpay.engineering/api/v1/products/:id/pricing' \

--header 'Authorization: Bearer YOUR_SECRET_KEY' \

         'Content-Type': 'application/json'

--data-raw '{
    "amount" : 500000,
    "currency": "ngn"
}’`,
    addPriceJs:
        `const options = {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_SECRET_KEY',
        'Content-Type': 'application/json'
    }
    body: JSON.stringify({
        "amount" : 500000,
        "currency": "ngn"
    })
};
fetch('https://api.lazerpay.engineering/api/v1/products/:id/pricing', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    addPrice201:
        `{
    "message": "Price added successfully",
    "statusCode": 201,
    "status": "success",
    "data": {
        "amount": 5000,
        "id": "96688e79-a7b5-4e72-bb67-82bbbfeb6708",
        "createdAt": "2022-07-25T05:23:41.707Z",
        "pricingType": "standard",
        "currency": {
            "name": "United Emirates Dirham",
            "symbol": "AED"
        }
    }
}`,
    addPrice400:
        `{
    // Response
}`,
    deletePriceCurl:
        `curl --location --request DELETE 'https://api.lazerpay.engineering/api/v1/products/:price_id' \

--header 'x-api-key: YOUR_PUBLIC_KEY' \

         'Content-Type': 'application/json'
`,
    deletePriceJs:
        `const options = {
    method: 'DELETE',
    headers: {
        'Authorization': 'Bearer YOUR_SECRET_KEY',
        'Content-Type': 'application/json'
    }
};
fetch('https://api.lazerpay.engineering/api/v1/products/:price_id', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    deletePrice200:
        `{
    "message": "Price deleted successfully",
    "statusCode": 200,
    "status": "success"
}`,
    deletePrice400:
        `{
    // Response
}`,
    deleteProductCurl:
        `curl --location --request DELETE 'https://api.lazerpay.engineering/api/v1/products/:id' \

--header 'x-api-key: YOUR_PUBLIC_KEY' \

         'Content-Type': 'application/json'
`,
    deleteProductJs:
        `const options = {
    method: 'DELETE',
    headers: {
        'Authorization': 'Bearer YOUR_SECRET_KEY',
        'Content-Type': 'application/json'
    }
};
fetch('https://api.lazerpay.engineering/api/v1/products/:id', options)
    .then((response) => response.json())
    .then((result) => console.log('Success', result))`,
    deleteProduct200:
        `{
    "message": "Product deleted successfully",
    "data": "9117c54c-56d6-4ba1-92d3-a92f051c38c1",
    "statusCode": 200,
    "status": "success"
}`,
    deleteProduct400:
        `{
    // Response
}`
}
