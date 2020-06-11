<template>
  <div id="container"></div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Three",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      group: null,
      mouseX: 0,
      mouseY: 0,
      windowHalfX: window.innerWidth / 2,
      windowHalfY: window.innerHeight / 2,
      container: null
    };
  },
  methods: {
    init() {
      this.container = document.getElementById("container");

      this.camera = new THREE.PerspectiveCamera(
        60,
        this.container.clientWidth / this.container.clientHeight,
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
      this.renderer.setPixelRatio(this.container.devicePixelRatio);
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      this.container.appendChild(this.renderer.domElement);

      //

      this.container.addEventListener(
        "mousemove",
        this.onDocumentMouseMove,
        false
      );

      //

      this.container.addEventListener("resize", this.onWindowResize, false);
    },
    animate: function() {
      requestAnimationFrame(this.animate);

      this.render();
    },
    onWindowResize() {
      this.windowHalfX = this.container.clientWidth / 2;
      this.windowHalfY = this.container.clientHeight / 2;

      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
    },
    onDocumentMouseMove(event) {
      this.mouseX = (event.clientX - this.windowHalfX) * 10;
      this.mouseY = (event.clientY - this.windowHalfY) * 10;
    },
    render() {
      // COMMENTING TO DECREASE FPS LOOSE !!!

      // var time = Date.now() * 0.001;
      // var rx = Math.sin(time * 0.7) * 0.5,
      //   ry = Math.sin(time * 0.3) * 0.5,
      //   rz = Math.sin(time * 0.2) * 0.5;

      this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
      this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;

      this.camera.lookAt(this.scene.position);

      // this.group.rotation.x = rx;
      // this.group.rotation.y = ry;
      // this.group.rotation.z = rz;

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
  height: 70vh;
  margin-bottom: 100px;
}

@media only screen and (max-width: 1000px) {
  #container {
    height: 50vh;
  }
}

@media only screen and (max-width: 700px) {
  #container {
    height: 40vh;
  }
}

@media only screen and (max-width: 450px) {
  #container {
    height: 33vh;
  }
}
</style>