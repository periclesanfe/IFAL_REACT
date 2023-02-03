//trabalhando com DATAS

var data = new Date(); //chamando a data do meu computador

//manupular variaveis de datas precisas
data.getHours();
data.getMinutes();
data.getSeconds();
data.getDay();

//escolher uma data específica
var novadata = new Date('march 10, 2032');

//conversão de datas em alguma coisa
Date.parse(novadata); //Milisegundos

//formatção de datas
novadata.getDate() + '/' + (novadata.getMonth()+1 + '/' + novadata.getUTCFullYear())

var dias = ['domingo', "segunda",'terça', 'quarta', 'quinta', 'sexta', 'sábado']
dias[novadata.getDay()]