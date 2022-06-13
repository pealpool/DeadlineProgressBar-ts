import {ipcRenderer} from "electron";
import $ = require("jquery");

$("#hideButton_1").on("click", function () {
    $("#index_div").hide("scale", {percent: 10}, 100, function () {
        ipcRenderer.send("hideWin");
    });
});
