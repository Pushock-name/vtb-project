module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vtb-project/'
    : '/'
}

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   css: {
//     loaderOptions: {
//         sass: {
//           additionalData: `@import "@/assets/styles/variables.scss";`
//         }
//     }
//   }
// })