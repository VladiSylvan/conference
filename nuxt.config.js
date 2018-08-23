const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "spa",
  // router: {
  //   middleware: ["check-auth", "authenticated"]
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: "client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  plugins: [
    "~plugins/vue-awesome.js",
    "~/plugins/directives.js",
    "~/plugins/v-calendar.js",
    "~/plugins/vue-axios.js",
    {
      src: "~/plugins/vee-validate.js",
      ssr: true
    },
    {
      src: "~/plugins/vue-croppie.js",
      ssr: false
    },
    {
      src: "~/plugins/vue-flag-icon.js",
      ssr: false
    }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            // default value for `whitelist` is
            // [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
            whitelist: [
              /es6-promise|\.(?!(?:js|json)$).{1,5}$/i,
              /^vue-awesome/,
              /^vue-flag-icon/
            ]
          })
        ];
      }
    },
    vendor: ["axios", "vue-axios"]
  }
};
