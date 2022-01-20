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

  var YoutubePlayer =
  /*#__PURE__*/
  function () {
    function YoutubePlayer() {
      _classCallCheck(this, YoutubePlayer);
    }

    _createClass(YoutubePlayer, [{
      key: "init",

      /**
       * Initialisation
       * @param mediaVideo
       */
      value: function init(mediaVideo) {
        this.$youtubeApiVars = {
          enablejsapi: 1,
          showinfo: 0,
          rel: 0,
          origin: 'http://localhost',
          controls: 1,
          autoplay: 1,
          playsinline: 1,
          iv_load_policy: 3
        };
        var YTPlayers = [];
        this.addYoutubePlayer(mediaVideo, YTPlayers);
      }
    }, {
      key: "addYoutubePlayer",

      /**
       * Ajout du player youtube
       * Si l'utilisateur a accepté, on créé le player
       * Sinon on affiche un message
       *
       * @param video
       * @param YTPlayers
       */
      value: function addYoutubePlayer(video, YTPlayers) {
        var videoPlayer = video.find('.MediaVideo-player');
        var videoID = videoPlayer.data('video-id');
        var videoContainerId = videoPlayer.attr('id');

        if (YTPlayers[videoContainerId] === undefined) {
          if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
            // Ajout d'une div avec lien pour ouvrir le pannel
            var $tacMessage = $(video).find('.TacNoCookieMessage');

            if ($tacMessage.length === 0) {
              video.append(TacHelpers.getPlaceholder(Drupal.t('Vos préférences en matière de cookies ne vous permet pas de visionner cette <b>vidéo Youtube</b>'))).show();
              video.children('.TacNoCookieMessage').show();
            }
          } else {
            YTPlayers[videoContainerId] = new YT.Player(videoContainerId, {
              videoId: videoID,
              playerVars: this.$youtubeApiVars
            });
            $(video).find('.js-youtube-player').addClass('hidden');
            video.find('.js-video-img').addClass('invisible');
            video.addClass('video-visible');
          }
        }
      }
    }, {
      key: "attach",
      value: function attach(context) {
        var _this = this;

        if ($('.MediaVideo--youtube', context).length) {
          $('.MediaVideo--youtube').on('click', function (ev) {
            _this.init($(ev.currentTarget));
          });
        }
      }
    }]);

    return YoutubePlayer;
  }();

  var youtubePlayerTools = new YoutubePlayer();

  (function (Drupal) {

    Drupal.behaviors.youtubePlayer = youtubePlayerTools;
  })(Drupal);

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW9QbGF5ZXJzLmpzIiwic291cmNlcyI6WyJzcmMvamF2YXNjcmlwdC9zcmMvY29tbW9uL2RydXBhbC9kcnVwYWwuanMiLCJzcmMvamF2YXNjcmlwdC9zcmMvdmlkZW9QbGF5ZXJzL3NyYy9Zb3V0dWJlUGxheWVyLmpzIiwic3JjL2phdmFzY3JpcHQvc3JjL3ZpZGVvUGxheWVycy92aWRlb1BsYXllcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0ICQgPSBqUXVlcnk7XG5leHBvcnQgbGV0IFQgPSB7XG4gICAgLyoqXG4gICAgICogUmVudm9pZSB2cmFpIHNpIGxlIGNvbnRleHQgZXN0IHJvb3QgKGRvY3VtZW50KVxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgY29udGV4dElzUm9vdDogZnVuY3Rpb24oIGNvbnRleHQpe1xuICAgICAgICByZXR1cm4gJ0hUTUwnID09PSAkKCQoY29udGV4dCkuY2hpbGRyZW4oKVswXSkucHJvcChcInRhZ05hbWVcIik7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXRvdXJuZSB2cmFpIHNpIGxhIHZhcmlhYmxlIGVzdCBkw6lmaW5pZS5cbiAgICAgKiBAcGFyYW0gdmFyaWFibGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0RlZmluZWQ6IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiB2YXJpYWJsZTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJldG91cm5lIGxhIHRhaWxsZSBkZSBsYSBmZW7DqnRyZSBkYW5zIHVuIG9iamV0IGF2ZWMgLndpZHRoIGV0IC5oZWlnaHRcbiAgICAgKiBAcmV0dXJucyBvYmplY3RcbiAgICAgKi9cbiAgICB2aWV3cG9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHdpbmRvdywgYSA9ICdpbm5lcic7XG4gICAgICAgIGlmICghKCdpbm5lcldpZHRoJyBpbiB3aW5kb3cgKSkge1xuICAgICAgICAgICAgYSA9ICdjbGllbnQnO1xuICAgICAgICAgICAgZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHdpZHRoIDogZVsgYSsnV2lkdGgnIF0gLCBoZWlnaHQgOiBlWyBhKydIZWlnaHQnIF19O1xuICAgIH1cbn07XG5leHBvcnQgbGV0IERydXBhbEhlbHBlcnMgPSB7XG4gICAgZ2V0QmFzZVBhdGgoKSB7XG4gICAgICAgIHJldHVybiBkcnVwYWxTZXR0aW5ncy5wYXRoLmJhc2VVcmwgKyBkcnVwYWxTZXR0aW5ncy5wYXRoLnBhdGhQcmVmaXg7XG4gICAgfVxufTsiLCJpbXBvcnQgeyR9IGZyb20gJy4uLy4uL2NvbW1vbi9kcnVwYWwvZHJ1cGFsJztcblxuY2xhc3MgWW91dHViZVBsYXllciB7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNhdGlvblxuICAgICAqIEBwYXJhbSBtZWRpYVZpZGVvXG4gICAgICovXG4gICAgaW5pdChtZWRpYVZpZGVvKSB7XG5cbiAgICAgICAgdGhpcy4keW91dHViZUFwaVZhcnMgPSB7XG4gICAgICAgICAgICBlbmFibGVqc2FwaTogMSxcbiAgICAgICAgICAgIHNob3dpbmZvOiAwLFxuICAgICAgICAgICAgcmVsOiAwLFxuICAgICAgICAgICAgb3JpZ2luOiAnaHR0cDovL2xvY2FsaG9zdCcsXG4gICAgICAgICAgICBjb250cm9sczogMSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiAxLFxuICAgICAgICAgICAgcGxheXNpbmxpbmU6IDEsXG4gICAgICAgICAgICBpdl9sb2FkX3BvbGljeTogM1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBZVFBsYXllcnMgPSBbXTtcblxuICAgICAgICB0aGlzLmFkZFlvdXR1YmVQbGF5ZXIobWVkaWFWaWRlbywgWVRQbGF5ZXJzKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBBam91dCBkdSBwbGF5ZXIgeW91dHViZVxuICAgICAqIFNpIGwndXRpbGlzYXRldXIgYSBhY2NlcHTDqSwgb24gY3LDqcOpIGxlIHBsYXllclxuICAgICAqIFNpbm9uIG9uIGFmZmljaGUgdW4gbWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHZpZGVvXG4gICAgICogQHBhcmFtIFlUUGxheWVyc1xuICAgICAqL1xuICAgIGFkZFlvdXR1YmVQbGF5ZXIodmlkZW8sIFlUUGxheWVycykge1xuICAgICAgICBsZXQgdmlkZW9QbGF5ZXIgPSB2aWRlby5maW5kKCcuTWVkaWFWaWRlby1wbGF5ZXInKTtcbiAgICAgICAgbGV0IHZpZGVvSUQgPSB2aWRlb1BsYXllci5kYXRhKCd2aWRlby1pZCcpO1xuICAgICAgICBsZXQgdmlkZW9Db250YWluZXJJZCA9IHZpZGVvUGxheWVyLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgaWYgKFlUUGxheWVyc1t2aWRlb0NvbnRhaW5lcklkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKFlUKSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mKFlULlBsYXllcikgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gQWpvdXQgZCd1bmUgZGl2IGF2ZWMgbGllbiBwb3VyIG91dnJpciBsZSBwYW5uZWxcbiAgICAgICAgICAgICAgICBsZXQgJHRhY01lc3NhZ2UgPSAkKHZpZGVvKS5maW5kKCcuVGFjTm9Db29raWVNZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgaWYgKCR0YWNNZXNzYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2aWRlby5hcHBlbmQoVGFjSGVscGVycy5nZXRQbGFjZWhvbGRlcihEcnVwYWwudCgnVm9zIHByw6lmw6lyZW5jZXMgZW4gbWF0acOocmUgZGUgY29va2llcyBuZSB2b3VzIHBlcm1ldCBwYXMgZGUgdmlzaW9ubmVyIGNldHRlIDxiPnZpZMOpbyBZb3V0dWJlPC9iPicpKSkuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB2aWRlby5jaGlsZHJlbignLlRhY05vQ29va2llTWVzc2FnZScpLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBZVFBsYXllcnNbdmlkZW9Db250YWluZXJJZF0gPSBuZXcgWVQuUGxheWVyKHZpZGVvQ29udGFpbmVySWQsIHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9JZDogdmlkZW9JRCxcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyVmFyczogdGhpcy4keW91dHViZUFwaVZhcnNcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQodmlkZW8pLmZpbmQoJy5qcy15b3V0dWJlLXBsYXllcicpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB2aWRlby5maW5kKCcuanMtdmlkZW8taW1nJykuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIHZpZGVvLmFkZENsYXNzKCd2aWRlby12aXNpYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdHRhY2goY29udGV4dCkge1xuICAgICAgICBpZigkKCcuTWVkaWFWaWRlby0teW91dHViZScsIGNvbnRleHQpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLk1lZGlhVmlkZW8tLXlvdXR1YmUnKS5vbignY2xpY2snLCBldiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCQoZXYuY3VycmVudFRhcmdldCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgeW91dHViZVBsYXllclRvb2xzID0gbmV3IFlvdXR1YmVQbGF5ZXIoKTtcbiIsImltcG9ydCB7eW91dHViZVBsYXllclRvb2xzfSBmcm9tIFwiLi9zcmMvWW91dHViZVBsYXllclwiO1xuXG4oZnVuY3Rpb24gKERydXBhbCkgeyAvLyBjbG9zdXJlXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gUGxheWVyIFlvdXR1YmVcbiAgICBEcnVwYWwuYmVoYXZpb3JzLnlvdXR1YmVQbGF5ZXIgPSB5b3V0dWJlUGxheWVyVG9vbHM7XG59KERydXBhbCkpOyJdLCJuYW1lcyI6WyIkIiwialF1ZXJ5IiwiWW91dHViZVBsYXllciIsIm1lZGlhVmlkZW8iLCIkeW91dHViZUFwaVZhcnMiLCJlbmFibGVqc2FwaSIsInNob3dpbmZvIiwicmVsIiwib3JpZ2luIiwiY29udHJvbHMiLCJhdXRvcGxheSIsInBsYXlzaW5saW5lIiwiaXZfbG9hZF9wb2xpY3kiLCJZVFBsYXllcnMiLCJhZGRZb3V0dWJlUGxheWVyIiwidmlkZW8iLCJ2aWRlb1BsYXllciIsImZpbmQiLCJ2aWRlb0lEIiwiZGF0YSIsInZpZGVvQ29udGFpbmVySWQiLCJhdHRyIiwidW5kZWZpbmVkIiwiWVQiLCJQbGF5ZXIiLCIkdGFjTWVzc2FnZSIsImxlbmd0aCIsImFwcGVuZCIsIlRhY0hlbHBlcnMiLCJnZXRQbGFjZWhvbGRlciIsIkRydXBhbCIsInQiLCJzaG93IiwiY2hpbGRyZW4iLCJ2aWRlb0lkIiwicGxheWVyVmFycyIsImFkZENsYXNzIiwiY29udGV4dCIsIm9uIiwiZXYiLCJpbml0IiwiY3VycmVudFRhcmdldCIsInlvdXR1YmVQbGF5ZXJUb29scyIsImJlaGF2aW9ycyIsInlvdXR1YmVQbGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBTyxJQUFNQSxDQUFDLEdBQUdDLE1BQVY7O01DRURDOzs7Ozs7Ozs7O0VBRUY7Ozs7MkJBSUtDLFlBQVk7RUFFYixXQUFLQyxlQUFMLEdBQXVCO0VBQ25CQyxRQUFBQSxXQUFXLEVBQUUsQ0FETTtFQUVuQkMsUUFBQUEsUUFBUSxFQUFFLENBRlM7RUFHbkJDLFFBQUFBLEdBQUcsRUFBRSxDQUhjO0VBSW5CQyxRQUFBQSxNQUFNLEVBQUUsa0JBSlc7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
