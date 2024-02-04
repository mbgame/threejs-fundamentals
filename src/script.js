import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';

////// initialize the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x5776ff);

////// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);
camera.position.set(3,9,8);
camera.lookAt(0,2,-2);

////// make objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const plane = new THREE.PlaneGeometry(100,100);
const wall = new THREE.PlaneGeometry(10,10);

// const nutGeometry = new THREE.TorusKnotGeometry(0.5,0.15,100,16);
const sphere = new THREE.SphereGeometry(1);
//////init material
const metalMaterial = new THREE.MeshStandardMaterial();
const groundMaterial = new THREE.MeshStandardMaterial();
const wallMaterial = new THREE.MeshStandardMaterial();
const floorMaterial = new THREE.MeshStandardMaterial();
// const cubeMaterial = new THREE.MeshLambertMaterial();
// const cubeMaterial = new THREE.MeshPhongMaterial();
// cubeMaterial.shininess = 200;

// const cubeMaterial = new THREE.MeshStandardMaterial();
// const cubeMaterial = new THREE.MeshPhysicalMaterial();
// cubeMaterial.metalness = 0.5;
// cubeMaterial.roughness = 0.6;
// cubeMaterial.reflectivity = 1;
// cubeMaterial.clearcoat = 1;
// cubeMaterial.color = new THREE.Color('pink');
//////init geometry
// const cubeMesh = new THREE.Mesh(nutGeometry, cubeMaterial);
// cubeMesh.position.y = 1;
// scene.add(cubeMesh);
// cubeMesh.castShadow = true;

// const cubeA = new THREE.Mesh( cubeGeometry, cubeMaterial );
// cubeA.position.set( 2, 0.5, 0 );
// cubeA.castShadow = true;

// const cubeB = new THREE.Mesh( cubeGeometry, cubeMaterial );
// cubeB.position.set( -2, 0.5, 0 );
// cubeB.castShadow = true;

const leftWall = new THREE.Mesh( wall, wallMaterial );
leftWall.position.set( -5, 5, 0 );
leftWall.rotation.y = -(Math.PI * 0.5);
scene.add(leftWall);
leftWall.receiveShadow = true;
leftWall.material.side = THREE.DoubleSide;

const rightWall = new THREE.Mesh( wall, wallMaterial );
rightWall.position.set( 5, 5, 0 );
rightWall.rotation.y = -(Math.PI * 0.5);
scene.add(rightWall);
// rightWall.castShadow = true;
rightWall.material.side = THREE.DoubleSide;

const backtWall = new THREE.Mesh( wall, wallMaterial );
backtWall.position.set( 0, 5, -5 );
scene.add(backtWall);
backtWall.receiveShadow = true;
backtWall.material.side = THREE.DoubleSide;

// const frontWall = new THREE.Mesh( wall, wallMaterial );
// frontWall.position.set( 0, 5, 5 );
// scene.add(frontWall);
// frontWall.castShadow = true;
// frontWall.material.side = THREE.DoubleSide;

const roofWall = new THREE.Mesh( wall, wallMaterial );
roofWall.rotation.x = -(Math.PI * 0.5);
roofWall.position.set( 0, 10, 0 );
scene.add(roofWall);
// roofWall.castShadow = true;
roofWall.material.side = THREE.DoubleSide;

const floor = new THREE.Mesh( wall, floorMaterial );
floor.rotation.x = -(Math.PI * 0.5);
floor.position.set( 0, 0, 0 );
scene.add(floor);
floor.receiveShadow = true;
floor.material.side = THREE.DoubleSide;

const sphereMesh = new THREE.Mesh(sphere, metalMaterial);
sphereMesh.position.set(-3,1,-3);
scene.add(sphereMesh);
sphereMesh.castShadow = true;

const sphereMesh2 = new THREE.Mesh(sphere, metalMaterial);
sphereMesh2.position.set(3,1,-3);
scene.add(sphereMesh2);
sphereMesh2.castShadow = true;

const ground = new THREE.Mesh( plane, groundMaterial );
ground.position.set( 0, -0.1, 0 );
ground.rotation.x = -(Math.PI * 0.5);
scene.add(ground);
// ground.receiveShadow = true;

//////group
// const groupCube = new THREE.Group()
// groupCube.add(cubeA);
// groupCube.add(cubeB);
// scene.add(groupCube);

//////add helper
// const helper = new THREE.AxesHelper(2);
// cubeMesh.add(helper);

//////init light
const ambientLight = new THREE.AmbientLight('0xffffff',0.7);
scene.add(ambientLight);
// const pointLight = new THREE.PointLight(0xffffff,1);
// pointLight.position.set(3,2,5);
// scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xffffff,0.8,15,2);
pointLight2.position.set(-3,3,-3);
scene.add(pointLight2);
pointLight2.castShadow = true;
pointLight2.shadow.radius = 10;
const pointLightHelper = new THREE.PointLightHelper(pointLight2, 0.5);
scene.add(pointLightHelper)
// const directionalLight = new THREE.DirectionalLight(0xffffff,0.7);
// directionalLight.position.set(0,5,4);
// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight,0.5);
// scene.add(directionalLight);
// scene.add(directionalLightHelper);


const width = 5;
const height = 2;
const intensity = 5;
const rectLight = new THREE.RectAreaLight( 0x5776ff, intensity,  width, height );
rectLight.position.set( 0, 9.5, -5 );
rectLight.lookAt( 0, 0, 0 );
scene.add( rectLight )

