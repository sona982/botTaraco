const { getUserContext } = require("../store/userContextStore");

function replaceVariables(text, userId) {
  const context = getUserContext(userId);
  return text.replace(/{{(.*?)}}/g, (_, key) => context[key.trim()] || "");
}

module.exports = { replaceVariables };
