let numberArray = [1,2,3];

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

let total = numberArray.reduce(function(total, num){
    return total + num;
}, {});

// let stringConcat = numberArray.reduce(function(total, num){
//    let n ="";
//    n += num.toString();
//     return n; 
// });


// let totalVoted = voters.map(function(person, i){
    
// });

// let shoppingSpree = wishlist.map(function(items){
//     return items.price + items.price
// });

console.log(shoppingSpree);