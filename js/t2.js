$(document).ready(function() {
    //Завдання 1
    $('.slide-text > h1').fadeOut(3000);
    $('.slide-text > h1').fadeIn(1500);

    //Завдання 2
    $('.head-moto-img').FadeTo('slow', 0.05);
    $('.head-moto-img').FadeTo(7000, 1);

    //Завдання 3
    $('.head').SlideUp(2000);
    $('.head').SlideDown(1000);

    //Завдання 4
    $('.')

    //Завдання 5
    function zr(name_obj,t1,t2) {
        obj = $(name_obj);
        t1 = t1
        t2 = t2
        obj.SlideUp(t1);
        obj.SlideDown(t2);
    }

    /* zr('#my_form', 2000,1000);
    zr('#blog>.container>.head',3000,2000); */

    //Завдання 6
    prozor(name_obj, time, opasity) {
        obj = $(name_obj);
        time = time;
        opasity = opasity;
        obj.FadeTo(time, opasity);
        obj.SlideUp(time);
        obj.SlideDown(time);
        obj.FadeTo(opasity);
    }

})