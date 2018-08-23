<template>
  <div class="numbers-container">
    <div class="numbers-header">
      <div>
        <span class="your-numbers">Your Numbers</span>
      </div>
      <button @click="$router.push({name: 'numbers-new'})">buy number</button>
    </div>
    <div v-if="numbers !== null && numbers.length >= 1"
         class="table-header desktop">
      <div class="number">
        <span>
          Number
        </span>
      </div>
      <div class="start-date">
        <span>
          Start Date
        </span>
      </div>
      <div class="end-date">
        <span>
          End Date
        </span>
      </div>
      <div class="assigned">
        <div class="assigned">
          <span>
            Assigned To
          </span>
        </div>
      </div>
      <icon class='icon-pencil-hidden'
            name="pencil" />
    </div>
    <div v-for="number in numbers"
         :key="number.id"
         class="table-body desktop">
      <div class="number">
        <icon class="icon-phone"
              name="phone" />
        <span>
          {{number.number}}
        </span>
      </div>
      <div class="start-date">
        <span>
          {{number.start_time}}
        </span>
      </div>
      <div class="end-date">
        <span>
          {{number.end_time}}
        </span>
      </div>
      <div v-if="number.user.email.length > 1"
           class="assigned">
        <div class="assigned">
          <span>
            {{number.user.email}}
          </span>
        </div>
      </div>
      <div v-else-if="number.assigned && number.assigned_to !== 'email'"
           class="assigned">
        <img class="avatar"
             src="../../assets/ben-unsplash.jpg"
             alt="">
        <span>
          {{number.name}}
        </span>
      </div>
      <div @click="showShedule = true"
           v-else
           class="assigned">
        <p class="assigned-link"> Assign To</p>
      </div>
      <div v-if="number.assigned">
        <icon class='icon-pencil'
              name="pencil" />
      </div>
      <div v-else>
        <icon class='icon-pencil-hidden'
              name="pencil" />
      </div>
    </div>

    <div v-for="number in numbers"
         :key="number.id"
         class="numbers-body-mobile mobile">
      <div class="icon-pencil-mobile">
        <icon class='icon-pencil'
              name="pencil" />
      </div>
      <div class="info-mobile">
        <div class="numbers-header-mobile">
          <span>Number</span>
        </div>
        <div class="numbers-info-mobile">
          <icon class="phone-icon-mobile"
                scale="1.25"
                name="phone" />
          <span>{{number.number}}</span>
        </div>
      </div>
      <div class="info-mobile">
        <div class="numbers-header-mobile">
          <span>Start Date</span>
        </div>
        <div class="numbers-info-mobile">
          <span> {{number.start_time}}</span>
        </div>
      </div>
      <div class="info-mobile">
        <div class="numbers-header-mobile">
          <span>End Date</span>
        </div>
        <div class="numbers-info-mobile">
          <span> {{number.end_time}}</span>
        </div>
      </div>
      <div class="info-mobile">
        <div class="numbers-header-mobile">
          <span>Assigned To</span>
        </div>
        <div class="numbers-info-mobile">
          <div v-if="number.user.email.length > 1"
               class="assigned">
            <div class="assigned">
              <span>
                {{number.user.email}}
              </span>
            </div>
          </div>
          <div v-else-if="number.assigned && number.assigned_to !== 'email'"
               class="assigned">
            <img class="avatar"
                 src="../../assets/ben-unsplash.jpg"
                 alt="">
            <span>
              {{number.name}}
            </span>
          </div>
          <div @click="showShedule = true"
               v-else
               class="assigned">
            <p class="assigned-link"> Assign To</p>
          </div>
        </div>
      </div>
    </div>
    <modal-component v-if="showShedule === true">
      <add-participant :header="'Assign Number to'"
                       @close-schedule="showShedule = false" />

    </modal-component>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    ModalComponent: () => import('../../components/ModalComponent.vue'),
    AddParticipant: () => import('../../components/MainUser/AddParticipant.vue')
  },
  data: () => ({
    showShedule: false
  }),
  created () {
    this.$store.dispatch('getNumber')
  },
  computed: {
    numbers() {
      return this.$store.state.numbers.all
    } 
  }

}
</script>

