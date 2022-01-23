require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember exchange include kitchen sure skirt'; 
let testAccounts = [
"0xf93ebe8dd494f14f3f1821c4fba1b80272d1c958179b831ef900de6cb0ae596e",
"0x614160868532516b5ebaf55bdb7ff3010a00f0a9a56bf599fefc27896e27eb0c",
"0x8cf4c14fb8c95b65fa942a7e0a1de2a56638b5012d25dfa534db1f55d101f15b",
"0xf6b8629b093d29781cdffe8e114d000f14af739ac187a4d6a5fe3f6118557c40",
"0xa146295f0c2b0ac78c464cfbfd055f224a3119a518087bc01921d14ebc24cbfa",
"0xf4babdbf11678bc97ed2f5f0037bae1dd6594e87ca907aebfafc6fe80a014086",
"0x860f05f3f4574cc54508be4088d6f126ab2280349eb4a7fd1a5116f315f1927f",
"0xda4b40ad492bd179daa54e8b0e3d83fe8d02d0b2fcbc548ad36ddf9798ca89a3",
"0xd25569b01f8db6ec742abe3b91607bfc20bee732603d681176e6eec988e3dad7",
"0x0201a624fa2c56111621fd51919a67cffed1fa62614e61e6a9b18824c50f3838"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


