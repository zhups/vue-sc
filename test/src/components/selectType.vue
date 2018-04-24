<template>
    <div>
        <div>
            <div><img :src="proInfo.img"/></div>
            <div>
                <p>{{proInfo.price}}</p>
                <p>库存{{proInfo.num}}</p>
                <div></div>
                <input type="button" />
            </div>
        </div>
        <div></div>
        <div>购买数量 </div>
        <input type="button" value="确定" />
    </div>
</template>

<script>
export default {
  props: ['proInfo']
}
</script>

<style>
</style>
