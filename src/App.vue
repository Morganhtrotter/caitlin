<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import MenuGrid from './components/MenuGrid.vue'
import HowItWorks from './components/HowItWorks.vue'
import About from './components/About.vue'
import OrderForm from './components/OrderForm.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <main>
    <Hero />
    <MenuGrid />
    <HowItWorks />
    <About />
    <OrderForm />
  </main>
  <SiteFooter />
</template>
