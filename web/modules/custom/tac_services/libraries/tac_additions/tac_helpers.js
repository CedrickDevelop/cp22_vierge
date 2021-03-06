var TacHelpers = {

    /**
     * Retourne vrai si le service est accepté par l'utilisateur.
     * @param serviceId
     * @returns {boolean}
     */
    'checkCookie': function (serviceId) {
        var cookie = tarteaucitron.cookie.read();
        return (cookie.indexOf(serviceId + '=true') >= 0);
    },

    /**
     * Retourne la liste des cookies
     */
    'getCookiesList': function () {
        var list = tarteaucitron.cookie.read().split('!'),
            cookies={};

        for( var i in list ){
            var split = list[i].split('=');
            if (split[0] === '') {
                continue;   
            }
            cookies[split[0]] = split['1'];
        }

        return cookies;
    },

    /**
     * Retourne une div contenant le message et un lien pour ouvrir le pannel de
     * préférence.
     * @param message
     * @returns {string}
     */
    'getPlaceholder': function (message) {
        return '<div class="TacNoCookieMessage">' +
            '<div class="TacNoCookieMessage-innerWrapper">' +
            '<span class="message">' + message + '</br></span>' +
            '<span class="js-tac-panel-opener">' + Drupal.t('Cliquez ici pour changer vos préférences') + '</span>' +
            '</div>' +
            '</div>';
    },

    /**
     * Permet d'assigner une fonction à différents events (fournis en tableau)
     * @param el
     * @param events
     * @param fn
     *
     */
    'addListenerMulti': function(el, events, fn) {
        events.forEach(function (e) {el.addEventListener(e, fn, false)} );
    }

};

(function (Drupal) {
    Drupal.behaviors.tacHelpers = {
        attach: function attach(context) {

            var tac_settings = drupalSettings.tacServices.globalSettings;

            // OPEN THE PANEL ON CLICK ON ELEMENT WITH THE CLASS 'js-tac-panel-opener'
            document.addEventListener('click', function(event) {
                if(event.target.classList.contains('js-tac-panel-opener')) {
                    tarteaucitron.userInterface.openPanel();
                }
            });
            // $(document).on('click', '.js-tac-panel-opener', function () {
            //     tarteaucitron.userInterface.openPanel();
            // });

            // PREVENT CLICK EVENT TO BUBBLE UP TO THE PARENT
            document.addEventListener('click', function(event) {
                if(event.target.classList.contains('TacNoCookieMessage')) {
                    event.stopPropagation();
                }
            });

            // $(document).on('click', '.TacNoCookieMessage', function (e) {
            //     e.stopPropagation();
            // });

            // RELOAD PAGE AFTER CLICK ON COOKIE BUTTON "YES TO ALL"
            document.addEventListener('click', function(event) {
                if(event.target.id === 'tarteaucitronPersonalize') {
                    if (!tac_settings.high_privacy) {
                        setTimeout(function () {
                            location = location;
                        }, 50);
                    }
                }
            });
            // $('body').on('click', '#tarteaucitronPersonalize', function () {
            //     if (!tac_settings.high_privacy) {
            //         setTimeout(function () {
            //             location = location;
            //         }, 50);
            //     }
            // });
        }
    };
})(Drupal);
