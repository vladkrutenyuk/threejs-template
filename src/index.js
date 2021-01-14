import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let scene, camera, renderer, axis, grid, controls;

init();

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x202020);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 5, 5);
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

    initHelpers();
    update();
}

function initHelpers() {
    axis = new THREE.AxesHelper(0.5);
    axis.position.y += 0.05;
    scene.add(axis);
    grid = new THREE.GridHelper(10, 10, 0x444444, 0x444444);
    scene.add(grid);
}

function update() {
    requestAnimationFrame(update);
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}