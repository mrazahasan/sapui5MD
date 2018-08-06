jQuery.sap.declare("ffbl.training.utils.dataFactory");

ffbl.training.utils.dataFactory = (function(){
  
  var _selectedItem = null;

  return {

    getSelectedItem: function(){

      return _selectedItem;

    },

    setSelectedItem: function(oItem){
      _selectedItem = oItem;
    }
    
  };
}());