console.log("hello")

// const div= document.querySelectorAll('div');
// console.log(div)

const res= document.querySelector('div');
console.log(res)

const res1= document.querySelector('p');
const res2= document.querySelector('p:nth-of-type(2)');
//console.log(res1)

res.removeChild(res1);
//res.appendChild(res1);
//res.removeChild(res2);

function getinfo(e){

    // e.target.style.backgroundColor='green';
    const res3=document.querySelector('div');
    res3.prepend("my name is ");
}

////////--------higher order function-------/////

// function sum(a,b,fun){
//     const ans=a+b;
//     fun(ans);                 //----call back to print
// }

// function print(x){
//     console.log("    *****" x "****   ");
// }

// sum( 5,7,print);
