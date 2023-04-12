const networkConfig = {
    31337: {
        name: "localhost",
    },
    5: {
        name: "goerli",
    },
    11155111: {
        name: "sepolia",
    },
    1: {
        name: "mainnet",
    },
}

const developmentChains = ["hardhat", "localhost"]
const motherContract = "0x838EC8107fE7F57ea44df334e62444E8Adb01353"

module.exports = {
    networkConfig,
    developmentChains,
    motherContract,
}
