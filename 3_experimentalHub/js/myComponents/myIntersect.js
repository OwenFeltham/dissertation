AFRAME.registerComponent('lazer', {
  schema: {
    scale: {default: '1 1 1'}
  },

  init: function () {
    var data = this.data;

		this.el.addEventListener('fusing' || 'mouseenter' || 'mousedown' 
		|| 'mouseleave' || 'mouseup' , function (evtN) {
    console.log(evtN.detail.intersection.object.el.id);
		console.log(evtN.detail.intersection.point.x);
		
		document.getElementById("raycaster2").flushToDOM();
    
    raycasterXYZex = evtN.detail.intersection.point.x; 
    raycasterXYZwhy = evtN.detail.intersection.point.y; 
    raycasterXYZzed = evtN.detail.intersection.point.z; 
    });
  },
});