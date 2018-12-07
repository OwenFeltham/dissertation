window.onload = function() {

var geometry = new THREE.BoxGeometry( 1, 1, 1 );   
var material = new THREE.MeshStandardMaterial( {
    color: 0xff0051,
    shading: THREE.FlatShading, 
    metalness: 0,
    roughness: 1
    } );
var cube = new THREE.Mesh(geometry, material);

cube.castShadow = true;
cube.receiveShadow = true;
cube.position.set(-50, 5, 0);

scene.add(cube); 
}

function createText( thing, x, y, z ) {
  var loader = new THREE.FontLoader();
  loader.load( '../fonts/helvetiker_regular.typeface.json', function ( font ) {
    var geometry = new THREE.TextGeometry( thing, {
      font: font,
      size: 7,
      height: 1,
      curveSegments: 2,
      bevelEnabled: false,
      bevelThickness: 0,
      bevelSize: 0,
      bevelSegments: 0
    } );
    
    var text = new THREE.Mesh(geometry);
  
    text.position.set( x, y, z )
    scene.add( text );
  
  } );
}

function createSphere( x, y, z, radius, widthSeg, heightSeg ) {
  var geometry = new THREE.SphereGeometry( radius, widthSeg, heightSeg );
  var material = new THREE.MeshStandardMaterial( {
  color: 0xff0051,
  shading: THREE.FlatShading, 
  metalness: 1,
  roughness: 0,
  } );
  var sphere = new THREE.Mesh( geometry, material );
  sphere.position.set( x, y, z );
  scene.add( sphere );

}

// function entity( width, height, x, y, name ) {
//   this.x            = x,
//   this.y            = y,
//   this.width        = width,
//   this.height       = height,
//   this.name         = name,      
//   this.hp           = 100,
//   this.velX         = 0,
//   this.velY         = 0,
// }