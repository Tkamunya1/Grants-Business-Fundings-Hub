

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



const viewBook=document.getElementById('viewBook').value;
let clickBook=()=>{
  console.log("viewBook");
}
let clickBook = () =>{
  fetch('')
}





clickBook(); 

const viewBook=document.getElementById('viewBook').value;
console.log(viewBook)
Viewbook.addEventListener('click', function(){
  let bookValue=document.getElementById('viewBook').value;

  let p=document.createElement('p')
  let text = document.createTextNode(bookValue);
  p.appendChild(text);
  document.getElementById("bookDiv").appendChild(p);
})


//http://openlibrary.org/search/books.json?q=The Greatest Little Business Book

