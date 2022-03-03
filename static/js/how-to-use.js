(function() {

    var extraBtn = $('#extraDivBtn');
    var extraDiv = $('#extraDiv');
    var nextBtn = $('#next-btn');
    var backBtn = $('#back-btn');
    var startBtn = $('#start-btn');
    var endBtn = $('#end-btn');
    var numBtn = $('#num-btn');

    extraBtn.click(function() {

    extraDiv.toggleClass('closed open')
    extraDiv.toggleClass('h-0 h-full')
    extraDiv.children().toggleClass('h-0 h-full')

    });

    nextBtn.on('click', function() {
        var currNum = parseInt($(this).attr('href').split("_")[1])
        console.log(currNum)

        if (!(currNum == parseInt($('.carousel-item').length)+1)) {
            nextBtn.attr('href', '#item_'+(currNum+1));
            backBtn.attr('href', '#item_'+(currNum-1));


        };

        if (!(currNum == parseInt($('.carousel-item').length)+1)) {
            numBtn.html(currNum);
        };

    });

    backBtn.on('click', function() {
        var currNum = parseInt($(this).attr('href').split("_")[1])
        console.log(currNum)

        if (!(currNum == 0)) {
            nextBtn.attr('href', '#item_'+(currNum+1))
            backBtn.attr('href', '#item_'+(currNum-1))
            numBtn.html(currNum);
        };

    });

    endBtn.on('click', function() {
        var endNum = parseInt($(this).attr('href').split('_')[1]);

        numBtn.html(endNum);

        nextBtn.attr('href', '#item_'+(endNum+1));
        backBtn.attr('href', '#item_'+(endNum-1));

    });

    startBtn.on('click', function() {
        var startNum = parseInt($(this).attr('href').split('_')[1]);

        numBtn.html(startNum);

        nextBtn.attr('href', '#item_'+(startNum+1));
        backBtn.attr('href', '#item_'+(startNum-1));

    });

})();
