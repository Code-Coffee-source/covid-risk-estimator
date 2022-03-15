(function() {
    setupNextBackButtons();

    var ventilationButtons = $('.presetBtn');
    var currentVentilationCode = getAnswer('room-ventilation-code');

    var translationTexts = {
        'C' : {
            "english": {
                "Name": "Residential",
                "Activity": "A property designed for people to live in. E.g. condo unit, private home."
            },
            "filipino": {
                "Name": "Tirahan",
                "Activity": "Lugar na idinisenyo bilang tirahan ng mga tao. Hal. condo unit, pribadong bahay."
            },
        },

        'O' : {
            "english": {
                "Name": "Office Building",
                "Activity": "A place designed for retail, commercial, or professional use."
            },
            "filipino": {
                "Name": "Opesina",
                "Activity": "Lugar na idinisenyo para sa tingian, komersyal, o proposesyonal na mga gawain. "
            },
        },

        'M': {
            "english": {
                "Name": "Shopping",
                "Activity": "A place consisting of a collection of retail stores and services. E.g. Ayala Alabang Town Center"
            },
            "filipino": {
                "Name": "Bilihan o Mall",
                "Activity": "Lugar na idinisenyo bilang koleksyon ng mga tindahan at serbisyo. Hal. Ayala Alabang Town Center."
            },
        },

        'E': {
            "english": {
                "Name": "Educational",
                "Activity": "A building designed for education purposes. It consists of many rooms to serve as a hub for students, teachers, and personnel."
            },
            "filipino": {
                "Name": "Edukasyonal",
                "Activity": "Gusaling idinisenyo para sa edukasyon. Binubuo ito ng mga silid o kwarto para sa mga mag-aaral, guro, at iba pang tauhan."
            },
        },

        'G': {
            "english": {
                "Name": "Recreational",
                "Activity": "A building designed for community entertainment, relaxation, and leisure activities."
            },
            "filipino": {
                "Name": "Libangan",
                "Activity": "Gusaling idinisenyo bilang libangan at pahingahan ng komunidad."
            },
        },

        'P': {
            "english": {
                "Name": "Public Assembly",
                "Activity": "A place where people are gathered in one place. "
            },
            "filipino": {
                "Name": "Public Assembly",
                "Activity": "Lugar o kwarto ng pagtitipon ng mga tao. "
            },
        },
    };

    function setActiveByCode(code) {
        ventilationButtons.each(function() {
            if (this.dataset.code == code) {
                $(this).removeClass('bg-dirty-white').addClass('bg-beige');
            } else {
                $(this).addClass('bg-dirty-white').removeClass('bg-beige');
            }
        });
    }

    function setActivityText(code) {

        var englishText = translationTexts[code]['english'];
        var filipinoText = translationTexts[code]['filipino'];

        $('.activity').children('.english-text').html(englishText['Name'] + ': ' + englishText['Activity'])
        $('.activity').children('.filipino-text').html(filipinoText['Name'] + ': ' + filipinoText['Activity'])
    }

    ventilationButtons.each(function() {
        $(this).click(function(event) {
            var ventilationCode = this.dataset.code;

            storeAnswer('room-ventilation-name', this.dataset.name);
            storeAnswer('room-ventilation-code', ventilationCode);

            $('.alert').removeClass('hidden');

            setActivityText(ventilationCode);
            setActiveByCode(ventilationCode);
            allowNextButton();
        }.bind(this));
    });

    if (currentVentilationCode) {
        setActiveByCode(currentVentilationCode);
        setActivityText(currentVentilationCode);
        allowNextButton();
    }

})();
