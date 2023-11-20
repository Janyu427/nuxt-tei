<script setup>

const activeBreadcrumsItem = ref('')
const breadcrumbs = ref()
const props = defineProps({
    productId: {
        type: String,
        default: ""
    }
})
const emits = defineEmits({
    breadcrumbsHeight: {
        type: Number,
        default: 0
    }
})

const emitBreadcrumbsHeight = ()=> {
    const height = breadcrumbs.value.clientHeight;
    emits('breadcrumbsHeight', height); 
}

const route = useRoute()

const getApi = async(productId)=> {
    try{
        const response = await fetch('https://janyu427.github.io/test/vueJson/productDetails.json')
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        const ListData = data.productDetails

        for(let i = 0; i < ListData.length; i++) {
            if(productId == ListData[i].productId) {
                activeBreadcrumsItem.value = ListData[i].title;
            }
        }


    }catch (error){ 
        console.error('Error fetching or parsing data:', error);
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

    onUpdated( ()=> {
        emitBreadcrumbsHeight()
    })
</script>

<template>
    <div class="breadcrumbs" ref="breadcrumbs">
        <div class="container">
            <ul class="listBox">
                <li class="home">
                    <NuxtLink title="首頁" href="/">首頁</NuxtLink>
                    <span>></span>
                </li>
                <li>
                    <NuxtLink title="作品展示" href="/">作品展示</NuxtLink>
                    <span>></span>
                </li>
                <li>{{ activeBreadcrumsItem }}</li>
            </ul>
        </div>
    </div>        
</template>

<style lang="scss" scoped>
    .breadcrumbs {
        font-size: 13px;
        padding-bottom: 60px;
        ul {
            width: fit-content;
            margin: 0 0 0 auto;
            padding: 0px;
            @include max-screen(480px){
                margin: 0 auto 0 0;
            }
        }
        li {
            display: inline;
            &:last-child {
                color: $brand-color;
                white-space: nowrap;
            }
        }
        a {
            color: $text;
            &:hover {
                color: $brand-color;
            }
        }
        strong {
            color: #333;
            font-weight: 600;
        }
        span {
            color: $text;
            display: inline-block;
            font-size: 13px;
            margin: 0 20px;
        }
    }
</style>
