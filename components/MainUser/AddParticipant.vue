<template>
  <div v-click-outside="outside"
       class="modal-container">
    <div class="modal-body">
      <div @click="$emit('back-schedule')"
           class="modal-back">
        <icon class="angle-icon"
              name="angle-left" />
        <span>Back</span>
      </div>
      <div class="modal-header">
        <span>{{header}}</span>
      </div>
      <input @keyup.enter="addParticipant"
             v-model="newParticipant"
             autocomplete='email'
             v-validate="'required|email'"
             name="email"
             type="text"
             placeholder="Enter Name, E-mail or phone">
      <span v-show="errors.has('email')"
            class="help is-danger">{{ errors.first('email') }}</span>
      <div v-for="(participant, index) in participants"
           :key="participant.id"
           class="new-participant">
        <img src="../../assets/ben-unsplash.jpg"
             alt="">
        <span>{{participant}}</span>
        <button @click="removeParticipant(index)"
                class="close-button">
          <icon name="close" />
        </button>
      </div>
      <button class="create-button"
              @click="action"
              :disabled="participants.length > 0 ? false : true">create conference</button>
      <span v-if="authError !== null"
            class="help is-danger">{{ authError }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header'],
  data: () => ({
    newParticipant: null,
    participants: ['exampleexample@gmail.com']
  }),
  methods: {
    addParticipant () {
      if (this.participants.length < 5) {
        this.participants.push(this.newParticipant)
      }
    },
    removeParticipant (el) {
      this.participants.splice(el, 1)
    },
    outside () {
      this.$emit('close-schedule')
    },
    action () {
      this.$store.commit('postConferenceEmailInvite', {emails: this.participants, conferenceId: this.$route.params.conferenceId})
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
  .modal-container {
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
  input {
    width: 92.5% !important;
  }
}
.modal-container {
  display: flex;
  height: auto;
  max-width: 440px;
  min-width: 290px;
  border-radius: 4px;
  margin: 325px auto;
  border-radius: 2px;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
}
.modal-body {
  margin-left: 62px;
  margin-top: 26px;
  margin-right: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.modal-back {
  cursor: pointer;
  display: flex;
  align-items: center;
  color: rgba(92, 91, 91, 1);
  margin-bottom: 27px;
}
.modal-back span {
  height: 15px;
  width: 29px;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: center;
}
.angle-icon {
  margin-right: 13px;
  margin-top: -2.5px;
}
.modal-header {
  color: rgba(99, 99, 99, 1);
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
  margin-bottom: 15px;
}
.new-participant {
  display: flex;
  align-items: center;
  height: 38px;
  /* width: 197px; */
  border: 1px solid rgba(198, 195, 195, 1);
  border-radius: 19px;
  margin-bottom: 15px;
}
.new-participant img {
  vertical-align: middle;
  object-fit: cover;
  margin-left: 7px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
.new-participant span {
  margin-left: 14px;
  color: #969595;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 14px;
}
.new-participant button {
  color: #969595;
  margin-left: 14px;
  margin-right: 12px;
  padding: 0;
}
input {
  padding-left: 12px;
  height: 35px;
  max-width: 321px;
  width: 321px;
  border: 1px solid rgba(208, 208, 208, 1);
  border-radius: 1px;
  font-family: "Helvetica Neue";
  font-size: 13px;
  line-height: 15px;
  margin-bottom: 27px;
}
.create-button {
  margin-top: 10px;
  padding-top: 3px;
  margin-bottom: 27px;
  align-self: center;
  height: 36px;
  width: 152px;
  border-radius: 19.5px;
  background-color: #2e7eed;
  color: rgba(255, 255, 255, 1);
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
  text-transform: uppercase;
}
</style>
