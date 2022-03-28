(function() {

    var nextBtn = $('#next-btn');
    var backBtn = $('#back-btn');
    var startBtn = $('#start-btn');
    var endBtn = $('#end-btn');
    var numBtn = $('#num-btn');

    nextBtn.on('click', function() {
        var nextNum = parseInt($(this).attr('href').split("_")[1])
        var backNum = parseInt(backBtn.attr('href').split("_")[1])

        if (!(nextNum == parseInt($('.carousel-item').length))) {

            nextBtn.attr('href', '#slide_'+(nextNum+1));
            backBtn.attr('href', '#slide_'+(backNum+1));

            numBtn.html(nextNum)

        };

    });

    backBtn.on('click', function() {
        var nextNum = parseInt(nextBtn.attr('href').split("_")[1])
        var backNum = parseInt($(this).attr('href').split("_")[1])

        if (!(backNum == -1)) {
            nextBtn.attr('href', '#slide_'+(nextNum-1));
            backBtn.attr('href', '#slide_'+(backNum-1));
            numBtn.html(backNum)

        };

    });

})();
