<template>
	<div class="dataScreen">
		<div class="cell_header">
			<span class="header_title">碧莉</span>
		</div>
		<div class="unite">
			<div class="cell_content">
				<div class="cell_content_left">
					<div class="content_left_top"></div>
					<div class="content_left_bottom"></div>
				</div>
				<div class="cell_content_right"></div>
			</div>

			<div class="cell_footer">
				<div class="cell_footer_l" @click="backHome"></div>
				<div class="cell_footer_m"></div>
				<div class="cell_footer_r"></div>
			</div>
		</div>
		<div class="tooltips-singing">
			<div><span>It's like a slightly</span> tilted card</div>
			<div>就像一张稍微倾斜的卡片一样</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		backHome() {
			this.$router.push("/");
		}
	}
};
</script>

<style lang="less" scoped>
.dataScreen {
	height: 100vh;
	background: rgb(19, 44, 51);
	overflow: hidden;
	position: relative;
	.cell_header {
		width: 100%;
		height: 8%;
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.header_title {
			color: rgb(91, 174, 35);
			font-size: 1.4rem;
			// 字间距 first use
			letter-spacing: 0.15rem;
		}
	}
	.unite {
		height: 92%;
		display: flex;
		flex-direction: column;
		.cell_content {
			height: 60%;
			padding: 0 0.2rem;
			margin-bottom: 1%;
			display: flex;
			justify-content: space-around;
			.cell_content_left {
				width: 30%;
				margin-right: 0.1rem;
				height: 100%;
				.content_left_top {
					width: 40%;
					height: 32%;
					background-image: url("@/assets/images/billiebeneathtree.jpg");
					background-size: 100% 100%;
					transform: rotate(180deg);
				}
				.content_left_bottom {
					margin-top: 1%;
					width: 60%;
					height: 67%;
					background-image: url("@/assets/images/billiebeneathtree.jpg");
					background-size: 100% 100%;
					transform: rotate(-100deg);
				}
			}
			.cell_content_right {
				margin-left: 0.4vw;
				width: 40%;
				height: 100%;
				background-image: url("@/assets/images/billiebeneathtree.jpg");
				background-size: 100% 100%;
				transform: rotate(-30deg);
			}
		}
		.cell_footer {
			height: 38%;
			margin-bottom: 1%;
			padding: 0 0.2rem;
			display: flex;
			justify-content: space-between;
			.cell_footer_l {
				width: 28%;
				height: 100%;
				background-image: url("@/assets/images/billiebeneathtree.jpg");
				background-size: 100% 100%;
				transform: rotate(-7deg);
				cursor: pointer;
			}
			.cell_footer_m {
				margin: 0 0.65vw;
				width: 22%;
				height: 100%;
				background-image: url("@/assets/images/billiebeneathtree.jpg");
				background-size: 100% 100%;
				transform: rotate(120deg);
			}
			.cell_footer_r {
				width: 20%;
				height: 100%;
				background-image: url("@/assets/images/billiebeneathtree.jpg");
				background-size: 100% 100%;
				transform: rotate(60deg);
			}
		}
	}
	.tooltips-singing {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 10%;
		font-size: 2.2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: rgb(80, 107, 182);
		text-shadow: -1px -1px 1px rgb(0, 0, 0);
		span {
			color: rgb(195, 184, 5);
		}
	}
}
</style>
