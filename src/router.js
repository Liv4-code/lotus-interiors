class Router {
    constructor() {
        this.routes = {
            "/": "home",
            "/about": "about",
            "/contact": "contact",
        };
        window.addEventListener("popstate", this.router.bind(this));
        document.addEventListener("DOMContentLoaded", this.router.bind(this));
    }

    router() {
        const path = window.location.pathname;
        const page = this.routes[path];
        if (page) {
            document.getElementById("app").innerHTML = `
          <h1>${page}</h1>
          <p>Welcome to the ${page} page!</p>
        `;
        } else {
            document.getElementById("app").innerHTML = `
          <h1>404 Not Found</h1>
          <p>The requested URL ${path} was not found on this server.</p>
        `;
        }
    }
}

export default Router;
