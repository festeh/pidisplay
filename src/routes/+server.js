let store = 'IDLE';
let task = "";

function getStore() {
  return store;
}

function setStore(value) {
  store = value;
}

function getTask() {
  return task;
}

function setTask(value) {
  task = value;
}


export async function POST({ request }) {
  const body = await request.json()
  setStore(body.state)
  if (body.task) {
    setTask(body.task)
  }
  return new Response(String("success"))
}

export async function GET({ url, request }) {
  const data = { state: getStore(), task: getTask() }
  return new Response(JSON.stringify(data), { status: 200 })
}

