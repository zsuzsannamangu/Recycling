$(function() {
  $(".paper").click(function(event) {
    event.preventDefault();
    $(".paperGrid").toggle();
  });
  $(".plastic").click(function(event) {
    event.preventDefault();
    $(".plasticGrid").toggle();
  });
  $(".metal").click(function(event) {
    event.preventDefault();
    $(".metalGrid").toggle();
  });
  $(".glass").click(function(event) {
    event.preventDefault();
    $(".glassGrid").toggle();
  });
  $(".trash").click(function(event) {
    event.preventDefault();
    $(".trashGrid").toggle();
  });
  $(".noCurb").click(function(event) {
    event.preventDefault();
    $(".noCurbGrid").toggle();
  });
});
