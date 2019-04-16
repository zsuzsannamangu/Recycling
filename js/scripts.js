$(function() {
  $(".paper").click(function(event) {
    event.preventDefault();
    $("figure, .text").hide();
    $(".paperGrid").toggle();
  });
  $(".plastic").click(function(event) {
    event.preventDefault();
    $("figure, .text").hide();
    $(".plasticGrid, .plastic-text").toggle();
  });
  $(".metal").click(function(event) {
    event.preventDefault();
    $("figure, .text").hide();
    $(".metalGrid").toggle();
  });
  $(".glass").click(function(event) {
    event.preventDefault();
    $(".glassGrid, .glass-text").toggle();
    $("figure, .text").hide();
  });
  $(".trash").click(function(event) {
    event.preventDefault();
    $("figure, .text").hide();
    $(".trashGrid, .trash-text").toggle();
  });
  $(".noCurb").click(function(event) {
    event.preventDefault();
    $("figure, .text").hide();
    $(".noCurbGrid").toggle();
  });
});
