console.log("...Weather APP Started...");

function fetchAPI(){
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi,VA?unitGroup=us&key=YOUR_API_KEY&include=days")
    .then((res)=> { res.json().then((data)=>{ renderUI(data) })
});
    
}    

const root = document.getElementById('root');

function renderUI(data){
 
    const row = document.createElement('tr');
    
    const cell1 = document.createElement('th');
    cell1.innerText='Date';
    row.appendChild(cell1);
    
    const cell2 = document.createElement('th');
    cell1.innerText='Maximum-Temperature';
    row.appendChild(cell2);
    
    // const cell3 = document.createElement('th');
    // cell1.innerText='Minimum-Temperature';
    // row.appendChild(cell3);
    
   root.append(row);

            //---------------Make child row-------------

   const childRow= document.createElement("tr");

   const c1= document.createElement("th");
   c1.innerText="date";
   childRow.appendChild(c1);
   
   const c2= document.createElement("th");
   c2.innerText="Max-Temperature";
   childRow.appendChild(c2);

   root.appendChild(childRow);
    
}

// renderUI();
// fetchAPIAPI()