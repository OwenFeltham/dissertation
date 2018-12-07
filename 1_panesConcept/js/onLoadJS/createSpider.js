
function createSpider() {
  var sceneEl = document.querySelector('a-scene');
  var entityEl = document.createElement('a-entity');
  entityEl.setAttribute('line', {
    start: { x: 0, y: 0, z: 0 },
    end: { x: 200, y: 200, z: 200 },
    color: red,
  });
  sceneEl.appendChild(entityEl);
  (function () {
    var sceneEl = document.querySelector('a-scene');
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('line', {
      start: { x: 0, y: 0, z: 0 },
      end: { x: -200, y: 200, z: 200 },
      color: red,
    });
    sceneEl.appendChild(entityEl);
  })();
  (function () {
    var sceneEl = document.querySelector('a-scene');
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('line', {
      start: { x: 0, y: 0, z: 0 },
      end: { x: -200, y: 200, z: -200 },
      color: red,
    });
    sceneEl.appendChild(entityEl);
  })();
  (function () {
    var sceneEl = document.querySelector('a-scene');
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('line', {
      id: "ooh",
      start: { x: 0, y: 0, z: 0 },
      end: { x: 200, y: 200, z: -200 },
      color: red,
    });
    sceneEl.appendChild(entityEl);
  })();
}