var li = document.querySelectorAll("li");
var thrash = document.querySelectorAll(".delete");
var input = document.querySelector("input[type='text']");

for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    this.classList.toggle("strikeThrough");
  });
}

for (var i = 0; i < thrash.length; i++) {
  thrash[i].addEventListener("click", function() {
    this.parentNode.remove();
  });
}

input.addEventListener("keypress", function(e) {
  if(e.which === 13) {
    console.log("enter")
  }
})