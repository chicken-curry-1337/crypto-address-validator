var cryptoUtils = require("./crypto/utils");
const Buffer = require("buffer").Buffer;

/**
 * Check if an address is valid
 *
 * @param {string} _address - An address
 *
 * @return {boolean} - True if address is valid, false otherwise
 */
var isValidAddress = function (_address) {
    var address = _address.toString().toUpperCase().replace(/-/g, "");
    if (!address || address.length !== 40) {
        return false;
    }
    var decoded = cryptoUtils.toHex(cryptoUtils.base32.b32decode(address));
    var stepThreeChecksum = cryptoUtils.keccak256Checksum(
        Buffer.from(decoded.slice(0, 42), "hex")
    );

    return stepThreeChecksum === decoded.slice(42);
};

module.exports = {
    isValidAddress: isValidAddress,
};
