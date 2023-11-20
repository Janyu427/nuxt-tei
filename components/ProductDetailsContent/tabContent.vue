<script setup>

    let productDetailContent = ref([])
    let activeIndex = ref(0)
    const route = useRoute()

    const getApi = async(productId)=> {
        const response = await fetch('https://janyu427.github.io/test/vueJson/productDetails.json')
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        const productDetailsData = data.productDetails

        for(let i = 0; i < productDetailsData.length; i++) {
            if( productDetailsData[i].productId === productId ) {
                productDetailContent.value = productDetailsData[i].detailContent
            }
        }

    }

    onMounted(()=> {
        watchEffect(() => {
            const productId = route.query.productId

            if (productId) {
                getApi(productId)
            }
        })
    })

</script>

<template>
    <div class="product-tabs">
        <div class="container">
            <ul class="nav nav-tabs">
                <li class="list" :class="{ active : activeIndex === index }" v-for="( item, index ) of productDetailContent" :key="index" @click="activeIndex = index">{{ item.title }}</li>
            </ul>
            <div class="tab-content">
                <template  v-for="( item, index ) of productDetailContent" :key="index">
                    <div class="products-description-list" v-for="( listItem, listItemIndex ) of item.list" v-if="activeIndex === index" :key="listItemIndex">
                        <div class="products-description-image-wrap">
                            <img class="image" :src="listItem.imgSrc">
                        </div>
                        <div class="products-description-content-wrap">
                            <div class="products-description-content">
                                {{ listItem.text }}
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .product-tabs {
        padding-top: 60px;
        
        .tab-content {
            display: flex;
            flex-wrap: wrap;
            padding: 30px 15px;
            border-bottom: 1px solid $item-grey;
        }
    }

    .nav-tabs {
        display: flex;
        border-bottom: 1px solid $item-grey;
        @include max-screen(479px) {
            white-space: nowrap;
            width: 100%;
            overflow-y: hidden;
            overflow-x: auto;
        }
        li {
            font-size: 18px;
            color: $grey;
            padding: 0 30px 20px 0;
            cursor: pointer;
            &:hover{
                color: $brand-color;
            }
            &.active {
                color: $brand-color;
            }
        }
    }
    
    .products-description-list {
        display: flex;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px dotted #ddd;
        @extend %clearfix;
        @include max-screen(991px) {
            flex-direction: column;
            width: 50%;
            padding: 0 10px;
            border-bottom: 0;
        }
        @include max-screen(767px) {
            width: 100%;
            float: none;
        }
        &:last-child {
            margin-bottom: 0;
            border-bottom: 0;
        }    
        .products-description-image-wrap {
            float: left;
            width: 50%;
            @include max-screen(991px) {
                float: none;
                width: 100%;
            }
        }
        .products-description-content-wrap {
            float: left;
            width: 50%;
            display: table;
            @include max-screen(991px) {
                float: none;
                width: 100%;
                display: block;
                padding-bottom: 20px;
                border-bottom: 1px dotted #ddd; 
            }
        }
        .products-description-image {
            width: 50%;
            display: table-cell;
            vertical-align: middle;
            @include max-screen(991px) {
                width: 100%;
                display: block;
                text-align: center;
                padding: 0;
            }
            img {
                @extend %img-responsive;
            }
        }
        .products-description-content {
            display: table-cell;
            vertical-align: middle;
            padding: 10px 0 10px 20px;
            text-align: justify;
            p {
                margin: 0;
            }
            @include max-screen(991px) {
                padding: 10px 0 0 0;
                display: block;
            }
            .products-description-title {
                font-size: 20px;
                font-weight: normal;
                margin-bottom: 10px;
                margin-top: 0px;
                line-height: 1.4em;
            }
        }
        &:nth-child(even) {
            flex-direction: row-reverse;
            @include max-screen(991px) {
                flex-direction: column;
            }

            .products-description-content {
                padding: 10px 20px 10px 0; 
                @include max-screen(991px) {
                    padding: 10px 0 0 0;
                }
            }
        }    
    }

    .product-tabs-content-inner {
        tbody > tr > td {
            padding: 6px;
        }
    }
</style>
