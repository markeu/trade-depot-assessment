const Bluebird = require("bluebird");
const fetch = require("node-fetch");
fetch.Promise = Bluebird;

module.exports = async (url, method = "post", body = {}) => {
  body = method.toLowerCase() === "get" ? null : JSON.stringify(body);

  const headers = { "Content-Type": "application/json" };

  try {
    const response = await fetch(url, { method, body, headers });

    const data = await response.json();

    return data;
  } catch (e) {
    return false;
  }
};
