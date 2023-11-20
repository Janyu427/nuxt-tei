<script setup>

    const sectionTitle = ref('')
    const img = ref('')
    const text = ref('')
    const list = ref([])

    const getApi = async()=> {
        try {
            const response = await fetch('https://janyu427.github.io/test/vueJson/about.json')
            if(!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()
            const dataContent = data.about
            const fourthSection = dataContent.find(item => item.key === 'fourthSection')

            if(fourthSection) {
                sectionTitle.value = fourthSection.title
                text.value = fourthSection.text
                list.value = fourthSection.content
                img.value = fourthSection.imgUrl
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
    <div class="charge" data-id="fourthSection">
        <div class="image_box">
            <img class="image" width="1530" height="564" :src="img" alt="">
        </div>
        <div class="text_box">
            <h2 class="section_title">{{ sectionTitle }}</h2>
            <p class="text intro">{{ text }}</p>
            <div class="list_box">
                <li class="list" v-for="(item, index) of list" :key="index">
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="text" v-html="item.list"></p>
                </li>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .charge{
        position: relative;
        margin-bottom: 100px;
        @include max-screen(767px){
            margin-bottom: 60px;
        }
        .image_box{
            width: 95%;
            margin: 0 auto 0 0;
            padding-bottom: 100px;
            background-color: $bg-grey;
            @include max-screen(1920px){
                max-width: 1530px;
                padding-bottom: 60px;
            }
            @include max-screen(480px){
                width: 100%;
                padding-bottom: 0;
            }
            .image{
                width: 100%;
                height: 565px;
                object-fit: cover;
                @include max-screen(480px){
                    height: 250px;
                }
            }
        }
        .text_box{
            position: absolute;
            right: 0;
            bottom: 0;
            width: 90%;
            max-width: 768px;
            background: #fff;
            padding: 60px;
            @include max-screen(480px){
                position: relative;
                width: 100%;
                padding: 30px;
            }
            .intro{
                padding-bottom: 30px
            }
            .list_box{
                .list{
                    display: flex;
                    padding-bottom: 20px;
                    .title{
                        color: $black;
                        min-width: 110px;
                        margin-right: 40px;
                    }
                }
            }
        }
    }
</style>
