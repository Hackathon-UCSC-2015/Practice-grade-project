var socket = new WebSocket("ws://localhost:8080/");

socket.onmessage = function(data) {
	$('#testOutputBox').append($('<p>'+data+'</p>'));
}

function addCategory() {
    var newCategory = $("#categoryTemplate").clone();
    newCategory.show();
    $("#gradeCategories").append(newCategory);
}

function addGrade(button) {
    var assignment = $("#assignmentTemplate").clone().show();
    assignment.children('.pointsreceived').on('input', function() {
        console.log("change");
        if(isNaN($(this).val())) {
            $(this).val(0);
        }
    });
    $(button).parent().append($("#assignmentTemplate").clone().show());
}

$(document).ready(function() {
    console.log("ready");
    
});
