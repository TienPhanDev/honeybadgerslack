## HoneyBadgerDontCare
Run commands to deploy endpoint

1 - `git clone`

2 - `npm install`

3 - `npm start`

use commands below to test sending a POST requests 

`curl -X POST -H "Content-Type: application/json" -d '{
      "RecordType": "Bounce",
      "Type": "SpamNotification",
      "TypeCode": 512,
      "Name": "Spam notification",
      "Tag": "",
      "MessageStream": "outbound",
      "Description": "The message was delivered, but was either blocked by the user, or classified as spam, bulk mail, or had rejected content.",
      "Email": "zaphod@example.com",
      "From": "notifications@honeybadger.io",
      "BouncedAt": "2023-02-27T21:41:30Z"
    }' http://localhost:3000/payloads`

## ------------------------------------------

`curl -X POST -H "Content-Type: application/json" -d '{
      "RecordType": "Bounce",
      "MessageStream": "outbound",
      "Type": "HardBounce",
      "TypeCode": 1,
      "Name": "Hard bounce",
      "Tag": "Test",
      "Description": "The server was unable to deliver your message (ex: unknown user, mailbox not found).",
      "Email": "arthur@example.com",
      "From": "notifications@honeybadger.io",
      "BouncedAt": "2019-11-05T16:33:54.9070259Z"
    }' http://localhost:3000/payloads`

see JSON requests at `https://my-json-server.typicode.com/tienphandev/honeybadgerslack/payloads`