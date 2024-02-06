import type { TaskInfo } from "$lib/types";

let store = 'IDLE';

let info: TaskInfo = {
  title: '',
  duration: 25,
}

function getStore() {
  return store;
}

function setStore(value: string) {
  store = value;
}


export async function POST({request}) {
  const body = await request.json()
  setStore(body.state)
  if (body.task) {
    info.title = body.task
  }
  if (body.duration) {
    info.duration = body.duration
  }
  return new Response(String("success"))
}

export async function GET({ url, request }) {
  const data = { state: getStore(), taskInfo: info }
  return new Response(JSON.stringify(data), { status: 200 })
}

