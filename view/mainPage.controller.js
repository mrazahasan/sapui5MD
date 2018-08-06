jQuery.sap.require("ffbl.training.utils.Formatter");
// jQuery.sap.require("ffbl.training.utils.dataFactory");
sap.ui.define([
    'jquery.sap.global',
    'sap/m/MessageToast',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/Filter',
    'sap/ui/model/resource/ResourceModel'
], function (jQuery, MessageToast, Controller, JSONModel, Filter, ResourceModel) {
    "use strict";

    var CController = Controller.extend("ffbl.training.view.mainPage", {

        
        onInit: function () {
            var oModel = new JSONModel("model/data.json");
            this.getView().setModel(oModel, "listData");
        },

        onListItemPress: function (oEvent) {
            var title = oEvent.getSource().getTitle();
        },

        onPressList: function (oEvent) {
            var oItem = oEvent.getParameter("listItem"),
                sPath = oItem.getBindingContext('listData').getPath(),
                oIndex = sPath.split("/"),
                sIndex = oIndex[oIndex.length - 1];
            var allData = JSON.parse(this.getView().getModel("listData").getJSON());
            var selectedItem = allData.ProductCollection[sIndex];

            var itemModel = new JSONModel(selectedItem);

            var app = sap.ui.getCore().byId('app');
            app.setModel(itemModel, 'selectedItem');

            if (sap.ui.getCore().getElementById("detail")) {
                sap.ui.getCore().getElementById("detail").invalidate();
            }
            this.nav.to("detail");
        }
    });


    return CController;

});
