
$(function(){
  var modal = document.getElementById("pickUpLocator");
  var span = document.getElementsByClassName("close")[0];
  $("li#pickup").click(function(event) {
    event.preventDefault();
    modal.style.display = "block";
  });
  span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});
