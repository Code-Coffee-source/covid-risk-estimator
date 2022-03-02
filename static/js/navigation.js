// iOS-specific hamburger menu support
(function() {
    var mobileNav = $('#mobile-nav');
    var hamburger = $('#mobile-nav > button');
    var links = $('#mobile-nav ul a');
    var langBtn = $('.langBtn')
    var langText = $('#langMenuText')

    langText.text(localStorage.getItem('language'))

    if (isDeviceIOS) {
        mobileNav.addClass('ios');

        hamburger.click(function() {
            mobileNav.addClass('active');

        });

        $(document).click(function(event) {
            var target = $(event.target);
            if (!target.closest('#mobile-nav > button').length) mobileNav.removeClass('active');
        });

        links.each(function() {
            $(this).click(function() {
                mobileNav.removeClass('active');
            });
        });
    }

    langBtn.on('click', function(){
        var newLanguage = this.id;
        localStorage.setItem('language', newLanguage);
        langText.text(newLanguage)
        goTo(window.location.pathname);
    });


})();
