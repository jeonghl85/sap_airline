sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sapui5.demo.flightapp.controller.Airline", {
            onInit: function () {

                var oViewModel = new JSONModel({
                    currency: "EUR"
                });
                this.getView().setModel(oViewModel, "view");

            },

            onPress: function (oEvent) {
                var oItem = oEvent.getSource();
                var oRouter = this.getOwnerComponent().getRouter();
                // oRouter.navTo("airlinedetail");
                oRouter.navTo("airlinedetail", {
                    airlinePath: window.encodeURIComponent(oItem.getBindingContext("airline").getPath().substr(1))
                });
            }
        });
    });