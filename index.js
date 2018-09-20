//Version 1

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}




function Arrow(type) {

    this.type = type;
    this.returnType = () => this.type // equal = return this.type
}


let arrow = new Arrow("hi arrow type");


let returnCounter = counter => counter++; // get param and return parm +1

let returnCounter2 = (counter, counter2) => { return counter + counter2 };

let returnCounter3 = (counter, counter2) => {

    return counter + counter2;
};

var users = [1, 2, 3, 4, 5, 6, 7];
users.forEach((usr) => {

    console.log(usr);
})


//ex 6
let tax = 1.17;
let calculate = (price = price * tax) => {

    return price * tax;

}


let item = "iPhone";
let price = 2000;

iphoneProduct = {

    item, price, "printItem"() {
        return this;
    }
}



