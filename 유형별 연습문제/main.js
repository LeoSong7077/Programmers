function saySomething(something) {
    return "hi, " + this.name + ". " + something;
}

var person = {name:"kim"};

//bind는 
var g = saySomething.bind(person);

console.log(g("how are you?"));
console.log(saySomething.bind(person)("how are you?")); //이렇게도 된다..
