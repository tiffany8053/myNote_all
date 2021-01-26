### vue組件呈現
在md文件直接撰寫`<template>`和`<script>`

::: tip 範例：
```md{3-5}
<!-- 這是 md 文件-->
<template>
  <ClientOnly>
    <ToDo></ToDo>
  </ClientOnly>
</template>

<script>
import ToDo from '../../.vuepress/components/ToDoList/ToDo.vue';
export default {
  components: {
    ToDo,
  },
  data() {
    return {
      message: '',
    };
  },
}
</script>
```
:::

呈現如下：
<ClientOnly>
  <ToDo></ToDo>
</ClientOnly>

<script>
import ToDo from '../../.vuepress/components/ToDoList/ToDo.vue';
export default {
  components: {
    ToDo,
  },
  data() {
    return {
      message: '',
    };
  },
}
</script>