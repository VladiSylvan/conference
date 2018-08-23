<template>
  <div class="numbers-container">
    <div class="numbers-header">
      <div>
        <span class="payment-history">Payment History</span>
      </div>
    </div>
    <div v-if="payments !== null && payments.length > 0"
         class="table-header desktop">
      <div class="number">
        <span>Date</span>
      </div>
      <div class="name">
        <span>Name</span>
      </div>
      <div class="start-date">
        <span>E-mail</span>
      </div>
      <div class="end-date">
        <span>Transaction ID</span>
      </div>
      <div class="assigned">
        <span>Description</span>
      </div>
      <div class="amount">
        <span>Amount</span>
      </div>
    </div>
    <div v-for="payment in payments"
         :key="payment.index"
         class="table-body desktop">
      <div class="number">
        <span>
          <!-- {{payment.date}} -->
          {{payment.date}}
        </span>
      </div>
      <div class="name">
        <span>
          {{payment.user.first_name}}
        </span>
      </div>
      <div class="start-date">
        <span>
          {{payment.email}}
        </span>
      </div>
      <div class="end-date">
        <span>
          {{payment.transaction_id}}
        </span>
      </div>
      <div class="assigned">
        <span>
          {{payment.description}}
        </span>
      </div>
      <div class="amount">
        <span>
          ${{payment.amount}}
        </span>
      </div>
    </div>
    <div v-if="payments !== null && payments.length > 0"
         class="table-header tablet">
      <div class="number">
        <span>Date</span>
      </div>
      <div class="name">
        <span>Name</span>
      </div>
      <div class="start-date">
        <span>E-mail</span>
      </div>
      <div class="assigned">
        <span>Transaction</span>
      </div>
      <div class="amount">
        <span>Amount</span>
      </div>
    </div>
    <div v-for="payment in payments"
         :key="payment.index"
         class="table-body tablet">
      <div class="number">
        <span>
          <!-- {{payment.date.slice(8, 20)}} -->
          {{payment.date}}
        </span>
      </div>
      <div class="name">
        <span>
          {{payment.name}}
        </span>
      </div>
      <div class="start-date">
        <span>
          {{payment.email}}
        </span>
      </div>
      <div class="assigned">
        <div>
          <span>
            {{payment.description}}
          </span>
          <span>
            {{payment.transaction_id}}
          </span>
        </div>
      </div>
      <div class="amount">
        <span>
          ${{payment.amount}}
        </span>
      </div>
    </div>
    <div v-for="payment in payments"
         :key="payment.index"
         class="numbers-body-mobile mobile">
      <div class="info-mobile">
        <div class="numbers-header-mobile">
          <span>Date</span>
        </div>
        <div class="numbers-info-mobile">
          <!-- <span>{{payment.date}}</span> -->
          <span> {{payment.monthly}}</span>
        </div>
      </div>
      <div class="info-mobile">
        <div class="numbers-header-mobile ">
          <span>Name</span>
        </div>
        <div class="numbers-info-mobile name-mobile">
          <span> {{payment.name}}</span>
        </div>
      </div>
      <div class="info-mobile">
        <div class="numbers-header-mobile">
          <span>Email</span>
        </div>
        <div class="numbers-info-mobile">
          <span> {{payment.email}}</span>
        </div>
      </div>
      <div class="info-mobile">
        <div class="numbers-header-mobile">
          <span>TRANSACTION</span>
        </div>
        <div class="numbers-info-mobile transaction-mobile">
          <span>
            {{payment.description}}
          </span>
          <span>
            {{payment.transaction_id}}
          </span>
        </div>
      </div>
      <div class="info-mobile">
        <div class="numbers-header-mobile">
          <span>amount</span>
        </div>
        <div class="assigned">
          <span>${{payment.amount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    payments () {
      return this.$store.state.payments.all
    }
  },
  created () {
    this.$store.dispatch('getPayments')
  }

}
</script>

<style scoped>
@media only screen and (min-width: 961px) {
  .tablet {
    display: none !important;
  }
  .mobile {
    display: none !important;
  }
}
@media only screen and (min-width: 705px) and (max-width: 961px) {
  .desktop {
    display: none !important;
  }
  .mobile {
    display: none !important;
  }
  .start-date {
    width: 30% !important;
  }
  .assigned {
    width: 33% !important;
  }
  .assigned div {
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (max-width: 704px) {
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
    padding-top: 23px;
    padding-bottom: 17px;
    align-self: center;
    height: fit-content;
    width: 100%;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .numbers-header-mobile {
    text-transform: uppercase;
    margin-left: 19px;
    color: #3f3f3f;
    font-family: "Helvetica Neue";
    font-size: 11px;
    font-weight: 500;
    line-height: 13px;
  }
  .name-mobile span {
    color: rgba(61, 61, 61, 1) !important;
    font-family: "Helvetica Neue";
    font-size: 15px !important;
    font-weight: 500 !important;
    line-height: 18px !important;
  }
  .transaction-mobile {
    display: flex;
    flex-direction: column;
    align-items: flex-end !important;
  }
  .transaction-mobile span {
    color: rgba(44, 44, 44, 1) !important;
    font-family: "Helvetica Neue";
    font-size: 12px !important;
    line-height: 23px !important;
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
    color: rgba(37, 101, 232, 1);
    font-family: "Helvetica Neue";
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    margin-right: 29px !important;
  }
  .desktop {
    display: none !important;
  }
  .tablet {
    display: none !important;
  }
}
.numbers-container {
  display: flex;
  flex-direction: column;
  max-width: 1115px;
  width: 90% !important;
  margin: auto;
}
.numbers-header {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.payment-history {
  color: #7a7a7a;
  font-family: "Helvetica Neue";
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
}
.table-header {
  margin-top: 20px;
  display: flex;
  height: 15px;
  color: #3f3f3f;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
}
.table-header .number span {
  padding-left: 26px;
}
.number {
  width: 20%;
}
.name {
  width: 10%;
}
.start-date {
  width: 20%;
}
.end-date {
  width: 20%;
}
.assigned {
  display: flex;
  align-items: center;
  width: 25%;
}
.table-header .amount {
  color: #3f3f3f;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
}
.table-body .amount {
  color: #2565e8;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
}
.table-body {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  height: 60px;
  background-color: #ffffff;
}
.table-body .name {
  color: #3d3d3d;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
}
.table-body .number,
.table-body .start-date {
  color: #b3b1b1;
  font-family: "Helvetica Neue";
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
}
.table-body .assigned,
.table-body .end-date {
  color: #353535;
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
}
.icon-phone {
  position: absolute;
  top: 24px;
  color: #2565e8;
  height: 16px;
  width: 16px;
}
.icon-pencil {
  margin-top: 4px;
  color: #adadad;
  height: 16px;
  width: 16px;
}
button {
  height: 39px;
  width: 209px;
  border-radius: 19.5px;
  color: white;
  text-transform: uppercase;
  background-color: #2e7eed;
}
</style>
