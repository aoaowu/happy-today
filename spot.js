(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('T'))
        .then(() => engine.shake())
        .then(() => engine.toText('T'))
        .then(() => engine.shake())
        .then(() => engine.toText('T'))
        .then(() => engine.shake())
        .then(() => engine.toText('H'))
        .then(() => engine.shake())
        .then(() => engine.toText('a'))
        .then(() => engine.shake())
        .then(() => engine.toText('p'))
        .then(() => engine.shake())
        .then(() => engine.toText('p'))
        .then(() => engine.shake())
        .then(() => engine.toText('y'))
        .then(() => engine.shake())
        .then(() => engine.toText('T'))
        .then(() => engine.shake())
        .then(() => engine.toText('o'))
        .then(() => engine.shake())
        .then(() => engine.toText('d'))
        .then(() => engine.shake())
        .then(() => engine.toText('a'))
        .then(() => engine.shake())
        .then(() => engine.toText('y'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
