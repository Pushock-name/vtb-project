<template>
  <div id="app">
    <v-app-wrapper />
  </div>
</template>

<script>
import vAppWrapper from './components/v-app-wrapper.vue';

export default {
  name: 'App',
  components: {
    vAppWrapper
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

@font-face {
  font-family: 'YS Text';
  src: url("./assets/fonts/YSText/YandexSansText-Regular.woff") format("woff");
}

/* Reset and base styles */
*, *::before, *::after {
  padding: 0;
  margin: 0;
  border: none;
  box-sizing: border-box;
}

a, a:visited, a:hover {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

a:focus, a:active {
  outline: none;
}

h1, h2, h3, h4, h5, h6, p {
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
}

p + p {
  margin-top: 1em;
}

ul {
  list-style: none;
}

img, svg, video {
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

/* Form */
input, textarea, button, select {
  font-family: inherit;
  font-size: inherit;
}

input::-ms-clear {
  display: none;
}

button, input[type="submit"] {
  display: inline-block;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: none;
}

label {
  cursor: pointer;
}

legend {
  display: block;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
}

h2 {
  font-family: 'Press Start 2P';
  font-style: normal;
  font-weight: 400;
  font-size: 52px;
  line-height: 130%;
  color: #368CFF;
  text-transform: uppercase;
}

h3 {
  font-family: 'YS Text';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  color: #FFFFFF;
}

p {
  font-family: 'YS Text';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #FFFFFF;
}

</style>
