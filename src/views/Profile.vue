<template>
    <h1 class="text-black">Nama : {{ getUser.name}}</h1>
    <h1 class="text-black">Email : {{ getUser.email}}</h1>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ... mapGetters('user', ['getUser']),
    },
    methods: {
        ...mapActions('user', ["fetchUser"]),
    },
    created() {
        this.fetchUser();
    },
}
</script>