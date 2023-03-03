console.log("Hello world"); //node index

//Declarar variables
var a;
a = 1;
console.log(a);

var myInteger = 1;
var myDouble = 2.1;
var myString = "Pablo";
var myBoolean = true;

myDouble = "petete";

console.log(myDouble);

var userInput = "1";

myDouble = myDouble + parseInt(userInput);

console.log(myDouble);

var a = 1,b=1;

if(a==b){
    console.log("Iguales!");
}else{
    console.log("Distintos!");
}

//Se puede usar " " o ' '
var id="test";
var s = "<body id='"+id+"'>";
s = '<body id="'+id+'">';
s = `<body id="${id}">`;
//Existe tambien esta ` podemos hacerlo asi ${id}

function log(msg){
    console.log(msg);
} //Logear lo que le pases como parámetro

log("Mi fantastico log");

var o = new Object();

o.name = "petete";

o.l = log;

o.l("log del objeto");

var m = new Map();

function log(msg){
    console.log(msg);
}

var numbers =  new Array();

numbers = [1,2,3,4];
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
numbers[3] = 4;

//BUSCAR LA DIFERENCIA
numbers.push(5); //push lo añade al final
numbers.pop(); //Te lo elimina

log(numbers);

//RECORRER LOS ARRAYS
for(var i=0; i<numbers.length; i++){
    log(numbers[i]);
}

/*    
    Es lo mismo 
    
    |
    |
    v 

    */

numbers.forEach(log);



//CALL BACK
/* -> Un call back es una funcion que se pasa como parámetro a otra función */

//PROGRAMACIÓN ASÍNCRONA -> No sabes cuando se va a ejecutar la función

numbers.forEach(function log(msg){
    console.log("v2:"+msg);
});

numbers.forEach(function (msg){
    console.log("v3:"+msg);
});

numbers.forEach((msg) => {
    console.log("v4:"+msg);
});

numbers.forEach(console.log);

numbers.filter((n) =>{
        return n > 2;
     }).forEach(log);

numbers.filter((n) =>{
        return n > 2;
     }).map((n) =>{
        return n + 1;
     }).forEach(log);

var i = numbers
            .filter((n) =>{
                return n > 2;
            }).map((n) =>{
                return n + 1;
            }).reduce((a,n)=>{
                return  n+a;
            });

log(i);

//Cuando termina una sesion add ., git commit, git push

var a = new Array();

a = [1,2,3,4];
a[0] = 1;
a[1] = 2;
a[2] = 3;
a[3] = 4;

a.push(5);
log(a);

a.pop(4);
log(a);