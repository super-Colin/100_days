// 1/25/2020
// praticing some more typescript

// https://levelup.gitconnected.com/typescript-object-oriented-concepts-in-a-nutshell-cb2fdeeffe6e


class Animal{
    age: number
    breed: string

    constructor(age: number, breed: string) {
        this.age = age;
        this.breed = breed;
    }

    getRelativeAge(): number {
        return this.age * 7;
    }

}

class Dog extends Animal{
    // accesing a static property through a created object will throw an error
    // public static genus: string = 'Canis';
    public genus: string = 'Canis';
    public playsFetch: boolean;

    constructor(age,breed,playsFetch){
        super(age,breed);
        this.playsFetch = playsFetch;
    }


}

let chewy = new Dog( 7 , 'Pyreneese', false);
 
let dogArray = [
    new Dog(7, 'Pyreneese', false), new Dog(2, 'Mutt', true)
];

console.log('static call: ' + Dog.genus);
console.log(chewy.getRelativeAge(), chewy.genus, chewy.playsFetch);
console.log(dogArray[1].getRelativeAge(), dogArray[1].genus, dogArray[1].playsFetch);