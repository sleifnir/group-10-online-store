import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Signup");
  }

  async getHtml() {
    return `
        <!--HEADER START-->
        <div class="header">
         <div class="container-fluid">
           <nav class="navbar sticky-top bg-warning navbar-expand-lg navbar-light">
             <div class="logo-clickable nv-bar">
               <a href="landing.html"><img src="../images/logo.png" alt="logo"></a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
               </button>
             </div>  
             
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                 <li class="nav-item dropdown">
                   <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                 <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search">
               </form>
               <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
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
         <div class="login">
             <div class="form-wrapper">
                 <form>
                     <div class="mb-3">
                       <label for="exampleInputName" class="form-label">Nome</label>
                       <input type="text" class="form-control" id="exampleInputName">
                     </div>
                     <div class="mb-3">
                       <label for="exampleInputTelephone" class="form-label">Telefone</label>
                       <input type="text" class="form-control" id="exampleInputTelephone">
                     </div>
                     <div class="mb-3">
                       <label for="exampleInputAdress" class="form-label">Endereço</label>
                       <input type="text" class="form-control" id="exampleInputAdress">
                     </div>
                     <div class="mb-3">
                       <label for="exampleInputEmail1" class="form-label">Email</label>
                       <input type="email" class="form-control" id="exampleInputEmail1">
                     </div>
                     <div class="mb-3">
                       <label for="exampleInputPassword1" class="form-label">Senha</label>
                       <input type="password" class="form-control" id="exampleInputPassword1">
                     </div>
                     <button type="submit" class="btn btn-primary">Entrar</button>
                   </form>
             </div>
     
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
