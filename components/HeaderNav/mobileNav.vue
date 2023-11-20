<script setup>

    
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faFacebookF, faInstagram, faYoutube, faLine } from '@fortawesome/free-brands-svg-icons'
    library.add(faFacebookF, faInstagram, faYoutube, faLine)

    const props = defineProps(['isShow']);
    const emits = defineEmits(['updateState']);

    const logoSrc = ref("")
    const logoAlt = ref("")
    const navList = ref([])
    const socialMediaInfo = ref([])
    const basicInfo = ref([])
    

    const getApiData = async () => {
        try {
            const response = await fetch('https://janyu427.github.io/test/vueJson/companyInfo.json')
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const logoNormal = data.logo.logoNormal;
            const alt = data.logo.alt;
            const navListData = data.navList
            const socialMediaData = data.socialMediaInfo
            const basicInfoData = data.basicInfo

            logoSrc.value = logoNormal
            logoAlt.value = alt
            navList.value = navListData
            socialMediaInfo.value = socialMediaData
            basicInfo.value = basicInfoData

        } catch (error) {
            console.error('Error fetching or parsing data:', error);
        }
    }

    const closeMobileNav = () => {
        emits('updateState', false);
    };

    onMounted(() => {
        getApiData()
    })
</script>

<template>
    <div class="mobile_nav" :class="{'show': isShow}" v-if="isShow" id="mobileNav">
        <div class="cross" @click="closeMobileNav">
            <div class="item"></div>
            <div class="item"></div>
        </div>
        <div class="inner_box container">
            <NuxtLink class="logo_box" :class="{'show': isShow}" id="mobileNavLogo" to="/" title="Janyu" target="_self">
                <img class="image" :src="logoSrc" :alt="logoAlt" width="270" height="60">
            </NuxtLink>
            <ul class="mobile_nav_list">
                <li class="mobile_list" :class="{'show': isShow}"  v-for="item of navList"  >
                    <NuxtLink class="link" :to="item.link"  @click="closeMobileNav">{{ item.title }}</NuxtLink>
                </li>
            </ul>
            <div class="info_box">
                    <div class="top_box">
                        <div v-for="item of basicInfo" :key="item.key">
                            <template v-if="item.key == 'address'">
                                <a class="link" :href="item.link" target="_blank" :title="item.titleTag">{{ item.text }}</a>
                            </template>
                        </div>
                    </div>
                    <div class="bottom_box">
                        <div v-for="item of basicInfo" :key="item.key">
                            <template v-if="item.key !== 'address'">
                                <div class="list">
                                    <span class="title">{{ item.title }}</span>
                                    <a class="link" :href="item.link" target="_blank" :title="item.titleTag">{{ item.text }}</a>
                                </div>
                            </template>
                        </div>
                    </div>
            </div>
            <div class="social_media">
                <a class="link" v-for="item in socialMediaInfo" :key="item.key" :href="item.link" :title="item.titleTag" target="_blank">
                    <font-awesome-icon v-if="item.key === 'fb'" icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon v-if="item.key === 'youtube'" icon="fa-brands fa-youtube" />
                    <font-awesome-icon v-if="item.key === 'ig'" icon="fa-brands fa-instagram" />
                    <font-awesome-icon v-if="item.key === 'line'" icon="fa-brands fa-line" />
                </a>
            </div>
        </div>
    </div>
</template>

<style  lang="scss" scoped>
    .mobile_nav {
        opacity: 0;
        visibility: hidden;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: #fff;
        transition: none;
        visibility: hidden;
        z-index: -1;

        &.show {
            opacity: 1;
            visibility: visible;
            z-index: 999;
        }

        .cross {
            position: absolute;
            width: 80px;
            height: 80px;
            top: 0;
            right: 0;
            padding: 10px;
            cursor: pointer;
            background: $cross_bg;

            .item {
                width: 30px;
                height: 1px;
                background-color: #fff;
                border-radius: 5px;

                &:nth-child(1) {
                    transform: rotate(-45deg) translate(-9px, 33px);
                }

                &:nth-child(2) {
                    transform: rotate(45deg) translate(33px, 9px);
                }
            }
        }

        .inner_box {
            padding: 100px 5% 5%;

            .logo_box {
                display: block;
                margin-bottom: 60px;
                opacity: 0;

                &.show {
                    opacity: 1;
                }

                .image {
                    width: 100%;
                    max-width: 270px;
                }
            }

            .mobile_nav_list {
                position: relative;
                padding: 15px;
                margin-bottom: 30px;

                &::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 15px;
                    width: 40px;
                    height: 1px;
                    background-color: $item-grey;
                }

                .mobile_list {
                    padding: 15px 0;
                    opacity: 0;

                    .link {
                        position: relative;
                        color: $text;
                        font-size: 18px;

                        &:hover {
                            color: $brand-color;
                        }

                        &:after {
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: -10px;
                            width: 100%;
                            height: 2px;
                            background: #ccc;
                            opacity: 0;
                        }
                    }

                    &.show {
                        opacity: 1;
                    }
                }
            }

            .info_box {
                position: relative;
                padding: 0 15px 30px;
                margin-bottom: 30px;

                &::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 15px;
                    width: 40px;
                    height: 1px;
                    background-color: $item-grey;
                }

                .title {
                    color: $text;
                    font-weight: 500;
                }

                .link {
                    font-weight: 500;
                    color: $text;

                    &:hover {
                        color: $brand-color;
                    }
                }

                .top_box {
                    margin-bottom: 5px;
                }

                .bottom_box {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;

                    .list {
                        margin-right: 20px;

                        &:last-child {
                            margin-right: 0;
                        }
                    }
                }
            }

            .social_media {
                padding: 0 15px;

                .link {
                    border: 1px solid $text;
                    color: $text;

                    &:hover {
                        border: none;
                        color: #fff;
                        background-color: $brand-color;

                        &.line,
                        &.youtube {
                            .image {
                                filter: brightness(109%);
                            }
                        }
                    }

                    &.line,
                    &.youtube {
                        .image {
                            filter: invert(42%) sepia(7%) saturate(0%) hue-rotate(170deg) brightness(92%) contrast(90%);
                        }
                    }
                }
            }
        }

    }
</style>