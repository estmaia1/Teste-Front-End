$(document).ready(function() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://desolate-brushlands-20405.herokuapp.com/api/products",
    success: function() {
      alert("done");
    }
  });
});
