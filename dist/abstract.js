"use strict";
class user {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    changeAge(name) {
        this.age = 20;
    } // this methoed will be there inside the prototype of child class object
}
class userFunction extends user {
    constructor(name, age, phoneNum) {
        super(name, age);
        this.phoneNumber = phoneNum;
    }
    changeName() {
        this.name = "name changed";
    }
}
/*Now interface and abstract class looks similar. Things which are in abstarct class should be implemented by the class which in inheriting
it. We cannot create the object of an abstarct class. The functionalities or variables mentioned in abstract class should be implemented
by its child class. The main difference in interface and abstarction is that in interface we can only decalre a function but its defination
we cannot write inside the interface but in abstarct class we can create a function with its defination e.g changeAge.

When we create an object of userFunction the new keyword functionality will trigger and all the protoypes of userFunction and the
variables will get attached to that object. Now we have called a super methoed therefore the parent class variables and the
methods which are in parent class prototype that will also get assigned to the object of userFunction*/ 
