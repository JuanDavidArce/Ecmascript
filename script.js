function newFunction(name,age,country)
{
    var name= name || 'oscar';
    var age = age || 32;
    var country = country || "MX";
    console.log(name,age,country);
};

// es6

function newFunction2(name='oscar',age=32,country='MX')
{
    console.log(name,age,country);
};

newFunction2();
newFunction2('Ricardo','23','CO');

let hello ='Hello';
let world ='World';
let epicPhrase = hello +" "+ world;
console.log(epicPhrase);

// Templates literals
let epicPhrase2=`${hello} ${world}`;
console.log(epicPhrase2);

let lorem= 'quiero escribir una frase epica \n'
+ 'otra frase epica que necesitamos'

// es6
let lorem2=`otra frase epica que necesitamos
ahora es otra frase epica
`;
console.log(lorem);
console.log(lorem2);

let person = 
{
    'name':'oscar',
    'age':32,
    'country':'MX'
};

console.log(person.name,person.age);

let {name,age} = person;
console.log(name,age);

let team1= ['Oscar','Julian','Ricardo'];
let team2= ['Valeria','Yesica','Camila'];

let education = ['David',...team1,...team2];

console.log(education);


{
    var globalVar ='GlobalVar';
}

{
    let globalLet='GlobalLet';
    console.log(globalLet);
}
// Let : Local Scope
// Var : Global Scope


console.log(globalVar);


const a = "b";
a='a'; // We can't do this because a is a constant

