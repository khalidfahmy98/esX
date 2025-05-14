import { Alert, Swap, SetValue, Getter , languages  , locale} from "../_Tools/Tools.js";
class _CRUDING {
    getter;
    UsableObject = {};
    ValidateObject = {};
    validated;
    CreationObject =  {};
    properties = [];
    validate = true;
    validateNames = [];
    wrapper = "";
    table = "";
    button ;
    closest ;
    dataAttribute;
    updateModel;
    constructor(){
        this.getter = new Getter();
    }
    CRUDING(ConfigObject = {  CreationObject : this.CreationObject , Properties : this.properties , Validate : this.validate , ValidateNames : this.validateNames  }){
        var keepCreating = "";
        if(typeof ConfigObject.CreationObject === "object") {
            this.UsableObject = this.getter.GetValues(ConfigObject.Properties);
            if(ConfigObject.Validate === true  && ConfigObject.ValidateNames.length > 0 ){
                this.ValidateObject = this.getter.GetValues(ConfigObject.ValidateNames);
                this.validated = Object.values(this.ValidateObject).every(
                    (value) => value !== null && value !== undefined && value !== "",
                );
            }
            keepCreating = !!this.validated;
            return !!keepCreating;
        }else{
            console.error("CRUD object must be type of object " + ConfigObject.CreationObject);
        }
    }
    GetNearest(ConfigObject = {NeededObject : this.updateModel, ActionButton : this.button , DataAttribute : this.dataAttribute ,Closest : this.closest}){
        const   row = ConfigObject.ActionButton.closest(ConfigObject.Closest),
                id = row.getAttribute(ConfigObject.DataAttribute);
        this.UsableObject = ConfigObject.NeededObject.find(item => item.id == id);

        return this.UsableObject;
    }
    DOMRemove(id){
        const row = document.querySelector(`tr[data-id="${id}"]`);
        row.remove();
    }
    // This funciton only needed for movanse
    DOMEdit(ConfigObject = {UpdateModel : this.updateModel , ActionButton : this.button , DataAttribute : this.dataAttribute , Closest : this.closest }){
        if( typeof  ConfigObject == "object" ){
            if( ConfigObject.ActionButton instanceof HTMLButtonElement ){
                const   row = ConfigObject.ActionButton.closest(ConfigObject.Closest),
                    id = row.getAttribute(ConfigObject.DataAttribute);
                if( row && id ){
                    // to make confirm action before deleting any item
                    this.UsableObject = ConfigObject.UpdateModel.find(item => item.id == id);
                    // --------------------------- start
                    // You can change this to animate what ever you are using to remove it
                    // just to display the edit form.
                    [
                        ["modal", "block"],
                        ["clabel", "none"],
                        ["elabel", "block"],
                        ["updateB", "block"],
                        ["createB", "none"],
                    ].forEach(
                        ([id, display]) =>
                            (document.getElementById(id).style.display = display),
                    );
                    // ----------------------------- end
                    SetValue(this.UsableObject); // Setting the current object values in form to be updated later
                    return this.UsableObject;
                }else{
                    Alert('error', locale === 'en' ? languages.activity.en.action_failure : languages.activity.ar.action_failure)
                }
            }else{
                console.error(" ActionButton must be type of HTML Button Element cant be type of " + typeof ConfigObject.ActionButton);
            }
        }else{
            console.error(" ConfigObject must be type of object to be used in Delete ");
        }
    }

}


export {
    _CRUDING
};
