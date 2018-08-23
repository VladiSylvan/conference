<template>
  <div class="settings-container ">
    <div class="first-container desktop">
      <profile-picture @upload-image="component = 'AddImage'"
                       :image="newImage" />
      <p class="connect-header">Connect Account</p>
      <connect-acoount />
    </div>
    <div class="second-container desktop">
      <div class="basic-container">
        <input-settings v-for="basic in basicSettings"
                        :key="basic.id"
                        :header="basic" />
      </div>
      <p class="conference-header">Conference Settings</p>
      <div class="basic-container">
        <input-settings v-for="conference in conferenceSettings"
                        :key="conference.id"
                        :header="conference.header"
                        :data="conference.data"
                        :type="conference.type" />
        <select-settings v-for="select in selectSettings"
                         :key="select.id"
                         :header="select.header"
                         :data="select.data" />
      </div>
      <p class="notifications-header">Notifications Settings</p>
      <p class="notifications-body">Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet </p>
      <div class="notifications-footer">
        <div v-for="i in checkItems"
             :key="i.id"
             class="notification-container">
          <p class="notification-head">Lorem Ipsum</p>
          <div v-for="n in i.i"
               :key="n.id"
               class="notification-setting">
            <input type="checkbox"
                   name=""
                   id="">
            <span>Lorem ipsum dolor set mit dor</span>
          </div>
        </div>
      </div>
    </div>
    <div class="first-container tablet">
      <div class="account-info">
        <profile-picture @upload-image="component = 'AddImage'"
                         :image="newImage" />
        <p class="connect-header">Connect Account</p>
        <connect-acoount />
      </div>
      <div class="basic-container">
        <input-settings v-for="basic in basicSettings"
                        :key="basic.id"
                        :header="basic" />
      </div>
    </div>
    <div class="second-container tablet">

      <p class="conference-header">Conference Settings</p>
      <div class="conference-container">
        <input-settings v-for="conference in conferenceSettings"
                        :key="conference.id"
                        :header="conference.header"
                        :data="conference.data"
                        :type="conference.type" />
        <select-settings v-for="select in selectSettings"
                         :key="select.id"
                         :header="select.header"
                         :data="select.data" />
      </div>
      <p class="notifications-header">Notifications Settings</p>
      <p class="notifications-body">Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet </p>
      <div class="notifications-footer">
        <div v-for="i in checkItems"
             :key="i.id"
             class="notification-container">
          <p class="notification-head">Lorem Ipsum</p>
          <div v-for="n in i.i"
               :key="n.id"
               class="notification-setting">
            <input type="checkbox"
                   name=""
                   id="">
            <span>Lorem ipsum dolor set mit dor</span>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile -->
    <div class="first-container mobile">
      <profile-picture @upload-image="component = 'AddImage'"
                       :image="newImage" />
      <input-settings v-for="basic in basicSettings"
                      :key="basic.id"
                      :header="basic" />
      <p class="connect-header">Connect Account</p>
      <connect-acoount />
      <p class="conference-header">Conference Settings</p>
      <div class="conference-container">
        <input-settings v-for="conference in conferenceSettings"
                        :key="conference.id"
                        :header="conference.header"
                        :data="conference.data"
                        :type="conference.type" />
        <select-settings v-for="select in selectSettings"
                         :key="select.id"
                         :header="select.header"
                         :data="select.data" />
      </div>
      <p class="notifications-header">Notifications Settings</p>
      <p class="notifications-body">Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet </p>
      <div class="notifications-footer">
        <div v-for="i in checkItems"
             :key="i.id"
             class="notification-container">
          <p class="notification-head">Lorem Ipsum</p>
          <div v-for="n in i.i"
               :key="n.id"
               class="notification-setting">
            <input type="checkbox"
                   name=""
                   id="">
            <span>Lorem ipsum dolor set mit dor</span>
          </div>
        </div>
      </div>
    </div>
    <add-image class="desktop"
               @add-image="addImage($event)"
               v-if="component === 'AddImage'"
               @stop-uploading="component = ''" />
    <add-image-mobile @stop-upload="component = ''"
                      class="mobile"
                      v-if="component === 'AddImage'" />
    <add-image-mobile @stop-upload="component = ''"
                      v-if="component === 'AddImage'"
                      class="tablet" />
    <crop-img :image="image"
              class="desktop"
              @croped-image="saveImage($event)"
              @stop-uploading="component = ''"
              v-if="component === 'CropImg'" />
  </div>
</template>

