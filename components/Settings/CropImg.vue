<template>
  <div class="crop-image-container"
       v-click-outside="outside">
    <!-- Note that 'ref' is important here (value can be anything). read the description about `ref` below. -->
    <vue-croppie ref="croppieRef"
                 class="desktop"
                 :enableOrientation="false"
                 :enableResize="false"
                 :enableExif="true"
                 :showZoomer="false"
                 :boundary="boundary"
                 :viewport="{width: 100, height: 100, type: 'circle'}"
                 @result="result">
    </vue-croppie>

    <!-- the result -->
    <button @click="crop()">UPLOAD</button>
  </div>
</template>

<script>
export default {
  props: ['image'],
  mounted () {
    // Upon mounting of the component, we accessed the .bind({...})
    // function to put an initial image on the canvas.
    this.$refs.croppieRef.bind({
      // url: this.image
      url: this.image
    })
  },
  data () {
    return {
      cropped: null,
      boundary: {width: 344, height: 325}
    }
  },
  methods: {
    // CALBACK USAGE
    crop () {
      // Here we are getting the result via callback function
      // and set the result to this.cropped which is being
      // used to display the result above.
      let options = {
        format: 'png',
        circle: true
      }
      this.$refs.croppieRef.result(options, (output) => {
        this.cropped = output
        this.$emit('croped-image', this.cropped)
      })
    },
    result (output) {
      this.cropped = output
    },
    outside () {
      this.$emit('stop-uploading')
    }
  }
}
</script>
<style scoped>
.crop-image-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  left: calc(50% - 344px / 2);
  top: calc(50% - 429px / 2);
  height: 420px;
  width: 344px;
  width: 344px;
  background-color: #ffffff;
  box-shadow: 0 0 24px 10px rgba(0, 0, 0, 0.17);
}
button {
  align-self: center;
  height: 36px;
  width: 123px;
  border-radius: 19.5px;
  background-color: #2e7eed;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
}
.croppie-container {
  height: fit-content !important;
  margin-bottom: 20px !important;
}
</style>
