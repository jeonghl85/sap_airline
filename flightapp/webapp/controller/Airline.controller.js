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
            },

            onOpenDialog: function () {

                this.getOwnerComponent().openAirlineAdd();

            }
            // onCloseDialog : function () {
            //     // note: We don't need to chain to the pDialog promise, since this event-handler
            //     // is only called from within the loaded dialog itself.
            //     this.byId("AirlineAdd").close();
            // }


        });
    });