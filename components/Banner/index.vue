<script setup>
    import { register } from 'swiper/element/bundle';
    import '../../../node_modules/swiper/swiper-bundle.min.css';
    import MobileNav from '../HeaderNav/mobileNav.vue'

    import { library } from '@fortawesome/fontawesome-svg-core'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faFacebookF, faInstagram, faYoutube, faLine } from '@fortawesome/free-brands-svg-icons'
    library.add(faFacebookF, faInstagram, faYoutube, faLine)

    const logoSrc = ref("")
    const logoAlt = ref("")
    const logoIcon = ref("")
    const navList = ref([])
    const bannerList = ref([])
    const mobileNavIsShow = ref(false)
    const socialMediaInfo = ref([]);
    const bannerBox = ref(null);
    const emits = defineEmits({
        bannerHeight: {
            type: Number,
            default: 0
        }
    })

    const emitBannerHeight = ()=> {
        const height = bannerBox.value.clientHeight;
        emits('bannerHeight', height); 
    }

    const setSwiper = ()=> {
        register()
    }
    
    
    const mobileNavToggle = () => {
        mobileNavIsShow.value = !mobileNavIsShow.value
    }

    const getApiData = async () => {
        try {
            const [companyInfoResponse, bannerResponse] = await Promise.all([
                fetch('https://janyu427.github.io/test/vueJson/companyInfo.json'),
                fetch('https://janyu427.github.io/test/vueJson/banner.json')
            ])
            if (!companyInfoResponse.ok || !bannerResponse.ok) {
                throw new Error('Network response was not ok')
            }
            const companyInfoData = await companyInfoResponse.json()
            const bannerData = await bannerResponse.json()

            const logotypeWhite = companyInfoData.logo.logotypeWhite
            const alt = companyInfoData.logo.alt
            const Icon = companyInfoData.logo.icon
            const navListData = companyInfoData.navList
            const bannerListData = bannerData.banner
            const socialMediaData = companyInfoData.socialMediaInfo

            logoSrc.value = logotypeWhite
            logoAlt.value = alt
            logoIcon.value = Icon
            navList.value = navListData
            bannerList.value = bannerListData
            socialMediaInfo.value = socialMediaData

        } catch (error) {
            console.error('Error fetching or parsing data:', error)
        }
    }

    onMounted(()=> {
        getApiData()
        setSwiper()
    })

    onUpdated(()=> {
        emitBannerHeight()
    })

</script>

<template>
    <div class="swiper mySwiper banner-slide" ref="bannerBox">
        <div class="index_nav">
            <NuxtLink class="logo_box" to="/" title="程翊室內設計" ref="logoBox">
                <img class="image" id="bannerNavLogo" :src="logoSrc" width="320" height="90" :alt="logoAlt">
            </NuxtLink>
            <div class="nav_link" ref="link">
                <ul class="link_box" id="bannerNav">
                    <li class="list" v-for="item of navList">
                        <NuxtLink class="link" :to="item.link">{{ item.title }}</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="social_media">
                <a class="link" v-for="item in socialMediaInfo" :key="item.key" :href="item.link" :title="item.titleTag" target="_blank">
                    <font-awesome-icon v-if="item.key === 'fb'" icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon v-if="item.key === 'youtube'" icon="fa-brands fa-youtube" />
                    <font-awesome-icon v-if="item.key === 'ig'" icon="fa-brands fa-instagram" />
                    <font-awesome-icon v-if="item.key === 'line'" icon="fa-brands fa-line" />
                </a>
            </div>
            <div class="burger" @click="mobileNavToggle">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
            </div>
        </div>
        <swiper-container slides-per-view="1" effect="fade" speed="4000" loop="true" >
            <swiper-slide class="swiper-slide" v-for="item of bannerList">
                <div class="swiper-image">
                    <div class="image" :style="{ 'background-image': 'url(' + item.bgSrc + ')' }"></div>
                </div>
            </swiper-slide>
        </swiper-container>
        <div class="scroll_box">
            <p class="text">SCROLL</p>
        </div>
        <div class="logo_icon">
            <img class="image" id="bannerLogoIcon" :src="logoIcon" width="80" height="78">
        </div>
    </div>
    <MobileNav :isShow="mobileNavIsShow" @updateState="mobileNavIsShow = $event"/>
</template>


<style lang="scss" scoped>
    .banner-slide{
        .index_nav{
            width: 90%;
            position: absolute;
            display: flex;
            justify-content: space-between;
            align-items: center;
            top: 30px;
            left: 5%;
            z-index: 99;
            .logo_box{
                max-width: 320px;
                @include max-screen(1200px){
                    max-width: 200px;
                }
                .image{
                    width: 100%;
                }
            }
            .nav_link{
                @include max-screen(991px){
                    display: none;
                }
                .link_box{
                    display: flex;
                    >li{
                        a{
                            font-size: 18px;
                            padding: 0 15px;
                            color: #fff;
                            &:hover{
                                color: $grey;
                            }
                        }
                    }
                }
            }
            .social_media{
                @include max-screen(991px){
                    display: none;
                }
                .link{
                    @include max-screen(991px){
                        margin-right: 15px;
                        &:last-child{
                            margin-right: 0;
                        }
                    }
                }
            }
            .burger{
                display: none;
                cursor: pointer;
                z-index: 9999;
                @include max-screen(991px){
                    display: block;
                }
                .item{
                    height: 2px;
                    background-color: #fff;
                    margin: 8px;
                    border-radius: 5px;
                    &:nth-child(1){
                        width: 28px;
                        margin-left: auto;
                    }
                    &:nth-child(2){
                        width: 23px;
                        margin-left: auto;
                    }
                    &:nth-child(3){
                        width: 30px;
                    }
                    
                }
            }
        }
        .swiper-slide{
            .swiper-image{
                position: relative;
                &::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, .3);
                }
                .image{
                    height: calc(var(--vh, 1vh) * 100);
                    background-position: 50% 50%;
                    background-size: cover;
                    background-repeat: no-repeat;
                }
            }
        }
        .scroll_box{
            position: absolute;
            bottom: 0;
            left: 6%;
            z-index: 99;
            .text{
                position: relative;
                color: #fff;
                font-size: 12px;
                font-weight: 500;
                padding-bottom: 85px;
                margin-bottom: 0;
                writing-mode: vertical-lr;
                &::before{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 1px;
                    height: 60px;
                    transform: translateX(-50%);
                    background-color: #fff;
                }
            }
        }
        .logo_icon{
            position: absolute;
            right: 5%;
            bottom: 50px;
            z-index: 99;
        }
    }
</style>