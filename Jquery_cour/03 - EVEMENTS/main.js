$(document).ready(function(){
    console.info('document chargé 1');
})

$(function(){
    console.info('Document chargé 2');
})

jQuery(function(){
    console.info('Document chargé 3');
})

jQuery(document).ready(function($){
    console.info('Document chargé 4');
})

$(()=>{
    console.info('Document chargé 5');
})

// EVENEMENT MOUSEOVER

$('.zone1').mouseover(function() {
    $(this).css('background','pink' );
    $('#info').html('je suis sur la zone 1');
})

$('.zone2').mouseout(function() {
    $(this).css('background','red' );
    $('#info').html('tu es sorti de la zone 2');
})

$('.zone3').mouseenter(function() {
    $(this).css('background','white' );
    $('#info').html('tu es sur la zone 3');
})

$('.zone3').mouseleave(function() {
    $(this).css('background','pink' );
    $('#info').html('tu es sortie la zone 3');
})


//---EVENEMENT CLICK ---//


$('.zone4').click(function() {
    $(this).css('background','grey' );
    $('#info').html('click zone 4');
})

$('.zone5').dblclick(function() {
    $(this).css('background','grey' );
    $('#info').html('dbclick zone 5');
})

$('.zone6').contextmenu(function() {
    $(this).css('background','red' );
    $('#info').html('dbclick zone 6');
})

$('.zone7').blur(function() {
    $(this).css('background','red' );
    $('#info').html('dbclick zone 7');
})

$('.zone8').change(function() {
    $(this).css('background','orange' );
    $('#info').html('dbclick zone 8');
})

$('.zone9').keydown(function() {
    $(this).css('background','orange' );
    $('#info').html('dbclick zone 9');
})

$('.zone9').keyup(function() {
    $(this).css('background','white' );
    $('#info').html('dbclick zone 9');
})



$(document).scroll(function() {
    $('#info').css('green');
    $('#info').text('Je scrolle');

})


