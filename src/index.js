import { Router } from "./router.js";

const router = new Router();

router.addRoute("/", () => {
    // Code to render the home page
});

router.addRoute("/about", () => {
    // Code to render the about page
});

router.addRoute("/contact", () => {
    // Code to render the contact page
});

// Start the router
router.init();
