var textBox = $("#text-box");
var addButton = $("#add-button");
var list = $("#list");
//var value = textBox.val();
var node = document.createElement("li");



$(document).on("click", addButton, function(){
  var listItem = textBox.val();
  $(node).text(listItem);
  list.append(node);
});


//
// $(document).on("input", addButton, function(){
//
//   textBox.append(document.createElement("li"));
// });
//
// $(document).on("click", addButton, function(){
//  //textBox.val( list.append("<li>poop</li>") );
//
// });
