var $ = require('jQuery');
$('#menu-toggle').click(function(e) {
    e.preventDefault();
    $('#wrapper').toggleClass('toggled');
});
// You can also require other files to run in this process
require('../renderer.js');
$(document).ready(function() {
    var counter = 0;

    $('#addrow').on('click', function() {
        var newRow = $('<tr>');
        var cols = '';

        cols += '<td><input type="text" class="form-control  rounded-0" name="name' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control  rounded-0" name="phone' + counter + '"/></td>';
        cols += '<td></td>';
        cols += '<td><input type="text" class="form-control  rounded-0" name="phone' + counter + '"/></td>';
        cols += '<td></td>';
        cols += '<td></td>';
        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-outline-danger rounded-0"  value="Delete"></td>';
        newRow.append(cols);
        $('table.order-list').append(newRow);
        counter++;
    });

    $('table.order-list').on('click', '.ibtnDel', function(event) {
        $(this)
            .closest('tr')
            .remove();
        counter -= 1;
    });
});

function calculateRow(row) {
    var price = +row.find('input[name^="price"]').val();
}

function calculateGrandTotal() {
    var grandTotal = 0;
    $('table.order-list')
        .find('input[name^="price"]')
        .each(function() {
            grandTotal += +$(this).val();
        });
    $('#grandtotal').text(grandTotal.toFixed(2));
}


function CountRows() {
    var totalRowCount = 0;
    var rowCount = 0;
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");
    console.log("total " + rows.length);
    console.log("total " + rows.length);
    console.log("total " + rows.length);
    console.log("total " + rows.length);
    console.log("total " + rows.length);
    console.log("total " + rows.length);

    for (var i = 0; i < rows.length; i++) {
        totalRowCount++;
        if (rows[i].getElementsByTagName("td").length > 0) {
            rowCount++;
        }
    }
    var message = "Total Row Count: " + totalRowCount;
    message += "\nRow Count: " + rowCount;
    alert(message);

}

function debounce(func, wait, immediate) {
    // 'private' variable for instance
    // The returned function will be able to reference this due to closure.
    // Each call to the returned function will share this common timer.
    var timeout;

    // Calling debounce returns a new anonymous function
    return function() {
        // reference the context and args for the setTimeout function
        var context = this,
            args = arguments;

        // Should the function be called now? If immediate is true
        //   and not already in a timeout then the answer is: Yes
        var callNow = immediate && !timeout;

        // This is the basic debounce behaviour where you can call this 
        //   function several times, but it will only execute once 
        //   [before or after imposing a delay]. 
        //   Each time the returned function is called, the timer starts over.
        clearTimeout(timeout);

        // Set the new timeout
        timeout = setTimeout(function() {

            // Inside the timeout function, clear the timeout variable
            // which will let the next execution run when in 'immediate' mode
            timeout = null;

            // Check if the function already ran with the immediate flag
            if (!immediate) {
                // Call the original function with apply
                // apply lets you define the 'this' object as well as the arguments 
                //    (both captured before setTimeout)
                func.apply(context, args);
            }
        }, wait);

        // Immediate mode and no wait timer? Execute the function..
        if (callNow) func.apply(context, args);
    }
}

/////////////////////////////////
// DEMO:

function onMouseMove(e) {
    console.clear();
    console.log(e.x, e.y);
}

// Define the debounced function
var debouncedMouseMove = debounce(onMouseMove, 50);

// Call the debounced function on every mouse move
window.addEventListener('mousemove', debouncedMouseMove);