import 'babel-polyfill';
import { COFFEE_PER_BREW, BEANS_PER_BREW } from "./constants";
import { createAction, update, initializeState } from "./store";
import * as API from "./api";

function CoffeeMaker(initialBeans, maxMachine, onUpdate) {
  let state = initializeState(initialBeans, maxMachine);

  const closure = {
    grindBean,
    brewPowder,
    prepareMachine,
    getCoffee,
    getState,
    addBean,
  };

  function handleUpdate(action, data) {
    state = update(state, createAction(action, data));
    onUpdate(closure);
    return closure;
  }

  async function grindBean() {
    handleUpdate("grindBean");
    await API.grindBean();
    return closure;
  }

  async function brewPowder() {
    if (state.beanPowder < BEANS_PER_BREW) {
      return Promise.reject(new Error("커피 가루가 부족합니다."));
    }

    handleUpdate("brewPowder");
    await API.brewPowder();
    return closure;
  }

  async function prepareMachine() {
    if (state.currentMachine === 0) {
      return Promise.reject(new Error("남은 머신이 없습니다."));
    }

    if (state.beans === 0) {
      return Promise.reject(new Error("커피콩이 부족합니다."));
    }

    handleUpdate("prepareMachine");
    await API.prepareMachine();
    return closure;
  }

  function getCoffee() {
    if (state.coffee < COFFEE_PER_BREW)
      return Promise.reject(new Error("브루잉 커피가 없습니다."));

    handleUpdate("getCoffee");
    return COFFEE_PER_BREW;
  }

  function getState() {
    return state;
  }

  function addBean(amount) {
    handleUpdate("addBeans", amount);
  }

  return closure;
}

export default CoffeeMaker;