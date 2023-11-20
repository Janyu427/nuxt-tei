<script setup>

    const route = useRoute()
    const headerNavHeight = ref(0)
    const pageTitleHeight = ref(0)
    const breadcrumbsHeight = ref(0)
    const categoryTabHeight = ref(0)
    const scrollPosition = ref(0)
    const totalMarginTop = ref(0)
    const activeProductCategory = ref('categoryAll')
    const isScrollGreaterThanBannerHeight = ref(false);

    const getHeaderNavHeight = (getValue)=> {
      headerNavHeight.value = getValue
    }

    const getPageTitleHeight = (getValue)=> {
        pageTitleHeight.value = getValue
    }

    const getBreadcrumbsHeight = (getValue)=> {
        breadcrumbsHeight.value = getValue
    }

    const getCategoryTabHeight = (getValue)=> {
      categoryTabHeight.value = getValue
    }

    const getProductCategory = (getValue)=> {
      activeProductCategory.value = getValue
    }

    const calculateTotalMarginTop = () => {
      totalMarginTop.value = headerNavHeight.value
    }

    const getScrollPosition = ()=> {
      
      window.addEventListener('scroll', ()=> {
        scrollPosition.value = window.scrollY

        isScrollGreaterThanBannerHeight.value = scrollPosition.value > pageTitleHeight.value + breadcrumbsHeight.value

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
    <HeaderNav @headerNavHeight="getHeaderNavHeight" :isScrollGreaterThanBannerHeight = "isScrollGreaterThanBannerHeight"/>
    <InnerBannerPageTitle @pageTitleHeight="getPageTitleHeight" :currentRoutePage = "getCurrentRoute(route)"/>
    <Breadcrumbs @breadcrumbsHeight="getBreadcrumbsHeight" :currentRoutePage = "getCurrentRoute(route)"/>
    <ProductCategoryTab @category="getProductCategory" @categoryTabHeight="getCategoryTabHeight" :isScrollGreaterThanBannerHeight = "isScrollGreaterThanBannerHeight"/>
    <ProductList :productCategory="activeProductCategory"  :computedFixedMarginTop = "totalMarginTop" :isScrollGreaterThanBannerHeight = "isScrollGreaterThanBannerHeight"/>
</template>

<style lang="scss" scoped>
</style>
