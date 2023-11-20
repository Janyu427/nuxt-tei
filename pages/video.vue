<script setup>

    const route = useRoute()

</script>

<template>
    <HeaderNav />
    <InnerBannerPageTitle :currentRoutePage = "getCurrentRoute(route)"/>
    <Breadcrumbs :currentRoutePage = "getCurrentRoute(route)"/>
    <VideoList/>
</template>

<style lang="scss" scoped>
</style>
