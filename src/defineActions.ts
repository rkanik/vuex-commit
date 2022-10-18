import { Dispatch, Commit, Store, ActionTree } from "vuex";

interface ActionContext<S, R> {
  dispatch: Dispatch;
  commit: Commit;
  state: S;
  getters: any;
  rootState: R;
  rootGetters: any;
  setState: (payload: {
    [P in keyof S]?: S[P] | ((current: S[P]) => S[P]);
  }) => void;
}

type ActionHandler<S, R> = (
  this: Store<R>,
  injectee: ActionContext<S, R>,
  payload?: any
) => any;

interface ActionObject<S, R> {
  root?: boolean;
  handler: ActionHandler<S, R>;
}

type Action<S, R> = ActionHandler<S, R> | ActionObject<S, R>;

interface Actions<S, R> {
  [key: string]: Action<S, R>;
}

const defineActions = <S, R>(actions: Actions<S, R>): ActionTree<S, R> => {
  return Object.entries(actions).reduce((actions, [name, action]: any) => {
    actions[name] = (ctx: any, payload) => {
      ctx.setState = (...args: any) => {
        ctx.commit("SET", ...args);
      };
      if (typeof action === "function") {
        return action(ctx, payload);
      }
      return action;
    };
    return actions;
  }, actions) as ActionTree<S, R>;
};

export { defineActions };
