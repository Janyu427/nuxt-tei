<script setup>

    const sectionTitle = ref('')
    const sectionText = ref('')
    const bgUrl = ref('')
    const list = ref([])
    const isMust = ref(false)
    const fieldType = ref('')

    const getApi = async()=> {
        try {
            const response = await fetch('https://janyu427.github.io/test/vueJson/contact.json')
            if(!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()

            sectionTitle.value = data.sectionTitle
            sectionText.value = data.sectionText
            bgUrl.value = data.sectionBg
            
            list.value = data.formContent
        }catch (error) {
            console.error('Error fetching or parsing data:', error)
        }
    }

    onMounted(()=> {
        getApi()
    })
</script>

<template>
    <div class="contact">
        <div class="form_box" :style="{ '--bgUrl': `url(${bgUrl})` }">
            <div class="container">
                <div class="title_box">
                    <h2 class="section_title center">{{ sectionTitle }}</h2>
                    <p class="text">{{ sectionText }}</p>
                </div>
                <div class="content_box">
                    <form class="form" id="formBox">
                        <div class="form-group" v-for="item of list">
                            <label class="title" for="name">
                                <p class="text">{{ item.title }}</p>
                                <span class="must-fill" v-if="item.must">(※)</span>                            
                            </label>
                            <input type="text" class="form-control input" name="name" v-if="item.fieldType === 'inputText'">
                            <textarea class="form-control textarea" rows="9" name="message" v-if="item.fieldType === 'textarea'"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="button" id="send" class="btn btn-primary">確認送出</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .contact{
      .form_box{
          position: relative;
          padding: 100px 0;
          @include max-screen(767px){
              padding: 60px 0;
          }
          &::before{
              content: '';
              position: absolute;
              width: 90%;
              height: 100%;
              top: 0;
              right: 0;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              background-image: var(--bgUrl);
              background-size: cover;
              @include max-screen(1920px){
                  width: 95%;
              }
              @include max-screen(767px){
                  width: 100%;
              }
          }
          .container{
              position: relative;
          }
          .title_box{
              padding-bottom: 60px;
              @include max-screen(767px){
                  padding-bottom: 30px;
              }
              .text{
                  text-align: center;
              }
          }
          .content_box{
              max-width: 70vw;
              padding: 60px 30px;
              background: #fff;
              margin: 0 auto;
              @include max-screen(767px){
                  max-width: unset;
              }
              .form{
                  max-width: 800px;
                  margin: 0 auto;
                  .form-group{
                      display: flex;
                      margin-bottom: 30px;
                      align-items: flex-start;
                      justify-content: space-between;
                      .title{
                          display: flex;
                          align-items: center;
                          font-weight: 400;
                          .text{
                              color: $black;
                              margin: 0;
                          }
                      }
                      .form-control{
                          width: 70%;
                          max-width: 520px;
                          font-size: 13px;
                          padding: 5px;
                          background-color: #fff;
                          border-radius: 3px;
                          border: 1px solid #cfcfcf;
                          &.input{
                              height: 30px;
                          }
                          &:focus {
                                border-color: #ddd;
                                box-shadow: 0 0 5px #ddd;
                            }
                      }
                      @include max-screen(767px){
                          flex-direction: column;
                          align-items: unset;
                          justify-content: unset;
                          .title{
                              margin-bottom: 15px;
                          }
                          .form-control{
                              width: 100%;
                          }
                      }
                      &.verification{
                          margin-bottom: 100px;
                          @include max-screen(767px){
                              margin-bottom: 60px;
                          }
                          .input_box{
                              display: flex;
                              max-width: 520px;
                              width: 70%;
                              @include max-screen(767px){
                                  width: 100%;
                              }
                              @include max-screen(480px){
                                  flex-direction: column;
                              }
                              .form-control{
                                  max-width: 120px;
                                  height: 30px;
                              }
                              .verifynumber{
                                  display: flex;
                                  margin-left: 20px;
                                  @include max-screen(480px){
                                      padding-top: 15px;
                                      margin-left: 0;
                                  }
                                  .verifynumber-img{
                                      img{
                                          width: auto;
                                          height: 30px;
                                      }
                                  }
                                  a{
                                      .fa-refresh{
                                          padding: 4px 10px;
                                          font-size: 20px;
                                      }
                                  }
                              }
                          }
                      }
                      .btn{
                          position: relative;
                          color: $black;
                          text-align: left;
                          font-size: 13px;
                          padding: 10px;
                          width: 250px;
                          background: transparent;
                          border: none;
                          border-bottom: 1px solid #cfcfcf;
                          cursor: pointer;
                          &::before{
                              content: '>';
                              position: absolute;
                              top: 50%;
                              right: 10px;
                              color: $black;
                              transform: translateY(-50%);
                          }
                          &:hover{
                              color: $grey;
                          }
                      }
                  }
              }
          }
          
      }
  }
</style>
