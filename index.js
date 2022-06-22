




































  $("form").on("submit", function (e) {
    e.preventDefault();
    var username = $("#username").val();
    alert(
      "Hello" + " " + username + ",\nThanks for the feedback. " 
    );
    document.querySelector("form").reset();
  });