<style scoped>
.assigned-link {
  color: #2565e8;
  cursor: pointer;
}
@media only screen and (min-width: 1151px) {
  .mobile {
    display: none !important;
  }
  .numbers-container {
    width: 1115px;
  }
  button {
    height: 39px;
    width: 209px;
  }
}
@media only screen and (min-width: 705px) and (max-width: 1150px) {
  .table-body {
    justify-content: space-between !important;
  }
  .table-header {
    margin-top: 39px;
    display: flex;
    justify-content: space-between !important;
    height: 15px;
    color: #3f3f3f;
    font-family: "Helvetica Neue";
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
  }
  .mobile {
    display: none !important;
  }
  .numbers-container {
    width: 90% !important;
  }
  button {
    height: 39px;
    width: 209px;
  }
  .number {
    padding-left: 38px;
    max-width: 150px !important;
    width: 30% !important;
  }
  .start-date {
    max-width: 150px !important;
    width: 15% !important;
  }
  .end-date {
    max-width: 150px !important;
    width: 15% !important;
  }
  .assigned {
    display: flex;
    align-items: center;
    max-width: 150px !important;
    width: 50% !important;
  }
  .icon-pencil {
    margin-right: 26px !important;
  }
  .icon-pencil-hidden {
    margin-right: 26px !important;
    margin-top: 4px;
    height: 16px;
    width: 16px;
  }
}
@media only screen and (max-width: 704px) {
  .desktop {
    display: none !important;
  }
  .numbers-container {
    width: 100%;
  }
  .numbers-header {
    margin-left: 20px;
    margin-bottom: 20px;
  }
  button {
    height: 30px;
    width: 161px;
    margin-right: 14px;
  }
  .numbers-body-mobile {
    align-self: center;
    height: 243px;
    width: 92%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  .icon-pencil-mobile {
    align-self: flex-end;
    margin-top: 7px;
    margin-right: 11px;
  }
  .info-mobile {
    margin-top: 19px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
  }
  .numbers-header-mobile {
    margin-left: 19px;
    color: #3f3f3f;
    font-family: "Helvetica Neue";
    font-size: 11px;
    font-weight: 500;
    line-height: 13px;
  }
  .numbers-info-mobile {
    display: flex;
    align-items: center;
  }
  .numbers-info-mobile span {
    color: #adadad;
    font-family: "Helvetica Neue";
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    margin-right: 29px;
  }
  .phone-icon-mobile {
    color: rgba(46, 126, 237, 1);
    margin-right: 10px;
  }
  .avatar {
    margin-right: 19px;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    vertical-align: middle;
    object-fit: cover;
  }
  .assigned {
    width: auto !important;
  }
  .assigned span {
    color: rgba(70, 70, 70, 1) !important;
  }
  .assigned-link {
    margin-right: 29px;
  }
}
.numbers-container {
  display: flex;
  flex-direction: column;
  margin: auto;
}
.numbers-header {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.your-numbers {
  height: 21px;
  width: 114px;
  color: #7a7a7a;
  font-family: "Helvetica Neue";
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
}
.table-header {
  margin-top: 39px;
  display: flex;
  height: 15px;
  color: #3f3f3f;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
}
.number {
  padding-left: 38px;
  width: 308px;
}
.start-date {
  width: 282px;
}
.end-date {
  width: 224px;
}
.assigned {
  display: flex;
  align-items: center;
  width: 227px;
}
.table-body {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  height: 60px;
  background-color: #ffffff;
}
.table-body .number,
.table-body .start-date,
.table-body .end-date {
  color: #adadad;
  font-family: "Helvetica Neue";
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
}
.table-body .assigned {
  color: #464646;
  font-family: "Helvetica Neue";
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
}
.table-body .number span {
  padding-left: 26px;
}
.table-body .assigned .avatar {
  margin-right: 19px;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  vertical-align: middle;
  object-fit: cover;
}
.icon-phone {
  position: absolute;
  top: 24px;
  color: #2565e8;
  height: 16px;
  width: 16px;
}
.icon-pencil {
  cursor: pointer;
  margin-top: 4px;
  color: #adadad;
  height: 16px;
  width: 16px;
}
button {
  border-radius: 19.5px;
  color: white;
  text-transform: uppercase;
  background-color: #2e7eed;
}
.icon-pencil-hidden {
  color: transparent !important;
  margin-top: 4px;
  color: #fff;
  height: 16px;
  width: 16px;
}
</style>
