<script setup>

    const list = ref([])
    // const apiSubject = ref()
        
    // apiSubject.value = 'video'

    // const getApi = async()=> {
    //     try {
    //         const response = await fetch('https://janyu427.github.io/test/vueJson/video.json')
    //         if(!response.ok) {
    //             throw new Error('Network response was not ok')
    //         }
    //         const data = await response.json()
            
    //         list.value = data.video
    //     }catch (error) {
    //         console.error('Error fetching or parsing data:', error)
    //     }
    // }

    // const { data } = await useFetch('https://janyu427.github.io/test/vueJson/video.json')

    // const { data, pending, error, refresh } = await getApi(apiSubject.value)
    // list.value = data._value.video

    const { data, pending, error, refresh } = await useAsyncData(
        'video',
        () => $fetch('https://janyu427.github.io/test/vueJson/video.json')
    )

    list.value = data._value.video

    // onMounted(()=> {
    //     getApi()
    // })
    
</script>

<template>
    <div class="video">
        <div class="top_box">
            <div class="container">
                <template v-for="item of list" :key="item.key">
                    <template v-if="item.key === '1'">
                        <div class="iframe_box">
                            <iframe class="iframe" :src="item.videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>
                        <div class="text_box">
                            <h2 class="section_title">{{ item.title }}</h2>
                            <p class="text">{{ item.text }}</p>
                        </div>
                    </template>
                </template>
            </div>
        </div>
        <div class="bottom_box" >
            <div class="container">
                <template v-for="item of list" :key="item.key">
                    <div class="item" v-if="item.key !== '1'">
                        <div class="iframe_box">
                            <iframe class="iframe" :src="item.videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>
                        <div class="text_box">
                            <h2 class="section_title">{{ item.title }}</h2>
                            <p class="text">{{ item.text }}</p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .video{
        position: relative;
        &::before{
            content: '';
            position: absolute;
            top: 100px;
            left: 0;
            width: 100%;
            height: 100%;
            background: $bg-grey;
        }
        &::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100px;
            background: #fff;
        }
        .top_box{
            position: relative;
            margin-bottom: 60px;
            > .container{
                display: flex;
                align-items: flex-end;
                @include max-screen(767px){
                    flex-direction: column;
                    align-items: flex-start;
                }
                &::before, &::after{
                    display: none;
                }
            }
            .iframe_box{
                position: relative;
                width: 60%;
                @include max-screen(991px){
                    width: 70%;
                }
                @include max-screen(767px){
                    width: 100%;
                }
                &::before{
                    content: '';
                    display: block;
                    padding-bottom: 56%;
                }
                .iframe{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }
            .text_box{
                padding: 60px;
                @include max-screen(767px){
                    padding: 30px 15px;
                }
            }
        }
        .bottom_box{
            position: relative;
            background: #fff;
            padding: 60px 0;
            &::before{
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 10%;
                height: 100%;
                background: $bg-grey;
                @include max-screen(1920px){
                    width: 5%;
                }
                @include max-screen(767px){
                    display: none;
                }
            }
            > .container{
                display: flex;
                flex-wrap: wrap;  
                @include max-screen(1440px){
                    padding-right: 5%;
                }
                @include max-screen(767px){
                    padding-right: 0;
                }
                &::before, &::after{
                    display: none;
                }
            }          
            .item{
                margin-right: 30px;
                width: calc((100% - 60px)/3);
                &:nth-child(3n){
                    margin-right: 0;
                }
                &:last-child{
                    margin-right: 0;
                }
                @include max-screen(991px){
                    width: calc((100% - 30px)/2);
                    &:nth-child(3n){
                        margin-right: 30px;
                    }
                    &:nth-child(2n){
                        margin-right: 0;
                    }
                }
                @include max-screen(480px){
                    &:nth-child(3n){
                        margin-right: 0;
                    }
                    width: 100%;
                    margin: 0 0 30px 0;
                }
                .iframe_box{
                    position: relative;
                    width: 100%;
                    &::before{
                        content: '';
                        display: block;
                        padding-bottom: 56%;
                    }
                    .iframe{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                }
                .text_box{
                    padding: 20px 15px;
                }
            }
        }
    }
</style>
