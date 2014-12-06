var socket = new WebSocket("ws://localhost/");

socket.onmessage = function(data) {
	$('#testOutputBox').append($('<p>'+data+'</p>'));
}

function addCategory() {
    var newCategory = $("#categoryTemplate").clone();
    newCategory.show();
    $("#gradeCategories").append(newCategory);
}

$(document).ready(function() {

});
