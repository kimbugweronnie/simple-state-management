<template>
  <div id="app">
    <NavBar/>
    <TaskForm/>
    <TaskList tasks/>
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";

export default {
  name: "app",
  components: {
    NavBar,
    TaskForm,
    TaskList
  }
};
</script>

<style>
body {
  font-family: Baloo Bhai, Cochin, Georgia, Times, "Times New Roman", serif;
  margin: 0;
  padding: 0;
  background-color: burlywood;
}
</style>
