<script setup >
const client = useSupabaseClient();

const {data} = await client.from('tiktoks').ins

</script>

<template>

</template>

<style scoped>

</style>