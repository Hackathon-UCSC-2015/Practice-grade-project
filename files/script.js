var socket = new WebSocket("ws://localhost:8080/");

socket.onmessage = function(data) {
	$('#testOutputBox').append($('<p>'+data+'</p>'));
}

function addCategory() {
    var newCategory = $("#categoryTemplate").clone();
    newCategory.show();
    newCategory.children('.gradepercent').on('input', function() {
        console.log($(this).val());
        if($(this).val()<0) {
            $(this).val(0);
        }
        if($(this).val()>100) {
            $(this).val(100);
        }
    });
    $("#gradeCategories").append(newCategory);
}

function addGrade(button) {
    var assignment = $("#assignmentTemplate").clone();
    assignment.show();
    assignment.children('.pointsreceived').on('input', function() {
        console.log($(this).val());
        if($(this).val()<0) {
            $(this).val(0);
        }
    });
    $(button).parent().append(assignment);
}

function recalculate() {
    $("#gradeCategories").children().each(function(i){
        var categorypercent = $(i).children(".gradepercent").val();
        console.log($(i).html());
    });
}

$(document).ready(function() {
    console.log("ready");
    
});
