let astroGeo = new THREE.DodecahedronGeometry(5);
// let astroMat = new THREE.MeshLambertMaterial({color: 0x7c94a1})
let astroTexture = new THREE.TextureLoader().load('comet.png');
let astroMat = new THREE.MeshBasicMaterial({map: astroTexture});

export default class Asteroid extends THREE.Mesh{
  constructor(scene){
    super(astroGeo, astroMat);
    this.position.z = Math.random()*400 + 100;
    this.position.x = Math.random()*100 - 50;
    this.position.y = Math.random()*100 - 50;
    this.speed = {};
    this.speed = 0;
    this.rotationalSpeed = Math.random()*0.1 - 0.05;
    scene.add(this);
  }
  move(sound){
    if(this.position.z > 0){
      this.speed += 0.002
      this.position.z -= this.speed;
      this.rotation.y += this.rotationalSpeed;
      this.rotation.x += this.rotationalSpeed;
    } else {
      sound.stop()
    }
  }
}
