module.exports = {
    installOnLockChange: true,
    staged: {
        "*": ["nr format", "nr lint"],
    },
    syncBeforePush: true,
    enforceConventionalCommits: true,
};
