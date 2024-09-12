function hello<T>(val1:T):number{
    return 2
}

hello<string>("2")

function genericTwo<Type>(val1:Type[]):Type[]
{
    return val1
}

genericTwo<number>([1,2,3,4])

function genericThree<Type1, Type2>(val1:Type1, val2:Type2):[Type1,Type2]
{
    return [val1,val2]
}
genericThree<string,number[]>("hello",[1,2,3])

/*Interface using generics */

interface User_u<T, U>{
    name:T,
    email:U
}

let user_data:User_u<string,string>={
    name:"chaitanya",
    email:"a@a.com"
}
//interface with default types
interface Box<T=string>
{
    name:T
}
let box:Box={
    name:"chai"
}
let box1:Box<number>={
    name:10
} // here we can modify the data type according to our requirement so that a particular interface becomes generic

interface Datacontainer<T>{
    value:T,
    getValue():T
}
function processContainer<T>(container: Datacontainer<T>): T {
    return container.getValue();
}
// const numContainer: Datacontainer<number> = {
//     value: 42,
//     getValue() {
//         return this.value;
//     }
// }
console.log(processContainer<number>({
    value:42,
    getValue(){
        return this.value
    }
}));

// constraints on type
interface Haslength
{
    length:number
}
function length_value<T extends Haslength>(value:T)
{
    return value.length
}
console.log(length_value({length:5}))
console.log(length_value([]))

//class example of generics
// Define a generic interface
interface Repository<T> {
    data: T[];
    getAll(): T[];
    getById(id: number): T | undefined;
    addItem(item: T): void;
  }
  
  // Implement the generic interface in a class
  class UserRepository implements Repository<User> {
    data: User[] = [];
  
    getAll(): User[] {
      return this.data;
    }
  
    getById(id: number): User | undefined {
      return this.data.find(user => user.id === id);
    }
  
    addItem(user: User): void {
      this.data.push(user);
    }
  }
  
  // Define a User type
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Usage example
  const userRepository = new UserRepository();
  
userRepository.addItem({id:12,name:"s",email:"@"}) // the error is coming because above we have declared same variable
  
  console.log(userRepository.getAll());
  // Output: [{ id: 1, name: "John Doe", email: "john@example.com" }, { id: 2, name: "Jane Doe", email: "jane@example.com" }]
  
  console.log(userRepository.getById(1));
  // Output: { id: 1, name: "John Doe", email: "john@example.com" }


  /*
  What is genereics ?
  Generics are basically used to declare classes, functions, interfaces genereic so that one signle entity can be used by multiple instances.
  1)Function example=
  function hello<T>(val1:T):number{
    return 2
}

hello<string>("2")
In above example we have defined a generic function while calling that function we have defined a type string now val1 should be string 
only and it cannot be any other. Now the same function we can use for data types like number, array etc..
.................................................................................................................................

2)Interface example-
interface User_u<T, U>{
    name:T,
    email:U
}

let user_data:User_u<string,string>={
    name:"chaitanya",
    email:"a@a.com"
}
In above example we have defined an interface which has generic types. When user_data wants to use that interface then we are passing
values to it which is string string, there could be any data type number, array, objects, boolean etc...
.............................................................................................................................
One important example on generics-
interface Datacontainer<T>{
    value:T,
    getValue():T
}
function processContainer<T>(container: Datacontainer<T>): T {
    return container.getValue();
}

console.log(processContainer<number>({
    value:42,
    getValue(){
        return this.value
    }
}));
In abpve example we have defined a genereic interface. Now we have created a function called processContainer which accepts a variable
called container and that variable should be a type of "Datacontainer" it means the value which we are going to pass to the function
should follow the structure of "Datacontainer" interface
.....................................................................................................................
Constraint on type
interface Haslength
{
    length:number
}
function length_value<T extends Haslength>(value:T)
{
    return value.length
}
console.log(length_value({length:5}))
console.log(length_value([]))

In above example we have created an interface which has property length and the interface has been extended by the "T"/Type of a function.
What does it mean ? it means, whichever data type we are going to pass to it should have the length proprty inside it.
We have passed an object but inside object we have to put the length property. We have passed an array then in array __proto__ we have
.length() property. So it puts constraint on passing data type value by saying it should have these properties at least.
..........................................................................................................................
generics in classes

interface Repository<T> {
    data: T[];
    getAll(): T[];
    getById(id: number): T | undefined;
    addItem(item: T): void;
  }
  
  // Implement the generic interface in a class
  class UserRepository implements Repository<User> {
    data: User[] = [];
  
    getAll(): User[] {
      return this.data;
    }
  
    getById(id: number): User | undefined {
      return this.data.find(user => user.id === id);
    }
  
    addItem(user: User): void {
      this.data.push(user);
    }
  }
  
  // Define a User type
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Usage example
  const userRepository = new UserRepository();
  
userRepository.addItem({id:12,name:"s",email:"@"}) // the error is coming because above we have declared same variable
  
  console.log(userRepository.getAll());
  // Output: [{ id: 1, name: "John Doe", email: "john@example.com" }, { id: 2, name: "Jane Doe", email: "jane@example.com" }]
  
  console.log(userRepository.getById(1));
  // Output: { id: 1, name: "John Doe", email: "john@example.com" }

  In above example we are telling that the class will implement the interface and to the interface we are passing one more interface as a
  type it means the class should have everything which is there in Repository interface. We have mentioned User as a type for Repository
  interface so that when we want to addItem function to get execute and we want to pass the data then it should follow the User data 
  type tempplate which is User interface created by us

  */
  