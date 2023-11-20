<script setup>

    import Item from './item.vue'

    let itemList = ref([])
    let isfade = ref(false)

    const props = defineProps({
        computedFixedMarginTop: {
            type: Function, 
            default: ()=> {}
        },
        isScrollGreaterThanBannerHeight: {
            type: Boolean,
            default: false
        },
        productCategory: {
            type: String,
            default: ''
        }
    })

    const getApi = async(productCategory)=> {
        try{
            const response = await fetch('https://janyu427.github.io/test/vueJson/product.json')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            const dataContent = data.product

            itemList.value = []

            for(let i = 0; i < dataContent.length; i++) {
                if(productCategory === "categoryAll") {
                    itemList.value = itemList.value.concat(dataContent[i].items)
                    itemList.value.sort((a, b) => a.itemNumber - b.itemNumber)
                    isfade.value = true
                }
                else if(productCategory === dataContent[i].key ) {
                    itemList.value = dataContent[i].items
                    isfade.value = true
                }
            }            
        } catch(error) {
            console.error('Error fetching or parsing data:', error)
        }
    }

    const computedFixedMarginTop = computed(() => {
        return `${props.computedFixedMarginTop}px`
        
    })

    onMounted(()=> {

        watchEffect(() => {
            getApi(props.productCategory);
        })
        
    })

</script>

<template>
    
    <div class="product_category_content tab-content" :style="{ 'margin-top': isScrollGreaterThanBannerHeight  ? computedFixedMarginTop : 0 }">
            <div class="product_list_box tab-pane">
                <Item :itemBgSrc="item.bgSrc" :itemName="item.name" :productId="item.itemNumber" :title="item.titleTag" v-for="item of itemList" :key="item.name" />
            </div>
    </div>
</template>

<style lang="scss" scoped>
    .product_list_box{
        display: flex;
        flex-wrap: wrap;
    }

</style>
