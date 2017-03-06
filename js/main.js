(function () {
  'use strict';

  var hashes = map(el => {
      return el.getAttribute('id');
    })( document.querySelectorAll('section') ),
    hashLength = hashes.length;

  function randomHashIndex() {
    return scale( hashes.length )( random() );
  }

  function model( e ) {
    return hashes[randomHashIndex()];
  }

  function view( model ) {
    window.location.hash = model;
  }

  function render( e ) {
    return view( model( e ) );
  }

  /**
   * Events
   */

  function onDOMContentLoaded( e ) {
    document.querySelector('html').className = 'js';

    if ( !window.location.hash ) {
      render( e );
    }
  }

  function onKeyup( e ) {
    // Space bar
    if ( e.keyCode === 32 ) {
      render( e );
    }
  }

  document.addEventListener( 'DOMContentLoaded', onDOMContentLoaded );
  window.addEventListener( 'keyup', onKeyup );


  /**
   * Utility functions
   */

  function forEach( fn ) {
    return function( list ) {
      var i = 0,
        len = list.length;

      for ( i; i < len; i += 1 ) {
        fn( list[i] );
      }
    }
  }

  function map( fn ) {
    return function( list ) {
      var mapped = [];

      forEach(item => {
        mapped.push( fn( item ) );
      })( list );

      return mapped;
    }
  }

  function random() {
    return Math.random();
  }

  function scale( ceil ) {
    return function( num ) {
      return Math.floor( num * ceil );
    }
  }
}());
