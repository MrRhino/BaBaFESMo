require.config({
    baseUrl: 'scripts',
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'backbone': '../bower_components/backbone/backbone',
        'underscore': '../bower_components/underscore/underscore',
        'helpers': 'lib/helpers',
        'ctlr': '../modules/singletons/pagecontroller',
        // MVC
        'productListView': '../modules/views/productListView',
        'productEditView': '../modules/views/productEditView',
        'router': '../modules/routers/router',
        // Product List View
        'productsCollection': '../modules/collections/productsCollection',
        // Product Edit View
        'productModel': '../modules/models/productModel'
    },
    shim: {
        'jquery': {
            deps: [],
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'ctlr': {
            exports: 'ctlr'
        },
        'helpers': {
            deps: ['jquery']
        }
    }
});

require(['jquery',
        'ctlr',
        'helpers',
        'backbone',
        'underscore',
        //MVC
        'productListView',
        'productEditView',
        'router',
        // Product List View
        'productsCollection',
        // Product Edit View
        'productModel'
    ],
    function($, ctlr) {
        'use strict';
        ctlr.init();
    });
