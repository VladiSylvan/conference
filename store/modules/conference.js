import axios from "axios";
// initial state
const state = {
  confHistory: null,
  confViewers: null,
  confComponent: null,
  videoConf: false,
  shareScreen: false
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
          name: "conference",
          query: { id: response.data.conference_uuid }
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
  getConferenceViewers({ state, commit, rootState }, id) {
    axios
      .get(rootState.api + "/conference/conference_viewers/" + id)
      .then(response => {
        state.confViewers = response.data;
      });
  },
  postConferenceEmailInvite({ state, commit, rootState }, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          rootState.api + "/conference/email_invite/" + params.conferenceId,
          {
            emails: params.emails
          }
        )
        .then(response => {
          resolve();
        })
        .catch(error => {
          commit("catchError", error);
        });
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
  },
  shareScreen(state, data) {
    state.shareScreen = data;
  },
  videoConf(state, data) {
    state.videoConf = data;
  },
  confComponent(state, data) {
    state.confComponent = data;
  }
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
};
