const homePage = {
    render: function () {
        document.getElementById("app").innerHTML = `
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
      `;
        const head = document.getElementsByTagName("head")[0];
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "styles/home.css";
        head.appendChild(link);
    },
};

export default homePage;

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Home</title>
//     </head>
//     <body>
//         <img src="" alt="Home Page Background Image Of A Living Room" />
//         <div>
//             <h1>Interior design,</h1>
//             <h3>unique to you.</h3>
//             <a href="">
//                 <button>What We Do</button>
//             </a>
//         </div>
//     </body>
// </html>
