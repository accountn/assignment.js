// https://github.com/accountn/assignment.js
 

//problem 1.
function kilometerToMeter(m){
    var kilo = m * 1000;
    return kilo;
}
var result = kilometerToMeter(7);
console.log(result, "metter");



//problem 2.
function budgetCalculato(watch,phone,laptop){
    var pro1 = watch * 50;
    var pro2 = phone * 100;
    var pro3 = laptop * 500;
    var totalCost = pro1 + pro2 + pro3;
    return totalCost;
}
var result = budgetCalculato(24,5,2);
console.log(result);



//problm 3.
function hotelCost(day){
    var cost = 0;
    if(day <= 10){
         cost = day * 100;
    }
    else if(day <= 20){
        var firstCost = 10 * 100;
        var remaining = day - 10;
        var secondCost = remaining * 80;
        cost = firstCost + secondCost; 
    }
    else{
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var remaining = day - 20;
        var thirdCost = remaining * 50;
        cost = firstCost + secondCost + thirdCost;
    }
    return cost;
}
var result = hotelCost(22);
console.log(result);



//problem 4.
function megaFriend(arr){
    var long = [0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length > long.length){
            long = arr[i];
        }
    }
    return long;
}
var names = ['helal', 'rikta', 'shofiqul', 'tanjila', 'tajulislam'];
var result = megaFriend(names);
console.log(result);