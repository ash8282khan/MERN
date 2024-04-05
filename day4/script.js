
//let a="hi"
//let b="hey"
// if(a===b){
// let a=new String("hello");
// }
// else{
//     console.log(b)
// }
// const obj={
//     "name":"asdfg",
//     "lastname":"qwer"
// }
// console.log(obj);
// const str=JSON.stringify(obj);
// document.write(str);

// const obj={
//     "name":"asdfg",
//     "lastname":"qwer"
// }

// obj.age=20;
// console.log(obj);
console.log("     ");
            //------array-------//
let arr=[1,2,34];
arr=[2,3,4]
arr[1]=30;
arr[10]=100;
arr.push(123);
console.log(arr);
console.log(typeof(arr));
console.log("     ");

//-----cheak array by isArray function----//
const obj={
       "name":"asdfg",
    "lastname":"qwer"
 }

 const arr1=[1,4,6];
 console.log(Array.isArray(obj));
 console.log(Array.isArray(arr1));
 console.log("     ");

 //-----cheak object by isArray function----//

 function cheakIfObj(x){
    if(Array.isArray(x)){
        console.log("not object");
    }
    else{
        console.log("object");
    }
}
cheakIfObj(obj);
console.log("     ");

//-----------second method------//
function cheakIfObj(x){
    if(Array.isArray(x)){
        console.log("not object");
    }
    else if(typeof(x)=="object"){
        console.log("object");
    }
    else{
        console.log("not object");
    }
}
cheakIfObj(obj);
console.log("     ");
//--------loops----------//
// for (let i=0;i<2;i++){
//     console.log(arr[i]);
//     console.log(obj[i]);
//}
// for (let i of arr){
//     console.log(i);
// }
// for (let i of obj){
//     console.log(i);
// }
for (let i in arr){
    console.log(i);
}
console.log("     ");
for (let i in obj){
    console.log(i);
}

////////------------Window object------------////////
console.log("     ");
console.log("     ");
console.log(window);
window.console.log(innerHeight);
//window.console.log(innerwidth);
console.log("     ");
console.log("     ");
console.log(window.document);
console.log(window);
console.log("     ");
console.log("     ");
console.dir(window.document);
console.dir(window);
console.log("     ");
console.log("     ");

// ////////----------------Document object---------//////
const res=document.getElementsByTagName('h1')
console.log(res);
const re=document.getElementsByTagName('p')
console.log(re);
const r=document.getElementById('header')
console.log(r);
console.dir(r);


// let uName= prompt("enter Heading");
// const res1=document.getElementById('header').innerHTML= uName;
// console.log(res1);

const res2=document.querySelectorAll('h3')
console.log(res2);

const res3=document.getElementById('header')
res3.innerText="Hello,world";
res3.innerHTML="Hello";
console.log(res3);

const res4=document.createElement('h3')
res4.innerText="Dynamic text";
document.body.appendChild(res4)

const firstDiv= document.getElementsByTagName('div');
firstDiv[0].appendChild(res4)
firstDiv[0].removeChild(res4)
firstDiv[1].remove()
//console.log(res4);
