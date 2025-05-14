class Web{

    #_routes;
    #_routeGroups = {
        // you can define here a specific object for your route group to be shared normally seperated not all routes
        // to reduce the latency of retrieving.
        esXRouteGroupExample: {
            list: "/esX/list_data_api",
            create: "/esX/create_data_api",
            delete: "/esX/delete_data_api",
            update: "/esX/update_data_api",
        },

        /** 

            register all your rotues group objects here 

        **/

        // .. etc groups
    };

    constructor() {
        this.#_routes = this.#_routeGroups;
    }
    //fetching all routes available or registered
    GetAllRoutes(){
        return this.#_routes;
    }
    // by using this function you can get route group based on object key name
    GetRoutesGroup(RouteGroup){
        return this.#_routeGroups[RouteGroup];
    }


}
export  {
    Web
}
