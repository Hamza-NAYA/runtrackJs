$(document).ready(function() {

    $('#showButton').click(function() {
        $('#citation').removeClass('hidden');
    });

    $('#hideButton').click(function() {
        $('#citation').addClass('hidden');
    });
});