const rectLightHelper = new RectAreaLightHelper( rectLight );
rectLight.add( rectLightHelper );



//////init texture
const textureLoader = new THREE.TextureLoader();

const wallTexture = textureLoader.load('/texture/old-wall/main.png');
const wallTextureAo = textureLoader.load('/texture/old-wall/ao.png');
const wallTextureHeight = textureLoader.load('/texture/old-wall/height.png');
const wallTextureMetalic = textureLoader.load('/texture/old-wall/metallic.png');
const wallTextureNormal = textureLoader.load('/texture/old-wall/normal.png');
const wallTextureRoughness = textureLoader.load('/texture/old-wall/roughness.png');

wallMaterial.map = wallTexture;
wallMaterial.aoMap = wallTextureAo;
wallMaterial.metalnessMap = wallTextureMetalic;
wallMaterial.roughnessMap = wallTextureRoughness;
wallMaterial.normalMap = wallTextureNormal;
// wallMaterial.displacementMap = wallTextureHeight;
wallMaterial.displacementScale = 0.2;
wallMaterial.roughness = 0.5;
// wallTexture.repeat.set(1,1);
// wallTexture.wrapS = THREE.RepeatWrapping;
// wallTexture.wrapT = THREE.RepeatWrapping;


const grassTexture = textureLoader.load('/texture/grass/main.png');
const grassTextureNormal = textureLoader.load('/texture/grass/normal.png');

grassTexture.repeat.set(10,10);
// grassTexture.wrapS = THREE.MirroredRepeatWrapping;
// grassTexture.wrapT = THREE.MirroredRepeatWrapping;
grassTexture.wrapS = THREE.RepeatWrapping;
grassTexture.wrapT = THREE.RepeatWrapping;
groundMaterial.normalMap = grassTextureNormal;
groundMaterial.map = grassTexture;

const metalTexture = textureLoader.load('/texture/framed-metal/main.png');
const metalTextureAo = textureLoader.load('/texture/framed-metal/ao.png');
const metalTextureHeight = textureLoader.load('/texture/framed-metal/height.png');
const metalTextureMetalic = textureLoader.load('/texture/framed-metal/metallic.png');
const metalTextureNormal = textureLoader.load('/texture/framed-metal/normal.png');
const metalTextureRoughness = textureLoader.load('/texture/framed-metal/roughness.png');
metalMaterial.map = metalTexture;
metalMaterial.aoMap = metalTextureAo;
metalMaterial.metalnessMap = metalTextureMetalic;
metalMaterial.roughnessMap = metalTextureRoughness;
metalMaterial.normalMap = metalTextureNormal;
metalMaterial.displacementMap = metalTextureHeight;
metalMaterial.displacementScale = 0.2;
metalMaterial.roughness = 0.6;
metalMaterial.metalness = 0.4;
// metalMaterial.reflectivity = 1;
metalMaterial.clearcoat = 1;
// metalMaterial.color = new THREE.Color(0x91877e)

const floorTexture = textureLoader.load('/texture/floor/main.png');
const floorTextureAo = textureLoader.load('/texture/floor/ao.png');
const floorTextureHeight = textureLoader.load('/texture/floor/height.png');
const floorTextureNormal = textureLoader.load('/texture/floor/normal.png');
const floorTextureRoughness = textureLoader.load('/texture/floor/roughness.png');
floorMaterial.map = floorTexture;
floorMaterial.aoMap = floorTextureAo;
floorMaterial.roughnessMap = floorTextureRoughness;
floorMaterial.normalMap = floorTextureNormal;
// floorMaterial.displacementMap = floorTextureHeight;
// floorMaterial.displacementScale = 0.2;
floorMaterial.roughness = 0.7;
floorMaterial.floorness = 0.4;
// floorMaterial.reflectivity = 1;
// floorMaterial.clearcoat = 1;

//////init fog
// const fog = new THREE.Fog(0xffffff,10,25);
// scene.fog = fog;



////// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true;
////// instantiate the controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.autoRotate = true;

// const controls = new FirstPersonControls(camera , canvas);
// controls.mouseDragOn = true;
// controls.movementSpeed = 10;
// controls.lookSpeed = 0.1;

const controls = new FlyControls(camera , canvas);
// controls.mouseDragOn = true;
controls.movementSpeed = 10;
controls.dragToLook = true;
controls.rollSpeed = 1;


window.addEventListener('resize', () =>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight);
})

const clock = new THREE.Clock();
let previusTime = 0;
let count =0;

// render the scene
const renderloop = () => {
  let currentTime = clock.getElapsedTime();
  let delta = currentTime - previusTime;
  previusTime = currentTime;

  // groupCube.rotation.y += THREE.MathUtils.degToRad(1) * delta * 40;
  // groupCube.scale.x += delta * scaleAnim;
  // cubeMesh.position.y += scaleAnim * 0.05;
  count += delta * 30;
//  console.log(Math.sin(THREE.MathUtils.degToRad(count)));

  sphereMesh.rotation.y += 0.05;
  sphereMesh2.rotation.y -= 0.05;

  pointLight2.position.x = 4 * Math.sin(THREE.MathUtils.degToRad(count ));
  pointLight2.position.z = 4 * Math.cos(THREE.MathUtils.degToRad(count ));
  controls.update(delta);  
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
