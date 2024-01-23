// @ts-nocheck
import stateStore from '../stores/state.js';

let store = 'IDLE';

export function getStore() {
  return store;
}

export function setStore(value) {
  store = value;
}


export async function POST({ request }) {
  // get the body of the request
  //
  const body = await request.json()
  setStore(body.state)
  // return a dummy json with a key "success" and value true
  return new Response(String("success"))
}

export async function GET({ url, request }) {
  const data = {state: getStore()}
  return new Response(JSON.stringify(data), {status: 200})
}

export async function fallback({ request }) {
	return text(`I caught your ${request.method} request!`);
}
