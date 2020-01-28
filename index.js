import Asteroid from './asteroid.js';

let scene, camera, renderer, ambient, directional;
let asteroids, asteroidCount;

function init(){
  scene = new THREE.Scene();
    let container = document.querySelector("#monitor-container")
  camera = new THREE.PerspectiveCamera(60, container.offsetWidth/container.offsetHeight, 1, 1000);
  renderer = new THREE.WebGLRenderer({alpha:true});


  console.log(container.offsetHeight)
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement)
  // scene.background = new THREE.Color( 0x000000, 0 );
  renderer.setClearColor( 0x000000, 0 );
  ambient = new THREE.AmbientLight(0x555555);
  scene.add(ambient);

  // directional = new THREE.DirectionalLight(0xf6d6bd, 0.5)
  // // direction.position.z =100;
  // scene.add(directional)

  asteroidCount = 20;
  asteroids = [];


  for(let i=0; i<2; i++){
    asteroids.push(new Asteroid(scene))
  }
  camera.position.set(0, 0, -100);
  camera.lookAt(scene.position);

  animate();
}

function animate(){


  asteroids.forEach((a) => {
    a.move();
  })
  let astroGeo = new THREE.SphereGeometry(5, 4, 4);
  let astroMat = new THREE.MeshLambertMaterial({color: 0x997577})
  let asteroidChance = 0.005;
  if(asteroids.length < asteroidCount){

    if (Math.random() < asteroidChance){
      asteroids.push(new Asteroid(scene));
      asteroidChance += 0.001;
    }
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();
