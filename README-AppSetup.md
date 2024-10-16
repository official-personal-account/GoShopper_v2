## IN PRODUCTION MODE

1. 8. Create a copy of Proshopper for client in github
2. Turn on fields labeled for "FOR PRODUCTION MODE" & set "shipping price" & "tax price" in:

- cartUtils.js
- calcPrices.js

3. Turn on code with label "For live mode" in:

- webhookHelper.js
- orderController.js

4. Allow & remove "Test User & Product" data to be deleted
   To do: Search "ifelse statement to be removed in deployment" in the below files, to find relevant code to remove

- userController.js
- productController.js

5. Add webhook URL in paystack account.

6. Remove from OrderScreen.jsx:

- "Test Pay Now" button
- "Use test pay button..." notice

7. Change WhatsApp contact in "LoginScreen.jsx" file to that of client

8. Create database for client in my account

9. Create a render account for client

10. Change Logo & favicon

11. manifest.json original icons:
    {
    "src": "favicon.ico",
    "sizes": "64x64 32x32 24x24 16x16",
    "type": "image/x-icon"
    },
    {
    "src": "logo192.png",
    "type": "image/png",
    "sizes": "192x192"
    },
    {
    "src": "logo512.png",
    "type": "image/png",
    "sizes": "512x512"
    },

## IN DEVELOPMENT / TEST MODE

1. Turn on fields labeled for "FOR DEVELOPMENT & TEST MODE" in:

- cartUtils.js
- calcPrices.js

2. Turn on code with label "For test mode" in:

- webhookHelper.js
- orderController.js
