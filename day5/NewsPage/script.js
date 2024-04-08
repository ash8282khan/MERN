console.log("...APP Started...");

function callAPI(){
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=1d4aae6741fa48f7a52c4ab32d621619")
    .then((res)=> { res.json().then((data)=>{ renderUI(data) })
});
    
}    

const root = document.getElementById('root');

function renderUI(data){
    // console.log(data);
    const articles = data.articles;
    for(let i=0; i<articles.length; i++){
        
    const ar = data.articles[i];
    const div = document.createElement('div');
    div.setAttribute("class","news-card");
  
    if(ar.urlToImage!=null){
    const h3 = document.createElement('h3');
    h3.innerText = ar.title;
    div.appendChild(h3);
    
    const img = document.createElement('img');
    img.src = ar.urlToImage;
    div.appendChild(img);
    
    const p = document.createElement("p");
    p.innerText = ar.description;
    div.appendChild(p);
    
    const read = document.createElement("a");
    read.href= ar.url;
    read.textContent='Read more...';
    read.target='_blank';
    div.appendChild(read);
    
     

    
    root.appendChild(div);
    }

    }
}

// renderUI();
callAPI()