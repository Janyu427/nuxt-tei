<script setup>

    import { register } from 'swiper/element/bundle';   
    import '../../../node_modules/swiper/swiper-bundle.min.css'

    const sectionTitle = ref('')
    const intro = ref('')
    const imgItems = ref([])
    const productImgIndex = ref(1)

    const route = useRoute()

    const setSwiper = ()=> {
        register()

        const swiperEl = document.querySelector('swiper-container')

        const swiperParams = {
            slidesPerView: 1.2,
            lazy: true,
            loop: false,
            centeredSlides: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            spaceBetween: 30,
            on: {
                slideChange: () => {
                    productImgIndex.value = swiperEl.swiper.realIndex + 1
                }
            }
        }

        Object.assign(swiperEl, swiperParams)
        swiperEl.initialize()

    }

    

    

    const getApi = async(productId)=> {
        try {
            const response = await fetch('https://janyu427.github.io/test/vueJson/productDetails.json')
            if(!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            const productDetailsData = data.productDetails

            for(let i = 0; i < productDetailsData.length; i++) {
                if( productDetailsData[i].productId === productId ) {

                    sectionTitle.value = productDetailsData[i].title
                    intro.value = productDetailsData[i].intro
                    imgItems.value = productDetailsData[i].carouselImgs
                }
            }
        }catch (error) {
            console.error('Error fetching or parsing data:', error)
        }
    }

    onMounted(()=> {
        setSwiper()

        watchEffect(() => {
            const productId = route.query.productId

            if (productId) {
                getApi(productId)
            }
        })

    })

    onBeforeUnmount(()=> {
        setSwiper()
    })
    
</script>

<template>
        <div class="photo_slide">
            <div class="text_box">
                <div class="container">
                    <h2 class="section_title">{{ sectionTitle }}</h2>
                    <p class="text">{{ intro }}</p>
                </div>
            </div>
            <lightgallery>
            <div class="swiper photo_box container">
                <swiper-container init="false">
                    <swiper-slide class="swiper-slide" v-for="item of imgItems" :data-src="item">
                        <a  :data-src="item">
                            <div class="swiper-image">
                                <img class="image" :src="item" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </a>
                    </swiper-slide>
                </swiper-container>    
 
                <div class="swiper_btn_box">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-counter">
                        <span class="count">{{ productImgIndex }}</span>
                        <span class="total">{{ imgItems.length }}</span>
                    </div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            </lightgallery>
        </div>
</template>

<style lang="scss" scoped>
    .photo_slide{
        background: $bg-grey;
        padding-top: 60px;
        .text_box{
            padding-bottom: 60px;
        }
        .photo_box{
            &.container{
                overflow: unset;
            }
            .swiper-slide{
                opacity: .5;
                .swiper-image{
                    display: block;
                    padding-bottom: 66.66666666%;
                    background: $item-grey;
                }
                .image{
                    position: absolute;
                    width: auto;
                    height: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
            .swiper-slide-active{
                opacity: 1;
            }
            .swiper_btn_box{
                display: flex;
                justify-content: space-between;
                padding: 30px 0;
                .swiper-counter{
                    position: relative;
                    width: 45px;
                    height: 45px;
                    &::before{
                        content: '';
                        position: absolute;
                        bottom: 22.5px;
                        left: 0;
                        z-index: 1;
                        width: 45px;
                        height: 1px;
                        background-color: $item-grey;
                        transform: rotate(-45deg);
                    }
                    .count{
                        position: absolute;
                        top: 0;
                        left: 5px;
                        color: $black;
                    }
                    .total{
                        position: absolute;
                        bottom: 0;
                        right: 5px;
                        color: $grey;
                    }
                }
                .swiper-button-prev, .swiper-button-next{
                    position: relative;
                    width: 60px;
                    margin: 0;
                    background: transparent;
                }
                .swiper-button-prev{
                    &::after{
                        content: url('/swiper_arrow_left.svg');
                        background-size: contain;
                    }
                }
                .swiper-button-next{
                    &::after{
                        content: url('/swiper_arrow_right.svg');
                        background-size: contain;
                    }
                }
            }
        }
    }
</style>