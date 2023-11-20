<script setup>

    const img = ref('')
    const sectionTitle = ref('')
    const text = ref('')

    const getApi = async()=> {
        try {
            const response = await fetch('https://janyu427.github.io/test/vueJson/about.json')
            if(!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            const dataContent = data.about
            const firstSection = dataContent.find(item => item.key === 'firstSection')

            if(firstSection) {
                sectionTitle.value = firstSection.title
                img.value = firstSection.imgUrl
                text.value = firstSection.text.join('<br/><br/>')
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
    <div class="main_section" data-id="firstSection">
        <div class="image_box">
            <img class="image" width="1530" height="564" :src="img" alt="">
        </div>
        <div class="text_box">
            <div class="container">
                <h2 class="section_title center">{{ sectionTitle }}</h2>
                <p class="text intro" v-html="text"></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main_section{
        padding-bottom: 100px;
        @include max-screen(767px){
            padding-bottom: 60px;
        }
        .image_box{
            width: 95%;
            margin: 0 0 0 auto;
            padding-bottom: 60px;
            @include max-screen(1920px){
                max-width: 1530px;
                padding-bottom: 30px;
            }
            .image{
                width: 100%;
            }
        }
        .text_box{
            max-width: 800px;
            margin: 0 auto;
        }
    }
</style>
