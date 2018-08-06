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

    var CController = Controller.extend("ffbl.training.view.item", {
        onBack: function () {
            this.nav.back("detail");
        }
    });


    return CController;

});