

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





// const renderOneBook = document.getElementsByClassName("card1");

// //Render One book
// function renderOneBook(book) {
//   //Build necessary book details details
//   let card1 = document.createElement('li')
//   card1.className = 'card1'
//   card1.innerHTML = `
//   <div class="container">
//   <div class = 'content'>
//   <h3> ${book.title} </h3>
//   <p>${book.url} <p>
//   <p> ${book.author} </p>
//   </div>
//   </div>`
//   document.querySelector('#book-list').appendChild(card1) 
// }



// //fetch furniture data
// function getAllBooks() {
//   fetch('https://stormy-brushlands-81321.herokuapp.com/books')
//   .then(resp => resp.json())
//   .then(bookData => bookData.book.forEach(book => renderOneBook(book)))
//   .catch(err => console.error(err));
// }

// function initialize () {
//   getAllBooks()
// }
// initialize()

let url = 'https://stormy-brushlands-81321.herokuapp.com/books'
const body = document.querySelector('#body')
console.log(body.parentNode);
body.parentNode.style.backgroundColor = '#f4f4f4';
//const comment = document.querySelector('textarea');
//const backUp = comment.getAttribute('placeholder');
//const btn = document.querySelector('btn');
//const clear = document.getElementById('clear');
//const submit = document.getElementById('submit');
fetch(url)
	.then(response => response.json())
	.then(data => {

		let html = ""

		data.map((value) => {
			html += `
			 <div class = "col.md-9">
			 <div class="card">
                      <h4 class="title"><span>Title</span>: ${value.title}</h4>
                      <h4 id="author"><span>Author</span>: ${value.author}</h4>
                 <div class="card-body">
			 	  <h4><span>Link</span>: ${value.source} </h4>
                </div>
             </div>
			 </div>
			`
		})

		document.getElementById('container').innerHTML = html
	})



