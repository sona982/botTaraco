const userStates = {};

function getUserState(id) {
    return userStates[id];
}

function setUserState(id, blockName) {
    userStates[id] = blockName;
}

module.exports = {
    getUserState,
    setUserState,
};
