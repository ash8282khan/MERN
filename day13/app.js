const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);
// const head = document.createElement('h1');
// head.innerText = 'Hello from js DOM';

// const list = document.createElement('ul');
// const listItem1= document.createElement('li');
// listItem1.innerText = 'item1';
// const listItem2= document.createElement('li');
// listItem2.innerText = 'item2';


// parent.appendChild(head);
// parent.appendChild(listItem1);
// parent.appendChild(listItem2);

//------------------------------REACT-------------------


// const heading = React.createElement('h1',{},"Hello from React!")
// const listItem1 = React.createElement('li',{    
//             key:'li1' ,
//             className:'li-c-1',
//             id:'id1',
//             style:{
//                 backgroundColor:"red",
//             }
//             },
// "Item 1");
// const listItem2 = React.createElement('li',{key:'li2'},"Item 2");
// const list = React.createElement('ul',{},[listItem1,listItem2]);


// const root1 = React.createElement('root',{},[heading,list]);


//---------------------------JSX----------------------------

// const heading = React.createElement('h1',{},"Hello from React!")
const heading = <h1>Hello from JSX</h1>
const str = 'string';
const heading1 = <h1>{str}</h1>
const listItem1 = <li  className="li-c-1" name={str}> item1 </li>
const listItem2 = <li>item2</li>
// const list = <ul>{listItem1}{listItem2}</ul>
const arr = [listItem1,listItem2];
const list = <ul>{arr.map((elem)=>{return elem ;})}</ul>
root.render(list);
// root.render(root1);
// // console.log(heading);