jQuery.sap.declare("ffbl.training.utils.Formatter");


ffbl.training.utils.Formatter = (function () {
  return {
    status: function (sStatus) {

      return sStatus == "Active" ? "Success" : "Warning";
    },
    dateTime: function (sDate,stime) {
      var timeArray= stime.split(":");
      var shours = timeArray[0];
      var smin = timeArray[1];
      var sec = timeArray[2];
      var oDate = new Date(sDate);
      oDate.setHours(shours);
      oDate.setMinutes(smin);
      oDate.setSeconds(sec);

      return oDate.toGMTString();
    }
  };
}());