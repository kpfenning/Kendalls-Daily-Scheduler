
//grabs current date and displays on screen
var currentDay = $('#currentDay');
currentDay.text(moment().format('dddd, MMM Do YYYY'));

var currentHour = moment().hour();


//compares block hour with current hour in order to determine if it is past, present, or future
$(".time-block").each(function() {
    var blockHour = $(this).attr('id').split('-')[1];
    var textEntry = localStorage.getItem(blockHour);
    var textArea = $(this).find('.description');
    textArea.val (textEntry);

    // sets the class of the time block based on if the current hour matches with the time block hour
    if (blockHour < currentHour){
        $(this).find('.description').addClass('past');
    } else if (blockHour == currentHour){
        $(this).find('.description').addClass('present');
    } else {
        $(this).find('.description').addClass('future');
    }
    });

    // once the button is clicked this function saves the to-dos in local storage
    $('.saveBtn').on('click', function (){
        var key = $(this).parent().attr('id').split('-')[1];
        var value = $(this).parent().find('.description').val();
        localStorage.setItem(key,value);
    });
  