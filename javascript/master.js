// Métodos comuns a todas as páginas

// Envio de dados para newsletter
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
      alert("Verifique as informações inseridas!");
    }
  });
});

// Preenchimento das informações do usuário no momento do carregamento da página
// Ao implementar uma função de login, este método deverá ser alterado
$(document).ready(function() {
  function fillList() {
    $.ajax({
      type: "GET",
      datatype: "JSON",
      contentType: "application/json",
      url: "https://desolate-brushlands-20405.herokuapp.com/api/product/1",
      data: JSON.stringify({
        productId: "value",
        productName: "value",
        imageUrl: "value",
        price: "value"
      }),
      success: function(response) {
        $("#list").append(
          '<div class="col-3">\n<img src="' +
            response.imageUrl +
            '" class="w-100 h-100">\n</div>\n<div class="col-6">\n<h5 class="mb-0">' +
            response.productName +
            '</h5>\n</div>\n<div id="lastVl" class="col-3">\nR$ <span>' +
            response.price.toFixed(2).replace(".", ",") +
            "</span>\n</div>"
        );
      },
      error: function(error) {
        alert("error");
      }
    });
  }

  $.ajax({
    url: "https://desolate-brushlands-20405.herokuapp.com/api/user",
    type: "POST",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify({
      email: "cdd@corebiz.com.br"
    }),
    success: function(result) {
      $("#loginName").text(result.name);
      $("#loginMail").text(result.email);
      fillList(result.shopping.pop().id);
    },
    error: function(result) {
      alert("error");
    }
  });
});
