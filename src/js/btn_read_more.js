// export default function readMore() {
//     console.log("Test readMore")
//     let btn_open_text = document.getElementById("btn_open_text");
//     let btn_close_text = document.getElementById("btn_close_text");
//     let about_us_text = document.getElementById("about_us_text");
//
//     if (btn_open_text.style.display !== "none") {
//         about_us_text.style.height = "100%";
//         btn_open_text.style.display = "none";
//         btn_close_text.style.display = "inline";
//     } else if (window.innerWidth <= 768) {
//         about_us_text.style.height = "140px";
//         btn_open_text.style.display = "inline";
//         btn_close_text.style.display = "none";
//     } else if (window.innerWidth <= 1200) {
//         btn_open_text.style.display = "inline";
//         about_us_text.style.height = "160px";
//         btn_close_text.style.display = "none";
//     } else {
//         btn_open_text.style.display = "inline";
//         about_us_text.style.height = "155px";
//         btn_close_text.style.display = "none";
//     }
// }

export default function readMore () {
  const btn_open_text = document.getElementById("btn_open_text");
  const btn_close_text = document.getElementById("btn_close_text");
  const about_us_text_tablet = document.querySelector(".text-block-about-us__text-tablet");
  const about_us_text_computer = document.querySelector(".text-block-about-us__text-computer");
  const about_us_text_all = document.querySelector(".text-block-about-us__text-all");

  if (btn_open_text.style.display !== "none") {
    about_us_text_tablet.style.display = "inline";
    about_us_text_computer.style.display = "inline";
    about_us_text_all.style.display = "inline";
    btn_open_text.style.display = "none";
    btn_close_text.style.display = "inline";
  } else if (window.innerWidth <= 768) {
    about_us_text_tablet.style.display = "none";
    about_us_text_computer.style.display = "none";
    about_us_text_all.style.display = "none";
    btn_open_text.style.display = "inline";
    btn_close_text.style.display = "none";
  } else if (window.innerWidth <= 1200) {
    about_us_text_computer.style.display = "none";
    about_us_text_all.style.display = "none";
    btn_open_text.style.display = "inline";
    btn_close_text.style.display = "none";
  } else {
    about_us_text_all.style.display = "none";
    btn_open_text.style.display = "inline";
    btn_close_text.style.display = "none";
  }
}
