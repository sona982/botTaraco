const userContext = {};

function setUserContext(userId, key, value) {
  if (!userContext[userId]) userContext[userId] = {};
  userContext[userId][key] = value;
}

function getUserContext(userId) {
  return userContext[userId] || {};
}

module.exports = { setUserContext, getUserContext };
