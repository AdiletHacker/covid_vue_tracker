<template>
  <div id="container"></div>
</template>

<script>
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";

export default {
  name: "Three",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      stats: null,
      group: null,
      mouseX: 0,
      mouseY: 0,
      windowHalfX: window.innerWidth / 2,
      windowHalfY: window.innerHeight / 2
    };
  },
  methods: {
    init() {
      this.camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      this.camera.position.z = 500;

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xffffff);
      this.scene.fog = new THREE.Fog(0xffffff, 1, 10000);

      var geometry = new THREE.BoxBufferGeometry(100, 100, 100);
      var material = new THREE.MeshNormalMaterial();

      this.group = new THREE.Group();

      for (var i = 0; i < 1000; i++) {
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 2000 - 1000;
        mesh.position.y = Math.random() * 2000 - 1000;
        mesh.position.z = Math.random() * 2000 - 1000;

        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;

        mesh.matrixAutoUpdate = false;
        mesh.updateMatrix();

        this.group.add(mesh);
      }

      this.scene.add(this.group);

      //

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement);

      //

      this.stats = new Stats();
      document.body.appendChild(this.stats.dom);

      //

      document.addEventListener("mousemove", this.onDocumentMouseMove, false);

      //

      window.addEventListener("resize", this.onWindowResize, false);
    },
    animate: function() {
      requestAnimationFrame(this.animate);

      this.render();
      this.stats.update();
    },
    onWindowResize() {
      this.windowHalfX = window.innerWidth / 2;
      this.windowHalfY = window.innerHeight / 2;

      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    onDocumentMouseMove(event) {
      this.mouseX = (event.clientX - this.windowHalfX) * 10;
      this.mouseY = (event.clientY - this.windowHalfY) * 10;
    },
    render() {
      var time = Date.now() * 0.001;

      var rx = Math.sin(time * 0.7) * 0.5,
        ry = Math.sin(time * 0.3) * 0.5,
        rz = Math.sin(time * 0.2) * 0.5;

      this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
      this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;

      this.camera.lookAt(this.scene.position);

      this.group.rotation.x = rx;
      this.group.rotation.y = ry;
      this.group.rotation.z = rz;

      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.init();
    this.animate();
  }
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 100vh;
}
</style>