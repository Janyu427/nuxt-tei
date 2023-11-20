<script setup>

    const sectionTitle = ref('')
    const list = ref([])

    const getApi = async()=> {
        try {
            const response = await fetch('https://janyu427.github.io/test/vueJson/about.json')
            if(!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            const dataContent = data.about
            const secondSection = dataContent.find(item => item.key === 'secondSection')

            if(secondSection) {
                sectionTitle.value = secondSection.title
                list.value = secondSection.list
            }
        }catch (error) {
            console.error('Error fetching or parsing data:', error)
        }
        
    }

    onMounted(()=> {
        getApi()
    })
</script>

<template>
    <div class="team_section" data-id="secondSection">
        <div class="container">
            <h2 class="section_title center">{{ sectionTitle }}</h2>
            <div class="item" v-for="item of list">
                <div class="image_box">
                    <img class="image" :src="item.imgUrl" alt="" width="435" height="436"/>
                </div>

                <div class="text_box">
                    <div class="title_box">
                        <h3 class="subtitle">{{ item.name }}</h3>

                        <p class="position">{{ item.position }}</p>
                    </div>

                    <div class="content list_box">
                        <div class="list" v-for="(contentItem, index) of item.content" :key="index">
                            <h4 class="title">{{ contentItem.title }}</h4>
                            <p class="text" v-html="contentItem.list.join('<br>')"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .team_section{
        background: $bg-grey;
        padding: 60px 0 200px;
        @include max-screen(767px){
            padding: 60px 0 100px;
        }
        .section_title{
            margin-bottom: 60px;
            @include max-screen(767px){
                margin-bottom: 30px;
            }
        }
        .item{
            display: flex;
            justify-content: space-between;
            padding-bottom: 50px;
            margin-bottom: 60px;
            border-bottom: 1px dashed $item-grey;
            @include max-screen(767px){
                flex-direction: column;
            }
            &:last-child{
                border: none;
                padding-bottom: 0;
                margin-bottom: 0;
            }
            .image_box{
                width: 40%;
                @include max-screen(767px){
                    width: 100%;
                    padding-bottom: 30px;
                }
                .image{
                    width: 100%;
                }
            }
            .text_box{
                width: 50%;
                @include max-screen(767px){
                    width: 100%;
                }
                .title_box{
                    padding-bottom: 30px;
                    .subtitle{
                        margin: 0;
                        padding-bottom: 10px;
                    }
                    .position{
                        position: relative;
                        font-size: 14px;
                        color: $text;
                        margin: 0;
                        padding-left: 45px;
                        &::before{
                            content: '';
                            position: absolute;
                            top: 50%;
                            left: 0;
                            width: 30px;
                            height: 1px;
                            background-color: $grey;
                            transform: translateY(-50%);
                        }
                    }
                }
                .content{
                    .list{
                        display: flex;
                        padding-bottom: 20px;
                        .title{
                            font-size: 15px;
                            font-weight: 400;
                            color: $black;
                            min-width: 70px;
                            margin: 0 40px 0 0;
                        }
                        .text{
                            margin: 0;
                        }
                    }
                }
            }
            &:nth-child(odd){
                flex-direction: row-reverse;
                @include max-screen(767px){
                    flex-direction: column;
                }
            }
        }
    }
</style>
