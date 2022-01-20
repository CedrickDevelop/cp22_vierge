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

  /**
   * Class exemple de gestion du footer
   */

  var Footer =
  /*#__PURE__*/
  function () {
    function Footer() {
      _classCallCheck(this, Footer);
    }

    _createClass(Footer, [{
      key: "init",

      /**
       * init
       */
      value: function init() {
        console.log('hello footer');
      }
      /**
       * Attach.
       * @param context
       */

    }, {
      key: "attach",
      value: function attach(context) {
        if (T.contextIsRoot(context)) {
          this.init();
        }
      }
    }]);

    return Footer;
  }();

  var footer = new Footer();

  /**
   * Class de gestion du header mobile
   */

  var Header =
  /*#__PURE__*/
  function () {
    function Header() {
      _classCallCheck(this, Header);
    }

    _createClass(Header, [{
      key: "init",

      /**
       * init
       */
      value: function init() {
        console.log('hello header');
      }
      /**
       * Attach.
       * @param context
       */

    }, {
      key: "attach",
      value: function attach(context) {
        if (T.contextIsRoot(context)) {
          this.init();
        }
      }
    }]);

    return Header;
  }();

  var header = new Header();

  (function (Drupal) {

    Drupal.behaviors.footer = footer;
    Drupal.behaviors.header = header;
  })(Drupal);

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsic3JjL2phdmFzY3JpcHQvc3JjL2NvbW1vbi9kcnVwYWwvZHJ1cGFsLmpzIiwic3JjL2phdmFzY3JpcHQvc3JjL21haW4vc3JjL0Zvb3Rlci5qcyIsInNyYy9qYXZhc2NyaXB0L3NyYy9tYWluL3NyYy9IZWFkZXIuanMiLCJzcmMvamF2YXNjcmlwdC9zcmMvbWFpbi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCAkID0galF1ZXJ5O1xuZXhwb3J0IGxldCBUID0ge1xuICAgIC8qKlxuICAgICAqIFJlbnZvaWUgdnJhaSBzaSBsZSBjb250ZXh0IGVzdCByb290IChkb2N1bWVudClcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGNvbnRleHRJc1Jvb3Q6IGZ1bmN0aW9uKCBjb250ZXh0KXtcbiAgICAgICAgcmV0dXJuICdIVE1MJyA9PT0gJCgkKGNvbnRleHQpLmNoaWxkcmVuKClbMF0pLnByb3AoXCJ0YWdOYW1lXCIpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmV0b3VybmUgdnJhaSBzaSBsYSB2YXJpYWJsZSBlc3QgZMOpZmluaWUuXG4gICAgICogQHBhcmFtIHZhcmlhYmxlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNEZWZpbmVkOiBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnICE9PSB0eXBlb2YgdmFyaWFibGU7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXRvdXJuZSBsYSB0YWlsbGUgZGUgbGEgZmVuw6p0cmUgZGFucyB1biBvYmpldCBhdmVjIC53aWR0aCBldCAuaGVpZ2h0XG4gICAgICogQHJldHVybnMgb2JqZWN0XG4gICAgICovXG4gICAgdmlld3BvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSB3aW5kb3csIGEgPSAnaW5uZXInO1xuICAgICAgICBpZiAoISgnaW5uZXJXaWR0aCcgaW4gd2luZG93ICkpIHtcbiAgICAgICAgICAgIGEgPSAnY2xpZW50JztcbiAgICAgICAgICAgIGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB3aWR0aCA6IGVbIGErJ1dpZHRoJyBdICwgaGVpZ2h0IDogZVsgYSsnSGVpZ2h0JyBdfTtcbiAgICB9XG59O1xuZXhwb3J0IGxldCBEcnVwYWxIZWxwZXJzID0ge1xuICAgIGdldEJhc2VQYXRoKCkge1xuICAgICAgICByZXR1cm4gZHJ1cGFsU2V0dGluZ3MucGF0aC5iYXNlVXJsICsgZHJ1cGFsU2V0dGluZ3MucGF0aC5wYXRoUHJlZml4O1xuICAgIH1cbn07IiwiaW1wb3J0IHskLCBUfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RydXBhbC9kcnVwYWxcIjtcbi8qKlxuICogQ2xhc3MgZXhlbXBsZSBkZSBnZXN0aW9uIGR1IGZvb3RlclxuICovXG5jbGFzcyBGb290ZXIge1xuXG4gICAgLyoqXG4gICAgICogaW5pdFxuICAgICAqL1xuICAgIGluaXQoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvIGZvb3RlcicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaC5cbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGF0dGFjaChjb250ZXh0KSB7XG4gICAgICAgIGlmIChULmNvbnRleHRJc1Jvb3QoY29udGV4dCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgbGV0IGZvb3RlciA9IG5ldyBGb290ZXIoKTtcbiIsImltcG9ydCB7JCwgVH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kcnVwYWwvZHJ1cGFsXCI7XG4vKipcbiAqIENsYXNzIGRlIGdlc3Rpb24gZHUgaGVhZGVyIG1vYmlsZVxuICovXG5jbGFzcyBIZWFkZXIge1xuXG4gICAgLyoqXG4gICAgICogaW5pdFxuICAgICAqL1xuICAgIGluaXQoKXtcbiAgICAgIGNvbnNvbGUubG9nKCdoZWxsbyBoZWFkZXInKTtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoLlxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgYXR0YWNoKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKFQuY29udGV4dElzUm9vdChjb250ZXh0KSkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgaGVhZGVyID0gbmV3IEhlYWRlcigpO1xuIiwiaW1wb3J0IHtmb290ZXJ9IGZyb20gXCIuL3NyYy9Gb290ZXJcIjtcbmltcG9ydCB7aGVhZGVyfSBmcm9tIFwiLi9zcmMvSGVhZGVyXCI7XG5cbihmdW5jdGlvbiAoRHJ1cGFsKSB7IC8vIGNsb3N1cmVcbiAgICAndXNlIHN0cmljdCc7XG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5mb290ZXIgPSBmb290ZXI7XG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5oZWFkZXIgPSBoZWFkZXI7XG59KERydXBhbCkpO1xuIl0sIm5hbWVzIjpbIiQiLCJqUXVlcnkiLCJUIiwiY29udGV4dElzUm9vdCIsImNvbnRleHQiLCJjaGlsZHJlbiIsInByb3AiLCJpc0RlZmluZWQiLCJ2YXJpYWJsZSIsInZpZXdwb3J0IiwiZSIsIndpbmRvdyIsImEiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJ3aWR0aCIsImhlaWdodCIsIkZvb3RlciIsImNvbnNvbGUiLCJsb2ciLCJpbml0IiwiZm9vdGVyIiwiSGVhZGVyIiwiaGVhZGVyIiwiRHJ1cGFsIiwiYmVoYXZpb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQU8sSUFBTUEsQ0FBQyxHQUFHQyxNQUFWO0FBQ1AsRUFBTyxJQUFJQyxDQUFDLEdBQUc7RUFDWDs7OztFQUlBQyxFQUFBQSxhQUFhLEVBQUUsdUJBQVVDLE9BQVYsRUFBa0I7RUFDN0IsV0FBTyxXQUFXSixDQUFDLENBQUNBLENBQUMsQ0FBQ0ksT0FBRCxDQUFELENBQVdDLFFBQVgsR0FBc0IsQ0FBdEIsQ0FBRCxDQUFELENBQTRCQyxJQUE1QixDQUFpQyxTQUFqQyxDQUFsQjtFQUNILEdBUFU7O0VBUVg7Ozs7O0VBS0FDLEVBQUFBLFNBQVMsRUFBRSxtQkFBVUMsUUFBVixFQUFvQjtFQUMzQixXQUFPLGdCQUFnQixPQUFPQSxRQUE5QjtFQUNILEdBZlU7O0VBZ0JYOzs7O0VBSUFDLEVBQUFBLFFBQVEsRUFBRSxvQkFBWTtFQUNsQixRQUFJQyxDQUFDLEdBQUdDLE1BQVI7RUFBQSxRQUFnQkMsQ0FBQyxHQUFHLE9BQXBCOztFQUNBLFFBQUksRUFBRSxnQkFBZ0JELE1BQWxCLENBQUosRUFBZ0M7RUFDNUJDLE1BQUFBLENBQUMsR0FBRyxRQUFKO0VBQ0FGLE1BQUFBLENBQUMsR0FBR0csUUFBUSxDQUFDQyxlQUFULElBQTRCRCxRQUFRLENBQUNFLElBQXpDO0VBQ0g7O0VBQ0QsV0FBTztFQUFFQyxNQUFBQSxLQUFLLEVBQUdOLENBQUMsQ0FBRUUsQ0FBQyxHQUFDLE9BQUosQ0FBWDtFQUEyQkssTUFBQUEsTUFBTSxFQUFHUCxDQUFDLENBQUVFLENBQUMsR0FBQyxRQUFKO0VBQXJDLEtBQVA7RUFDSDtFQTNCVSxDQUFSOztFQ0FQOzs7O01BR01NOzs7Ozs7Ozs7O0VBRUY7Ozs2QkFHTTtFQUNGQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0VBQ0g7RUFFRDs7Ozs7Ozs2QkFJT2hCLFNBQVM7RUFDWixVQUFJRixDQUFDLENBQUNDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQUosRUFBOEI7RUFDMUIsYUFBS2lCLElBQUw7RUFDSDtFQUNKOzs7Ozs7QUFHTCxFQUFPLElBQUlDLE1BQU0sR0FBRyxJQUFJSixNQUFKLEVBQWI7O0VDdkJQOzs7O01BR01LOzs7Ozs7Ozs7O0VBRUY7Ozs2QkFHTTtFQUNKSixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0VBQ0Q7RUFJRDs7Ozs7Ozs2QkFJT2hCLFNBQVM7RUFDWixVQUFJRixDQUFDLENBQUNDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQUosRUFBOEI7RUFDMUIsYUFBS2lCLElBQUw7RUFDSDtFQUNKOzs7Ozs7QUFHTCxFQUFPLElBQUlHLE1BQU0sR0FBRyxJQUFJRCxNQUFKLEVBQWI7O0VDdkJOLFdBQVVFLE1BQVYsRUFBa0I7QUFBRTtFQUVqQkEsRUFBQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCSixNQUFqQixHQUEwQkEsTUFBMUI7RUFDQUcsRUFBQUEsTUFBTSxDQUFDQyxTQUFQLENBQWlCRixNQUFqQixHQUEwQkEsTUFBMUI7RUFDSCxDQUpBLEVBSUNDLE1BSkQsQ0FBRDs7OzsifQ==
