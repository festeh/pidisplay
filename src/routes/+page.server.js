export async function load({ fetch, params }) {
  const res = await fetch("/");
  const data = await res.json();
  return data
}
