import axios from "axios";
// initial state
const state = {
  confHistory: null
};

// getters
const getters = {};

// actions
const actions = {
  postConference({ state, commit, rootState }) {
    axios
      .post(rootState.api + "/conference", {
        conference_name: "string",
        start_time: "string",
        end_time: "string"
      })
      .then(response => {
        this.$router.push({
          name: "conference-conference",
          params: { conference: response.data.conference_uuid }
        });
      });
  },
  getConferenceHistory({ state, commit, rootState }) {
    axios
      .get(rootState.api + "/conference/conference_history")
      .then(response => {
        commit("setConferenceHistory", response.data);
      });
  },
  postConferenceEmailInvite({ state, commit, rootState }, params) {
    axios
      .post(rootState.api + "/conference/email_invite/" + params.conferenceId, {
        emails: params.emails
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        commit("catchError", error);
      });
  },
  postConferenceEmailInviteComfirmation({ state, commit, rootState }, token) {
    axios
      .post(rootState.api + "/conference/email_invite/confirmation", token)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        commit("catchError", error);
      });
  },
  postConferenceSmsInvite({ state, commit, rootState }) {
    axios
      .post(rootState.api + "/conference/sms_invite/{id}")
      .then(response => {});
  },
  postConferenceSMSInviteComfirmation({ state, commit, rootState }, token) {
    axios
      .post(rootState.api + "/conference/sms_invite/confirmation", token)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        commit("catchError", error);
      });
  },
  postConferenceAddUser({ state, commit, rootState }) {
    axios
      .post(rootState.api + "/conference/add_user_to_conference/{id}")
      .then(response => {});
  },
  postAddUserToConference({ state, commit, rootState }, params) {
    axios
      .post(rootState.api + "/conference/email_invite/" + params.conferenceId, {
        phone: params.phone
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        commit("catchError", error);
      });
  }
};

// mutations
const mutations = {
  setConferenceHistory(state, history) {
    state.confHistory = history;
  }
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
};
