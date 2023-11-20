<script setup>

    const route = useRoute()
    const pageList = ref([])

    const { data, pending, error, refresh } = await useAsyncData(
        'pageList',
        () => $fetch('https://janyu427.github.io/test/vueJson/InnerBannerPageTitle.json')
    )

    pageList.value = data._value.InnerBannerPageTitle

    useHead({
      titleTemplate: () => {
        const matchingPage = pageList.value.find(page => page.key === route.name)
        if (matchingPage) {
          return `程翊室內設計 - ${matchingPage.title}`

        } else {
          return '程翊室內設計';
        }
      },
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        { name: "description", content: "程翊室內裝修YOCICO總監常說:「做設計要先感動自己，才能感動別人」，服務的20年以來，秉持這樣的精神，一路上和許多屋主們成為知心朋友。 YOCICO和程翊夥伴們相信，唯有設身處地為屋主著想，才能量身打造出獨一無二的客製化設計。" }, 
        { name: "keywords", content: "程翊室內裝修" }]
    })
</script>

<template>
  <div>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>
