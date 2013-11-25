$(document).ready(function() {

        $(window).scroll(function(e){
                $el = $('.navmenu');
                $el2 = $('.fixnav');
                if ($(this).scrollTop() > 145 && $el.css('position') != 'fixed') {
                        $el.addClass('fixnav');
        } else
                if ($(this).scrollTop() < 145 && $el2.css('position') == 'fixed') {
                        $el2.removeClass('fixnav');
        }
        });

        $('.full-art').hide();
        $('.hideshow2').hide();
        $('.hideshow').click(function(){
                $(this).next('.full-art').toggle('hide'); 
                if ( $(this).next('.full-art').height > '750px' ) {
                        $(this).parent().find('.hideshow2').toggle('hide');
                } 
        });
        $('.hideshow2').click(function() {
                $(this).parent().toggle('hide');
                $(this).toggle('hide');
        });
});