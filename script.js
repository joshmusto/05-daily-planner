// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


    //set background color by hour
    var hour09 = document.getElementById("hour-09");
    var hour10 = document.getElementById("hour-10");
    var hour11 = document.getElementById("hour-11");
    var hour12 = document.getElementById("hour-12");
    var hour13 = document.getElementById("hour-13");
    var hour14 = document.getElementById("hour-14");
    var hour15 = document.getElementById("hour-15");
    var hour16 = document.getElementById("hour-16");
    var hour17 = document.getElementById("hour-17");
    //for loop to check times
    var hourArray = [
      hour09, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17
    ];
    var hour = dayjs().hour();
    for (i=0; i<hourArray.length; i++) {
      if ((i+9) < hour) {
        hourArray[i].classList.add("past");
      }
      else if((i+9) == hour) {
        hourArray[i].classList.add("present");
      }
      else {
        hourArray[i].classList.add("future");
      }
    }

    
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
