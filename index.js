let scene, camera, renderer, ambient, directional;
let asteroids, asteroidCount;

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  // ambient = new THREE.AmbientLight(0x555555);
  // scene.add(ambient);

  directional = new THREE.DirectionalLight(0xf6d6bd, 0.5)
  // direction.position.z =100;
  scene.add(directional)

  asteroidCount = 20;
  asteroids = [];
  asteroidCount = 20;
  let astroGeo = new THREE.SphereGeometry(5, 4, 4);
  let astroMat = new THREE.MeshLambertMaterial({color: 0x997577})
  for(let i=0; i<5; i++){
    let asteroid = new THREE.Mesh(astroGeo, astroMat);
    asteroid.position.z = Math.random()*400 + 100;
    asteroid.position.x = Math.random()*100 - 50;
    asteroid.position.y = Math.random()*100 - 50;
    asteroid.speed = {};
    asteroid.speed = 0;
    asteroids.push(asteroid);
    scene.add(asteroid);
  }
  camera.position.set(0, 0, -100);
  camera.lookAt(scene.position);

  animate();
}

function animate(){


  asteroids.forEach((a) => {
    if(a.position.z > 10){
      a.speed += 0.002
      a.position.z -= a.speed;
    }

  })

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();
