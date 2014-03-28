

    $(function () {

        var $container = $('.responsive-grid');
        $container.packery({
          itemSelector: '.item',
          gutter: 0
        });

        $('.left-nav a').each(function(){
            if( $(this).hasClass('active') ){
                $(this).append('<i class="fa fa-chevron-right"></i>');
            }
        });

        $('.license-item').hover(function(){
            $('.description', this).fadeTo(500,1);
        }, function(){
            $('.description', this).fadeTo(500,0);
        });
    });
