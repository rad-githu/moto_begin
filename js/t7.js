$(document).ready(function(){
    //Завдання 1
    $(':header').first().css('background-color', 'yellow');

    //Завдання 2
    $(':header').last().css({ 'font-size': '400%' });

    //Завдання 3
    $("input[type='checkbox']").eq(1).prop('checked', true);

    //Завдання 4
    $("input[type='radio']").first().prop('checked', true);

    //Завдання 5-6
    $("#my_form").click(function(){
        getInfoMoto();
    });
    function getInfoMoto(){
        let moto = $('#motoSelect option:selected').text();
        let days = $('#daysSelect option:selected').text();
        let email = $("#emeil").val();

         }//Завдання 7
        let pruklad = emeil.indexOf('Приклад: ');
        if (pruklad>0){
            $("#email").css({'background-color': 'red'});
        } else {
            $("#email").css({'background-color': 'lightgreen'});
       
        let helm = ''; 
        let bag = ''; 
        let od = ''; 
        let inch = ''; 

        if($("input[type='checkbox']").eq(0).prop('checked')==true ){
            helm = $('label[for="shlem]').text();
        };

        if($("input[type='checkbox']").eq(1).prop('checked')==true ){
            bag = $('label[for="bag"]').text();
        };

        if($("input[type='checkbox']").eq(2).prop('checked')==true ){
            od = $('label[for="od"]').text();
        };



        if($('#inch_yes').prop('checked') == true ){
            inch = 'Так';
            $('#radio').css({ 'background-color': '#f6f6f6' , 'color': '#000'})
        } else {
            inch = 'Ні';
            $('#radio').css({ 'background-color': '#red' , 'color': '#fff', 'width': '20%', 'border-radius': '5px', 'padding-left': '5px'})
        }

        $('textarea').text(`${moto} на ${days} днів \n ${email}\n Аксесуари: ${helm} ${bag} ${od}\n Страховка:${inch}`)
    }

    




});