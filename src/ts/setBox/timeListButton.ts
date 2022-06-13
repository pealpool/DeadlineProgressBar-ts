import $ = require("jquery");
$(".timeListTabShort").click(function () {
  //获取按钮时间
  let h = 0,
    m = 0;
  const elSpan = $(this).children("span");
  // console.log(elSpan.eq(0).html());
  if ($(this).children("span").eq(0).html() === "m") {
    m = parseInt(elSpan.eq(1).html());
  } else {
    h = parseInt(elSpan.eq(1).html());
  }
  // console.log(h + "h " + m + "m");

  //获取滚动设置台时间
  let time_h = parseInt($("#timeChrR_h .figureChr:nth-child(41)").text());
  let time_m = parseInt($("#timeChrR_m .figureChr:nth-child(41)").text());
  let time_s = parseInt($("#timeChrR_s .figureChr:nth-child(41)").text());
});

// function upOrDown(num) {}
