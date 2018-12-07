var incrementPos = 0.2;

function lightShow() {

  lights[0].position.x += incrementPos;
  lights[0].position.y += incrementPos;
  lights[0].position.z += incrementPos;

  lights[1].position.x += incrementPos;
  lights[1].position.y += incrementPos;
  lights[1].position.z += incrementPos;

  lights[2].position.x += incrementPos;
  lights[2].position.y += incrementPos;
  lights[2].position.z += incrementPos;

  if (lights[0].position.x > -30) {
    incrementPos = -0.2;
  }

  if (lights[0].position.x < -80) {
    incrementPos = 0.2;
  }

}