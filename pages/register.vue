<template>
  <div>
      <!-- breadcrumb start -->
      <breadcrumb title="Register Now" subtitle="Register" :center="true" />
      <!-- breadcrumb end -->

      <!-- register area start -->
      <register-area/>
      <!-- register area end -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Register Page" });
</script>
