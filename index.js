


// const name = document.getElementById('name')
// const password = document.getElementById('message')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
//   let messages = []
//   if (name.value === '' || name.value == null) {
//     messages.push('Name is required')
//   }

//   if (message.value.length <= 6) {
//     messages.push('message must be longer than 6 characters')
//   }

//   if (password.value.length >= 20) {
//     messages.push('message must be less than 200 characters')
//   }

//   if (password.value === 'password') {
//     messages.push('Password cannot be password')
//   }

//   if (messages.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = messages.join(', ')
//   }
// })

const f = document.getElementById('form');
      const q = document.getElementById('query');
      const google = 'https://www.google.com/search?q=site%3A+';
      const site = 'https://www.blockchaingrants.org/';

      function submitted(event) {
        event.preventDefault();
        const url = google + site + '+' + q.value;
        const win = window.open(url, '_blank');
        win.focus();
      }

      f.addEventListener('submit', submitted);