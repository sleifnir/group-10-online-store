//Importação das páginas(views)
import Landing from "./views/Landing.js";
import Login from "./views/Login.js";
import Admin from "./views/Admin.js";
import Carrinho from "./views/Carrinho.js";
import ProductPage from "./views/ProductPage.js";
import Signup from "./views/Signup.js";
import ProductCheckpage from "./views/ProductCheckpage.js";
import Venda from "./views/Venda.js";


const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

//Verifica se as rotas estão de acordo com a view correta
const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};
//Navegador da aplicação
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
//Definição das rotas
const router = async () => {
  const routes = [
    { path: "/", view: Landing },
    { path: "/login", view: Login },
    { path: "/admin", view: Admin },
    { path: "/carrinho", view: Carrinho },
    { path: "/product-page", view: ProductPage },
    { path: "/signup", view: Signup },
    { path: "/venda", view: Venda },
    { path: "/product-checkpage", view: ProductCheckpage }
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

//Evento de click para navegar pelas rotas
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
