<template>
<div>
<label for ="showDone">
<input type="checkbox" name="showDone" id="showDone" v-model="showDone"/>Show Done
</label>
<ul>
<li v-for="task in tasks":key="task.id">
<p bind:class="(task.done)? 'done:''"@click="$store.commit('toggleDone',task.id)">{{task.task}}</p>
<!-- <p bind:class="(task.done)? 'done:''">{{task.price}}</p> -->
<div class="remove" @click="$store.commit('removeTask',task.id)">Delete Task</div>

</li>
</ul>
</div>
</template>

<script>
export default {
  name: "task-list",

  computed: {
    tasks() {
      if (this.showDone) {
        return this.$store.getters.doneTasks;
      } else {
        return this.$store.state.tasks;
      }
    }
  },
  data() {
    return {
      showDone: false
    };
  }
};
</script>

<style>
label {
  display: flex;
  align-items: center;
  justify-content: center;
  color: blanchedalmond;
  font-size: 14px;
  text-transform: capitalize;
  padding: 15px;
  border-bottom: 1px dashed blanchedalmond;
}
ul {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
ul li {
  display: flex;
  padding: 15px;
  border-bottom: 1px dashed black;
  justify-content: space-around;
  align-items: center;
}
</style>