import './mainstyle.css';
import * as THREE from 'three';

const width = window.innerWidth;
const height = window.innerHeight;
const defaultCameraDistance = 100;

const testButton = document.getElementById('rotateButton');

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = defaultCameraDistance;

function animate(time) {

    renderer.render(scene, camera);
}

testButton.addEventListener('click', () => {
    cube.rotation.z += 0.5;
});