<script setup>

    const bannerTotalHeight = ref(0)
    const headerNavHeight = ref(0)
    const categoryTabHeight = ref(0)
    const scrollPosition = ref(0)
    const totalMarginTop = ref(0)
    const isScrollGreaterThanBannerHeight = ref(false)
    const activeProductCategory = ref('categoryAll')

    const getBannerHeight = (getValue)=> {
      bannerTotalHeight.value = getValue
    }

    const getHeaderNavHeight = (getValue)=> {
      headerNavHeight.value = getValue
    }

    const getCategoryTabHeight = (getValue)=> {
      categoryTabHeight.value = getValue
    }

    const getProductCategory = (getValue)=> {
      activeProductCategory.value = getValue
      console.log(activeProductCategory.value)
    }

    const calculateTotalMarginTop = () => {
      totalMarginTop.value = headerNavHeight.value + categoryTabHeight.value;
    }

    const getScrollPosition = ()=> {
      
      window.addEventListener('scroll', ()=> {
        scrollPosition.value = window.scrollY

        isScrollGreaterThanBannerHeight.value = scrollPosition.value > bannerTotalHeight.value

      })
    }

    onMounted(() => {
      getScrollPosition()
    })

    onUpdated(() => {
      calculateTotalMarginTop()
    })


</script>

<template>
    <div>
        <Banner @bannerHeight="getBannerHeight"/>
        <HeaderNav @headerNavHeight="getHeaderNavHeight" :isScrollGreaterThanBannerHeight = "isScrollGreaterThanBannerHeight"/>
        <ProductCategoryTab @category="getProductCategory" @categoryTabHeight="getCategoryTabHeight" :isScrollGreaterThanBannerHeight = "isScrollGreaterThanBannerHeight" />
        <ProductList :productCategory="activeProductCategory" :computedFixedMarginTop = "totalMarginTop" :isScrollGreaterThanBannerHeight = "isScrollGreaterThanBannerHeight"/>
    </div>
</template>


<style lang="scss" scoped>
    
</style>