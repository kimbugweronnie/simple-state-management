<template>
<div class="form">
<input type="text" v-model="task" name="task" placeholder="please add"/>
<button @click="newTask">ADD</button>
</div>
</template>

<script>
export default {
  name: "task-form",
  data() {
    return {
      task: ""
    };
  },
  methods: {
    newTask() {
      //commiting a called newtask mutation and adding this.task

      this.$store.commit("newtask", this.task);
      this.task = "";
    }
  }
};
</script>

<style>
.form {
  width: 100vw;
  height: 35px;
  display: flex;
  align-items: stretch;
  margin: 0;
}
.form input {
  flex: 1;
}
</style>