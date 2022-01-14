(function() {
    setupNextBackButtons();

    var regionImage = $('#region-image');
    var regionChoice = $('.region-choice');
    var regionButton = $('#regionBtn');

    var currentRegionName = getAnswer('region-name');
    var currentRegionCode = getAnswer('region-code');

    regionChoice.each(function() {
        $(this).find('button').click(function(event) {

            var regionCode = $(this).find('button').attr('data-code');
            
            storeAnswer('region-name', event.target.innerText);
            storeAnswer('region-code', regionCode);

            regionImage.attr('src', '/static/images/philippines/PH_' + regionCode + '.png');
            regionButton.find('span').text(event.target.innerText);
            document.activeElement.blur();

            allowNextButton();

        }.bind(this));
    });

    if (currentRegionName && currentRegionCode) {
        regionImage.attr('src', '/static/images/philippines/PH_' + currentRegionCode + '.png');
        regionButton.find('span').text(currentRegionName);
        allowNextButton();
    }
})();
