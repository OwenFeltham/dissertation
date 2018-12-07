var loader = new THREE.PLYLoader(plyPath, x, y, z);
				loader.load( 'plyPath', function ( geometry ) {

					geometry.computeVertexNormals();

					var mesh = new THREE.Mesh( plyPath );
					mesh.position.set(x, y, z);

           scene.add(mesh);
				});