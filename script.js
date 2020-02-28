$(function(){

	$('button').bind('click', function(){

		var altura = $('#altura').val();
		var peso = $('#peso').val();

		altura = altura.replace(',', '.');
		peso = peso.replace(',', '.');

		var imc = peso / (altura * altura);
		if(imc < 16) {
			var traducao = 'Baixo peso muito grave';
		} else if(imc > 16 && imc 16.99) {
			var traducao = 'Baixo peso grave';
		} else if(imc > 17 && imc 18.99) {
			var traducao = 'Baixo peso';
		} else if(imc > 18 && imc 24.99) {
			var traducao = 'Peso normal';
		} else if(imc > 25 && imc 29.99) {
			var traducao = 'Sobrepeso';
		} else if(imc > 30 && imc 30.99) {
			var traducao = 'Obesidade grau I';
		} else if(imc > 35 && imc 39.99) {
			var traducao = 'Obesidade grau II';
		} else if(imc > 40) {
			var traducao ='Obesidade grau III (Obesidade mórbida)';
		}

		$('.resultado').html('SEU IMC É: '+imc+'  kg/m² E SEU STATUS É: ');

	});

});

/*
Baixo peso muito grave = abaixo de 16 kg/m².
Baixo peso grave = entre 16 e 16,99 kg/m².
Baixo peso = entre 17 e 18,49 kg/m².
Peso normal = entre 18,50 e 24,99 kg/m².
Sobrepeso = entre 25 e 29,99 kg/m².
Obesidade grau I = entre 30 e 34,99 kg/m².
Obesidade grau II = entre 35 e 39,99 kg/m².
Obesidade grau III (obesidade mórbida) = maior que 40 kg/m².
*/