/*
 * @description:
 * @Author: Gouxinyu
 * @Date: 2020-12-23 11:14:11
 */
import CanvasRuler from "../src/index";

const options = {
    mode: "auto",
    scrollSelector: "#wrap",
    rulerId: "hh",
    contentWidth: 30000,
    contentHeight: 30000,
    style: {
        gap: 10,
        size: 18,
        mode: "center",
    },
    onScroll: (x, y) => {
        console.log(x, y);
    },
};

(window as any).ruler = new CanvasRuler("box", options);

// (window as any).ruler = CanvasRulerController.rulerMap[CanvasRulerController.currentRulerId];
// let ruler = new CanvasRuler('box', options);

// 修改数值
const input: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("scale")
);
input.addEventListener("change", (e) => {
    (window as any).ruler.scale(Number(input.value));
});

// 销毁实例
const close: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("close")
);
close.addEventListener("click", (e) => {
    (window as any).ruler.destroy();

    const a = 0;

    function setA() {
        console.log(a);
    }

    if (a) {
        setA();
    }
});

// 背景色
const bg: HTMLInputElement = <HTMLInputElement>document.getElementById("bg");
bg.addEventListener("click", (e) => {
    (window as any).ruler.update({ backgroundColor: "blue" });
});

// 字体颜色
const fontColor: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("fontColor")
);
fontColor.addEventListener("click", (e) => {
    (window as any).ruler.update({ fontColor: "red" });
});

// 刻度颜色
const tickColor: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("tickColor")
);
tickColor.addEventListener("click", (e) => {
    (window as any).ruler.update({ tickColor: "green" });
});

// 切换分辨率
const resizeBig: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("resizeBig")
);
resizeBig.addEventListener("click", (e) => {
    const wrap = document.getElementById("wrap");
    const box = document.getElementById("box");
    const innerWrap = document.getElementById("inner-wrap");

    innerWrap.style.width = "80000px";
    innerWrap.style.height = "80000px";

    wrap.style.width = "980px";
    wrap.style.height = "680px";

    box.style.width = "1000px";
    box.style.height = "700px";
    (window as any).ruler.resize({ width: 80000, height: 80000, size: 20 });
});

const resizeSmall: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("resizeSmall")
);
resizeSmall.addEventListener("click", (e) => {
    const wrap = document.getElementById("wrap");
    const box = document.getElementById("box");
    const innerWrap = document.getElementById("inner-wrap");

    innerWrap.style.width = "8192px";
    innerWrap.style.height = "8192px";

    wrap.style.width = "780px";
    wrap.style.height = "580px";

    box.style.width = "800px";
    box.style.height = "600px";
    (window as any).ruler.resize({ width: 8192, height: 8192, size: 20 });
});

const resizeHuge: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("resizeHuge")
);
resizeHuge.addEventListener("click", (e) => {
    const wrap = document.getElementById("wrap");
    const box = document.getElementById("box");
    const innerWrap = document.getElementById("inner-wrap");

    innerWrap.style.width = "500000px";
    innerWrap.style.height = "500000px";

    wrap.style.width = "880px";
    wrap.style.height = "680px";

    box.style.width = "900px";
    box.style.height = "700px";
    (window as any).ruler.resize({ width: 500000, height: 500000, size: 20 });
});
