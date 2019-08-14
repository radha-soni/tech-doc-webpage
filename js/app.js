"use strict";

$(document).ready(function() {
  $("#menu-btn").click(function() {
    $("#nav-link-wrapper").toggleClass("curtain-down");
  });

  $("#sidebar-toggle-btn").click(function() {
    $("aside").toggleClass("curtain-left");
    $("#sidebar-toggle-chevron").toggleClass("fa-angle-left");
    $("#sidebar-toggle-chevron").toggleClass("fa-angle-right");
  });

  var prevSearchedText;

  function clearSearch(replace, insert, valToSave) {
    var para = $("article").html();
    var regex = new RegExp(replace, "g");
    para = para.replace(regex, insert);
    $("article").html(para);
    prevSearchedText = valToSave;
  }

  $(".search-btn").click(function() {
    if (prevSearchedText) {
      clearSearch(
        '<span class="searched-text">' + prevSearchedText + "</span>",
        prevSearchedText,
        ""
      );
    }
    if (/\w+/.test($(".search-input").val())) {
      let searchedText = $(".search-input").val();
      clearSearch(
        searchedText,
        '<span class="searched-text">' + searchedText + "</span>",
        searchedText
      );
    }
  });

  $(".search-input").on("keyup click", function() {
    setTimeout(() => {
      if (prevSearchedText && !$(".search-input").val()) {
        clearSearch(
          '<span class="searched-text">' + prevSearchedText + "</span>",
          prevSearchedText
        );
      }
    }, 0);
  });
});
