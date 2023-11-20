<script setup>

    import item from "../ProductList/item.vue"

    let itemList = ref([])

    const route = useRoute()

    const getApi = async(productId)=> {
        const response = await fetch('https://janyu427.github.io/test/vueJson/product.json')
        const data = await response.json()
        const dataContent = data.product

        itemList.value = []

        for( let i=0; i<dataContent.length; i++ ) {
            itemList.value = itemList.value.concat(dataContent[i].items.filter(item => item.itemNumber !== productId))
            itemList.value.sort((a, b) => a.itemNumber - b.itemNumber)
            
        }
    }

    onMounted(()=> {
        watchEffect(() => {
            const productId = route.query.productId

            if (productId) {
                getApi(productId)
                window.scrollTo(0, 0);
            }
        })
    })
</script>

<template>
   <div class="other_product">
        <div class="container">
            <h2 class="section_title center">其他作品</h2>
            <div class="product_list_box">
                <item :itemBgSrc="listItem.bgSrc" :itemName="listItem.name" :productId="listItem.itemNumber" v-for="listItem of itemList" :key="listItem.name"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .other_product{
        padding: 60px 0;
    }

    .product_list_box{
        display: flex;
        flex-wrap: wrap;
        .list{
            position: relative;
            width: 25%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            @include max-screen(991px){
                width: 33.3333333333333%;
            }
            @include max-screen(767px){
                width: 50%;
            }
            &::before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, .5);
                opacity: 0;
                @extend %link-hover;
                @include max-screen(767px){
                    display: none;
                }
            }
            &::after{
                content: '';
                display: block;
                padding-bottom: 100%;
            }
            &:hover{
                &::before{
                    opacity: 1;
                }
                .text_box{
                    opacity: 1;
                }
            }
            .text_box{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                @extend %link-hover;
                @include max-screen(767px){
                    width: 100%;
                    top: unset;
                    left: 0;
                    bottom: 0;
                    opacity: 1;
                    transform: none;
                    background: rgba(255, 255, 255, .8);
                }
                .title{
                    color: #fff;
                    font-size: 18px;
                    padding: 45px 10px;
                    margin: 0;
                    @include max-screen(767px){
                        font-size: 14px;
                        text-align: center;
                        color: $black;
                        padding: 20px 10px;
                    }
                    &::before{
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 50%;
                        width: 1px;
                        height: 30px;
                        transform: translateX(-50%);
                        background: #fff;
                        @include max-screen(767px){
                            display: none;
                        }
                    }
                    &::after{
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        width: 1px;
                        height: 30px;
                        transform: translateX(-50%);
                        background: #fff;
                        @include max-screen(767px){
                            display: none;
                        }
                    }
                }
            }
        }
    }
</style>
