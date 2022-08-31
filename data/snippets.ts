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

    webHookPayload3:
        `      {
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
        });

`,

}
