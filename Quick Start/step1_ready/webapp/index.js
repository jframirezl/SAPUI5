sap.ui.define([
    "sap/m/Button",
    "sap/m/MessageToast"
], function(Button, MessageToast){
    "use strict";

    new Button({
            text: "Ready...",
            press: function(){
                    MessageToast.show("Hello world!",{
                        duration: 1000,
                        width: '10%'
                    });
            }
    }).placeAt("content");
});