/*global define:true*/
'use strict';
define(['productsCollection',
        'text!../modules/templates/productListView.html',
        'backbone'],
    function(Products, pv) {
        var productListView =
            Backbone.View.extend({
                el: '#rootView1',
                initialize: function() {

                },
                render: function() {
                    var self = this;
                    var products = new Products();
                    products.fetch({
                        success: function(products) {
                            var listOfProducts = _.template(pv, {
                                products: products.models
                            });
                            self.$el.html(listOfProducts);
                        }
                    });
                }
            })
        return productListView;
    }
);
