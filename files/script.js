var socket = new WebSocket("ws://localhost/");

socket.onmessage = function(data) {
	$('#testOutputBox').append($('<p>'+data+'</p>'));
}

function addCategory() {
    var newCategory = $("#categoryTemplate").clone();
    newCategory.show();
    $("#gradeCategories").append(newCategory);
}

function addGrade(button) {
    $(button).parent().append($("#assignmentTemplate").clone().show());
}

$(document).ready(function() {

});
