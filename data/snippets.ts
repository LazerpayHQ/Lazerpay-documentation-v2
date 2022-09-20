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

    acceptPaymentsJS:
    `<script>
        https: //cdn.jsdelivr.net/gh/LazerPay-Finance/checkout-build@main/checkout@1.0.1/dist/index.min.js
    </script>

    <script>
    const paymentForm = document.getElementById('paymentForm');
    
    paymentForm.addEventListener("submit", payWithLazerpay, false);

    function payWithLazerpay(e){
        e.preventDefault();
        LazerCheckout({
            reference: 'W6b8hV55l0435t3545435',
            name: document.querySelector("#name").value,
            email: document.querySelector("#email-address").value,
            amount: document.querySelector("#amount").value,
            key: "pk_test_xG0EjfzUsGIUDpMeQKZFItGFEBtR5SzHzsqwrzlsdADVzPrjZb",
            currency: "USD",
            acceptPartialPayment: true // By default it's false
            onClose: (data)=>{
            },
            onSuccess: (data)=>{
            },
            onError: (data)=>{
            },
        },
    },
    </script>`,

    // for accept payment page
    cRULSnippet:
`curl --location --request POST 'https://api.lazerpay.engineering/api/v1/transaction/initialize' \
--header 'x-api-key: YOUR_PUBLIC_KEY' \
--data-raw '{
--data-raw '{
    "customer_name": "Abdulfatai Suleiman",
    "customer_email": "static@gmail.com",
    "currency": "USD",
    "coin": "USDT",
    "amount": "10",
    accept_partial_payment:"true"
}’`,

// for crypto payment page
    cRULSnippet2:
    `curl --location --request POST 'https://api.lazerpay.engineering/api/v1/transfer' \
    --header 'x-api-key: YOUR_SECRET_KEY' \
    --data-raw '{
        "amount": "1",
        "recipent": "0x0B4d358D349809037003F96A3593ff9015E89efA",
        "coin": "USDT",
        "blockchain": "Binance Smart Chain",
        }’
    `,
// response code for accept payment page
    resCode201:
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
}
}`,

    resCode401:
`{
    "statusCode": 401,
    "message": "Unsupported request, Please read our API documentation",
    "status": "error"
}`,

// response code for crypto payments

cryptResCode400:
`{
    "message": "Insufficient funds, check your balance and try again",
    "statusCode": 400,
    "status": "error"
}`,
cryptResCode200:
`{
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
}`,

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
}`,


    cryptoTransferSample3:

`const Lazerpay = require('lazerpay-node-sdk');

const lazerpay = new Lazerpay(LAZER_PUBLIC_KEY, LAZER_SECRET_KEY);

const crypto_payout_tx = async () => {
  const transaction_payload = {
      amount: 1,
      recipient: '0x0B4d358D349809037003F96A3593ff9015E89efA', // address must be a bep20 address
      coin: 'BUSD',
      blockchain:’Binance Smart Chain’
  };
  try {
      const response = await lazer.Payout.transferCrypto(transaction_payload);
      console.log(response.error);
  }   catch (e) {
      } catch (e) {
      console.log(e);
      }
  };
`,
    webHookPayload:
        `{
    "id": "183f0a97-9de8-4cdc-b130-e8dd5f06caf4",
    "reference": "3H1WTK8k8PC78p6TWEbKptT",
    "senderAddress": "0x8aFDD7Ee323E98adcB59445AE49118673950Ff19",
    "recipientAddress": "0x0B4d358D349809037003F96A3593ff9015E89efA",
    "actualAmount": 100,
    "amountPaid": 100,
    "amountReceived": 100,
    "coin": "USDT",
    "hash": "0xa3ef6266d29c096eb824112fcb32a90d42276bb1c94f88790f3d47a80992a9d8,
    "blockNumber": 19767423,
    "type": "withdrawal",
    "status": "confirmed",
    "network": "mainnet",
    "blockchain": "Binance Smart Chain",
    "status": "confirmed",
    "network": "mainnet",
    "blockchain": "Binance Smart Chain",
    "metadata": {} ,
    "createdAt": "2022-05-30T20:22:54.674Z",
    "updatedAt": "2022-05-30T20:22:54.674Z",
    "feeInCrypto": 0,
    "webhookType": "CRYPTO_TRANSFER"
}`,

    webHookPayload2:
`var crypto = require('crypto');
"var secret = process.env.SECRET_KEY;
// Using Express
app.post("/my/webhook/url", function(req, res) {

  //validate event
  var hash = crypto.createHmac('sha256', secret).update(JSON.stringify(req.body), 'utf8').digest('hex');

  if (hash == req.headers['x-lazerpay-signature']) {
  // Retrieve the request's body
  var event = req.body;
  var event = req.body;
  }
  res.send(200);
  });
`,

  webHookPayload3: `      {
  "id": "378b53b2-28fd-4cbd-8fe1-6786d251b7d4",
  "reference": "MBnOcItpOaP0wkBWzx",,
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
}
`,

  webhookpayload4: 
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
      });`,
};
