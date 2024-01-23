import { writable } from 'svelte/store';

// Define the enum
export const StateEnum = Object.freeze({
  IDLE: "IDLE",
  PLANNING: "PLANNING",
  FOCUS: "FOCUS"
});

// Create the store with initial state
const { subscribe, set } = writable(StateEnum.IDLE);

// Define the store with methods
const stateStore = {
  subscribe,
  setIdle: () => set(StateEnum.IDLE),
  // @ts-ignore
  setPlanning: () => set(StateEnum.PLANNING),
  // @ts-ignore
  setFocus: () => set(StateEnum.FOCUS)
};

export default stateStore;
