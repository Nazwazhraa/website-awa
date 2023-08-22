<template>
  <div id="nav">
    <br>
    <br><br>
    <Navbar />

<router-view/>
<br>
<br>
<br>
<br>
<Footer/>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>