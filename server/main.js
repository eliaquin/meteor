import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {

    class Person{
        constructor(name, age = 0){
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
            return false; //1er. convierte undefined en bool, el segundo lo hace falso
        }

    }

    let me = new Employee("Eliaquin", 40, 'db admin');
    console.log(me.getGreeting());
    console.log(me.getPersonDescription());

    let me = new Employee("Anny", 32);
    console.log(me.getGreeting());
    console.log(me.getPersonDescription());



});