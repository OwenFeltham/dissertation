function newGltfFile( filePath, tx, y, z ) {
// Instantiate a loader
var loader = new THREE.GLTFLoader();

// Load a glTF resource
loader.load(
	// resource URL
	filePath,
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Scene
		gltf.scenes; // Array<THREE.Scene>
		gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object
    
    gltf.scene.scale.set( 0.5, 0.5, 0.5 );
    gltf.scene.position.set( tx, y, z );


	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
}