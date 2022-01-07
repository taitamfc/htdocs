jQuery( document ).ready( function(){
    jQuery('.local-scroll').on('click',function(){
        let target = jQuery(this).attr('href');
 
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        return false;
    });
});