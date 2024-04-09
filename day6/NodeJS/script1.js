//-----------------------figlet external module----------------------

// const figlet = require("figlet");

// figlet(' Windows...  ',(err,data)=>{
//     console.log(data);
// });

//-------------------------internal modules---------------------

fetch("https://api.github.com/users/deepak3440")
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
        });


//-----------------------------async await---------------------
async function getApi(){
    
    const pr = await fetch("https://api.github.com/users/ash8282khan");
    const data = await pr.json();
    console.log(data);
}
getApi();

//---------------------------------------------------------------

console.log("Start");

async function getApi(){
    
    console.log("Api calling...");
    
    const pr = await fetch("https://api.github.com/users/ash8282khan");
    console.log("fetched api...");
    
    const data = await pr.json();
    console.log("fetched json...");
    console.log(data);
}
getApi();
console.log("End");























