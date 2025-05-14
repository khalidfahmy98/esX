import { Kernal } from "../esx.js";
import {Alert} from "../_Tools/Tools.js";

// Base Controller to be extended over different modules and controllers
class Controller extends Kernal{

    // controller should provide all functions to be used in any crud operation

    route;
    method;
    data;
    headerAddons;
    constructor() {
        super();
    }
    esXClearing() {
        document.querySelectorAll("#modal input").forEach((input) => {
            input.value = "";
        });
    }

    esXLiveUpdate (Obj , Id){
        const row = document.querySelector(`tr[data-id="${Id}"]`);
        if (!row) {
            console.error(`Element with id ${Id} not found.`);
            return;
        }
        const cells = row.querySelectorAll("p[data-name]");
        cells.forEach((p) => {
            const key = p.getAttribute("data-name");
            if (key && Obj.hasOwnProperty(key)) {
                p.textContent = Obj[key] || 'not found';
            }
        });
    }

    async esXGetting(ControllerObject = { Route : this.route , Method  : this.method , Data : this.data , HeaderAddons : this.headerAddons }){
            if( typeof ControllerObject === 'object'){
                if (ControllerObject.Route !== undefined || ControllerObject.Route !== ""){
                    if(ControllerObject.Method !== undefined || ControllerObject.Method !== ""){
                        return await this.RequestCall(ControllerObject.Route, ControllerObject.Method, ControllerObject.Data , ControllerObject.HeaderAddons)
                            .catch((error) => {
                                Alert("error", error);
                            });
                    }else{
                        console.error(" Controller Object Method Not Found " + ControllerObject.Method );
                    }
                }else{
                    console.error(" Controller Object Element Route Cant Be Null " + ControllerObject.Route);
                }
            }else{
                console.error(" Controller Object Must Be Type Of Object Current " + typeof  ControllerObject );
            }
    }

    async esXPosting(ControllerObject = { Route : this.route , Method  : this.method , Data : this.data , HeaderAddons : this.headerAddons }) {
        if( typeof ControllerObject === 'object'){
            if (ControllerObject.Route !== undefined || ControllerObject.Route !== ""){
                if(ControllerObject.Method !== undefined || ControllerObject.Method !== ""){
                    return this.RequestCall(ControllerObject.Route, ControllerObject.Method, ControllerObject.Data)
                        .catch((error) => {
                            Alert("error", error);
                        });
                }else{
                    console.error(" Controller Object Method Not Found " + ControllerObject.Method );
                }
            }else{
                console.error(" Controller Object Element Route Cant Be Null " + ControllerObject.Route);
            }
        }else{
            console.error(" Controller Object Must Be Type Of Object Current " + typeof  ControllerObject );
        }
    }






}
export { Controller };
