(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }

  var $ = jQuery;
  var T = {
    /**
     * Renvoie vrai si le context est root (document)
     * @param context
     */
    contextIsRoot: function contextIsRoot(context) {
      return 'HTML' === $($(context).children()[0]).prop("tagName");
    },

    /**
     * Retourne vrai si la variable est définie.
     * @param variable
     * @returns {boolean}
     */
    isDefined: function isDefined(variable) {
      return 'undefined' !== typeof variable;
    },

    /**
     * Retourne la taille de la fenêtre dans un objet avec .width et .height
     * @returns object
     */
    viewport: function viewport() {
      var e = window,
        a = 'inner';

      if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
      }

      return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
      };
    }
  };

  var PopinDefault = /*#__PURE__*/function () {
    function PopinDefault() {
      _classCallCheck(this, PopinDefault);
    }

    _createClass(PopinDefault, [{
      key: "init",

      /**
       * Initialize event listeners
       */
      value: function init() {
        var _this = this;

        this.$body = $('body');
        this.$popins = $('.Popin');
        this.$popinWrappers = $('.Popin-wrapper');
        this.$triggers = $('.Popin-trigger'); //Hamburger element to close touch menu on popin opening :

        this.$hamburger = $('#hamburger');
        this.$popinWrappers.prepend('<span class="Popin-close icon-cross fal fa-times"></span>');
        this.$triggers.on('click', function (ev) {
          _newArrowCheck(this, _this);

          this.triggerClick(ev);
        }.bind(this));
        this.$popins.on('click', '.Popin-close', function (ev) {
          _newArrowCheck(this, _this);

          this.closePopins();
        }.bind(this));
        this.$popins.on('click', function (ev) {
          _newArrowCheck(this, _this);

          this.closePopins();
        }.bind(this));
        this.$popins.on('click', '.Popin-wrapper', function (e) {
          e.stopPropagation();
        });
      }
      /**
       * Open modal when click on trigger
       */

    }, {
      key: "triggerClick",
      value: function triggerClick(ev) {
        if (this.$hamburger.hasClass('open')) {
          this.$hamburger.trigger('click');
        }

        this.closePopins();
        var target = $(ev.currentTarget).data("popin-target");
        var popin = $(target);
        popin.addClass('open');
        this.$body.addClass('no-scroll');
      }
      /**
       * Close all popins
       */

    }, {
      key: "closePopins",
      value: function closePopins() {
        this.$popins.removeClass('open'); //REMOVE FROZEN STATE OF BODY

        this.$body.removeClass('no-scroll');
      }
    }, {
      key: "attach",
      value: function attach(context) {
        if (T.contextIsRoot(context)) {
          this.init(context);
        }
      }
    }]);

    return PopinDefault;
  }();

  var popinDefault = new PopinDefault();

  (function (Drupal) {

    Drupal.behaviors.popinDefault = popinDefault;
  })(Drupal);

}());
//# sourceMappingURL=popin.js.map
