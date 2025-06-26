const userContext = {};

function setUserContext(userId, key, value) {
  if (!userContext[userId]) userContext[userId] = {};
  userContext[userId][key] = value;
}

function getUserContext(userId) {
  return userContext[userId] || {};
}

function destroyUserContext(userId) {
  delete userContext[userId];
}

module.exports = { setUserContext, getUserContext, destroyUserContext };
