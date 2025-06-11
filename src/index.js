import './index.scss';

let queue = [];
let data = null;

const settings = {
  'viz__map': (el) => {
        let a = el.querySelector('.dataviz__title-container')
    let b = el.querySelector('.dataviz__chart-container')
    a && a.remove()
    b && b.remove()

    el.classList.remove('na-dataviz')

    let target = document.createElement("iframe")
    target.src = "https://temp-rtl.netlify.app/"
    el.appendChild(target)
  }
};

fetch('endpoint').then(response => response.json()).then((_data)=>{
  data = _data;
  for(let i=0; i<queue.length; i++)
    queue[i]();
});

window.renderDataViz = function(el){
  let id = el.getAttribute('id');
  let chart = settings[id];
  if(!chart) return;

  if(data){
    chart(el);
  } else {
    queue.push(() => chart(el));
  }
}
