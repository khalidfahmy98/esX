import { Kernal } from "../esx.js";
import {Alert} from "../_Tools/Tools.js";

// Base Controller to be extended over different modules and controllers
/**
 *
 *
 * ----------------------- esX Base Class Controller
 * in esX you will find all the needed function to do your requests handled correctly with highest flexability needed
 * esXClearing
 * esXLiveUpdate
 * esXRequestValidity
 *
 * esXPOST      => does POST actions
 * esXGET       => does GET actions
 * esXRequest   => does any POST - GET - PUT or any action needed
 *
 * each one of those function helps you to do a request and update the current live module in the DOM  without any need
 * to reload again and fetch back the data whatever the size is from the server again
 *
 *
 *
 */
class Controller extends Kernal{

    // controller should provide all functions to be used in any crud operation

    route;
    method;
    data;
    headerAddons;
    request_error ;
    constructor() {
        super();
        this.request_error = 0;
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

    esXRequestValidity( RequestObject  = { Route : this.route, Method : this.method , Data : this.data  , RequestHeaders : this.headerAddons  } ){
        if( typeof RequestObject === 'object') {
            if( Object.keys(RequestObject).length >= 2 ){
                if( RequestObject.Method !== undefined || true || RequestObject.Route !== null || true ) {
                    this.request_error = 0;
                }else{
                    this.request_error++;
                    console.error(` Request Object Method Or Route cant be null or undefined  ${ RequestObject.Method}  ${RequestObject.Route}`);
                }
            }else{
                this.request_error++;
                console.error(`RequestObject cant be empty ${RequestObject}`);
            }
        }else{
            this.request_error++;
            console.error(`RequestObject must be type of object current is   ${typeof RequestObject}`);
        }
        return this.request_error;
    }

    async esX_GET(RequestObject = { Route : this.route , Method  : "GET" , Data : this.data , HeaderAddons : this.headerAddons }){
        if( this.esXRequestValidity(RequestObject) === 0 ){
            return await this.RequestCall(RequestObject.Route, RequestObject.Method, RequestObject.Data , RequestObject.HeaderAddons)
                .catch((error) => {
                    Alert("error", error);
                });
        }else{
            console.error(` Check your Request Validity and data passed  esX_GET`);
        }
    }

    async esX_POST(RequestObject = { Route : this.route , Method  : "POST" , Data : this.data , HeaderAddons : this.headerAddons }) {
        if( this.esXRequestValidity(RequestObject) === 0 ){
            return await this.RequestCall(RequestObject.Route, RequestObject.Method, RequestObject.Data , RequestObject.HeaderAddons)
                .catch((error) => {
                    Alert("error", error);
                });
        }else{
            console.error(` Check your Request Validity and data passed  while esX_POST`);
        }
    }

    async esXRequest(RequestObject  = { Route : this.route, Method : this.method , Data : this.data  , RequestHeaders : this.headerAddons  }){
        if ( this.esXRequestValidity(RequestObject) === 0 ){
        //     Do Request Proceess
            console.log("Passed Request In Process ...")
        }else{
            console.error(` Check your Request Validity and data passed `);
        }
    }




}
export { Controller };
