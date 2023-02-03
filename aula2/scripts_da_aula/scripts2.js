//setInterval = tempo infinitamente
/*var timer = setInterval(()=>{
    document.write('Executando...<br/>');
}, 1000);*/

/*setTimeout(()=> {
    document.write('Bem-vindo seus lindos...');
}, 1500);*/

//var = consigo ter acesso de forma global
//let = não conseguir puxar e mudar(escopo)
//const = após criar não consigo mudar(conteúdo)

//objetos

let pessoa = {
    nome: 'Péricles',
    idade: '20',
    altura: '1,75',
    cargo: 'fullstack'
};

//apenas ter acesso alguns itens

let carro={
    nome:'onix',
    potencia:'70cv',
    cor: 'preto'
};

//objeto dentro de listas

let usuarios=[
    {nome:'icaro', cargo: 'Programador', status: 'ativo'},
    {nome:'Maria', cargo: 'Gerente', status: 'ativo'},
    {nome:'João', cargo: 'Secretário', status: 'não ativo'}
]

//template

let nome= 'Péricles'
let sobrenome= 'Feitoza'
let idade = '20'

let mensagem = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos de idade`;
console.log(mensagem);
