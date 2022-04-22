$(document).ready(function(){

$('#fadeIn').click(function(){
    $('#rouge').fadeIn(2000);
    $('#bleu').fadeIn('slow');
    $('#vert').fadeIn('fast');
})

// exo : créer 3 autres div et exécuter fadeOut()
//pour faire disparaitre les trois blocs
$('#fadeOut').click(function(){
    $('#rougeoff').fadeOut(2000);
    $('#bleuoff').fadeOut('slow');
    $('#vertoff').fadeOut('fast');
})

$('#fadeToggle').click(function(){
    $('#rougetgl').fadeToggle(2000);
    $('#bleutgl').fadeToggle('slow');
    $('#verttgl').fadeToggle('fast');
})

}) 

// clic on - off FADE TO
$('#fadeTo').click(function(){
    $('#formulaire').fadeTo('slow', 1);
    $('#jaune2').fadeTo('slow',0);
    $('#gris2').fadeTo('slow',0);
})

$('#fadeTo2').click(function(){
    $('#formulaire').fadeTo('slow', 0);
    $('#jaune2').fadeTo('slow',1);
    $('#gris2').fadeTo('slow',1);
})

// ------- SLIDE ---------
// SLIDEDOWN
$('#barre').click(function(){
    $('#rideau').slideDown('slow');
    $('#barre').text('Le rideau est descendu t as pas vue?')

})

//SLIDEUP
$('#barre2').click(function(){
    $('#rideau2').slideUp('slow');
    $('#barre2').text('Le rideau est monté negro')

})

//SLIDETOGGLE

$('#barre3').click(function(){
    $('#rideau3').slideToggle('slow');
})

//-------ANIMATION----
// animate
$('#btn-simple').click(function(){
    $('#simple').animate({
        left:"500px"}, 'slow')
    })

    $('#btn-simple2').click(function(){
        $('#simple2').animate({
            left:"500px",
            bottom: "215px"},
            'slow')
        })

        $('#btn-simple3').click(function(){
            $('#simple3').animate({ left:"500px",},1000),

            $('#simple3').animate({ bottom:"431px",},1000)

            })

        $('#btn-agg').click(function(){
            $('#agg').animate({height:'300px', width:'500px'}, 1000);

            $('#agg').animate({lineHeight:'100px', fontSize: '50px'}, 500);
        })

        //ETAPE 

        $('#btn-etape').click(function(){

            $('#etape').animate({ left:"500px",},1000),

            $('#etape').animate({ bottom:"402px",},1000)

            $('#etape').animate({height:'300px', width:'500px'}, 1000);

            $('#etape').css("background", "pink");

            $('#etape').animate({lineHeight:'100px', fontSize: '50px'}, 500);

            $('#etape').fadeOut(1500);
        })


        //HIDE

        $('#div').click(function(){
            $('h2').hide('slow');
        })

        $('#div2').click(function(){
            $('h2').show('slow');
        })



        $('#pseudo2').keydown(function() {
            $(this).css({
                'border':'4px solid red ',
                'background':'orange' 
            });
      
        }) 

        $('#pseudo2').keyup(function() {
            $(this).css({'background':'white', 'border':'1px solid black'});
          
        })

        $("#interupteur").click(function(){
            $('#on-off').toggle('slow')
        })

