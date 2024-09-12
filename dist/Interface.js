"use strict";
class instagram {
    constructor(photo, userID) {
        this.reels = [10, 20, 30, 40];
        this.photo = photo;
        this.userID = userID;
    }
    deleteUser(userID) {
        return "";
    }
}
/*What does this mean ?
Now I have created an interface and whichever class is implementing that interface then that class should have all the properties which
are mentioned inside the interface. We can create extra properties but less than that are not allowed.

One class can implement multiple interfaces as well e.g class instagram implements social_media, chat, ...*/ 
