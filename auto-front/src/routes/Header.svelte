<script>
	import { page } from "$app/stores";
	import logo from "$lib/images/svelte-logo.svg";
	import github from "$lib/images/github.svg";
</script>

<header>
	<nav class="navbar bg-body-tertiary fixed-top navbarprincipal">
		<div class="container-fluid">
		  <a class="navbar-brand" href="#">EsbuenAuto</a>
		  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
			<div class="offcanvas-header">
			  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">EsbuenAuto</h5>
			  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body">
			  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
				<li class="nav-item">
				  <a class="nav-link active" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" href="/login">login</a>
				</li>
				<li class="nav-item dropdown">
				  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Mas..
				  </a>
				  <ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Donde tener mas informacion</a></li>
					<li><a class="dropdown-item" href="#">Contribuir</a></li>
					<li>
					  <hr class="dropdown-divider">
					</li>
					<li><a class="dropdown-item" href="#">Terminos y condiciones del uso</a></li>
				  </ul>
				</li>
			  </ul>
			  <form class="d-flex mt-3" role="search">
				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success" type="submit">Search</button>
			  </form>
			</div>
		  </div>
		</div>
	  </nav>
</header>

<style>
	
.navbarprincipal{
	background-color: #dbeaf06c !important;
}
</style>
