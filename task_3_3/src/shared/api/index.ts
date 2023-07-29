const url = "https://task-3-3-default-rtdb.firebaseio.com";
export async function fetchData(endpoint: string) {
  const res = await fetch(`${url}/${endpoint}`);
  return res.json();
}
