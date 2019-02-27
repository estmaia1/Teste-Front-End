pId =
  "https://desolate-brushlands-20405.herokuapp.com/api/product/" +
  window.location.hash.slice(1);

$(document).ready(function() {
  $.ajax({
    type: "GET",
    datatype: "JSON",
    contentType: "application/json",
    url: pId,
    success: function(response) {
      alert("done");
    },
    error: function(error) {
      alert("error");
    }
  });

  $(".nav-link").popover({
    container: "body",
    html: true,
    content:
      '<label for="email">Email:</label>\n<input type="email" name="email" id="email" class= "form-control input-md">'
  });
});

$("#btnNewsletter").click(function() {
  $.ajax({
    type: "POST",
    datatype: "json",
    url: "http://api.vtexcrm.com.br/corebiz/dataentities/TE/documents",
    data: JSON.stringify({
      name: $("#nlNome").val(),
      email: $("#nlEmail").val(),
      notice: "teste",
      phone: "00000000"
    }),
    success: function(result) {
      alert("ok");
    },
    error: function(result) {
      alert("error");
    }
  });
});
