import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
      super(params);
      this.setTitle("ProductCheckpage");
    }

    async getHtml() {
      return `
      <!--HEADER START-->
      <div class="header">
        <div class="container-fluid">
          <nav class="navbar sticky-top bg-warning navbar-expand-lg navbar-light">
            <div class="logo-clickable nv-bar">
              <a href= "/landing"><img src="static/images/logo.png" alt="logo" /></a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
  
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href= "/#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Categorias
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href= "/product-page">Oculos de Sol</a>
                    <a class="dropdown-item" href= "/product-page">Oculos de Gral</a>
                    <div class="dropdown-divider"></div>
                  </div>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
              </form>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                Buscar
              </button>
              <ul class="navbar-nav mr-auto" id="navbar-items-end">
                <li class="nav-item">
                  <a class="nav-link" href= "/carrinho">Carrinho</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href= "/login">Entrar</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href= "/signup">Cadastro</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <!--HEADER END-->
      
      <!--mid-->
      <div class="mid-section-wrapperflex">
          <div class="check-block">
              <div class="product-frame">
                  <div class="imgbox-inanimate">
                      <img width="200"  src="static/images/oculosnobg.png" alt="productimg">
                  </div>
              </div>
              <div class="infobox">
                  <h3>Oculos Super Top</h3>
                  <div class="quantity-input">
                      Quantidade:
                      <input type="number">
                  </div>
                  <h2>69,99</h2>
                  <a href= "/carrinho" class="buybtn-inanimate">Adicionar ao Carrinho</a>
              </div>
          </div>    
      </div>
     <!--mid-->
      <!--FOOTER-->
      <div class="footer">
          <div class="footer-content">
            <div class="footer-section about">
              <h1 class="logo">
                <div class="logo-clickable nv-bar">
                  <a href= "/landing"
                    ><img src="static/images/logo.png" alt="logo"
                  /></a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </div>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised
                  in the 1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </h1>
            </div>
            <div class="footer-section links">
              <h2>Alguns links</h2><br>
              <ul>
                <a href= "/#"><li>Link</li></a>
                <a href= "/#"><li>Link</li></a>
                <a href= "/#"><li>Link</li></a>
                <a href= "/#"><li>Link</li></a>
                <a href= "/#"><li>Link</li></a>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">&copy; rayboms.com | Designed by Group 10</div>
        </div>
      <!--//FOOTER-->
      `;
    }
 }
