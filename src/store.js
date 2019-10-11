import Vue from "vue";
import Vuex from "vuex";
// vue to use vuex
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        task: "Create a state",
        done: false
      },
      {
        id: 2,
        task: "Add a mutation",
        done: false
      },
      {
        id: 3,
        task: "Add a Getter",

        done: false
      }
    ]
  },
  getters: {
    doneTasks(state) {
      return state.tasks.filter(task => task.done);
    }
  },
  mutations: {
    //task as in task in tasks
    //id.state.task.length is length of tasks array
    newtask(state, task) {
      state.tasks.push({
        id: state.tasks.length,
        task: task,
        done: false
      });
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id != id);
    },
    toggleDone(state, id) {
      state.tasks = state.tasks.map(task => {
        if (task.id === id) {
          task.done = !task.done;
        }
        return task;
      });
    }
  }
});
// all the vuex.store to check state,commit a mutation
// get information by the getter object
