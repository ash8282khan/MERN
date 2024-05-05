//------------------------------REACT-------------------

import ReactDOM from 'react-dom/client';
import React from 'react';

// const ReactDOM =require( 'react-dom/client');
// const React =require( 'react');

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);



// const heading1 = React.createElement('h1',{},"Hello from React 1!");

// const heading = ()=>{
//    return <h1>Hello from React 2!</h1>
// }

// function Heading2(){
//    return <h1>Hello from React 3!</h1>
// }

const Card = (x)=>{
    console.log('props',x);
  return <div>
    <h1>{x.title}</h1>
    <p>{x.price}</p>
   </div>
}
const arr= [
    {
        title: 'laptop',
        price: '43,999',
    },
    {
        title: 'mobile',
        price: '23,999',
    },
    {
        title: 'mixer',
        price: '3,999',
    }
];
const App = ()=>{
    
   return <div>
       <h1>Hello from React App!</h1>
       {Card({
        title: 'Laptop',
        price : '42,999'
       })} //function calling
    
       <Card title='Tablet' price='22,999'/>  //JSX
       <Card title='Mixer' price='7,999'/>  //JSX
       {
        arr.map((elem)=>{
            return (<Card key= {elem.title} title={elem.title} price={elem.price}/>)
        })
       }
   </div>
}

// console.log("hello");

// console.log(Heading2());

// root.render(heading());
// root.render(heading1);
// root.render(<Heading2/>);
root.render(<App/>);


