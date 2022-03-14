(function() {
    setupNextBackButtons();

    var inputFields = $('#room_width, #room_height, #room_length');
    var sizeBtns = $('.sizeBtn');
    var roomSizeAnswer = getAnswer('room-size')
    var roomWidthAnswer = getAnswer('room-width');
    var roomHeightAnswer = getAnswer('room-height');
    var roomLengthAnswer = getAnswer('room-length');

    function checkInputs() {
        var isValid = true;

        inputFields.each(function() {
            if ($(this).val().length == 0) isValid = false;
        });

        return isValid;
    };

    function checkIfDone() {
        if (getAnswer('room-width') && getAnswer('room-height') && getAnswer('room-length')) return true;
    };

    function makeActive(id) {

        $('#'+id).addClass('bg-dirty-white').removeClass('bg-beige');
        $('#'+id).siblings().addClass('bg-dirty-white').removeClass('bg-beige');

    };

    inputFields.each(function() {
        $(this).change(function(event) {
            var keyForStorage = 'room-' + this.id.split('_')[1]; // room-width, room-height, or room-length;
            storeAnswer(keyForStorage, this.value);
            if (checkInputs()) allowNextButton();
        }.bind(this));
    });

    sizeBtns.each(function() {
        $(this).click(function(event) {

            var item = $(this);

            $('#room_width').val(item.attr('data-width'));
            $('#room_height').val(item.attr('data-height'));
            $('#room_length').val(item.attr('data-length'));

            storeAnswer('room-width', parseInt(item.attr('data-width')));
            storeAnswer('room-height', parseInt(item.attr('data-height')));
            storeAnswer('room-length', parseInt(item.attr('data-length')));
            storeAnswer('room-size', item.attr('id'))

            makeActive(item.attr('id'));


            if (checkIfDone()) allowNextButton();

        }.bind(this));
    });

    if (roomWidthAnswer) $('#room_width').val(roomWidthAnswer);
    if (roomHeightAnswer) $('#room_height').val(roomHeightAnswer);
    if (roomLengthAnswer) $('#room_length').val(roomLengthAnswer);


    if (roomSizeAnswer) makeActive(roomSizeAnswer);
    if (checkInputs()) allowNextButton();

})();
