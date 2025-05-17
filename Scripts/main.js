/**
 *
 *
 * ---------------------------- esX Scripts
 *  Drop here all your final scripts in organized seperated files
 *  this is example of using esX modules
 *
 *
 */

import { Controllers } from "../esx.js";
document.addEventListener("DOMContentLoaded", async () => {

    const esX = new Controllers.esXExampleController();
    const button = document.getElementById("esXTest");

    button.addEventListener("click", async () => {
        await esX.esXRequest({
            Method: "POST",
            Route :"google.com",
            Data : null ,
        })
    })



});