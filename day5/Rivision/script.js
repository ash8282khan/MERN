        //--------callback function---------//

let arr = [2,10,21,31];

function printPretty(elem){
    console.log(':',elem);
}

function printArray(arr){
    // for(let i=0; i<arr.length;i++){
    //         console.log(':', elem);
    //     }
        arr.forEach(printPretty);           

        arr.forEach((a) => {
            console.log(':', a);
        });

        arr.forEach((a,b,c) => {
            console.log(':', a,b,c);
        });

}
printArray(arr);

//--------setTimeout function-----//

function test(){
    console.log("testing...")
}
setTimeout(test, 5000);
