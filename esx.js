/**
 *
 *
 *  esX controller extended
 *  here you can type all your logic to be used in your scripts if needed
 *  esX made your CRUD easier and also all your db or API connections much more simple
 *  plug and go
 *  esX procedure to achieve the optimal usage you must know that Validate -> Create request -> Create Dom
 *  [ ----- Open Source Licensed By Khalid Ahmed Fahmy Sabra ----- ]
 *
 * Visit Route -> Web.js  to register your routes
 * Visit Models and create a file to your model -> import and export the model in ModelsSync and esX will handle the rest
 * Visit Controllers to add a new controller class for your work and logic
 * import controller class and export in controllerSync and esX will handle the rest
 *
 *
 *
 * in your script file use the controller only to do all your work .
 *
 *
 * Happy Coding ! :)
 *
 *
 **/

import { _CRUDING } from "./_Helpers/_CRUDING.js";
import { Web } from "./_Routes/Web.js";
import { Kernal } from "./_HTTP/Kernal.js";
import { Controller } from "./_HTTP/Controller.js";
import * as Controllers from "./Controllers/ControllersSync.js";
import * as Models from "./_Models/ModelsSync.js";
export {
    _CRUDING,
    Kernal,
    Web,
    Controller,
    Controllers,
    Models,
};
