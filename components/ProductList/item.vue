<script setup>

    const props = defineProps({
        itemBgSrc: {
            type: String,
            default: ""
        },
        itemName: {
            type: String,
            default: ""
        },
        productId: {
            type: String,
            default: ""
        },
        titleTag: {
            type: String,
            default: ""
        }
    })
    
</script>

<template>
    <NuxtLink class="list" :to="'/productDetails?productId=' + productId" :title="titleTag" :style="{ 'background-image': 'url(' + itemBgSrc + ')' }">
        <div class="text_box">
            <h3 class="title">
                {{ itemName }}
            </h3>
        </div>
    </NuxtLink>
</template>

<style lang="scss" scoped>
    
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
</style>
