<script setup>
    const logoSrc = ref("")
    const logoAlt = ref("")
    const socialMediaInfo = ref([])
    const basicInfo = ref([])

    const goTop = ()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const getApi = async()=> {
        try{
            const response = await fetch('https://janyu427.github.io/test/vueJson/companyInfo.json')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            const logoNormal = data.logo.logoNormal;
            const alt = data.logo.alt;
            const socialMediaData = data.socialMediaInfo
            const basicInfoData = data.basicInfo

            logoSrc.value = logoNormal
            logoAlt.value = alt
            socialMediaInfo.value = socialMediaData
            basicInfo.value = basicInfoData

            console.log(basicInfo.value)

        } catch(error) {
            console.error('Error fetching or parsing data:', error)
        }
        
    }

    onMounted(()=> {
        getApi()
    })
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer_top">
                <a class="logo_box">
                    <img class="image" :src="logoSrc" id="footerLogo" width="226" height="50" :alt="logoAlt">
                </a>
                <div class="info_box">
                    <div class="top_box" id="mobileNavInfoTopBox">
                        <template v-for="item of basicInfo" :key="item.key">
                            <template v-if="item.key == 'address'">
                                <a class="link" :href="item.link" target="_blank" :title="item.titleTag">{{ item.text }}</a>
                            </template>
                        </template>
                    </div>
                    <div class="bottom_box" id="footerInfoBottomBox">
                        <template v-for="item of basicInfo" :key="item.key">
                            <template v-if="item.key !== 'address'">
                                <div class="list">
                                <span class="title">{{ item.title }}</span>
                                <a class="link" :href="item.link" target="_blank" :title="item.titleTag">{{ item.text }}</a>
                                </div>
                            </template>
                        </template>
                    </div>
                </div>
            </div>
            <div class="footer_bottom">
                <p class="copyright">test Copyright © TEI-I INTERIOR DESIGN All right reserve.</p>
            </div>
            <div class="goTop_box" @click="goTop">
                <p class="text">Page Top</p>
            </div>
        </div>

    </footer>
</template>

<style lang="scss" scoped>
    footer{
        .container{
            position: relative;
        }
        background-color: $bg-grey;
        padding: 40px 0 35px;
        .footer_top{
            display: flex;
            padding: 20px 0 30px;
            @include max-screen(767px){
                flex-direction: column;
            }
            .logo_box{
                width: 40%;
                .image{
                    max-width: 226px;
                    width: 100%;
                }
            }
            .info_box{
                padding: 0 15px 30px;
                @include max-screen(767px){
                padding: 30px 15px 30px 0;
                }
                .title{
                    font-weight: 500;
                }
                .link{
                    font-weight: 500; 
                    color: $black;
                    &:hover{
                        color: $grey;
                    }
                }
                .top_box{
                    margin-bottom: 5px;
                }
                .bottom_box{
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    .list{
                        margin-right: 20px;
                        &:last-child{
                            margin-right: 0;
                        }
                    }
                }
            }
        }
        .footer_bottom{
            .copyright{
                font-size: 12px;
                color: $grey;
            }
        }
        .goTop_box{
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            z-index: 99;
            &:hover{
                .text{
                    color: $grey;
                }
            }
            .text{
                position: relative;
                color: $black;
                font-size: 12px;
                font-weight: 500;
                padding-top: 55px;
                margin-bottom: 0;
                writing-mode: vertical-lr;
                @extend %link-hover;
                &::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    width: 1px;
                    height: 40px;
                    transform: translateX(-50%);
                    background-color: $grey;
                }
            }
        }
    }
</style>
