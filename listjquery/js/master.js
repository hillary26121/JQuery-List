var textBox = $("#text-box");
var list = $("#list");

// Button Click Event

$("#add-button").click( function() {

  if( textBox.val() != "" ){
    var newListItem = '<li class="list-item">' + textBox.val() + '</li>';
    list.append(newListItem);
    textBox.val("");

  }
});

$(document).on("click", ".list-item", function() {
      $(this).remove();
});










//$(document).on("click", addButton, function(){
//  var listItem = textBox.val();
//  $(node).text(listItem);
  //list.append(node);

//});


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
