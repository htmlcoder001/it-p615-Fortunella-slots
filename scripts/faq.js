var modal = document.getElementById("myModal");
var btn = document.getElementById("openFAQ");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var faqItems = document.getElementsByClassName("faq-question");

for (var i = 0; i < faqItems.length; i++) {
  faqItems[i].addEventListener("click", function() {
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      this.getElementsByClassName("arrow")[0].style.transform = 'rotate(0deg)';
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      this.getElementsByClassName("arrow")[0].style.transform = 'rotate(180deg)';
      
    }
  });
}