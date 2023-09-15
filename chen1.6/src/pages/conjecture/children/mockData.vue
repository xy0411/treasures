<template>
	<div class="main">
		<div class="banner">
			<div class="ban">
				<img :src="bannerOptions.bannerImgUrlPc" alt="" />
			</div>
		</div>
		<div
			class="display"
			v-for="(it, index) in bannerOptions.productAndImgList"
			:key="index"
			:style="{ backgroundColor: it.backgroundColor ? it.backgroundColor.pCColor : null }"
		>
			<div class="picture" v-if="it.mobileSet">
				<div class="one" v-if="it.mobileSet.length == 1">
					<img :src="itimg.imgUrl" alt="" v-for="(itimg, index) in it.mobileSet" :key="index" />
				</div>
				<div class="two" v-if="it.mobileSet.length == 2">
					<img :src="itemimg.imgUrl" alt="" v-for="(itemimg, index) in it.mobileSet" :key="index" />
				</div>
			</div>
			<div class="shop" v-if="!it.mobileSet">
				<div class="list" v-if="it.typography !== '瀑布流'">
					<div class="product" v-for="(pro, index) in it.products" :key="index">
						<img :src="pro.images.url" alt="" />
						<div class="pro_content">
							<div class="pro_ctop">
								<div class="pro_name">{{ pro.images.icon }}</div>
								<div class="pro_label">
									<div class="pro_label_left"><span>月榜素材</span></div>
									<div class="pro_label_right"><span>热销素材</span></div>
								</div>
							</div>
							<div class="pro_cbottom">
								<div>
									<div class="price">￥{{ pro.price.value }}</div>
								</div>
								<div class="sell"><span>月销1.5万件</span></div>
							</div>
						</div>
					</div>
				</div>
				<div class="pop" v-if="it.typography == '瀑布流'">
					<div class="product" v-for="(pro, index) in it.products" :key="index">
						<img :src="pro.images.url" alt="" />
						<div class="pro_content">
							<div class="pro_ctop">
								<div class="pro_name">{{ pro.images.icon }}</div>
								<div class="introduce"></div>
								<div class="pro_label">
									<div class="pro_label_left"><span>月榜素材</span></div>
									<div class="pro_label_right"><span>热销素材</span></div>
								</div>
							</div>
							<div class="pro_cbottom">
								<div>
									<div class="price">￥{{ pro.price.value }}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			bannerOptions: {}
		};
	},
	created() {
		this.do();
	},
	methods: {
		async do() {
			const res = await this.$httpUtil.ajax({
				key: "newStaticLanding",
				state: "state"
			});
			this.bannerOptions = res.bannerOptions;
		}
	}
};
</script>

<style lang="less" scoped>
.main {
	height: 100%;
	overflow-y: auto;
	.banner {
		.ban {
			width: 1100px;
			margin: 0 auto;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.display {
		.picture {
			width: 1100px;
			margin: 0 auto;
			.one {
				img {
					width: 1100px;
				}
			}
			.two {
				display: flex;
				flex-direction: row;
				img {
					width: 550px;
				}
			}
		}
		.shop {
			width: 1100px;
			margin: 0 auto;
			border-radius: 6px;
			border: 2px solid #fff;
			background: black;
			.list {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				border-radius: 18px;
				flex-wrap: wrap;
				align-items: top;
				.product {
					margin: 10px 0;
					margin-left: 16px;
					img {
						border-radius: 6px 6px 0 0;
					}
					.pro_content {
						border-radius: 0 0 6px 6px;
						background: #fff;
						width: 200px;
						height: 130px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.pro_ctop {
							margin: 0 12px;
							.pro_name {
								font-size: 14px;
								font-weight: bold;
								margin-top: 4px;
								margin-bottom: 5px;
							}
							.pro_label {
								display: flex;
								flex-direction: row;
								justify-content: flex-start;
								.pro_label_left,
								.pro_label_right {
									border: 1px solid orange;
									border-radius: 12px;
									color: orange;
									font-size: 12px;
									padding: 1px 6px;
									span {
										font-size: 10px;
									}
								}
								.pro_label_right {
									margin-left: 5px;
								}
							}
						}
						.pro_cbottom {
							margin: 0 12px;
							.sell {
								margin-bottom: 8px;
								span {
									font-size: 6px;
									color: #999;
								}
							}
						}
					}
				}
			}
			.pop {
				column-count: 5;
				column-gap: 0;
				.product {
					break-inside: avoid;
					padding: 10px 0;
					padding-left: 10px;
					img {
						border-radius: 6px 6px 0 0;
					}
					.pro_content {
						background: #fff;
						width: 200px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						border-radius: 0 0 6px 6px;
						.pro_ctop {
							margin: 0 12px;
							.pro_name {
								font-size: 14px;
								font-weight: bold;
								margin-top: 4px;
								margin-bottom: 5px;
							}
							.pro_label {
								display: flex;
								flex-direction: row;
								justify-content: flex-start;
								.pro_label_left,
								.pro_label_right {
									border: 1px solid orange;
									border-radius: 12px;
									color: orange;
									font-size: 12px;
									padding: 1px 6px;
									span {
										font-size: 10px;
									}
								}
								.pro_label_right {
									margin-left: 5px;
								}
							}
						}
						.pro_cbottom {
							margin: 0 12px;
							.price {
								margin-top: 20px;
								margin-bottom: 8px;
								text-align: start;
								font-size: 14px;
								color: #e1251b;
							}
						}
					}
				}
			}
		}
	}
}
</style>
