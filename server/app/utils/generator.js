export default function genToken() {
  let token = "";
  const possible =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789";
  for (let i = 0; i < 7; i++)
    token += possible.charAt(Math.floor(Math.random() * possible.length));
  return token;
}
