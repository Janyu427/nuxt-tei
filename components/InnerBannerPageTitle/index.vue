<script setup>

    const pageTitle = ref('')
    const enPageTitles = ref('')
    const titleImg = ref('')
    const pageTitleBox = ref()
    const props = defineProps(['currentRoutePage'])
    const emits = defineEmits(['pageTitleHeight'])

    const emitPageTitleHeight = ()=> {
        const height = pageTitleBox.value.clientHeight;
        emits('pageTitleHeight', height); 
    }

    const getApi = async(currentRoutePage)=> {
        try {
            const response = await fetch('https://janyu427.github.io/test/vueJson/InnerBannerPageTitle.json')
            if(!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            const InnerBannerPageTitleData = data.InnerBannerPageTitle

            for(let i = 0; i < InnerBannerPageTitleData.length; i++) {
                if(currentRoutePage == InnerBannerPageTitleData[i].key) {
                    pageTitle.value = InnerBannerPageTitleData[i].title
                    enPageTitles.value = InnerBannerPageTitleData[i].enTitle
                    titleImg.value = InnerBannerPageTitleData[i].titleImgUrl
                }
            }
        }catch (error) {
            console.error('Error fetching or parsing data:', error)
        }
        
    }

    onMounted( ()=> {
        watchEffect(() => {
            getApi(props.currentRoutePage)
        })
    })

    onUpdated( ()=> {
        emitPageTitleHeight()
    })
    

</script>

<template>
    <div class="page_title_box" ref="pageTitleBox">
        <div class="container">
            <div class="text_box">
                <div class="vertical_text" id="topSectionTitle">{{ pageTitle }}</div>
                <p class="en_text" id="topSectionEnTitle">{{ enPageTitles }}</p>
            </div>
            <div class="wire_image_box">
                <img class="image" id="titleWireImg" :src="titleImg" width="176" height="70">
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    .page_title_box{
        padding: 100px 0 60px;
        margin-top: 80px;
        > .container{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            &::before, &::after{
                display: none;
            }
        }
        .text_box{
            display: flex;
            align-items: flex-end;
            .vertical_text{
                color: $brand-color;
                font-size: 20px;
                margin-right: 60px;
                letter-spacing: 5px;
                writing-mode: vertical-lr;
                @include max-screen(480px){
                    margin-right: 20px;
                }
            }
            .en_text{
                position: relative;
                color: $text;
                font-size: 16px;
                padding-left: 45px;
                margin-bottom: 15px;
                &::before{
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 30px;
                    height: 1px;
                    transform: translateY(-50%);
                    background-color: $grey;
                }
            }
        }
        .wire_image_box{
            height: 70px;
            @include max-screen(480px){
                height: 50px;
            }
            .image{
                width: auto;
                height: 100%;
            }
        }
    }
</style>
