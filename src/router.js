class Router {
    constructor(routes) {
        this.routes = routes;
        this._loadInitialRoute();
    }

    navigate(pathname) {
        const newPathname = pathname || "/";
        history.pushState(null, null, newPathname);
        this.route(newPathname);
    }

    route(pathname) {
        const routeName = this.routes[pathname];
        if (!routeName) {
            this._404();
            return;
        }

        fetch(`/${routeName}.html`)
            .then((response) => response.text())
            .then((html) => {
                const appElement = document.getElementById("app");
                appElement.innerHTML = html;
            })
            .catch((error) => console.error(error));
    }
}

// import homePage from "./pages/home.js";
// import aboutPage from "./pages/about.js";
// import servicesPage from "./pages/services.js";
// import projectsPage from "./pages/projects.js";
// import contactPage from "./pages/contact.js";

// class Router {
//     constructor() {
//         this.routes = {
//             "/": homePage,
//             "/about": aboutPage,
//             "/services": servicesPage,
//             "/projects": projectsPage,
//             "/contact": contactPage,
//         };
//         window.addEventListener("popstate", this.router.bind(this));
//         document.addEventListener("DOMContentLoaded", this.router.bind(this));
//     }

//     router() {
//         const path = window.location.pathname;
//         const page = this.routes[path];
//         if (page) {
//             document.getElementById("app").innerHTML = `
//           <h1>${page}</h1>
//           <p>Welcome to the ${page} page!</p>
//         `;
//         } else {
//             document.getElementById("app").innerHTML = `
//           <h1>404 Not Found</h1>
//           <p>The requested URL ${path} was not found on this server.</p>
//         `;
//         }
//     }
// }

// export default Router;
