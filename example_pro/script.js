// let person = {
//     firstName:"santhoshi",
//     getName: function(){
//         console.log(this)
//     }
// };
//  let result= person.getName();
//  console.log(result);
// function init() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//       alert(name);
//       console.log(name) // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
  var e= 10;
  function sum(a){
      return function(b){
          return function(c){
              return function(d){
                  return a+b+c+d+e
              }
          }
      }
  }
  console.log(sum(0)(4)(5)(0))