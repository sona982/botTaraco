const userStates = {};

function getUserState(id) {
  return userStates[id] || "greeting";
}

function setUserState(id, blockName) {
  userStates[id] = blockName;
}

module.exports = {
  getUserState,
  setUserState,
};
