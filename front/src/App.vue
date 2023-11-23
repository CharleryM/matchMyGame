<template>
  <div id="App">
    <SubLogin />
  </div>
</template>

<script>
import SubLogin from "@/components/SubLogin";

export default {
  name: 'App',
  components: {
    SubLogin,
  }
}
</script>

<style>
#App {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: white;

  @font-face {
    font-family: 'Poppins', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300;1,400&display=swap')
  }
}
</style>
