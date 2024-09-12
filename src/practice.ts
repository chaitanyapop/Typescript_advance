class User
{
    email:string
    name:string
    private userId:number
    protected count=0
    readonly city:string="Mumbai" // this is readonly and we cannot change it after being assigned
    constructor(email:string, name:string, userId:number)
    {
        this.email=email,
        this.name=name
        this.userId=userId
    }
    private deleteUserID()
    {
        this.userId=0
    }
    get getUserID():number{
        // some complex logic
        return this.userId // getter always return something therefore it should have the return type mentioned
    }

    set setUserID(value:number){
        this.userId=value // setters do not have the return type
    }

    get deleteUser():void
    {
        this.deleteUserID() // this private method cannot be accessed outside it can be accessed only inisde
        return 
    }
}

class Admin extends User
{
    adminID:number
    constructor(adminID:number, email:string, name:string, userId:number)
    {
        super(email,name,userId)
        this.adminID=adminID
    }
    increment_count()
    {
        this.count=this.count+1 // this is associated with that object only. Now it is an inherited object but by calling a super method
        // all the prototypes and values declared in constrcutor of a super class will get assigned to the inherited class object
    }
}

let user_obj=new User("a@a.a","chai",22)
user_obj.city // I can access these things but I cannot access userId the reason is that it is defined as private and can be accessed 
//only inside the class. We cannot even access them using its object. To get private value or to set some value to it we have getters and setters

/*Now we have seen about private and public. Private can be accessed only inside the class and public can be accessed anywhere.
The another access modifier is protected, in protected the variable can be accessed within the class and can be accessed by the class
which has inherited the parent one */