import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Landing");
  }
  //TODO Modificar HTML AQUI
  async getHtml() {
    return `
        <!--HEADER START-->
        <div class="header">
          <div class="container-fluid">
            <nav class="navbar sticky-top bg-warning navbar-expand-lg navbar-light">
              <div class="logo-clickable nv-bar">
                <a href="landing.html"><img src="../images/logo.png" alt="logo" /></a>
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
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Categorias
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Oculos de Sol</a>
                      <a class="dropdown-item" href="#">Oculos de Gral</a>
                      <a class="dropdown-item" href="#">Oculos de Sol</a>
                      <a class="dropdown-item" href="#">Oculos de Gral</a>
                      <a class="dropdown-item" href="#">Oculos de Sol</a>
                      <a class="dropdown-item" href="#">Oculos de Gral</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
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
                    <a class="nav-link" href="carrinho.html">Carrinho</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="login.html">Entrar</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="signup.html">Cadastro</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <!--HEADER END-->
        <div class="mid-section-wrapper">
          <!--STORE SLIDESHOW -START-->
          <div id="mainPageCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#mainPageCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#mainPageCarousel" data-slide-to="1"></li>
              <li data-target="#mainPageCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="../images/slide1.jpg"
                  alt="Pic1"
                />
              </div>
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="../images/slide2.jpg"
                  alt="Pic2"
                />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="../images/slide3.jpg" alt="Pic3" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#mainPageCarousel"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Anterior</span>
            </a>
            <a
              class="carousel-control-next"
              href="#mainPageCarousel"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Proximo</span>
            </a>
          </div>
          <!--STORE SLIDESHOW END-->
          <!--PRODUCT SHOWCASE START-->
          <div class="container product-block">
            <!--side menu
          <div class="side-menu">
          <div class="menu-left">
              <div class="side-menu-title">
                  Categorias
              </div>
              <div class="categories">
                  <div class="category-clickable">
                      <a href="#">Categoria</a>
                  </div>    
                  <div class="category-clickable">
                      <a href="#">Categoria</a>
                  </div>    
                  <div class="category-clickable">
                      <a href="#">Categoria</a>
                  </div>    
                  <div class="category-clickable">
                      <a href="#">Categoria</a>
                  </div>    
                  <div class="category-clickable">
                      <a href="#">Categoria</a>
                  </div>    
                  <div class="category-clickable">
                      <a href="#">Categoria</a>
                  </div>    
                  <div class="category-clickable">
                      <a href="#">Categoria</a>
                  </div>    
                  <div class="category-clickable">
                      <a href="#">Categoria</a>
                  </div>    
                  <div class="category-clickable">
                      <a href="#">Categoria</a>
                  </div>    
                    </div>
                </div> 
            </div>
            -->
            <!--product list-->
            <div class="container product-area">
              <div class="row">
                
                <div class="col product-frame">
                  <div class="imgbox">
                    <img width="162" height="146" src="../images/oculos1.jpg" alt="productimg">
                  </div>
                  <div class="contentbox">
                    <h3>Product Name</h3>
                    <h2 class="price">$69.99</h2>
                    <a href="#" class="buybtn">Comprar</a>
                  </div>
                </div>
                
                <div class="col product-frame">
                  <div class="imgbox">
                    <img width="162" height="146" src="../images/oculos1.jpg" alt="productimg">
                  </div>
                  <div class="contentbox">
                    <h3>Product Name</h3>
                    <h2 class="price">$69.99</h2>
                    <a href="#" class="buybtn">Comprar</a>
                  </div>
                </div>
                
                <div class="col product-frame">
                  <div class="imgbox">
                    <img width="162" height="146" src="../images/oculos1.jpg" alt="productimg">
                  </div>
                  <div class="contentbox">
                    <h3>Product Name</h3>
                    <h2 class="price">$69.99</h2>
                    <a href="#" class="buybtn">Comprar</a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col product-frame">
                  <div class="imgbox">
                    <img width="162" height="146" src="../images/oculos1.jpg" alt="productimg">
                  </div>
                  <div class="contentbox">
                    <h3>Product Name</h3>
                    <h2 class="price">$69.99</h2>
                    <a href="#" class="buybtn">Comprar</a>
                  </div>
                </div>
                <div class="col product-frame">
                  <div class="imgbox">
                    <img width="162" height="146" src="../images/oculos1.jpg" alt="productimg">
                  </div>
                  <div class="contentbox">
                    <h3>Product Name</h3>
                    <h2 class="price">$69.99</h2>
                    <a href="#" class="buybtn">Comprar</a>
                  </div>
                </div>
                <div class="col product-frame">
                  <div class="imgbox">
                    <img width="162" height="146" src="../images/oculos1.jpg" alt="productimg">
                  </div>
                  <div class="contentbox">
                    <h3>Product Name</h3>
                    <h2 class="price">$69.99</h2>
                    <a href="#" class="buybtn">Comprar</a>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
          <!--PRODUCT SHOWCASE END-->
        </div>
        <!--FOOTER-->
        <div class="footer">
          <div class="footer-content">
            <div class="footer-section about">
              <h1 class="logo">
                <div class="logo-clickable nv-bar">
                  <a href="landing.html"
                    ><img src="../images/logo.png" alt="logo"
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
                <a href="#"><li>Link</li></a>
                <a href="#"><li>Link</li></a>
                <a href="#"><li>Link</li></a>
                <a href="#"><li>Link</li></a>
                <a href="#"><li>Link</li></a>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">&copy; rayboms.com | Designed by Group 10</div>
        </div>
        <!--//FOOTER-->
    
        <!--boostrap jquery and js-->
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
        `;
  }
}
