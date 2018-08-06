/**
 * Created by R A Z A on 5/23/2015.
 */
jQuery.sap.declare("ffbl.training.Component");
//jQuery.sap.require("ffbl.training.util.dataManagerLib");

sap.ui.core.UIComponent.extend("ffbl.training.Component", {

    
    createContent : function() {
        // create root view
        var oView = sap.ui.view({
            id : "app",
            viewName : "ffbl.training.view.App",
            type : "JS",
            viewData : { component : this }
        });
//        var url = (typeof window["useODataPrefix"] !== "undefined" ? jQuery.sap.getModulePath("ffbl.training") : "") + "/sap/opu/odata/sap/ZTIMESHEET_SRV/";
//        var oModel1 = new sap.ui.model.odata.ODataModel(url, false);

//        ffbl.training.util.dataManagerLib.init(oModel1);
//        oView.setModel(oModel1);
        return oView;
    }
});