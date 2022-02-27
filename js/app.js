window.onload = function(){ 
  let constrain = 200;
  let mouseOverContainer = document.getElementById("ex1");
  let ex1Layer = document.getElementById("ex1-layer");
  
  function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcY =  (x - box.x - (box.width / 2)) / constrain;
    
    return "perspective(100px) "
      + "   rotateY("+ calcY +"deg) ";
  };
  
  function transformElement(el, xyEl) {
    el.style.transform  = transforms.apply(null, xyEl);
  }
  
  mouseOverContainer.onmousemove = function(e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]);
  
    window.requestAnimationFrame(function(){
      transformElement(ex1Layer, position);
    });
  };};
