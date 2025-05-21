
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import {ajJet} from "./lib/arcjet.js";
import{errorHandler, notFound} from "./middleware/errorHandler.js";
import initUserModel from "../backend/models/UserModel.js"
import {initOrderModel} from "./models/OrderModel.js";
import {initReviewModel} from "./models/ReviewModel.js";
import initProductModel from "./models/ProductModel.js";
import {initOrderItemsModel} from "./models/OrdersItemsModel.js";
import {initShippingAddressModel} from "./models/ShippingAddressModel.js";
import {initPaymentResultModel} from "./models/PaymentResultModel.js";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

// Body Parer Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Security Headers with Helmet
// Helmet is a security middleware that helps you protect your app by setting various HTTP headers
app.use(helmet());

// Logs the request(GET)
app.use(morgan('dev'));

// Cross-Origin Resource Sharing - is a security feature built into web browsers
// that controls how resources on web pages can be requested from another domain.
// Prevent cores middleware in the client
app.use(cors());

app.get("/", (req, res) => {
    res.send("API is currently running ...")
})

// Apply arcjet rate-limit to all the routes
app.use(async  (req, res, next) => {
    try {
        const decision = await ajJet.protect(req, {
            request: 1, // specifies that each request consumes 2 tokens
        });

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                res.status(429).json({error: "Too Many Requests"});
            } else if (decision.reason.isBot()) {
                res.status(403).json({error: "Bot access denied"});
            } else {
                res.status(403).json({error: "Forbidden"});
            }
            return;
        }

        // Check for spoofed bots
        // Spoofing typically involves the use of bad bots to manipulate data,
        // network communications, or other digital elements to disguise the true source of the attack by creating a false identity.
        if (decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())) {
            res.status(403).json({error: "Spoofed bot detected"});
        }
        next();

    } catch (error) {
        console.log("Arcjet error", error);
        next(error);
    }
})

app.use("/api/products", productRoute);

app.use("/api/users", userRoute);

// Connect to Postgres Database by creating a table
// Initialize the usersModel
initUserModel();

// Create the reviewModel table
initReviewModel()

// Initialize productModel table
initProductModel();

// OrdersItem table
initOrderItemsModel();

// PaymentResult table
initPaymentResultModel();

// ShippingAddress table
initShippingAddressModel();

// Initialize the ordersModel
initOrderModel()



    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
})


// Error Handler
app.use(notFound);
app.use(errorHandler);

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));