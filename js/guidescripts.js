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

// function myList(){
//   if ($("option").hasClass('paper-value') === true) {
//     alert("paper")
//     $("figure, .text").hide();
//     $(".paperGrid").toggle();
//   } else if ($('option').hasClass('plastic-value') === true) {
//     alert("plastic")
//     $("figure, .text").hide();
//     $(".plasticGrid, .plastic-text").toggle();
//   } else if ($('option').hasClass('metal-value') === true) {
//     alert("metal")
//     $("figure, .text").hide();
//     $(".metalGrid").toggle();
//   } else if ($('option').hasClass('glass-value') === true) {
//     alert("glass")
//     $("figure, .text").hide();
//     $(".glassGrid, .glass-text").toggle();
//   } else if ($('option').hasClass('trash-value') === true) {
//     alert("trash")
//     $("figure, .text").hide();
//     $(".trashGrid, .trash-text").toggle();
//   } else if($('option').hasClass('noCurb-value') === true) {
//     alert("special")
//     $("figure, .text").hide();
//     $(".noCurbGrid").toggle();
//   }
// }


$(function(){

  $('#searchForm').submit(function(event) {
    event.preventDefault();
    var userSearchInput = $("#searchList").val()
    userSearchInput
    var optionSearch = document.getElementsByTagName("option");
    console.log(typeof optionSearch);
    for (var i = 0; i < = optionSearch.length; i++) {
      if (userSearchInput === optionSearch.val()) {
        alert(optionSearch.val());
      }
    }
    console.log(userSearchInput);
    console.log(optionSearch);

    // var to store user input
    // compare input to values in #myList -> google method
    // on a match, show that value's associated class
    if (userSearchInput) {
      // alert("paper")
      $("figure, .text").hide();
      $(".paperGrid").toggle();
    } else if ($('option').hasClass('plastic-value')) {
      // alert("plastic")
      $("figure, .text").hide();
      $(".plasticGrid, .plastic-text").toggle();
    } else if ($('option').hasClass('metal-value')) {
      // alert("metal")
      $("figure, .text").hide();
      $(".metalGrid").toggle();
    } else if ($('option').hasClass('glass-value')) {
      // alert("glass")
      $("figure, .text").hide();
      $(".glassGrid, .glass-text").toggle();
    } else if ($('option').hasClass('trash-value')) {
      // alert("trash")
      $("figure, .text").hide();
      $(".trashGrid, .trash-text").toggle();
    } else if($('option').hasClass('noCurb-value')) {
      // alert("special")
      $("figure, .text").hide();
      $(".noCurbGrid").toggle();
    } else {};
  });
});
