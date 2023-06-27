// fetch('https://fakestoreapi.com/products')
// .then(res => res.json())
// .then(json => {
//     var data = ""
//     for (const key in json) {
//        data+=`<div class="card" style="width: 18rem;">
//        <img src="${json[key].image}" class="card-img-top" alt="...">
//        <div class="card-body">
//          <h5 class="card-title">${json[key].title}</h5>
//          <p class="card-text">${json[key].price}$</p>
//          <a href="#" class="btn btn-primary">Go somewhere</a>
//        </div>
//      </div>
//      `
//      document.getElementById("show").innerHTML=data
//     //  console.log(json.)
//     }
// }
  
    

//     )
// var get = document.getElementById("get")
// var random_string= Math.random().toString(20).slice(2)
// console.log(random_string);


// Arrow function 
// let data ={
//     id:20,
//     name:"faiz",
//     fun:()=>{
//         console.log(this)
//     }
// }
// data.fun()

// normal function
// let data1 ={
//     id:20,
//     name:"faiz",
//     fun1:function(){
//         console.log(this)
//     }
// }
// data1.fun1()
// class
// class animals{
//     constructor(){
//         console.log("hello")
//     }
//     faiz(value) {
//         return value
//     }
// }
//     let a= new animals()
//    console.log( a.faiz("faiz"));
// rest operator
// let Hello=(...a)=>{
//     console.log(z)
// }
// Hello("faiz","atta","junaid","yaseen","jawad")
let promise1 = new promise((res, rej)=>{
setTimeout(()=>{
a = "faiz"
res("done")
},3000)
})
promise1.then(()=>{
    alert(a)
})