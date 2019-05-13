// Check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(800, function() {
        $(this).remove();
    });
    event.stopPropagation();
});
    
// Adding items to Todo
$("input[type ='text']").keypress(function(event) {
    if (event.which === 13) {
        // grabbing a new todo from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li")
    }
});

// Toggling Todo input
$(".fa-plus").click(function() {
    $("input[type ='text']").fadeToggle();
});