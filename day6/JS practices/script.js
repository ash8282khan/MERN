//-------------------map--------------------
console.log("hello");

const arr= [12,34,54];


const ans= arr.map((a)=>{
    console.log(a);
    return a;
});

// console.log(ans);

//---------------------filter and Push ------------------

const arr2= [12,34,54];
const ans1=arr2.push(); 
console.log(ans1)


const arr3= [12,34,54];
const ans2=arr3.filter((a1)=>{
    if(a1>20) return true ;
    else return false ;
}); 

console.log(arr3);
console.log(ans2);

//-------------------------filter on string------------------
const arr4 = [
    'delhi', 'mumbai', 'chennai', 'kolkata', 'pune',
    'India', 'russia', 'USA', 'Iran'
]
const ans3 = arr4.filter((s) => {
    if (s.includes('i') || s.includes('I')) {
        return true;
    }
    else false;
});
console.log(ans3)

const arr5 = [
    'delhi-India', 'mumbai-INDIA', 'chennai-india', 'kolkata-india', 'pune-india',
    'India', 'russia', 'USA', 'Iran'
]
const ans4 = arr5.filter((s1) => {
    const ns = s1.toLowerCase();
    if (ns.includes('india')) {
        return true;
    }
    else false;
});
console.log(ans4)

//-------------------------reduce ------------------------------------------

const arr6= [10,22,34,50];
const ans5= arr6.reduce((total,curr,c,d)=>{
    console.log(total,curr,c,d);
    return total+curr;
});

console.log(ans5);























