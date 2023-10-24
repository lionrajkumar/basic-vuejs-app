<template>
  <div>Login Page</div>
  <input type="button" onclick="" value="auth">
</template>

<script>
import authService from "@/authService";

export default {
  name: "LoginPage",
  methods:{
    setAuth:function (){
      authService.isAuthenticated=true;
    },
  },
}
</script>

<style scoped>

</style>