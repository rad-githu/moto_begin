$(document).ready(function () {

    //Завдання 1
    $('.slide-btn').click(function (){
        alert('Була натиснута кнопка з класом slide-btn');
    })
    
    //Завдання 5
    $('.header').mouseenter(function (){
        $('.slide-text').slideUp();
    })    
    $('.header').mouseenter(function (){
        $('.slide-text').slideDown();
    })    

    //Завдання 6



    //Завдання 7-8
    let text1 = 'Подивитись фото';
    let text2 = 'Сховати фото'

    $('#p').click(function (){
        $('.head-moto-img').slideToggle();
        if ($('#p').text()! =text1) {
            $('#p').text(text1)
        } else {
            $('#p').text(text2)
        }
    })
    
    // Завдання 9
    $('.blog-post-date').hover (
        function () {
            $('+.blog-post-info > .categorie', this).fadeIn();
        },
        function() {
            $('+.blog-post-info > .categorie', this).fadeOut();
        }
    )


})