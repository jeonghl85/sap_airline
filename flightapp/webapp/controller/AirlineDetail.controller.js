sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
function (Controller, History) {
    "use strict";

    return Controller.extend("sapui5.demo.flightapp.controller.AirlineDetail", {
        onInit: function () {

            var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("airlinedetail").attachPatternMatched(this._onObjectMatched, this);

        },

        _onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").airlinePath),
				model: "airline"
			});
		},

        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = this.getOwnerComponent.getRouter();
                oRouter.navTo("airline", {}, true);
            }
        }

    });
});