var peso, altura, imc, resultado;

function calcular(event){
event.preventDefault();

peso =document.getElementById('peso').value;
altura =document.getElementById('altura').value;

imc = peso/(altura*altura)

    if(imc <= 17){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2)+ '<br/> Cuidado seu peso está muito abaixo!!';
    }else if (imc > 17 && imc <=25){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2)+ '<br/> você está abaixo do peso!';
    }else if (imc > 25 && imc <=30){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2)+ '<br/> você está no peso ideal';
    }else if (imc > 30 && imc <=35){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2)+ '<br/> sobre peso';
    }else if (imc > 35){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2)+ '<br/> você está com obesidade! se cuide'
    }

document.getElementById('peso').value='';
document.getElementById('altura').value='';

}
