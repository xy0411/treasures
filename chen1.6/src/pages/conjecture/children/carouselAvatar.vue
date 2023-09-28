<template>
	<div class="carouselAvatar">
		<el-carousel :direction="direction ? 'horizontal' : 'vertical'" :autoplay="true" interval="2000">
			<el-carousel-item v-for="item in img.length" :key="item">
				<img class="medium" :src="img[item - 1]" />
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script setup>
// import bird from "@/assets/avatar/bird.png";
// import butterfly from "@/assets/avatar/butterfly.png";
// import dragon from "@/assets/avatar/dragon.png";
// import monkey from "@/assets/avatar/monkey.png";
// import rabbit from "@/assets/avatar/rabbit.png";

import json from '@/../mockDev/state/newStaticLanding.json'

// 使用vite glob方法
const modules = import.meta.glob("@/assets/avatar/*.png");

// const img = ref([monkey, dragon, bird, butterfly, rabbit]);
const img = ref([]);

const direction = ref(true);

const keys = Object.keys(modules);
keys.forEach(it => {
	img.value.push(it);
});

setInterval(() => {
	direction.value = !direction.value;
}, img.value.length * 2000);

</script>

<style lang="less" scoped>
.carouselAvatar {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.el-carousel {
		width: 50rem;
		height: 50rem;
		background-color: skyblue;
		:deep(.el-carousel__container) {
			height: 100%;
			overflow: hidden;
			.el-carousel__item {
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
}
</style>
