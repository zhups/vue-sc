<template>
    <div>
        <img :src="item.url">
        <p>{{item.title}}</p>
        <p>{{item.name}}</p>
        <p>{{item.price}}</p>
    </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>
</style>
