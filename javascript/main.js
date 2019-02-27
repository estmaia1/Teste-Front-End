// Populando a prateleira de produtos, através da grid do bootstrap
$(document).ready(function() {
  $.ajax({
    type: "GET",
    datatype: "JSON",
    contentType: "application/json",
    url: "https://desolate-brushlands-20405.herokuapp.com/api/products",
    data: JSON.stringify({
      productId: "value",
      productName: "value",
      imageUrl: "value",
      price: "value"
    }),
    success: function(response) {
      response.forEach(function(data) {
        $("#products").append(
          // "<li>" + data.productName + ":" + data.productId + "</li>"
          // Criação dos cards em colunas reponsivas
          '<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">\n<div class="card mb-5" style="width: 18rem;">\n <a href="html/product.html#' +
            data.productId +
            '">\n<img src=" ' +
            data.imageUrl +
            ' " class="card-img-top">\n</a>\n  <div class="card-body d-flex flex-column">\n    <h6 class="card-title">' +
            data.productName +
            '</h6>\n <p class="card-text">R$ <span id="value">' +
            data.price.toFixed(2).replace(".", ",") +
            '</span></p> \n<button class="btn btn-light btn-lg py-3" id="btnComprar">COMPRAR<i class="fas fa-shopping-cart ml-2"></i></button>\n </div>\n </div>\n</div>'
        );
      });

      // Efeito de sombra ao posicionar o cursor sobre o produto
      $(".card").hover(function() {
        $(this).toggleClass("shadow bg-white mb-5 mb-2 rounded border-0");
        //Exibe/oculta o botão de compra
        $(this)
          .find("button")
          .toggle();
      });
    },
    error: function(error) {
      alert(error);
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
