## IN PRODUCTION MODE

1. Turn on fields labeled for "FOR LIVE USE" in:

- cartUtils.js
- calcPrices.js

2. Turn on code with label "For live mode" in:

- webhookHelper.js
- orderController.js

3. Allow initial user data & product data to be deleted: Search "ifelse statement to be removed in deployment" in the below files, to find relevant code to remove.

- userController.js
- productController.js

4. Set up webhook in paystack.

## IN DEVELOPMENT / TEST MODE

1. Turn on fields labeled for "FOR LIVE TEST USE" in:

- cartUtils.js
- calcPrices.js

2. Turn on code with label "For test mode" in:

- webhookHelper.js
- orderController.js
