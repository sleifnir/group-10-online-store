import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Venda");
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
   <div class="mid-section-wrapper">

     <!--PERFIL-START-->
     <div class="client">
       <div class="infos">
         <dl>
           <dt>Cliente: <span class="nome">Regina Phalange</span></dt><br>
           <dt>ID: <span class="id">123</span></dt><br>
           <dt>Endereço: <span class="endereco">Rua A, 12</span></dt><br>
           <dt>Telefone: <span class="telefone">31 1231 1231</span></dt><br>
           <dt>E-mail: <span class="email"></span>regina@gmail.com</dt><br>
           </dl>
         </div>

       <div id="foto">
         <img src="static/images/slide4.jpeg" alt="oculos">
       </div>
     </div>
     <!--PERFIL END-->
     <div class="titulo">
           Carrinho:
       </div>
     <!--PRODUCT SHOWCASE START-->
     <div class="container product-block">
       <!--product list-->
       
       <div class="container product-area">
         <div class="row">
           
           <div class="col product-frame">
             <div class="imgbox">
               <img width="162" height="146" src="static/images/oculos1.jpg" alt="productimg">
             </div>
             <div class="contentbox">
               <h3>Product Name</h3>
               <h2 class="price">$69.99</h2>
               <a href= "/#" class="buybtn">Comprar</a>
             </div>
           </div>
           
           <div class="col product-frame">
             <div class="imgbox">
               <img width="162" height="146" src="static/images/oculos1.jpg" alt="productimg">
             </div>
             <div class="contentbox">
               <h3>Product Name</h3>
               <h2 class="price">$69.99</h2>
               <a href= "/#" class="buybtn">Comprar</a>
             </div>
           </div>
           
           <div class="col product-frame">
             <div class="imgbox">
               <img width="162" height="146" src="static/images/oculos1.jpg" alt="productimg">
             </div>
             <div class="contentbox">
               <h3>Product Name</h3>
               <h2 class="price">$69.99</h2>
               <a href= "/#" class="buybtn">Comprar</a>
             </div>
           </div>
         </div>
         <div class="row">
           <div class="col product-frame">
             <div class="imgbox">
               <img width="162" height="146" src="static/images/oculos1.jpg" alt="productimg">
             </div>
             <div class="contentbox">
               <h3>Product Name</h3>
               <h2 class="price">$69.99</h2>
               <a href= "/#" class="buybtn">Comprar</a>
             </div>
           </div>
           <div class="col product-frame">
             <div class="imgbox">
               <img width="162" height="146" src="static/images/oculos1.jpg" alt="productimg">
             </div>
             <div class="contentbox">
               <h3>Product Name</h3>
               <h2 class="price">$69.99</h2>
               <a href= "/#" class="buybtn">Comprar</a>
             </div>
           </div>
           <div class="col product-frame">
             <div class="imgbox">
               <img width="162" height="146" src="static/images/oculos1.jpg" alt="productimg">
             </div>
             <div class="contentbox">
               <h3>Product Name</h3>
               <h2 class="price">$69.99</h2>
               <a href= "/#" class="buybtn">Comprar</a>
             </div>
           </div>
         </div>
        
       </div>
     </div>
     <!--PRODUCT SHOWCASE END-->
   
   <div class="titulo">Preço total a pagar: <span class="preco_total">599,00</span></div>

   <div class="admin-cadastro">
   <div class="cadastro">
       <div class="form">
       <form>
         <div class="cartao">
           <label>N° cartão:</label><br>
           <input type="number" id="cartao" required>
         </div>
         <br>
         <div class="vencimento">
           <label>Vencimento:</label><br>
           <input type="date" id="data" min="2000-01-01" required>
         </div>
         <br>
                 <div class="codigo">
           <label>Código:</label><br>
           <input type="number" id="codigo" required>
         </div>
         <br>
         <div class="parcelas">
           <label>Parcelas:</label><br>
           <select id="parcelas">
             <option id="1x">1x</option>
             <option id="2x">2x</option>
             <option id="3x">3x</option>
             <option id="4x">4x</option>
                   </select>
         </div>
         <br>
         <div class="cpf">
           <label>CPF:</label><br>
           <input type="number" id="cpf" required>
         </div>
         <br>

         <button type="submit" onclick="document.location='#'" class="btn btn-primary">
           Comprar
         </button>
       </form>
     </div>
     </div>
   </div>
 </div>
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
