//This function is an important first step in addressing the major important factors in the html page 
document.addEventListener("DOMContentLoaded", () => {
  //on the first line we are adding an event listener to our HTML file with the first parameter to load content before executing our code.
  let form = document.getElementById("create-task-form");
  //here on the body of our implicit return function, on the first line we are locating "form" on our html file.
  form.addEventListener("submit", function (e)  {
  //here we are adding an event listener to "form" with first parameter as "submit".  This is an event, where we follow this by the 2nd parameter "e" to release properties of submit
  e.preventDefault();
  //in the body of this addEventListener we are indicating that we want our "submit" event to prevent default.  This is something we have to do with forms.
  handleToDo(e.target["new-task-description"].value); 
  //still inside the body of 2nd parameter of form.EventListener we are entering a callback function. The first parameter- e.target (the event of that element/target)then, find the attribute in HTML with the specific code that makes up the input box on the page & get it's value.  This code captures the value of our input and allows us to add a new task to our to-do list.
  form.reset();
  //this line allows the input box to reset/clear when we submit an item.
})
});

function handleToDo(todo) {
  //our callback function with a parameter
  let p = document.createElement('p');
  //creation of a p tag to hold our typed in values
  p.textContent = `${todo}`
  //p's value is the parameter for now until we type a value inside the input box on our page.  This is our placeholder wrapped in p tags for our value.
  let btn = document.createElement("button");
  //creation of a button element
  btn.textContent = "x"
  //our button now has an x inside of it
  p.appendChild(btn);
  //our button is now wrapped in p tags.  It will appear next to our submitted value on the page
  document.getElementById("create-task-form").appendChild(p)
  //We are now locating the place on the html where we cant to append our p tag
  btn.addEventListener("click", handleDelete);
  //creation of an event involving deletion of our button element
}
function handleDelete(e){
  //This is a function that will delete something for us involving an event
  e.target.parentNode.remove()
  //This code specifies that we will delete the target/element event's parent node by using the remove() method.
}