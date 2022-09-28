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
}`
}
