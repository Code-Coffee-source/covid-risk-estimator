(function() {
    setupNextBackButtons();

    var inputFields = $('#room_width, #room_height, #room_length');
    var sizeBtns = $('.sizeBtn');
    var roomSizeAnswer = getAnswer('room-size')

    function checkIfDone() {
        if (getAnswer('room-width') && getAnswer('room-height') && getAnswer('room-length')) return true;
    }

    function makeActive(id) {

        $('#'+id).addClass('bg-dirty-white').removeClass('bg-beige');
        $('#'+id).siblings().addClass('bg-dirty-white').removeClass('bg-beige');

    }

    sizeBtns.each(function() {
        $(this).click(function(event) {

            var item = $(this);

            storeAnswer('room-width', parseInt(item.attr('data-width')));
            storeAnswer('room-height', parseInt(item.attr('data-height')));
            storeAnswer('room-length', parseInt(item.attr('data-length')));
            storeAnswer('room-size', item.attr('id'))

            makeActive(item.attr('id'));


            if (checkIfDone()) allowNextButton();

        }.bind(this));
    });

    if (roomSizeAnswer) makeActive(roomSizeAnswer)

})();
