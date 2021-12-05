let array = [1,2,true,[1,2,3,4],false,3,4,Object,123]

// console.log(array[2])

array.push('novo item') //add no final do array

array.forEach(function(item,index){console.log(item,index)})

console.log('---------------------')

array.unshift('item no começo') // add no começo do array
array.forEach(function(item,index){console.log(item,index)})
console.log('---------------------')

array.pop() // remove no final do array

array.forEach(function(item,index){console.log(item,index)})
console.log('---------------------')

array.shift() // remove no começo do array

array.forEach(function(item,index){console.log(item,index)})
console.log('---------------------')

let newArray = array.slice(0,4)


console.log('novo array',newArray)
console.log('---------------------')


let novinhoArray = array.splice(0,2)

console.log('array agora',novinhoArray)
console.log('---------------------')