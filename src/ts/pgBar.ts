//渲染进程没法直接调用主进程中的模块，但是我们可以通过 electron中的remote模块间接的调用主进程中的模块
//remote执行主进程与渲染进程之间的IPC
// const BrowserWindow = require("electron").remote.BrowserWindow;
import {BrowserWindow} from 'electron';

const btn = document.querySelector("#startNew") as HTMLElement;
let pBarWin: any;
window.onload = function () {
    btn.onclick = () => {
        //调用 BrowserWindow打开新窗口
        pBarWin = new BrowserWindow({
            width: 500,
            height: 500,
            frame: true, //是否显示边缘框
            fullscreen: false, //是否全屏显示
        });
        //打开一个新的窗口
        // newWin.loadURL(`file://${__dirname}/otherWin.html`);
        //新建窗口
        pBarWin.loadURL(__dirname, "../../progressBar.html");
        pBarWin.on("close", () => {
            pBarWin = null;
        });
    };
};
