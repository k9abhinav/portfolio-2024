// Setup
const canvas = document.querySelector('#canvas');
const scene = new THREE.Scene();

// Camera
const sizes = { width: window.innerWidth, height: window.innerHeight };
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.set(0, 2, 8);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

// Orbit Controls
// const controls = new OrbitControls(camera, renderer.domElement);
const controls = new THREE.OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;

// Objects
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: '#ff0055' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Lights
const ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
const dirLight = new THREE.DirectionalLight('#ffffff', 2);
dirLight.position.set(5, 5, 5);
scene.add(ambientLight, dirLight);

// Resize handler
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(window.devicePixelRatio);
});

// Animate
const tick = () => {
  controls.update();
  cube.rotation.y += 0.005;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};
tick();
