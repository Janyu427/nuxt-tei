<script setup>
    import {ref, onMounted, onUnmounted, onUpdated, defineEmits, defineProps} from 'vue';

    const itemList = ref([])
    const activeItemKey = ref('categoryAll')
    const productCategoryBox = ref()
    const isFixed = ref(false)
    const emits = defineEmits(['category', 'categoryTabHeight'])

    const props = defineProps({
        isScrollGreaterThanBannerHeight: {
            type: Boolean,
            default: false
        }
    })

    const emitCategoryTabHeight = ()=> {
        const height = productCategoryBox.value.clientHeight
        emits('categoryTabHeight', height);
    }

    const handleClick = (key)=> {
        activeItemKey.value = key
        emits('category', key)
        console.log(key)
    }

    const getApi = async()=> {
        try{
            const response = await fetch('https://janyu427.github.io/test/vueJson/product.json')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            const dataContent = data.product

            itemList.value = [ ...dataContent, { key: 'categoryAll', title: '所有'}]
        } catch(error) {
            console.error('Error fetching or parsing data:', error)
        }
        

    }

    onMounted(()=> {
        getApi()

    })

    onUpdated(()=> {
        emitCategoryTabHeight()
        
    })
</script>

<template>
    <div class="product_category_box" :class="{ 'fixed': isScrollGreaterThanBannerHeight }" ref="productCategoryBox">
        <ul class="inner_box nav nav-tabs">
            <li class="list" :class="{'active': item.key === activeItemKey}" :data-id="item.key" @click="handleClick(item.key)" v-for="item of itemList" :key="item.key">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .product_category_box{
        width: 100%;
        margin: 0 auto;
        padding: 30px 0;
        background-color: #fff;
        z-index: 99;
        &.fixed{
            position: fixed;
            top: 80px;
        }
        .inner_box{
            display: flex;
            width: fit-content;
            margin: 0 auto;
            border: none;
            .list{
                position: relative;
                font-size: 18px;
                color: $grey;
                padding: 0 30px;
                cursor: pointer;
                &::before{
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: 0;
                    width: 1px;
                    height: 20px;
                    transform: translateY(-50%);
                    background-color: $item-grey;
                    z-index: 1;
                }
                &:last-child{
                    &::before{
                        display: none;
                    }
                }
                &.active{
                    color: $brand-color;
                }
                &:hover{
                    color: $brand-color;
                }
            }
        }
    }
</style>
