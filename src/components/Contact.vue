<template>
  <pageHeader></pageHeader>
  <div>
    <h1>Contact Us</h1>
    <p>You can reach us at contact@example.com.</p>
  </div>
  <pageFooter></pageFooter>
</template>

<script>
import pageHeader from "@/components/pageHeader";
import pageFooter from "@/components/pageFooter";
export default {
  name: "ContactPage",
  components: {pageHeader,pageFooter}
}
</script>

<style scoped>

</style>