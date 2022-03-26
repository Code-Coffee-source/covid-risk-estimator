(function() {
    setupNextBackButtons();
    var levelButtons = $('.adv_btn');
    var activityLevelCode = getAnswer('activity-level-code');
    var nextBtn = $('#next-btn');
    var backBtn = $('#back-btn');

    var titles = {
        'slide_0': {
            'english': 'Resting',
            'filipino': 'Nagpapahinga'
        },
        'slide_1': {
            'english': 'Mostly Standing',
            'filipino': 'Kadalasang Nakatayo'
        },
        'slide_2': {
            'english': 'Light Movement',
            'filipino': 'Madaling Aktibidad'
        },
        'slide_3': {
            'english': 'Heavy Movement',
            'filipino': 'Mahihirap na Aktibidad'
        },
    }

    function setText(id) {
        var textBtn = $('#text-btn');

        textBtn.children('.english-text').html(titles[id]['english'])
        textBtn.children('.filipino-text').html(titles[id]['filipino'])
    };

    function setActiveByElement(button) {
        levelButtons.each(function() {
            $(this).removeClass('active').removeClass('bg-gold');
        });
        $(button).addClass('active').addClass('bg-gold');
        allowNextButton();
    };

    levelButtons.each(function() {
        $(this).click(function() {
            deleteAnswer('activity-planned-name');
            deleteAnswer('activity-planned-code');

            storeAnswer('activity-level-name', this.dataset.name);
            storeAnswer('activity-level-code', this.dataset.code);
            setActiveByElement($(this));
            setActiveCard('title' + this.dataset.index);

        }.bind(this));
    });

    nextBtn.on('click', function() {
        var nextNum = parseInt($(this).attr('href').split("_")[1])
        var backNum = parseInt(backBtn.attr('href').split("_")[1])

        if (!(nextNum == parseInt($('.carousel-item').length))) {

            nextBtn.attr('href', '#slide_'+(nextNum+1));
            backBtn.attr('href', '#slide_'+(backNum+1));

            setText('slide_' + nextNum)

        };

    });

    backBtn.on('click', function() {
        var nextNum = parseInt(nextBtn.attr('href').split("_")[1])
        var backNum = parseInt($(this).attr('href').split("_")[1])

        if (!(backNum == -1)) {
            nextBtn.attr('href', '#slide_'+(nextNum-1));
            backBtn.attr('href', '#slide_'+(backNum-1));

            setText('slide_' + backNum)

        };

    });

    if (activityLevelCode) {
        levelButtons.each(function() {
            let currentButton = $(this);
            if (currentButton.attr('data-code') == activityLevelCode) {
                setActiveByElement(currentButton);
                disablePageInteractivity(); //scrolling can interfere with the hack

                setTimeout(function() {
                    // this is more or less a hack
                    window.location.href = '#slide' + currentButton.attr('data-index');
                }, 1000);

                enablePageInteractivity();
            }
        })
    }

})();
