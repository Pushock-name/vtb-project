module.exports = {
  publicPath: process.env.NODE_ENV === 'release'
    ? '/vtb-project/'
    : ''
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