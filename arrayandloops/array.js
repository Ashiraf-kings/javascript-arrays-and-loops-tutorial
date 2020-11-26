//an array is a special variable that can hold more than one value at a time

/*array syntaxes
standard syntax
var arr_name=[item1, item2,item3, and more] 

*using the new keyword
var arr_name= new Array(item1, item2,item3, and more)

example these both work the same way but for readability use the standard syntax
*/

//var cars= ["benz","jeep","bmw"]
//var cars =new Array("benz","jeep","bmw")



/*
//how to access elements in an array 
you can access element in an array calling the position number of that element stating from zero in the [] brackets
syntax
var var_name=arr_name[0]or any number of the element you want 

example*/
//var myCar = cars[1]
//console.log(myCar)// 'jeep'
//console.log(cars[0])// 'benz'
 

/*
//changing an array element
call the element in the [] brackets then assign it to a new value with the assignment operator

syntax 
here am changing  benz to toyota
*/
//cars[0]="toyota"


/*
//accessing the full array 
you just have to call the name of your full array
 */
//console.log(cars)//['toyota','jeep','bmw']


/* Arrays are objects 
Arrays are a special type of objects the "typeof" operator in js returns an object
//var champions= ["Ashiraf","Ronald","Lincoln","Mathis"]
//console.log(typeof(champions))

but js arrays are better described as arrays.

arrays use numbers to access its elements eg champions[0] returns "Ashiraf"
while 

//objects
var champion={firstName:Ashiraf,lastName:kings,age:45,hobby:happiness}
objects use names to access its members eg champion.firstName returns "Ashiraf"

Array are special kinds of objects and because of this you can variables of different types in the same array eg

you can have objects,function,arrays and all primitive data types in an array
*/

