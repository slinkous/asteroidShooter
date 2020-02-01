import Asteroid from './asteroid.js';

let scene, camera, renderer, ambient, directional;
let asteroids, asteroidCount;
let screenCanvas;

let sound;

function init(){
  scene = new THREE.Scene();
  let container = document.querySelector("#monitor-container")
  camera = new THREE.PerspectiveCamera(60, container.offsetWidth/container.offsetHeight, 1, 1000);

  renderer = new THREE.WebGLRenderer({alpha:true});
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement)
  renderer.setClearColor( 0x000000, 0 );

  ambient = new THREE.AmbientLight(0x555555);
  scene.add(ambient);

  screenCanvas = document.querySelector('canvas');
  console.log(screenCanvas);

  // directional = new THREE.DirectionalLight(0xf6d6bd, 0.5)
  // // direction.position.z =100;
  // scene.add(directional)

  asteroidCount = 20;
  asteroids = [];

  sound = new Howl({
    src: ['lowDown.ogg'],
    loop: true,
    volume: 0.2
  })

   // Tweak the attributes to get the desired effect.
   sound.pannerAttr({
     panningModel: 'HRTF',
     refDistance: 0.8,
     rolloffFactor: 2.5,
     distanceModel: 'exponential'
   });



  for(let i=0; i<1; i++){
    asteroids.push(new Asteroid(scene))

  }
  camera.position.set(0, 0, -100);
  camera.lookAt(scene.position);
  sound.play();
  animate();
}

function animate(){


  asteroids.forEach((a) => {
    a.move(sound);
    sound.pos(a.x, a.y, a.z);
  })
  let astroGeo = new THREE.SphereGeometry(5, 4, 4);
  let astroMat = new THREE.MeshLambertMaterial({color: 0x997577})
  let asteroidChance = 0.005;
  // if(asteroids.length < asteroidCount){
  //
  //   if (Math.random() < asteroidChance){
  //     asteroids.push(new Asteroid(scene));
  //     asteroidChance += 0.001;
  //   }
  // }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();
