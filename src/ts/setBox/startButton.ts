import { ipcRenderer } from "electron";

$("#startNew").click(function () {
  let time_h = 0,
    time_m = 0,
    time_s = 0;
  if ($("#tab_r").attr("class") === "myTab") {
    //勾选 #tab_l
    time_h = parseInt($("#timeChrL_h .figureChr:nth-child(41)").text());
    time_m = parseInt($("#timeChrL_m .figureChr:nth-child(41)").text());
    ipcRenderer.send("startRun_toM", {
      tab: "l",
      time_h: time_h,
      time_m: time_m,
    });
  } else {
    //勾选 #tab_r
    time_h = parseInt($("#timeChrR_h .figureChr:nth-child(41)").text());
    time_m = parseInt($("#timeChrR_m .figureChr:nth-child(41)").text());
    time_s = parseInt($("#timeChrR_s .figureChr:nth-child(41)").text());
    ipcRenderer.send("startRun_toM", {
      tab: "r",
      time_h: time_h,
      time_m: time_m,
      time_s: time_s,
    });
  }

  $("#index_div").hide("scale", { percent: 10 }, 100, function () {
    ipcRenderer.send("hideWin");
  });
});
