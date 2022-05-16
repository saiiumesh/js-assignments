//1st 

var Rectangle = function(width,height) 
{
    this.width = width;
    this.height = height;
    this.area = function()
    {
        console.log("Area of the Rectangle is : " +this.width * this.height);
    }
} 

var myRect1 = new Rectangle(15,25); 
var myRect2 = new Rectangle(20,30);
var myRect3 = new Rectangle(45,65);
var myRect4 = new Rectangle(25,50);

console.log(myRect1.width); 
console.log(myRect1.height);
myRect1.area();


console.log(myRect2.width); 
console.log(myRect2.height);
myRect2.area();

console.log(myRect3.width); 
console.log(myRect3.height);
myRect3.area();

console.log(myRect4.width); 
console.log(myRect4.height);
myRect4.area();





//2nd
Rectangle.prototype.getArea = function()
{
    console.log("Getting Area using prototype property : " +this.width * this.height);
}

console.log(Rectangle.prototype);
myRect1.getArea(); 
myRect2.getArea();
myRect3.getArea();
myRect4.getArea();


//3rd

Rectangle.prototype.getAreaForRect = function(width,height)
{
    console.log("Getting Area using prototype property : " +width * height);
}

console.log(Rectangle.prototype);
myRect1.getAreaForRect(4,5); 
myRect2.getAreaForRect(5,6);
myRect3.getAreaForRect(7,8);
myRect4.getAreaForRect(11,2);


//4th
var obj = {
    firstName : "sai",
    lastName : "umesh"
};
console.log(obj);

//5th

var obj1 = {
    firstName : "umesh",
    middleName : "nothing",
    lastName : "sai"
};
console.log(obj1);


//6th

var myString = new String('2 + 2')
eval(myString.toString());
console.log(eval(myString.toString()));




//8th
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}

Person1 = new Person("sai","umesh",24,['python','C#'],"22/06/1998",{city:"vizag",pincode:531036},"false","Developer");
Person2 = new Person("raham","Shaik",24,["c#","Javascript"],"29/09/1997",{city:"vizag",pincode:531036},"true","tester");

console.log(Person1);
console.log(Person2);

print=function()
{
    console.log(Person1);
    console.log(Person2);
}();



//9th 
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
Amithabh = new Person("Amithabh","Bacchan",99,['java','c#'],"01/01/1947",{city:"Bangalore",pincode:67856},"false","AnalystA4");
Abhishek = new Person("Abhishek",55,["html","css"],"05/06/1975","false","JrAnalyst");
Aaradhya = new Person("Aaradhya",10,"01/01/2005","false","film");

var Abhishek = Object.create(Amithabh); 
var Aaradhya = Object.create(Abhishek);

print = function()
{
    console.log(Amithabh);
    console.log(Abhishek.lastName);
    console.log(Abhishek.address);
    console.log(Aaradhya.lastName);
    console.log(Aaradhya.skills);
    console.log(Aaradhya.address);
    console.log(Aaradhya.firstName);
}();


//10th

function Account(accountNumber,accountHolderName,accountBalance) 
{
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
}
function Savings(isSalary,accountNumber,accountHolderName,accountBalance)
{
    this.isSalary = isSalary;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(this.accountBalance > 0 && this.accountBalance < 100)
        {
            console.log("Insuffient balance! You have less than 100 rs.");
        } 
        if((this.accountBalance >= 100 && this.accountBalance <= 500) && amount === 200)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 500 && this.accountBalance <= 5000) && amount === 500 || amount === 2000);
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 5000) && amount === 200 || amount === 500 || amount ===2000)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if(this.accountBalance <= 0)
        {
            console.log("ATM says! I cant give you the money, Please deposit some amount to withdraw later, Now Please goo!");
        }
      
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
}
function Current(odLimit,accountNumber,accountHolderName,accountBalance)
{
    this.odLimit = odLimit;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(odLimit > 500)
        {
            if((this.accountBalance > 500 && this.accountBalance < 2000) && amount === 200 || amount === 500)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
            if((this.accountBalance > 2000) && amount=== 200 || amount === 500 || amount === 2000)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
        } 
        else
        {  
            console.log("Your odLimit for Current acocunt is less than 500");
        }  
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
       
}

var obj1 = new Account(12345,"Kishan",65546);
console.log(obj1);


var objSavings = new Savings("true",98765,"Virat",546776); //creating Savings object
console.log(objSavings);
console.log(objSavings.withdraw(500));
console.log(objSavings.getCurrentBalance());

var objCurrent = new Current(550,9876543,"Nihar",5467878); //creating Current object
console.log(objCurrent);
console.log(objCurrent.withdraw(2000));
console.log(objCurrent.getCurrentBalance());

