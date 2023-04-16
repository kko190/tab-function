// $(".tab-button")
//   .eq(0)
//   .click(function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(0).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(0).addClass("show");
//   });
// $(".tab-button")
//   .eq(1)
//   .click(function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(1).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(1).addClass("show");
//   });
// $(".tab-button")
//   .eq(2)
//   .click(function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(2).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(2).addClass("show");
//   });

for (let i = 0; i < $(".tab-button").length; i++) {
  $(".tab-button")
    .eq(i)
    .click(function () {
      btnStyle(i);
    });
}
// 확장성이 좋게 하려면 무엇을 바꿔줘야할까?
// i < 3부분을 바꿔주면 될듯?

function btnStyle(a) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(a).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(a).addClass("show");
}
