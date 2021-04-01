sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
function (Controller) {
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
		}

    });
});