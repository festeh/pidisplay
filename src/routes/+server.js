// @ts-nocheck
let store = 'IDLE';

function getStore() {
  return store;
}

function setStore(value) {
  store = value;
}


export async function POST({ request }) {
  const body = await request.json()
  setStore(body.state)
  return new Response(String("success"))
}

export async function GET({ url, request }) {
  const data = { state: getStore() }
  return new Response(JSON.stringify(data), { status: 200 })
}

export async function fallback({ request }) {
  return text(`I caught your ${request.method} request!`);
}
