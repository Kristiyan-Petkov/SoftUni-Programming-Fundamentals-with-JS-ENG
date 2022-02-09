function cats(array){
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.meow = function(){
               console.log(`${name}, age ${age} says Meow`); 
            };
        }
        
    }
    for (let position of array){
        let positionAsArray = position.split(' ');
        let name = positionAsArray[0];
        let age = Number (positionAsArray[1]);
        let cat = new Cat (name, age)
        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5'])