<template>
  <div class="time">
    <div class="container">
      <div class="first-container justify-start">
        <div class="header ">
          <span>Name This Conference</span>
          <div class="line"></div>
        </div>
        <div class="chat-header">
          <span>chat</span>
        </div>
        <div class="chat-container">
          <div v-for="user in users"
               :key="user.id"
               class="card-container">
            <div v-if="user.user_name !== 'you'"
                 class="chat-body">
              <img class="avatar"
                   src="../../assets/ben-unsplash.jpg"
                   alt="">
              <div class="chat-message">
                <div class="user-name">
                  <span>{{user.user_name}}</span>
                </div>
                <div class="user-message">
                  <span>{{user.message}}</span>
                </div>
                <div class="user-time">
                  <span>{{user.time}}</span>
                </div>
              </div>
            </div>
            <div v-else-if="user.user_name === 'you'"
                 class="your-chat-body">
              <div class="your-chat-message">
                <div class="your-user-name">
                  <span>{{user.user_name}}</span>
                </div>
                <div class="your-user-message">
                  <span>{{user.message}}</span>
                </div>
                <div class="your-user-time">
                  <span>{{user.time}}</span>
                </div>
              </div>
              <img class="your-avatar"
                   src="../../assets/ben-unsplash.jpg"
                   alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="comment-form">
        <textarea class="your-comment"
                  v-model="you.message"
                  name="comment"
                  form="usrform">Enter text here...</textarea>
        <button @click="sendMessage"
                class="add-comment">send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    you: {'user_name': 'you', 'time': '', 'message': ''},
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    users: [
      {'user_name': 'Mark', 'time': '14 apr 18:48', 'message': 'Hi Everyone! Let`s discuss our work plan here'},
      {'user_name': 'John', 'time': '14 apr 18:48', 'message': 'Hi. Yes, I am agree, let’s do it'},
      {'user_name': 'you', 'time': '14 apr 18:48', 'message': 'Hi, I am here For discussion'},
      {'user_name': 'Mark', 'time': '14 apr 18:48', 'message': 'Hi Everyone! Let`s discuss our work plan here'}
    ]
  }),
  methods: {
    sendMessage () {
      let newYou = {}
      this.you.time = new Date().getDate() + ' ' + this.monthNames[new Date().getMonth()].slice(0, 3) + ', ' + new Date().getFullYear()
      newYou = Object.assign({}, this.you)
      this.users.push(newYou)
      this.you.message = ''
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 675px) {
  .container {
    padding-top: 120px;
    width: 100% !important;
    min-width: 240px;
  }
  .container .body {
    display: flex;
    width: 90% !important;
  }
  .container .body .name {
    width: 60% !important;
  }
  .container .header .line {
    width: 80% !important;
  }
  .chat-container {
    width: 95% !important;
    padding-right: 5% !important;
    /* overflow-y: none !important; */
    /* max-height: fit-content !important; */
  }
  .comment-form {
    width: 80% !important;
  }
  .comment-form textarea {
    width: 95% !important;
  }
}
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  cursor: pointer;
  height: 42px;

  border-radius: 5.5px;
  background-color: #cecece;
}
::-webkit-scrollbar-thumb:window-inactive {
  background-color: #cecece;
  cursor: pointer;
}
.card-container {
  width: 100%;
}
.chat-container {
  width: calc(100% - 58px);
  padding-right: 58px;
  max-height: 550px;
  overflow-y: auto;
}
.comment-form textarea {
  margin-bottom: 12px;
  outline: none;
  resize: none;
  height: 38px;
  width: 236px;
  border: 1px solid #cecece;
  border-radius: 3px;
  color: #b7b7b7;
  font-family: "Helvetica Neue";
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  padding-left: 15px;
}
.comment-form button {
  align-self: flex-end;
  height: 31px;
  width: 103px;
  border-radius: 19.5px;
  background-color: #2e7eed;
  color: #fff;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
  text-transform: uppercase;
}
.comment-form {
  margin-left: 28px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
}
.justify-start {
  margin-bottom: auto;
}

.your-user-time {
  align-self: flex-end;
  color: #959595;
  font-family: "Helvetica Neue";
  font-size: 10px;
  line-height: 12px;
}
.your-user-message span {
  width: fit-content;
  color: #ffffff;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 14px;
}
.your-user-message {
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  padding-bottom: 14px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 5px;
  max-width: 187px;
  width: fit-content;
  border-radius: 4px;
  background-color: #2e7eed;
}
.your-user-name {
  align-self: flex-end;
  margin-bottom: 6px;
  color: #0e0e0e;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  text-transform: capitalize;
}
.your-chat-message {
  display: flex;
  flex-direction: column;
}
.your-avatar {
  margin-left: 14px;
  height: 21px;
  width: 23px;
  border-radius: 4px;
  vertical-align: middle;
  object-fit: cover;
}
.your-chat-body {
  margin-left: 28px;
  margin-bottom: 15px;

  display: flex;
  justify-content: flex-end;
}
.user-time {
  color: #959595;
  font-family: "Helvetica Neue";
  font-size: 10px;
  line-height: 12px;
}
.user-message span {
  color: #0e0e0e;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 14px;
}
.user-message {
  padding-top: 15px;
  padding-bottom: 14px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 5px;
  max-width: 187px;
  width: fit-content;
  border-radius: 4px;
  background-color: #ececec;
}
.user-name {
  margin-bottom: 6px;
  color: #0e0e0e;
  font-family: "Helvetica Neue";
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  text-transform: capitalize;
}
.chat-message {
  display: flex;
  flex-direction: column;
}
.avatar {
  margin-right: 14px;
  height: 21px;
  width: 23px;
  border-radius: 4px;
  vertical-align: middle;
  object-fit: cover;
}
.chat-body {
  margin-left: 28px;
  margin-bottom: 15px;
  display: flex;
  align-self: flex-start;
}

.first-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 330px;
  min-height: 790px;
  background-color: #ffffff;
  padding-bottom: 50px;
}
.container .header {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #afadad;
  border-bottom: 1px solid #dbdbdb;
}
.container .header span {
  align-self: flex-start;
  margin-left: 36px;
  margin-bottom: 14px;
  font-family: "Helvetica Neue";
  font-size: 15px;
  line-height: 17px;
}
.container .header .line {
  width: 219px;
  border: 0.5px solid #b8b8b8;
  margin-left: 36px;
  align-self: flex-start;
}
.chat-header {
  margin-left: 28px;
  margin-top: 22px;
  margin-bottom: 13px;
  align-self: flex-start;
  color: #7a7a7a;
  font-family: "Helvetica Neue";
  font-size: 17px;
  line-height: 20px;
  text-transform: capitalize;
}
</style>
