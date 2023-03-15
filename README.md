## Node.js folder structure for a RESTful API:

├── app
│   ├── controllers
│   │   ├── userController.js
│   │   └── authController.js
│   ├── models
│   │   ├── user.js
│   │   └── token.js
│   ├── routes
│   │   ├── userRoutes.js
│   │   ├── authRoutes.js
│   │   └── index.js
│   └── utils
│       ├── errorHandlers.js
│       ├── auth.js
│       └── validators.js
├── config
│   ├── database.js
│   └── server.js
├── tests
│   ├── controllers
│   │   ├── userController.test.js
│   │   └── authController.test.js
│   ├── models
│   │   ├── user.test.js
│   │   └── token.test.js
│   └── utils
│       ├── errorHandlers.test.js
│       ├── auth.test.js
│       └── validators.test.js
├── .env
├── .gitignore
├── package.json
└── server.js


## Best practices for building nodejs RESTful application
- 1 Use middleware for common functionality: Middleware functions can be used to perform common tasks like logging, authentication, and input validation. Middleware functions are executed in the order they are defined in the middleware stack, which can be controlled using the app.use() function. Here is an example of using middleware for logging:

- 2 Use environment variables for configuration: Storing configuration settings in environment variables is a best practice as it allows you to easily change configuration settings without modifying your code. 

- 3 Use HTTP status codes correctly: HTTP status codes provide information about the result of an API request. Use the appropriate HTTP status code to indicate the result of the request

- 4 Validate request body with  joi or express-validator

- 5 Use async/await for asynchronous operations: Node.js APIs often involve asynchronous operations like accessing a database or making an HTTP request. Use async/await to handle these operations in a non-blocking manner.

