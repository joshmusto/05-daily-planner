// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //check all save buttons
  var saveBtn = document.querySelectorAll(".saveBtn");
  //use for loop to find specific button and save appropriate data
  for (let i=0; i<saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function() {
      //find right hour section
      var saveHour = this.previousElementSibling;
      //get text
      var writtenSchedule = saveHour.value;
      var saveHourString = "hour" + (i+9);
      localStorage.setItem(saveHourString, writtenSchedule);
    });
  }
  
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
  for (let i=0; i<hourArray.length; i++) {
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
  
  //get schedule from local storage
  hour09.querySelector(".description").value = localStorage.getItem("hour9");
  hour10.querySelector(".description").value = localStorage.getItem("hour10");
  hour11.querySelector(".description").value = localStorage.getItem("hour11");
  hour12.querySelector(".description").value = localStorage.getItem("hour12");
  hour13.querySelector(".description").value = localStorage.getItem("hour13");
  hour14.querySelector(".description").value = localStorage.getItem("hour14");
  hour15.querySelector(".description").value = localStorage.getItem("hour15");
  hour16.querySelector(".description").value = localStorage.getItem("hour16");
  hour17.querySelector(".description").value = localStorage.getItem("hour17");

  //display date in header of the page
  var currentDay = document.getElementById("currentDay");
  var currentWeekday = dayjs().day();
  var currentWeekdayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var currentMonth = dayjs().month();
  var currentMonthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var currentDate = dayjs().date();
  currentDay.textContent = currentWeekdayArray[currentWeekday] + ", " + currentMonthArray[currentMonth] + " " + currentDate;
});
