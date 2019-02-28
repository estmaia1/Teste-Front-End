pId =
  "https://desolate-brushlands-20405.herokuapp.com/api/product/" +
  window.location.hash.slice(1);

$(document).ready(function() {
  $.ajax({
    type: "GET",
    datatype: "JSON",
    contentType: "application/json",
    url: pId,
    data: JSON.stringify({
      productId: "value",
      productName: "value",
      imageUrl: "value",
      price: "value"
    }),
    success: function(response) {
      $("img").attr("src", response.imageUrl);
      $("#title").text(response.productName);
      $("#value").text(response.price.toFixed(2).replace(".", ","));
      $("#totalValue").text(
        "R$ " + (Number(response.price) + 0.5).toFixed(2).replace(".", ",")
      );
    },
    error: function(error) {
      alert("error");
    }
  });
});

$("#btnCart").click(function() {
  $("#cart").toggle();
  $("#cart").toggleClass("overlay");
});

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
      alert("Sucesso! Id: " + result.Id);
    },
    error: function(result) {
      alert(result);
    }
  });
});
