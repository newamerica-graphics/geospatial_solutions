import "./index.scss";

let queue = [];
let data = null;

const settings = {
    viz__map: (el) => {
        let a = el.querySelector(".dataviz__title-container");
        let b = el.querySelector(".dataviz__chart-container");
        a && a.remove();
        b && b.remove();

        el.classList.remove("na-dataviz");

        let target = document.createElement("iframe");
        target.src = "https://temp-rtl.netlify.app/";
        el.appendChild(target);
    },
};

window.renderDataViz = function(el){
  let id = el.getAttribute('id');
  let chart = settings[id];
  if(!chart) return;
  chart(el);
}
