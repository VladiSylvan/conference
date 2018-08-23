<template>
  <div v-click-outside="outside"
       class="container">
    <div class="container-header">
      <strong>
        <span>Share File</span>
      </strong>
    </div>
    <div v-click-outside="outsideDropDown"
         class="select">
      <div @click="showDropDown = !showDropDown"
           class="select-base">
        <icon name="caret-down"
              scale="1.25"
              class="triangle-icon"></icon>
        <span>{{currentType}}</span>
      </div>
      <div v-if="showDropDown"
           class="select-body">
        <div @click="currentType = type, showDropDown = !showDropDown"
             v-for="type in types"
             :key="type.id"
             class="select-item">
          <span>{{type}}</span>
        </div>
      </div>
    </div>

    <div class="or">
      <span>or</span>
    </div>
    <div v-if="file === null"
         class="upload-container">
      <div class="upload-body">
        <div class="upload-label">
          <span>Upload file from Computer</span>
        </div>
        <div>
          <span>Max 10MB</span>
        </div>
      </div>

      <input type="file"
             name="file"
             id="file"
             class="inputfile"
             v-validate="'size:10240'"
             @change="processFile($event)" />
      <label for="file">upload</label>
      <span class="help is-danger file-error">{{ errors.first('file') }}</span>
      <span v-if="authError !== null"
            style="margin-top: 15px; margin-bottom: -15px"
            class="help is-danger">{{ authError }}</span>
    </div>
    <!-- <div v-else
         class="upload-body">
      <span>{{file.name}}</span>
    </div> -->
    <div v-else
         class="uploaded">
      <div class="uploaded-label">
        <strong>
          <span>Current File: </span>
        </strong>
      </div>
      <div class="uploaded-file">
        <span>{{file.name}}</span>
      </div>
    </div>
    <button @click="validateBeforeSubmit"
            :disabled="file === null"
            class="share">share file</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentType: 'Google Drive',
    file: null,
    showDropDown: false,
    types: ['Dropbox', 'Dropbox1', 'Dropbox2', 'Dropbox3', 'Dropbox4']
  }),
  methods: {
    outside () {
      this.$emit('close-schedule')
    },
    outsideDropDown () {
      this.showDropDown = false
    },
    processFile (event) {
      this.file = event.target.files[0]
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.commit('postFile', this.file)
          this.outside()
        }
      })
    }
  },
  computed: {
    authError () {
      return this.$store.state.authError
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 500px) {
  .container {
    margin: 50% auto !important;
    width: 95% !important;
  }
  .modal-body {
    width: 100% !important;
    margin-left: 2.5% !important;
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .select {
    width: 100% !important;
    display: flex;
    justify-content: center;
  }
  .select-base {
    width: 92.5% !important;
  }
  .triangle-icon {
    left: 90% !important;
  }
  .select-body {
    width: 92.5% !important;
    top: 100% !important;
  }
}
.container {
  margin: 261px auto;
  max-width: 440px;
  width: 440px;
  min-width: 290px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-header {
  margin-top: 29px;
  margin-bottom: 27px;
  color: #262626;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
}
.select {
  position: relative;
  width: 92.5%;
}
.select-base {
  cursor: pointer;
  margin-bottom: 14px;
  position: relative;
  border: none;
  height: 35px;
  max-width: 400px;
  width: 400px;
  border: 1px solid #bebebe;
  border-radius: 3px 3px 0 0;
}
.select-base span {
  position: absolute;
  top: 35%;
  left: 17px;
  color: #7e7e7e;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
.select-body {
  margin-top: -14px;
  background-color: white;
  z-index: 1;
  position: absolute;
  padding-bottom: 28px;
  border: none;
  margin-bottom: 14px;
  max-width: 400px;
  width: 400px;
  border-bottom: 1px solid #bebebe;
  border-left: 1px solid #bebebe;
  border-right: 1px solid #bebebe;
}
.select-item {
  cursor: pointer;
  margin-left: 17px;
  padding-top: 15px;
  color: #7e7e7e;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
}
.triangle-icon {
  position: absolute;
  color: #a5a5a5;
  border-radius: 4px;
  top: 50%;
  margin-top: -10px;
  left: 375px;
}
.or {
  color: #727272;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  margin-bottom: 34px;
}
.upload-container {
  display: flex;
  align-items: center;
  margin-bottom: 66px;
  position: relative;
}
.upload-body {
  width: 180px;
  color: #a3a3a3;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 14px;
}
.upload-body .upload-label {
  color: #3a3a3a;
  margin-bottom: 10px;
}
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.inputfile + label {
  cursor: pointer;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  text-align: center;
  background-color: #e2dfdf;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  height: 32px;
  width: 91px;
  border-radius: 1px;
  padding-top: 2px;
}

.inputfile:focus + label,
.inputfile + label:hover {
  background-color: #e2dfdf;
}
.share {
  height: 36px;
  width: 152px;
  border-radius: 19.5px;
  background-color: #2e7eed;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 2px;
  margin-bottom: 26px;
}
.file-error {
  position: absolute;
  top: 40px;
}
.uploaded {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  max-width: 180px;
  justify-content: space-around;
}
.uploaded-label {
  color: #727272;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 5px;
}
.uploaded-file {
  color: #727272;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 36px;
}
</style>
