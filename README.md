# To-Do List App - *app project*
**A responsive, jQuery-based project of a To-Do list**

## General info

This is a project of an fully functional "To-Do list".  It incorporates all of the HTML, CSS, and jQuery, and is fully responsive.  This allows the user to create their own personal to-do list.  They can type a new item into the input field in the *Add New To-Do* input form and hit ENTER to keep a running list.  Also, the user can click the *"+"* sign to hide or show the *Add New To-Do* input form.  If the user decides to delete an item, he can hover over it to reveal a trash can icon, to delete that item.  Or the user can choose to simply cross through the item, while still leaving the item listed, by clicking on it.

The purpose of this project was to build a complete project. This provided plenty of practice with jQuery and it's syntax, and was great practice with CSS code as well.

I was motivated to complete this project to see an app through to completion from start to finish, including all the HTML, CSS, and jQuery.  I was able to combine all these skills to create a polished web application.  It's great to see a project come together, and one that's very practical and useful to others. I especially love making things that are easy to use!

## Technologies

- HTML
- CSS
- jQuery


## Code Examples

```
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
  
```
  
## Setup

This project was built and added to my [personal portfolio website](http://www.bryanwesleyherbert.com/todo-list-project/)

## Status

Project is: *finished*

## Sources

This app tutorial was provided by **The Web Developer Bootcamp** - *online course*

## Contact

Created by **Bryan Herbert** [bryanwesleyherbert.com](http://www.bryanwesleyherbert.com) / email: bryan77@twc.com - Feel free to contact me!




  
  








