<script setup>
    import mobileNav from './mobileNav.vue'

    const route = useRoute()
    const path = route.path 
    const isInnerPage = ref(false)
    const headerNav = ref(null)
    const isFixed = ref(false)
    const emits = defineEmits(['headerNavHeight'])

    const emitHeaderNavHeight = ()=> {
        const height = headerNav.value.clientHeight;
        emits('headerNavHeight', height); 
    }

    const checkUrl = ()=> {
        if(path  !== '/'){
            isInnerPage.value = !isInnerPage.value
        }
    }

    const props = defineProps(['isScrollGreaterThanBannerHeight'])

    const logoSrc = ref("")
    const logoAlt = ref("")
    const navList = ref([])
    const mobileNavIsShow = ref(false)
    const socialMediaInfo = ref([]);
    const basicInfo = ref([]);

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

    const mobileNavToggle = () => {
        mobileNavIsShow.value = !mobileNavIsShow.value
    }

    onMounted(() => {
        getApiData()
        checkUrl()

    })

    onUpdated(()=> {
        emitHeaderNavHeight()
    })
</script>

<template>
    <header>
        <div class="header-nav" :class="{ 'fixed': isInnerPage || isScrollGreaterThanBannerHeight }" ref="headerNav">
            <div class="header">
                <div class="container_wide">
                    <div class="burger" @click="mobileNavToggle">
                        <div class="item_box">
                            <div class="item"></div>
                            <div class="item"></div>
                            <div class="item"></div>
                        </div>
                    </div>
                    <NuxtLink class="logo" title="程翊室內裝修" to="/">
                        <img class="image" id="navLogo" :src="logoSrc" width="226" height="50" :alt="logoAlt">
                    </NuxtLink>
                    <ul id="nav">
                        <li class="list" v-for="item of navList">
                            <NuxtLink class="link" :class="{'active': path === item.link }" :to="item.link" :title="item.title">{{ item.title }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <mobileNav :isShow="mobileNavIsShow" @updateState="mobileNavIsShow = $event"/>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        position: relative;
        background: $bg-grey;

        .container_wide {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
        }

        .burger {
            position: absolute;
            top: 0;
            right: 0;
            width: 80px;
            height: 80px;
            background: $cross_bg;
            display: none;
            align-items: center;
            justify-content: center;

            @include max-screen(767px) {
                display: flex;
            }

            .item_box {
                .item {
                    height: 1px;
                    background-color: #fff;
                    margin: 8px;
                    border-radius: 5px;
                    margin-right: 0;
                    margin-left: auto;

                    &:nth-child(1) {
                        width: 28px;
                    }

                    &:nth-child(2) {
                        width: 23px;
                    }

                    &:nth-child(3) {
                        width: 30px;
                    }
                }
            }
        }

        .logo {
            display: block;
            max-width: 172px;

            img {
                width: 100%;
            }
        }
    }

    .header-nav {
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        background: #fff;
        z-index: 100;
        &.fixed {
            position: fixed;
        }
    }

    #nav {
        display: flex;
        align-items: center;

        @include max-screen(767px) {
            display: none;
        }

        li a {
            display: block;
        }

        >li {
            &:last-child {
                a {
                    padding-right: 0;
                }
            }

            &:hover {
                color: $grey;

                >a {
                    color: $grey;
                }
            }

            >a {
                color: $grey;
                font-size: 18px;
                padding: 0 30px 0 0;

                @include max-screen(991px) {
                    padding: 0 15px 0 0;
                    font-size: 16px;
                }

                &:hover,
                &.active {
                    color: $brand-color;
                }
            }
        }

        .level0-wrapper {
            color: #333;
            display: none;
            position: absolute;
            background-color: #fff;
            border-top: 1px $brand-color solid;
            padding-bottom: 0px;
            padding: 15px 15px 0 15px;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            left: 0;
            top: 100%;
            @extend %clearfix;

            ul.level0 {
                @extend %clearfix;
                margin: 0 -15px;
                padding: 0;

                .parent {
                    float: left;
                    padding: 0 15px 15px 15px;
                    width: 20%;

                    @include max-screen(991px) {
                        width: 33.33333333333333%;
                    }

                    >a {
                        font-weight: 600;
                        font-size: 14px;

                        &:hover {
                            color: $brand-color;
                        }
                    }
                }
            }

            ul.level1 .level2 a {
                padding: 4px 0;
                display: block;
                font-size: 13px;

                &:hover {
                    color: $brand-color;
                }

                &:before {
                    content: '\f105';
                    font-family: FontAwesome;
                    font-size: 13px;
                    padding-right: 6px;
                    color: #555;
                }
            }
        }

        .drop-menu {
            position: relative;

            ul {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                background: #fff;
                border-top: 1px $brand-color solid;
                box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
                width: 165px;
                text-align: left;

                li {
                    a {
                        color: #000;
                        line-height: 30px;
                        font-size: 13px;
                        padding: 4px 12px;

                        &:hover {
                            color: $brand-color;
                        }
                    }
                }

            }
        }
    }

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