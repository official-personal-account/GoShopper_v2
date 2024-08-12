## IN PRODUCTION MODE

1. Turn on fields labeled for "FOR PRODUCTION MODE" & set "shipping price" & "tax price" in:

- cartUtils.js
- calcPrices.js

2. Turn on code with label "For live mode" in:

- webhookHelper.js
- orderController.js

3. Allow & remove "Test User & Product" data to be deleted
   To do: Search "ifelse statement to be removed in deployment" in the below files, to find relevant code to remove

- userController.js
- productController.js

4. Add webhook URL in paystack account.
5. Remove "Test Pay Now" Button in "OrderScreen.jsx".

## IN DEVELOPMENT / TEST MODE

1. Turn on fields labeled for "FOR DEVELOPMENT & TEST MODE" in:

- cartUtils.js
- calcPrices.js

2. Turn on code with label "For test mode" in:

- webhookHelper.js
- orderController.js
