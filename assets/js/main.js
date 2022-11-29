// // task1-1

// let arr = [5,3,8,22,77,2,7,1,90,45,32,11]



// function FindMinimumOfArr (array){
//     let min=array[0];

//     for (let i = 0; i < array.length; i++) 
//     {
    
//         if(array[i]<min){
    
//             min=array[i]
    
//         }
    
//     }
    
//     console.log(`minimum digit: ${min}`)
// }

// FindMinimumOfArr(arr)

// // task1-2

// function FindMaximumOfArr (array){
    
// let max=array[0];

// for (let i = 0; i < array.length; i++) 
// {

//     if(array[i]>max){

//         max=array[i]

//     }

// }

// console.log(`maximum digit: ${max}`)
// }

// FindMaximumOfArr(arr)


// // task1_deepEqual

// const cat={
//     name:'tom',
//     age:3,
//     owner:'aytan',
//     breed:'female'
// }

// const dog={
//     name:'lucy',
//     age:3,
//     owner:'aytan',
//     breed:'male'
// }




// function DeepEqual(obj1,obj2){

//     let obj1Length=Object.keys(obj1).length;
//     let obj2Length=Object.keys(obj2).length;


//     let obj1type=typeof obj1;
//     let obj2type=typeof obj2;

//     if(obj1===obj2){
//         return true;
//     }
//     else if ((obj1type == "object" && obj1 != null) && (obj2type == "object" && obj2 != null)) {
//         if (obj1Length != obj2Length){
//             return false;
//         }
    
//         for (var property in obj1) {
//           if (obj2.hasOwnProperty(property))
//           {  
//             if (! DeepEqual(obj1[property], obj2[property]))
//               return false;
//           }
//           else
//             return false;
//         }
        
//         return true;
//       }
//       else 
//         return false;
//   }
  
//   console.log(DeepEqual(cat,dog))

