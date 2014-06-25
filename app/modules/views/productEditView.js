/*global define:true*/
'use strict';
define(['productModel',
        'text!../modules/templates/productEditView.html',
        'backbone'
    ],
    function(Product, tmplProductEditView) {
        var productEditView = Backbone.View.extend({
            el: '#rootView1',
            initialize: function(router, el) {
                this.product = new Product();
                this.router = router;
            },
            events: {
                'submit #editForm': 'save',
                'click #deleteProduct': 'delete'
            },
            save: function(evnt) {
                var self = this;
                var data = $(evnt.currentTarget).serializeObject();
                this.product = new Product();
                this.product.save(data, {
                    success: function() {
                        self.router.navigate('', {
                            trigger: true
                        });
                    }
                });
                return false;
            },
            delete: function() {
                var self = this;
                this.product.destroy({
                    success: function() {
                        console.log('Product deleted');
                        self.router.navigate('', {
                            trigger: true
                        });
                    }
                });
                return false;
            },
            render: function(options) {
                var self = this;
                if (options.id) {
                    this.product = new Product({
                        id: options.id
                    });
                    this.product.fetch({
                        success: function(product) {
                            var productDetails = _.template(tmplProductEditView, {
                                product: product
                            });
                            self.$el.html(productDetails);
                        }
                    });
                } else {
                    var productDetails = _.template(tmplProductEditView, {
                        product: null
                    });
                    self.$el.html(productDetails);
                }
            }
        });
        return productEditView;
    }
);
