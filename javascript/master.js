// Métodos comuns a todas as páginas

$("#btnNewsletter").click(function() {
  $.ajax({
    url: "http://api.vtexcrm.com.br/corebiz/dataentities/TE/documents",
    type: "POST",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify({
      name: $("#nlNome").val(),
      email: $("#nlEmail").val(),
      notice: "teste",
      phone: "00000000"
    }),
    success: function(result) {
      // Alerta para exemplo
      alert("Sucesso! Id: " + result.Id);
    },
    error: function(result) {
      alert("error");
    }
  });
});

$("#btnCart").click(function() {
  $("#cart").toggle();
  $("#cart").toggleClass("overlay");
});

// $(".nav-link").popover({
//   container: "body",
//   html: true,
//   content:
//     '<label for="email">Email:</label>\n<input type="email" name="email" id="email" class= "form-control input-md">'
// });
