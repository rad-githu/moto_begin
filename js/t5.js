$(document).ready(function () {

    //завдання 1
    $('#about-moto').addClass('new');

     //завдання 2
     $('#about-moto').prepend('<p class="fon_yellow"> Цей абзац доданий за допомогою методу <b >prepend </b> </p>');
     $('#about-moto').append('<p class="fon_yellow"> Цей абзац доданий за допомогою методу <b> append </b> </p>');

     $('#about-moto').before('<p class="fon_yellow"> Цей абзац доданий за допомогою методу <b >before </b> </p>');
     $('#about-moto').after('<p class="fon_yellow"> Цей абзац доданий за допомогою методу <b> after </b> </p>');

     //завдання 3
     $('li').hover (
        function() {
            $(this).toggleClass('svitlo');
        }
     );

     //завдання 4-5
     /* $('.head-moto-img').click(
        function(){
            $(this).clone().prependTo('.koshik-wrapper');
            $(this).remove();
            $('.koshik-wrapper').addClass('full-koshik');
        }
     )
 */

     //завдання 6
/* $('.head-moto-img').click(
    function() {
        let n = $(this);
        $('.koshik-wrapper-items').each(
            function() {
                if (n.attr('nomer') == $(this).attr('nomer')) {
                    $(this).html(n.clone());
                    n.remove();
                    $('.koshik-wrapper').addClass('full-koshik');
                }
            }
        )
    }
) */

//завдання 7
$('.head-moto-img').click(
    function(){
        $('.koshik-wrapper').append($(this).clone().dbclick(function() {
           /*  $(this).remove();
            sumaMoto();
        })*/); 
        sumaMoto();
    }
);

function sumaMoto(){
    let count = 0;
    let suma = 0;
    $('.koshik-wrapper>.head-moto-img').each(
        function(){
            count++
            suma+= parseInt($(this).attr('prise'));
        }
    );

    $('#suma').html('Всього <b>'+count+'</b> мотоциклів на суму <b>'+suma+'</b> грн');

    if(count>0){
        $('.koshik-wrapper').addClass('full-koshik');
    } else {
        $('.koshik-wrapper').removeClass('full-koshik');
    }
}


})