<script>
export default {
  name: 'settings',
  components: {
    ProfilePicture: () => import('../components/Settings/ProfilePicture.vue'),
    ConnectAcoount: () => import('../components/Settings/ConnectAcoount.vue'),
    InputSettings: () => import('../components/Settings/InputSettings.vue'),
    SelectSettings: () => import('../components/Settings/SelectSettings.vue'),
    CropImg: () => import('../components/Settings/CropImg.vue'),
    AddImage: () => import('../components/Settings/AddImage.vue'),
    AddImageMobile: () => import('../components/Settings/AddImageMobile.vue')
  },
  data: () => ({
    addImageStep: 0,
    component: '',
    image: null,
    newImage: null,
    checkItems: [
      {'i': ['n', 'n', 'n', 'n', 'n']},
      {'i': ['n', 'n', 'n', 'n', 'n']},
      {'i': ['n', 'n', 'n', 'n', 'n']}
    ],
    basicSettings: ['Name', 'Company Name', 'Your E-mail Adress', 'Your Phone Number', 'Password'],
    conferenceSettings: [
      {'header': 'Conference Number', 'data': '124-1214-141', 'type': 'upgrade'},
      {'header': 'URL', 'data': 'didaconference.com/username', 'type': 'change'},
      {'header': 'Participant PIN', 'data': '124-1214-141', 'type': ''},
      {'header': 'Orfanizer Pin', 'data': '124-1214-141', 'type': ''},
      {'header': 'Additional Security', 'data': 'Dont require PIN for conferences', 'type': 'upgrade'}
    ],
    selectSettings: [
      {'header': 'Joining', 'data': ['Allow conference to begin without me', 'Dont require PIN for conferences', 'Dont require PIN for conferences']},
      {'header': 'Screen Sharing', 'data': ['Anyone can take over screen share', 'Dont require PIN for conferences', 'Dont require PIN for conferences']},
      {'header': 'Recording', 'data': ['Do not start record calls automatically', 'Dont require PIN for conferences', 'Dont require PIN for conferences']},
      {'header': 'Chat transcript access', 'data': ['Anyone with link can access', 'Dont require PIN for conferences', 'Dont require PIN for conferences']},
      {'header': 'Recording access', 'data': ['Anyone with link can access', 'Dont require PIN for conferences', 'Dont require PIN for conferences']}
    ]
  }),
  methods: {
    addImage (image, changeStep) {
      this.image = image
      this.changeStep()
    },
    saveImage (image) {
      this.newImage = image
      this.component = ''
    },
    changeStep () {
      this.component = 'CropImg'
    }
  }

}
</script>

<style scoped>
@media only screen and (min-width: 1151px) {
  .tablet {
    display: none !important;
  }
  .mobile {
    display: none !important;
  }
}
@media only screen and (min-width: 750px) and (max-width: 1150px) {
  .desktop {
    display: none !important;
  }
  .mobile {
    display: none !important;
  }
  .settings-container {
    width: 95% !important;
    display: flex;
    flex-direction: column !important;
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
  }
  .first-container {
    display: flex;
    flex-direction: row !important;
    width: 90% !important;
    margin: auto;
    margin-bottom: 26px;
    justify-content: space-between !important;
  }
  .account-info {
    display: flex;
    flex-direction: column;
    max-width: 40% !important;
  }
  .basic-container {
    width: 100% !important;
    max-width: 50% !important;
    justify-content: center !important;
    margin-bottom: 23px;
    height: 488px !important;
    height: fit-content;
    display: flex;
    flex-direction: column !important;
    align-items: flex-end !important;
    justify-content: space-between !important;
  }
  .conference-container {
    width: 100% !important;
    margin-bottom: 23px;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .second-container {
    width: 90% !important;
    margin: auto;
  }
  .connect-header {
    align-self: left !important;
  }
  .conference-header {
    align-self: flex-start;
  }
  .notifications-body {
    width: 100% !important;
  }
}
@media only screen and (max-width: 749px) {
  .desktop {
    display: none !important;
  }
  .tablet {
    display: none !important;
  }
  .profile-picture {
    margin-bottom: 20px;
  }
  .notifications-footer {
    flex-direction: column !important;
  }
  .settings-container {
    width: 90% !important;
    flex-direction: column !important;
    margin-top: 20px !important;
  }
  .first-container {
    display: flex;
    width: 100% !important;
    margin: auto;
    margin-bottom: 26px;
    justify-content: space-between !important;
  }
  .notifications-body {
    width: 100% !important;
  }
  .connect-header {
    margin-top: 7px !important;
  }
  .conference-header {
    margin-top: 20px !important;
  }
  .notifications-header {
    margin-top: 7px !important;
  }
  .notification-head {
    margin-top: 20px !important;
  }
  .notifications-body {
    margin-bottom: 0 !important;
  }
}
.settings-container {
  width: 1115px;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
}
.first-container {
  display: flex;
  flex-direction: column;
}
.connect-header {
  margin-top: 30px;
  margin-bottom: 17px;
  color: #2c2c2c;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
}
.conference-header {
  margin-top: 17px;
  margin-bottom: 17px;
  color: #2c2c2c;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
}
.second-container {
  display: flex;
  flex-flow: column;
}
.basic-container {
  width: 682px;
  margin-bottom: 23px;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.notifications-header {
  margin-bottom: 25px;
  color: #2c2c2c;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
}
.notifications-body {
  width: 681.22px;
  color: #606060;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 28px;
}
.notification-head {
  margin-bottom: 15px;
  color: #6c6b6b;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
.notification-container {
  width: 194px;
}
.notification-setting {
  display: flex;
  align-items: center;
}
.notification-setting input {
  height: 16px;
  width: 16px;
  border-radius: 1px;
  background-color: #ffffff;
  margin-right: 15px;
}
.notification-setting span {
  color: #6c6b6b;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 14px;
}
.notifications-footer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}
</style>
