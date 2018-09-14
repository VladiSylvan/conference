import Vuex from "vuex";
import axios from "axios";
import numbers from "./modules/numbers";
import auth from "./modules/auth";
import payments from "./modules/payments";
import conference from "./modules/conference";

function catchError(state, error) {
  if (error.response === undefined) {
    state.authError = "server is offline";
  } else {
    state.authError = error.response.data.message;
  }
  setTimeout(function() {
    state.authError = null;
  }, 2000);
}

function authToken(token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

const createStore = () => {
  return new Vuex.Store({
    modules: {
      numbers,
      auth,
      payments,
      conference
    },
    state: {
      api: "http://54.39.98.190:8000",
      user: null,
      token: null,
      authError: null,
      states: null,
      payments: null,
      conferencesHistory: null,
      areaCode: null
    },
    mutations: {
      updateUser(state, data) {
        state.user = data || null;
      },
      authToken(state, token) {
        authToken(token);
        state.token = token;
      },
      catchError(state, error) {
        if (error.response === undefined) {
          state.authError = "server is offline";
        } else {
          state.authError = error.response.data.message;
        }
        setTimeout(function() {
          state.authError = null;
        }, 2000);
      },
      // share file
      postFile(state, params) {
        var bodyFormData = new FormData();
        bodyFormData.set("playback", params);
        axios({
          method: "post",
          url: state.api + "/share-file",
          data: bodyFormData,
          config: { headers: { "Content-Type": "multipart/form-data" } }
        })
          .then(function(response) {
            // handle success
            console.log(response);
          })
          .catch(function(response) {
            // handle error
            console.log(response);
          });
      },
      // user
      postProfilePicture(state, params) {
        var bodyFormData = new FormData();
        bodyFormData.set("playback", params);
        axios({
          method: "post",
          url: state.api + "/user/upload-profile-pic",
          data: bodyFormData,
          config: { headers: { "Content-Type": "multipart/form-data" } }
        })
          .then(function(response) {
            // handle success
            console.log(response);
          })
          .catch(function(response) {
            // handle error
            console.log(response);
          });
      }
    },
    actions: {
      nuxtClient({ commit }) {
        if (!window.localStorage) return;
        const user = window.localStorage.user;
        const token = window.localStorage.token;
        const data = {
          user: user ? JSON.parse(user) : undefined,
          token: token
        };
        // authToken(data.token);
        commit("authToken", token);
        commit("updateUser", data.user);
      }
    }
  });
};
export default createStore;
