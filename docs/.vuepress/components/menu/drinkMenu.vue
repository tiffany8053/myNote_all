<template lang="pug">
    .drinkMenu
        .menu__title {{title}}
        .menu__menuLine
            .menu__menuLine__item(v-for="item in drinkList") {{item.text}}
</template>

<script>
export default {
    name: 'drinkMenu',
    data() {
        return {
            title: '飲料菜單',
            drinkList: [
                {text: '珍奶', price: 55},
                {text: '紅茶', price: 40},
                {text: '椰奶', price: 65},
                {text: '泡沫綠', price: 35},
                {text: '大正紅茶拿鐵', price: 45},
            ],
        };
    },

}
</script>

<style>
.menu__menuLine__item {
    color: red;
}
</style>
