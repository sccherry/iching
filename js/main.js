(function () {
  'use strict';

  var app = {
    routeChange: function () {
      window.location.hash = '#' + app.hashes[app.hexagram.select()];
    },
    init: function () {
      app.hashes = map(document.querySelectorAll('section'), function (el) {
        return el.getAttribute('id');
      });

      app.hexagram = new Hexagram(app.hashes.length);

      window.addEventListener('keydown', function (e) {
        // Space bar
        if (e.keyCode === 32 && !e.repeat) {
          app.routeChange();
        }
      });

      if (!window.location.hash) {
        app.routeChange();
      }
    }
  };

  // https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
  function forEach(array, callback, scope) {
    for (let i = 0; i < array.length; i += 1) {
      callback.call(scope, array[i], i);
    }
  }

  function map(array, callback, scope) {
    var mapped = [];

    forEach(array, function (value, index) {
      mapped.push(callback(value, index));
    }, scope);

    return mapped;
  }

  function Hexagram(num) {
    this.num = num;
  }

  Hexagram.prototype.select = function () {
    // TODO more accurate way of selecting index
    let index = Math.floor(Math.random() * this.num);

    return index;
  };

  document.addEventListener('DOMContentLoaded', function (e) {
    let html = document.querySelector('html');

    html.className = 'js';

    app.init();
  });
}());
