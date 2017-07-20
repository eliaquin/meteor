import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {

    class Person{
        constructor(name = "Anónimo", age = 0){
            this.name = name;
            this.age = age;
        }

        getGreeting(){
            return `Hi! I am ${this.name}`;
        }

        getPersonDescription(){
            return `${this.name} is ${this.age} years old`;
        }

    }

    class Employee extends Person{
        constructor(name, age, title){
            super(name, age);//Llama al padre
            this.title = title;
        }
        hasJob(){
            return !!this.title; //1er. convierte undefined en bool, el segundo lo hace falso
        }

        getGreeting(){
            if(this.title){
                return `Hi! i am ${this.name}. I work as a ${this.title}.`
            } else{
                return super.getGreeting();
            }
        }

    }

    class Programmer extends Person{
        constructor(name, age, preferredLanguage = "C#"){
            super(name, age);
            this.preferredLanguage = preferredLanguage;
        }

        getGreeting(){
            if(this.preferredLanguage){
                return `Hola. Me llamo ${this.name} y soy programador ${this.preferredLanguage}`;
            } else{
                return super.getGreeting();
            }
        }
    }
    let prog = new Programmer("Eliaquín", 40, "React");
    console.log(prog.getGreeting());
});