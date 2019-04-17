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
    $("figure, .text").hide();
    $(".glassGrid, .glass-text").toggle();
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

$(function() {
  $("#myList").click(function() {
    if ( element.classList.contains("paper-value")) {
      $("figure, .text").hide();
      $(".paperGrid").toggle();
    }
    if (element.classList.contains("plastic-value")) {
      $("figure, .text").hide();
      $(".plasticGrid, .plastic-text").toggle();
    }
    if ( === "metal-value") {
      $("figure, .text").hide();
      $(".metalGrid").toggle();
    }
    if ( === "glass-value") {
      $("figure, .text").hide();
      $(".glassGrid, .glass-text").toggle();
    }
    if ( === "trash-value") {
      $("figure, .text").hide();
      $(".trashGrid, .trash-text").toggle();
    }
    if ( === "noCurb-value") {
      $("figure, .text").hide();
      $(".noCurbGrid").toggle();
    }
  })
});
