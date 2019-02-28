// Utilização do id transportado pelo hash para consumo dos dados
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
