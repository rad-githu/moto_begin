$(document).ready(function() {
    // Завдання 1
    $('#my_button').button();

    // Завдання 2
    $("#clear_form").button();
    $("#clear_form").click(function(event) {
        $('#div_form_1 input[type=checkbox]').prop('checked', false);
      /*   $('#div_form_1 input[type=radio]').prop('checked', false); */

      $('#div_form_1 input[type]')

        $('#radio label').removeClass('ui-state-active')
        $('#radio label span').remove();

        $('input[type=text], textarea').val('');
        event.preventDefault();
    })

    // Завдання 3
    $('input[type=checkbox]').checkboxradio();
    $('#radio input[type=radio]').checkboxradio();

    // Завдання 4
    $("#motoSelect, #daySelect").selectmenu();

     // Завдання 5
     $.widget("custom.iconselectmenu", $.ui.selectmenu, {
        _renderItem: function(ul, item) {
            var li = $('<li>');
            wrapper = $('<div>', {text: item.label});

            if (item.disabled) {
                li.addClass('ul-state-disabled');
            }
            $('<span>', {
                style: item.element.attr('data-class'),
                 'class': 'ui-icon'+item.element.attr('data-class')
            }).appentTo(wrapper)

            return li.append(wrapper).appentTo(ul);
        }
     });

     $("#motoSelect").iconselectmenu().iconselectmenu('menuWidget').addClass("ui-menu-icons customicons");

})