//You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data.
//Create an array containing the names of all items in the inventory.
//Create a separate array with the corresponding stock quantities of each item.
//Write a function to aquantity of an existing item.dd a new item to the inventory, updating both arrays.
//Write a function to update the stock 
//Write a function to calculate the total number of items in the inventory.
//Write a function to find the item with the lowest stock quantity.

//create an array containing the names of all item in the inventory.

let array1=["sugar","milk","tealeaves","salt"];
console.log(array1);

2.//create a separate array with the corresponding stock quantities of each item
let array=[10,35,23,29,];
let array3={}
array1.forEach((a,b)=>{
    array3[a]=array[b]

});
console.log(array3)

3.//write a function to add a new item to the inventory updating both arrays.
function addNewItem(){
    array3.banana=2

}
addNewItem()
console.log(array3)

4.//Write a function to update the stock quantity of an existing item.
function updateItem(){
    array3["sugar"]=10
}
updateItem()
console.log(array3)

5.//Write a function to calculate the total number of item in the inventory

function calculate_total(){
    let sum=0
for (let i = 0; i < array.length; i++) {
  sum += array[i];
    
}
return sum;
}
let nums=calculate_total()
console.log(nums);

6.//Write a function to find the item with the lowest stock quantity.
function find_lowest(){
    let x=Math.min(...array)
    console.log(x);

}

find_lowest()












