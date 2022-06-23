

// const f = document.getElementById('form');
// const q = document.getElementById('query');
// const google = 'https://www.google.com/search?q=site%3A+';
// const site = 'https://www.blockchaingrants.org/';

// function submitted(event) {
//   event.preventDefault();
//   const url = google + site + '+' + q.value;
//   const win = window.open(url, '_blank');
//   win.focus();
// }

// f.addEventListener('submit', submitted);

//comment box 
const post = document.getElementById("post");
post.addEventListener("click", function () {
  let commentBoxValue = document.getElementById("comment-box").value;

  let li = document.createElement("li");
  let text = document.createTextNode(commentBoxValue);
  li.appendChild(text);
  document.getElementById("unordered").appendChild(li);

});
//alert review 
post.addEventListener("click", ()=>alert('thanks for your review!'))

//collapsible content

const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const BASE_url="https://www.omdbapi.com/"
function displayMovie(movieObj){
    const description=document.querySelector(".description");
    filmInfo.innerText=movieObj.description
  
}

// fetch(BASE_url)
// .then( response=>response.json())
// .then(jsonData=>{
//     //console.log(jsonData)
//     displayMovie(jsonData[0])
//     const movieList=document.getElementById("films")
//     jsonData.forEach(movieObj=>{
//     const li=document.createElement("li")
//     li.className="film item"
//     li.innerText=movieObj.title
//     movieList.append(li)
//     li.addEventListener("click",()=>{
//         displayMovie(movieObj)
//     })
//     })
// })