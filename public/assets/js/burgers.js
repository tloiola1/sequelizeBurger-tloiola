// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newdevoured = $(this).data("devoured");
    newdevoured = false;

    var newdevouredState = {
      devoured: newdevoured
    };

    // Send the PUT request.
    $.ajax({
      url:"/api/update/" + id,
      method: "PUT",
      data: newdevouredState
    }).then(
      function() {
        console.log("changed devoured to", newdevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
      burger_name: $("#burg").val().trim(),
    };
    console.log(newburger.burger_name);
    console.log(newburger.devoured);
    // Send the POST request.
    $.ajax({
      url:"/api/create",
      method: "POST",
      data: newburger
    }).then(
      function() {
        console.log("Created New Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
