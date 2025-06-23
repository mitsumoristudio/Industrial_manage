# Industrials Construction Project Management 

The Digital Blueprint for project succcess. Reduce complication by simplify book keeping of construction projects.

Built for onsite Superintendent and Project Manager. Onsite Project Management Platform.

<a ><img src="https://github.com/mitsumoristudio/Industrial_manage/blob/main/cover.png" width= "1080" height = "600" /></a>

### Link

https://www.nashindustrials.org

Built with React, Postgres, Node Js, Express & Redux. This is the capstone project I intentionally wanted to create and visualize without using MS excel. This eventually boiled down to learning the fundamental of Swift and developing iOS app and dabbling into web development with Javascript.

## Key Features

- Project creation and desccription, scope, work
- Start project from scratch or edit ongoing construction
- Set and Visualize project goals and contacts
- Build better relationship with clients on future projects
- Team Assignment & Roles (Add users, define roles)
- Document Sharing and attachments - Upload images associated with project
- Project Pagination
- Clients contacted generated with associated project
- Project Search Features
- Authentication enabled with admin functionality
- Admin project management function
- Admin authenticated user management
- Authentication with JSON web token and caching user data
- Security, React testing

## Tech stack for this project

Front-End Development

- Languages: [JavaScript (ES6+), HTML5, CSS3]
- Frameworks/Libraries: [React.js]
- Styling: [Tailwind CSS]
- State Management: [Redux Tool Kit]
- Build Tools: [Webpack]

Back-End Development

- Languages: [Node.js]
- Frameworks: [Express.js]
- APIs: [RESTful APIs]
- Authentication: [JWT (JSON WEB TOKEN)]

Database

- POSTGRES: [NeonDB] - Raw SQL, NO ORM
- Version Control: [Github]
- Deployment: [Render]
- Testing: Cypress for End-to-End Testing
- Postman: Tesing API routes and logistics
- More Testing: ArcJet for prevention of SQL injection, Rate Limiting, Bot Detection, XSS, CSRF attacks.

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```
