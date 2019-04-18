// This is the expand section

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


// this is the awesomplete section

var paperSectionArray = ['cardboard', 'scrap paper', 'paper', 'newspaper', 'envelopes', 'mail', 'shredded paper', 'cartons', 'tetrapacks', 'food boxes', 'aseptic containers'];

var plasticSectionArray = ['milk cartons', 'juice cartons', 'soup cartons', 'plastic bottles', 'plastic tubs', 'yogurt cups', 'butter tubs', 'plastic flower pots', 'buckets'];

var metalSectionArray = ['aluminum', 'aluminum cans', 'paint cans', 'aerosol cans', 'steel', 'steel cans', 'scrap metal', 'metal lids'];

var glassSectionArray = ['glass', 'glass jars', 'glass bottles', 'colored glass'];

var trashSectionArray = ['plastic bags', 'compostable containers', 'compostable plastics', 'compostable utinsils', 'plastic lids', 'take out containers', 'freezer boxes', 'diapers', 'coffee cups', 'lightbulbs', 'drinking glasses', 'flower vases', 'cereamics', 'broken glass', 'styrofoam', 'clamshell packaging', 'painted wood', 'treated wood', 'stained wood', 'plywood', 'sawdust', 'ashes', 'packing peanuts'];

var noCurbSectionArray = ['propane tanks', 'hazardous chemicals', 'pesticides', 'herbicides', 'paints', 'cleaners', 'cooking oil', 'kitchen oils', 'e-waste', 'computers', 'monitors', 'televisions', 'electronics', 'CFLs', 'batteries'];

$(function(){
  $('#searchForm').submit(function(event) {
    event.preventDefault();
    var userSearchInput = $("#searchList").val()
    var optionSearch = document.getElementsByTagName("option");
    console.log(userSearchInput);
    for (var i = 0; i < paperSectionArray.length; i++)
    if (userSearchInput === paperSectionArray[i]) {
      $("figure, .text").hide();
      $(".paperGrid").toggle();
      location.href = "#paper-section";
      return;
    }
    for (var i = 0; i < plasticSectionArray.length; i++)
    if (userSearchInput === plasticSectionArray[i]) {
      $("figure, .text").hide();
      $(".plasticGrid").toggle();
      location.href = "#plastic-section";
      return;
    }
    for (var i = 0; i < metalSectionArray.length; i++)
    if (userSearchInput === metalSectionArray[i]) {
      $("figure, .text").hide();
      $(".metalGrid").toggle();
      location.href = "#metal-section";
      return;
    }
    for (var i = 0; i < glassSectionArray.length; i++)
    if (userSearchInput === glassSectionArray[i]) {
      $("figure, .text").hide();
      $(".glassGrid").toggle();
      location.href = "#glass-section";
      return;
    }
    for (var i = 0; i < trashSectionArray.length; i++)
    if (userSearchInput === trashSectionArray[i]) {
      $("figure, .text").hide();
      $(".trashGrid").toggle();
      location.href = "#trash-section";
      return;
    }
    for (var i = 0; i < noCurbSectionArray.length; i++)
    if (userSearchInput === noCurbSectionArray[i]) {
      $("figure, .text").hide();
      $(".noCurbGrid").toggle();
      location.href = "#noCurb-section";
      return;
    }
  });
});
