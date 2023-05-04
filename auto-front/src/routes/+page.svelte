<script>

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	
	<div class="row mt-5">
		<div class="col-12">
			<div class="card">
				<div class="card-body">
				  Puede funcinar con solo los campos(Marca,Modelo,precio).
				</div>
			  </div>
		</div>
	</div>
	<div class="row">
		<div class="col-4">
			<div title={null}>Marca</div>
			<input required={false} placeholder="Marca del auto">
		</div>
		<div class="col-4">
			<div title={null}>Modelo</div>
			<input required={false} placeholder="Modelo del auto">
			  
		</div>
		<div class="col-4">
			<div title={null}>Precio</div>
			<input required={false} placeholder="En cuanto lo venden">
		</div>
	</div>

	<div class="row mt-5 mb-4">
		<div class="col">
			<button class="btn btn-primary">Buscar</button>
		</div>
	</div>

	<div class="row">
		<h1>Ford</h1>
		<div class="col-6">
			<img src="https://th.bing.com/th/id/R.8b1e47346acb2b4f76ddb7364770f01a?rik=U%2b%2bvZEKtpmWotA&pid=ImgRaw&r=0" class="img-fluid" alt="...">
		</div>
		<div class="col-6">
			<div class="row">
				<div class="col-6">
					<div class="score-container">
						<div class="score-circle">
						  <div class="score-text">
							<span class="score-number">6</span>/10
						  </div>
						</div>
					  </div>
				</div>
				<div class="col-6">
					
					<div class="cost-container">
						<div class="cost-box">
						  <div class="cost-text">
							<span class="cost-symbol">$</span><span class="cost-number">564</span><span class="cost-decimal">,00</span>
						  </div>
						  <strong>Costo Recomendado</strong>
						</div>
					  </div>
				</div>
			

				  
			</div>
			
			  
			<div class="row">
				<div class="col-sm-6">
				  <h2>Pros:</h2>
				  <ul class="list-unstyled">
					<li>Diseño atractivo y deportivo.</li>
					<li>Interior cómodo y bien equipado con características de seguridad y comodidad.</li>
					<li>Manejo deportivo y capacidad en carretera.</li>
					<li>Gran capacidad de carga.</li>
					<li>Buena economía de combustible para un SUV de su tamaño.</li>
					<li>Historial de seguridad sólido.</li>
				  </ul>
				</div>
				<div class="col-sm-6">
				  <h2>Contras:</h2>
				  <ul class="list-unstyled">
					<li>Problemas reportados con el motor, la transmisión y el sistema eléctrico.</li>
					<li>Problemas de manejo como suspensión dura y mala visibilidad.</li>
					<li>Costosas reparaciones y mantenimiento.</li>
					<li>Rendimiento de combustible inferior a otros SUV en su clase.</li>
					<li>Descontinuado en 2012, lo que puede dificultar la disponibilidad de piezas y servicio de mantenimiento.</li>
				  </ul>
				</div>
			  </div>
		</div>
	</div>

</section>

<style>
	.score-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.score-circle {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.score-circle:before {
  content: "";
  display: block;
  padding-top: 100%;
}

.score-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: #000;
}

.score-number {
  font-size: 60px;
  color: #f76c6c;
}
.cost-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.cost-box {
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  padding: 20px;
}

.cost-text {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #000;
}

.cost-symbol {
  font-size: 40px;
  font-weight: bold;
  color: #f76c6c;
}

.cost-number {
  font-size: 40px;
  font-weight: bold;
  color: #000;
}

.cost-decimal {
  font-size: 20px;
  font-weight: bold;
  color: #000;
}

</style>
