
//--------setTimeout function-----//
 console.log("GEC start");

 function test1(){
    console.log("testing start")
    console.log("loading...")
    console.log("testing end")
 }

 setTimeout(test1, 5000);

 console.log("GEC end");

// //-----------dynamic Event -------------------//

    const btn = document.getElementById('btn');
    btn.addEventListener("click",test1);


//-------------fetch Api-------------//

// console.log("Start");
// const req = fetch("https://api.github.com/users/deepak3440");
// console.log(req);
// req.then(()=> console.log("fetched"))
// console.log("End");

console.log("Start");

// fetch('https://dummyjson.com/products/1')                //method 1-------------
// .then(res => res.json())
// .then(json => console.log(json))

// const req = fetch('https://dummyjson.com/products/1')    //method 2-------------
// console.log(req)
// const res = req.then(res => res.json())
// res.then((data)=>console.log(data))

const req = fetch('https://dummyjson.com/products/1')       //method 3-------------
.then(res => res.json())
.then((data)=>console.log(data));

console.log("End");

            