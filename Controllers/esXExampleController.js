import {Controller , Web , _CRUDING  } from "../esx.js";
import { esXComponentRow } from "../Components/esXComponentRow.js";
import {Alert, Getter, languages, locale , Swap} from "../_Tools/Tools.js";
import { Models } from "../esx.js";
class esXExampleController  extends Controller {
    #_routes;
    #_listData = [];
    #esxModelInstance;
    #_guiModel;
    #_getter;
    #esXObjToCreate;
    #CurrentObject;
    #_crud;
    // Add your properties to be used as model
    constructor() {
        super();
        this.#_routes = new Web().GetRoutesGroup("activityTypeURL");
        this.#_crud = new _CRUDING();
        this.#esxModelInstance = Models.esXModelExampleModel ;
        this.#_guiModel  = ["name_en", "name_ar", "description", "status"];
        this.#_getter = new Getter();
    }
    // Listing Example of usage esX controller base class
    async GetDataSamples(DrawWrapper) {
        // List function used by this because it is extended from Controller base class
        this.#_listData = await this.esXGetting({
            Route: this.#_routes.list,
            Method: "GET",
            Data: null,
        });
        // this code could be changed to list or draw in whatever you want to
        console.log(this.#_listData);
       
    }
    //  Create Example of usage esX base controller class
    async CreateDataSamples(Wrapper) {
        // Logic by using esX tools to wrap a model to be added
        this.#ActivityToCreate = this.#_getter.GetValues(this.#_guiModel);
        const validated = this.#_crud.CRUDING({
                CreationObject: this.#ActivityToCreate,
                Properties: this.#_guiModel,
                Validate : true,
                ValidateNames: this.#_guiModel,
        });
        if( validated ){
            Swap(this.#activityModel , this.#ActivityToCreate); // to handle the request mapped over the original model
            this.esXPosting({
                Route: this.#_routes.create,
                Method: "POST",
                Data: this.#activityModel,
            }).then((result) => {
                this.#_listData.activity_types.push(result.activity_type);
                document.getElementById(Wrapper).innerHTML += ActivityTypeRow(result.activity_type); // change to whatever your component is
                Alert("success", locale === 'en' ? languages.activity.en.action_success : languages.activity.ar.action_success);
                this.esXClearing();
            });
        }else{
            Alert("error", locale === 'en' ? languages.activity.en.action_failure : languages.activity.ar.action_failure);
        }
    }
    // Update Example of usage esX base controller class
    async UpdateActivity() {
        // Logic by using esX tools to wrap a model to be added
        const validated = this.#_crud.CRUDING({
            CreationObject: this.#_getter.GetValues(this.#_guiModel),
            Properties: this.#_guiModel,
            Validate : true,
            ValidateNames: this.#_guiModel,
        });
        if( validated ){
            Swap(this.#CurrentObject , this.#_getter.GetValues(this.#_guiModel));
            Swap(this.#activityModel , this.#CurrentObject);
            this.esXPosting({
                Route: this.#_routes.update,
                Method: "POST",
                Data: this.#activityModel,
            }).then((result) => {
                this.#_listData.activity_types.map(item => item.id == this.#CurrentObject.id ? result.activity_type : item);
                this.esXLiveUpdate(result.activity_type , result.activity_type.id);
                Alert("success", locale === 'en' ? languages.activity.en.action_success : languages.activity.ar.action_success);
                this.esXClearing();
            });
        }else{
            Alert("error", locale === 'en' ? languages.activity.en.action_failure : languages.activity.ar.action_failure);
        }
    }
    // Normal case to just swap and get the object from the list into the form you can ignore OpenEdit function based on your case
    OpenEdit(Actionbutton){
        this.#CurrentObject = this.#_crud.DOMEdit({
            UpdateModel: this.#_listData.activity_types,
            ActionButton: Actionbutton,
            DataAttribute: "data-id",
            Closest: "tr",
            Wrapper: "tableBody"
        });
    }

    // Example to Delete record with swal Confirmation using esX using GetNearest
    DeleteActivity(deleteButton){
        // using GetNearest to catch the current object
        this.#CurrentObject = this.#_crud.GetNearest({
            NeededObject: this.#_listData.activity_types,
            ActionButton: deleteButton,
            DataAttribute: "data-id",
            Closest: "tr",
        });
         this.esXPosting({
            Route: this.#_routes.delete,
            Method: "POST",
            Data:this.#CurrentObject
        }).then(() => {
            this.#_crud.DOMRemove(this.#CurrentObject.id);
            this.#_listData.activity_types = this.#_listData.activity_types.filter(item => item.id !== this.#CurrentObject.id);
        })
    }
     // Example to return this controller model data as one object to be used.
    Data (){
        return this.#_listData.activity_types;
    }
}
export {
    ActivitiesController,
}
