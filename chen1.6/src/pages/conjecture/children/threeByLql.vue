<template>
	<div class="threeByLql">
		<canvas ref="canvas" id="c"></canvas>
	</div>
</template>

<script setup  type="module">
import * as THREE from "three";

onMounted(() => {
    // 在图形还没有渲染之前无法进行操作
	const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
    camera.position.z = 2;
    const scene = new THREE.Scene();
    renderer.setSize(window.innerWidth, window.innerHeight);
    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }
    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    function makeInstance(geometry, color, length1, pos1, length2, pos2) {
        const material = new THREE.MeshPhongMaterial({ color });

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        if(pos1!=='') {
            cube.position[pos1] = length1;
        }
        if(pos2!=='') {
            cube.position[pos2] = length2;
        }

        return cube;
    }
	let cubes = [
        // X
        makeInstance(geometry, 0xff0000, -0.1, 'x', 0, 'y'),
        makeInstance(geometry, 0xff0000, 0, 'x', 0.1, 'y'),
        makeInstance(geometry, 0xff0000, -0.2, 'x', 0.1, 'y'),
        makeInstance(geometry, 0xff0000, 0.1, 'x', 0.2, 'y'),
        makeInstance(geometry, 0xff0000, -0.3, 'x', 0.2, 'y'),
        makeInstance(geometry, 0xff0000, -0.3, 'x', -0.2, 'y'),
        makeInstance(geometry, 0xff0000, 0, 'x', -0.1, 'y'),
        makeInstance(geometry, 0xff0000, -0.2, 'x', -0.1, 'y'),
        makeInstance(geometry, 0xff0000, 0.1, 'x', -0.2, 'y'),

        // Y
        makeInstance(geometry, 0xff0000, 0.6, 'x', 0, 'y'),
        makeInstance(geometry, 0xff0000, 0.8, 'x', 0.2, 'y'),
        makeInstance(geometry, 0xff0000, 0.4, 'x', 0.2, 'y'),
        makeInstance(geometry, 0xff0000, 0.5, 'x', 0.1, 'y'),
        makeInstance(geometry, 0xff0000, 0.7, 'x', 0.1, 'y'),
        makeInstance(geometry, 0xff0000, 0.6, 'x', -0.1, 'y'),
        makeInstance(geometry, 0xff0000, 0.6, 'x', -0.2, 'y'),
    ];

	async function render(time) {
        time *= 0.0001;  // 将时间单位变为秒

        cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * .1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
        });

        renderer.render(scene, camera);

        await requestAnimationFrame(render);
    }

    render()
});
</script>

<style lang="less" scoped>
.threeByLql {
	width: 100%;
	height: 100%;
    #c {
        width: 100% !important;
        height: 100% !important;
    }
}
</style>