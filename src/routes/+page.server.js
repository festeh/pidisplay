

export async function load({ fetch, params }) {
  console.log("done");
  const res = await fetch("/");
  const data = await res.json();
  console.log(data);
	return {
    data
	};
}
