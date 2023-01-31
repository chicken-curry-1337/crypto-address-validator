const ACCOUNT_ID_REGEX =
    /^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$/;

function isValidAddress(accountId) {
    return ACCOUNT_ID_REGEX.test(accountId);
}

module.exports = {
    isValidAddress,
};
