(function() {
    setupNextBackButtons();
    allowNextButton();

    var background = $('#background');
    var image = $('#image');
    var eng_name = $('#engName');
    var eng_description = $('#engDescription');
    var fil_name = $('#filName');
    var fil_description = $('#filDescription');
    var textColor = $('#text-color');
    var newRiskButton = $('#new-risk');

    var text_translations = {
        "VHR": {
            "english": {
                "name": "Very High Risk",
                "desc":`Caution! This activity has a huge chance for everyone to be exposed to COVID-19.
                        Please reconsider your options especially if the activity is not necessary.
                        Perform all precautionary measures religiously if there is really a need to continue this activity.`
            },
            "filipino": {
                "name": "Napakataas na Panganib",
                "desc":`Ingat! Ang aktibidad na ito ay may mataas na porsyento upang ilagay ang lahat sa pagkakataon na malantad sa COVID-19.
                        Pag-isipan ng mabuti kung kinakailangan bang isagawa ang aktibidad lalo na kung hindi naman ito kinakailangan.
                        Isagawa ng maayos ang lahat ng pag-iingat kung kinakailangan talagang tuparin ang aktibidad na ito.`
            },
        },

        "HR": {
            "english": {
                "name": "High Risk",
                "desc":`Careful! This activity can put you and others in unsafe environments.
                        Make sure to follow precautionary measures to lower your risks of contracting the virus.`
            },
            "filipino": {
                "name": "Mataas na Panganib",
                "desc":`Ingat! Inilalagay mo ang sarili mo pati ang iyong mga kasama sa delikadong kapaligiran kapag ginawa mo ang aktibidad na ito.
                        Siguraduhing sundin ang mga hakbang sa pag-iingat upang mabawasan ang iyong panganib na mahawa sa virus.`
            },
        },

        "MR": {
            "english": {
                "name": "Medium Risk",
                "desc": `Be Careful. It is recommended to practice all safety measures when doing this activity to keep you and the people around you safer.`
            },
            "filipino": {
                "name": "Katamtamang Panganib",
                "desc": `Mag-ingat. Inirerekomenda na i-ehersisyo ang lahat ng mga hakbang na pangkaligtasan habang ginagawa ang aktibidad upang ikaw ay mapanatiling ligtas pati ang iyong mga kasama.`
            },
        },

        "LR": {
            "english": {
                "name": "Low Risk",
                "desc": `Good Job! This activity is estimated to have a low risk as long as everyone is wary of the protective measures given by their respective local authorities and WHO.`
            },
            "filipino": {
                "name": "Mababang Panganib",
                "desc": `Magaling! Ang aktibidad na ito ay tinatantiya na may mababang panganib hangga’t ang lahat ay nag-iingat at sumusunod sa patakarang proteksyon na ibinigay ng mga lokal na awtoridad at ng WHO.`
            },
        },

        "VLR": {
            "english": {
                "name": "Very Low Risk",
                "desc": `Great! This activity is estimated to have a very low risk as long as everyone will follow the protective measures announced by WHO and your respective local government units.`
            },
            "filipino": {
                "name": "Napakababang Panganibb",
                "desc": `Magaling! Ang aktibidad na ito ay tinatantya na may napakababang panganib. Ngunit, importante pa ring sundin ang mga hakbang na pang-proteksyon na inihayag ng WHO at ng mga lokal na pamahalaan.`
            },
        },
    }

    $.ajax({
        type: 'POST',
        url: '/post-result',
        data: JSON.stringify( packAnswers() ),
        contentType: 'application/json',
        cache: false
    }).done(function(data) {

        var code = data.code;

        var eng_text = text_translations[code]['english'];
        var fil_text = text_translations[code]['filipino'];

        background.removeClass('hidden').addClass(code +'_bg');
        textColor.addClass(code + '_txt');
        image.attr('src', '/static/images/results/' + code + '.svg');


        eng_name.text(eng_text['name']);
        eng_description.text(eng_text['desc']);

        fil_name.text(fil_text['name']);
        fil_description.text(fil_text['desc']);


    }).fail(function(error) {
        goTo('/error404');

    });

    newRiskButton.click(function() {
        clearAnswers();
    });
})();
