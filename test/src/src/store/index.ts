import Vuex from "vuex";
import { createGetters, createMutations, defineActions } from "vuex-commit";

type CounterState = {
  count: number;
  arr: number[];
};

const counter = {
  namespaced: true,
  state: {
    count: 1,
    arr: [1, 2, 3],
  },
  getters: createGetters("count"),
  mutations: createMutations("SET"),
  actions: defineActions<CounterState, any>({
    sayHello({ setState }) {
      setState({
        count: (v) => v + 10,
        arr: (v) => v.concat([4, 5, 6]),
      });
    },
    changeCount({ setState }, payload: number) {
      setState({ count: (count) => count + payload });
    },
  }),
};

export default new Vuex.Store({
  modules: {
    counter,
  },
});
