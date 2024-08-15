const pessoa = {
    primeiroNome:'Nicole',
    sobrenome:'Cau',
    idade:'16',
    corOlho: 'verde',
    altura: 169,
    dataNascimento: '12/03/2008',
    usaOculos: false,
    corPele:'branca',
    corFavorita:'rosa',
    sexo:'feminino',
};

//Primeira frase
console.log(" 1 - A " + pessoa.primeiroNome + " " + pessoa.sobrenome + " tem " + pessoa.idade + " anos! ");

//Alterar um objeto
pessoa.sobrenome = 'Cau Noronha';


//Segunda frase
console.log(" 2 - A " + pessoa.primeiroNome + " " + pessoa.sobrenome + " tem " + pessoa.idade + " anos! ");