var h1 = document.getElementsByTagName("h1");

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
      alert("done");
      response.forEach(function(data) {
        $("#products").append(
          // "<li>" + data.productName + ":" + data.productId + "</li>"
          // Criação dos cards em colunas reponsivas
          '<div class="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">\n<div class="card mt-4" style="width: 18rem;">\n  <img src=" ' +
            data.imageUrl +
            ' " class="card-img-top" alt="...">\n  <div class="card-body d-flex flex-column justify-content-end">\n    <h6 class="card-title">' +
            data.productName +
            '</h6>\n <p class="card-text">R$ <span id="value">' +
            data.price.toFixed(2).replace(".", ",") +
            '</span></p> \n<a href="#" class="btn btn-light btn-lg py-3" id="btnComprar">COMPRAR<i class="fas fa-shopping-cart ml-2"></i></a>\n </div>\n </div>\n</div>'
        );
      });
    },
    error: function(error) {
      alert(error);
    }
  });
});