$(function() {
  $(".paper").click(function(event) {
    event.preventDefault();
      $("figure").hide();
    $(".paperGrid").toggle();
  });
  $(".plastic").click(function(event) {
    event.preventDefault();
      $("figure").hide();
    $(".plasticGrid").toggle();
  });
  $(".metal").click(function(event) {
    event.preventDefault();
      $("figure").hide();
    $(".metalGrid").toggle();
  });
  $(".glass").click(function(event) {
    event.preventDefault();
      $("figure").hide();
    $(".glassGrid").toggle();
  });
  $(".trash").click(function(event) {
    event.preventDefault();
      $("figure").hide();
    $(".trashGrid").toggle();
  });
  $(".noCurb").click(function(event) {
    event.preventDefault();
    $("figure").hide();
    $(".noCurbGrid").toggle();
  });
});
