<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f4f5f5;
}

img {
  max-width: 100%;
}

a {
  word-wrap: break-word;
}

pre {
  background-color: #283646 !important;
}

pre > code {
  border: 0px !important;
  background-color: #283646 !important;
  color: #fff;
  padding: 10px;
}

code {
  display: inline-block;
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 3px;
  font-size: 14px;
  padding-left: 5px;
  padding-right: 5px;
  color: #4f4f4f;
  box-sizing: border-box;
  overflow-x: auto;
}
</style>
