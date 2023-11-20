<script setup>

    const sectionTitle = ref('')
    const enTitle = ref('')
    const list = ref([])

    const isLastChild = (itemIndex, itemList) => {
        return itemIndex === itemList.length - 1
    }

    const getApi = async()=> {
        try {
            const response = await fetch('https://janyu427.github.io/test/vueJson/about.json')
            if(!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            const dataContent = data.about
            const thirdSection = dataContent.find(item => item.key === 'thirdSection')

            if(thirdSection) {
                sectionTitle.value = thirdSection.title
                enTitle.value = thirdSection.enTitle
                list.value = thirdSection.content
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
    <div class="process_section"  data-id="thirdSection">
        <div class="container">
            <div class="title_box">
                <h2 class="section_title">{{ sectionTitle }}</h2>
                <p class="en_text">{{ enTitle }}</p>
            </div>
            <div class="content_box">
                <ul class="list_box" v-for="(item, itemIndex) of list" :key="itemIndex">
                    <li class="list" v-for="(listItem, listIndex) of item.list" :class="{ 'last-child': isLastChild(itemIndex, list)}" :key="listIndex">
                        <p class="step_count">{{ item.title }}</p>
                        <h3 class="text" v-html="listItem"></h3>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .process_section{
        width: 80%;
        background-color: #fff;
        margin: -100px auto 0;
        padding: 100px 0;
        position: relative;
        @include max-screen(767px){
            width: 90%;
            margin: -60px auto 0;
            padding: 60px 0;
        }
        .container{
            display: flex;
            align-items: center;
            @include max-screen(767px){
                flex-direction: column;
            }
        }
        .title_box{
            width: 50%;
            @include max-screen(767px){
                width: 100%;
                padding-bottom: 30px;
            }
            .en_text{
                font-size: 20px;
                margin: 0;
                color: $grey;
            }
        }
        .content_box{
            width: 50%;
            @include max-screen(767px){
                width: 100%;
            }
            .list_box{
                .list{
                    position: relative;
                    padding: 0 0 30px 50px;
                    &::before{
                        content: '';
                        position: absolute;
                        top: 20px;
                        left: 0;
                        width: 14px;
                        height: 14px;
                        border: 1px solid $item-grey;
                        border-radius: 100%;
                    }
                    &::after{
                        content: '';
                        position: absolute;
                        top: 34px;
                        left: 7px;
                        width: 1px;
                        height: calc(100% - 14px);
                        background: $item-grey;
                    }
                    &.last-child::after {
                        display: none;
                    }
                    .step_count{
                        color: $grey;
                    }
                    .text{
                        color: $black;
                        font-weight: 500;
                        margin: 0;
                    }
                }
            }
        }
    }
</style>
