import { defineStore } from "pinia";

export const useStore = defineStore({
  state: () => ({
    globalMsg: "hello pinia",
  }),
});
