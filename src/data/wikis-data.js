export default async function getWikis() {
  const response = await fetch('/wikis-payload.json');
  return response;
}
