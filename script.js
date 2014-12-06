var socket = new WebSocket("ws://localhost/");

function addCategory() {
    var newCategory = $("#categoryTemplate").clone();
    newCategory.show();
    $("#gradeCategories").append(newCategory);
}

$(document).ready(function() {

});
