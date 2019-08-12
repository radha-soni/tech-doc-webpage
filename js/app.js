$(document).ready(function() {
  $("#menu-btn").click(function() {
    $("#nav-link-wrapper").toggleClass("curtain-down");
  });

  $("#sidebar-toggle-btn").click(function() {
    $("aside").toggleClass("curtain-left");
    $("#sidebar-toggle-chevron").toggleClass("fa-angle-left");
    $("#sidebar-toggle-chevron").toggleClass("fa-angle-right");
  });
});
