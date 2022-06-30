

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

//renderbooks
let url = 'https://stormy-brushlands-81321.herokuapp.com/books'
const body = document.querySelector('#body')
console.log(body.parentNode);
fetch(url)
	.then(response => response.json())
	.then(data => {

		let html = ""

		data.map((value) => {
			html += `
			 <div class = "col.md-9">
			 <div class="card">
                      
                      <h4 class="title"><span>Title</span>: ${value.title}</h4>
                      <img class="card-img-top" src="${value.imgUrl}" alt="Card image" style="width:10%">
                      <h4 id="author"><span>Author</span>: ${value.author}</h4>

                 
             </div>
			 </div>
			`
		})

		document.getElementById('booksContainer').innerHTML = html
	})



