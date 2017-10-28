var li = document.querySelectorAll("li");
var thrash = document.querySelectorAll(".delete")

for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    this.classList.toggle("strikeThrough");
  });
}

for (var i = 0; i < thrash.length; i++) {
  thrash[i].addEventListener("click", function() {
    console.log("xxxx")
  });
}