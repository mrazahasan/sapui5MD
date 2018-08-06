jQuery.sap.require("ffbl.training.utils.Formatter");

sap.ui.define([
    'jquery.sap.global',
    'sap/m/MessageToast',
    'sap/m/MessageStrip',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/Filter',
    'sap/ui/model/resource/ResourceModel',
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text"
], function (jQuery, MessageToast, MessageStrip, Controller, JSONModel, Filter, ResourceModel, Dialog, Button, Text) {
    "use strict";

    var CController = Controller.extend("ffbl.training.view.detail", {

        dialog: {},
        selectedProduct: {},
        onBeforeRendering: function () {

            var app = sap.ui.getCore().byId('app');

            var selectedItem = app.getModel('selectedItem');
            var Product = selectedItem.getData();

            var detailData = new JSONModel(Product.ProductDetails);
            this.selectedProduct = Product.ProductDetails;

            app.setModel(detailData, 'detailData');
        },

        onPress: function () {
            var that = this;
            // var _messageStrip = this.getView().byId("_messageStrip");
            // var m = this.createMessage(true, true, "Success", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.");
            // m.attachClose(function (oEvent) {
            //     debugger;

            // });
            // _messageStrip.addContent(m);


        },

        onReject: function () {
            this.dialog = this.createDialog('Confirm', 'Message', 'Are you sure you want to submit your shopping cart?');
            this.dialog.open();
        },

        createDialog: function (title, type, text) {
            var that = this;
            return new Dialog({
                title: title,
                type: type,
                content: new Text({ text: text }),
                beginButton: new Button({
                    text: 'Submit',
                    press: function () {
                        MessageToast.show('Submit pressed!');
                        that.dialog.close();
                    }
                }),
                endButton: new Button({
                    text: 'Cancel',
                    press: function () {
                        that.dialog.close();
                    }
                }),
                afterClose: function () {
                    that.dialog.destroy();
                }
            });
        },


        createMessage: function (showCloseButton, showIcon, type, text) {
            var messageStripObject = new MessageStrip({
                text: text,
                showCloseButton: showCloseButton,
                showIcon: showIcon,
                type: type
            });
            return messageStripObject;
        },


        onListItemPress: function (oEvent) {
            var app = sap.ui.getCore().byId('app');
            var oItem = oEvent.getParameter("listItem"),
                sPath = oItem.getBindingContext('detailData').getPath(),
                oIndex = sPath.split("/"),
                sIndex = oIndex[oIndex.length - 1];
            var selectedListItem = this.selectedProduct.LineItems[sIndex];
            var listItemModel = new JSONModel(selectedListItem);
            app.setModel(listItemModel, 'selectedListItemData');
            this.nav.to("item");
        }
    });


    return CController;

});