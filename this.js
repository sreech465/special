function ram(){
    console.log(this);
}
ram();

const obj = {

    firstName:'chandra',
    age:'25',
    showFirstName(){
        console.log(this.firstName);
    }
}
obj.showFirstName();