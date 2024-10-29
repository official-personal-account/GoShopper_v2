## IN PRODUCTION MODE

1. Create a copy of Proshopper for client in github
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

11. Make changes to these files in /public:

- manifest.json
- index.html

TO NOTE:

- Each client should be treated as a new project with its own dedicated database on free module.

Useful definitions:

- Storage - database size,
- RAM - temporary storage for resources (data) currently in use. E.g. when you call orderlist, data currently in use would be list of all orders &
- vCPU (virtual Central Processing Unit) - processes the commands to the database to fetch required data

---

## IN DEVELOPMENT / TEST MODE

1. Turn on fields labeled for "FOR DEVELOPMENT & TEST MODE" in:

- cartUtils.js
- calcPrices.js

2. Turn on code with label "For test mode" in:

- webhookHelper.js
- orderController.js
