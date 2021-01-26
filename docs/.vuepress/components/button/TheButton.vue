<template>
  <div class="the-button">
    <button class="button" @click="change">{{buttonName}}</button>
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'thebutton',
  data() {
    return {
      buttonName: "button組件",
      msg: '',
    };
  },
  methods: {
    change() {
      this.msg = '我是vue 組件的數據'; 
    }
  },
  // mounted() {
  //   import('./lib-that-access-window-on-import').then(module => {
  //     this.dynamicComponent = module.default;
  //   })
  // },
};
</script>

<style lang="css">
.button {
  background-color:darkcyan;
  color: #fff;
  border: none;
  margin: 5px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  
}

.button:hover {
  background-color:rgb(18, 174, 174);
}
</style>