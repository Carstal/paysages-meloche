import { updateClient } from "../../../src/components/client/client_service";
// const Client = require("../../../src/components/client/client");

export default async function handler(req, res) {
  var body = req.body;
  const updated = await updateClient(body);

  res.redirect(
    "https://paysages-meloche.vercel.app/api/auth/logout?returnTo=https%3A%2F%2Fpaysages-meloche.vercel.app%2Fapi%2Fauth%2Flogin"
  );
}
