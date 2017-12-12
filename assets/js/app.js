$(document).ready(function(){
	var imgItems = $('.slider li').length; //número de slides
	var imgPos = 1;

	//agregando paginación
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span><i class="fa fa-circle" aria-hidden="true"></i></span></li>');
	}

	$('.slider li').hide(); // ocultamos todos los slides
	$('.slider li:first').show(); // mostramos el primer slide
	$('.pagination li:first').css({'color':'#CD6E2E'}); // damos estilos al primer item de la paginación

	// Ejecutamos todas la funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

	setInterval(function(){
		nextSlider();
	}, 4000)

	// FUNCIONES =====================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // posición de la paginación seleccionada

		$('.slider li').hide(); // ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); //mostramos el slide seleccionado

		// Dandole estilos a la paginación seleccionada
		$('.pagination li').css({'color':'#858585'});
		$(this).css({'color':'#CD6E2E'});

		imgPos = paginationPos;
	}

	function nextSlider(){
		if(imgPos >= imgItems){
			imgPos = 1;
		} else {
			imgPos++;
		}

		$('.pagination li').css({'color':'#858585'});
		$('.pagination li:nth-child('+ imgPos +')').css({'color':'#CD6E2E'});


		$('.slider li').hide(); // ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); //mostramos el slide seleccionado
	}

	function prevSlider(){
		if(imgPos <= 1){
			imgPos = imgItems;
		} else {
			imgPos--;
		}

		$('.pagination li').css({'color':'#858585'});
		$('.pagination li:nth-child('+ imgPos +')').css({'color':'#CD6E2E'});


		$('.slider li').hide(); // ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); //mostramos el slide seleccionado
	}


});