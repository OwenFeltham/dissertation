function newObjFile( mtlPath, objPath, x, y, z ) {
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load(mtlPath, function(materials) {

materials.preload();
var objLoader = new THREE.OBJLoader();
objLoader.setMaterials(materials);

  objLoader.load(objPath, function (yourModel) {
    yourModel.scale.set(0.5, 0.5, 0.5);
		yourModel.position.set(x, y, z);
		yourModel.rotation.x = 0;
    scene.add(yourModel);
  });
});
}