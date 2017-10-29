var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");

ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('strikeThrough');
  }

  if (ev.target.tagName === 'SPAN') {
    ev.target.parentNode.remove();
  }
}, false);

input.addEventListener("keypress", function(e) {
  if (e.which === 13) {
    var newLi = document.createElement("li");
    var newSpan = document.createElement("span");
    ul
      .appendChild(newLi)
      .appendChild(newSpan)
      .setAttribute("class", "delete");
    newSpan.append("X ");
    newLi.append(this.value);
    this.value = "";
  }
});