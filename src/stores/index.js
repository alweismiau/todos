import { defineStore } from "pinia";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm7EGeLmhEpQ6L36HJL0kgB04S5mPqLG0",
  authDomain: "vuetodolist-a4c06.firebaseapp.com",
  projectId: "vuetodolist-a4c06",
  storageBucket: "vuetodolist-a4c06.appspot.com",
  messagingSenderId: "511537297565",
  appId: "1:511537297565:web:e7a74ae51ce237b6f63c74",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useTodo = defineStore({
  id: "todo",
  state: () => ({
    category: [
      {
        id: 1,
        name: "Wishlist",
      },
      {
        id: 2,
        name: "College",
      },
      {
        id: 3,
        name: "Work",
      },
      {
        id: 4,
        name: "Daily",
      }
    ],
    task: {
      newTask: "",
      newCategory: [],
      newTodo: [],
    },
    edit: {
      editTask: "",
      editCategory: [],
    },
    wish: [],
    work: [],
    colle: [],
    daily: [],
  }),
  getters: {},
  actions: {
    async addNewTask() {
      let task = this.task;
      let id;
      if (task.newTodo.length == 0) {
        id = 0;
      }
      if (task.newTodo.length > 0) {
        for (let i = 0; i < task.newTodo.length; i++) {
          id = task.newTodo[i].id + 1;
        }
      }
      await setDoc(doc(db, "todo_list", id.toString()), {
        id: id,
        task: task.newTask,
        category: task.newCategory,
        status: false,
      });
      task.newTask = "";
      task.newCategory = [];
    },
    async getNewTasks() {
      let task = this.task;
     onSnapshot(collection(db, "todo_list"), (querySnapshot) => {
        task.newTodo = [];
        querySnapshot.forEach((doc) => {
          task.newTodo.push(doc.data());
        });
      });
    },

    async updateStatus(id_task) {
      let task = this.task;
      let id = id_task;
      console.log(this.task.newTodo[id].status)
      await updateDoc(doc(db, "todo_list", id.toString()), {
        status: !task.newTodo[id].status
      });
    },

    async editTask(id_task) {
      let id = id_task;
      await updateDoc(doc(db, "todo_list", id.toString()), {
        task: this.task.newTodo[id].task
      });
    },
    
    async deleteTask(id_task) {
      let id = id_task;
      await deleteDoc(doc(db, "todo_list", id.toString()));
    },
    async getWishlist(cat_name) {
      let wish = this.wish;
      await getDocs(collection(db, "todo_list")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().category.includes(cat_name)) {
            wish.push(doc.data());
          }
        });
      });
    },
    async getWork(cat_name) {
      let work = this.work;
      await getDocs(collection(db, "todo_list")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().category.includes(cat_name)) {
            work.push(doc.data());
          }
        });
      });
    },
    async getColle(cat_name) {
      let colle = this.colle;
      await getDocs(collection(db, "todo_list")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().category.includes(cat_name)) {
            colle.push(doc.data());
          }
        });
      });
    },
    async getDaily(cat_name) {
      let daily = this.daily;
      await getDocs(collection(db, "todo_list")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().category.includes(cat_name)) {
            daily.push(doc.data());
          }
        });
      });
    },
  },
});
