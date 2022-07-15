require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe stuff radar pulse purse hard light army gesture'; 
let testAccounts = [
"0xdfab80631aa2404b151cb7d033cc394e720da1522d9ad01d3ca512974f769ea0",
"0x73828070ef0189ae2110ff46f6b0f3223182d49c24b9b7909883d9ac3ddc1aa5",
"0xd83a4fa961dde182ae97cb7bfeff497a41467049f2af51bbda4f8b93d2b388ad",
"0x0a0fe5d1de994e0fc4f9b3c5e8daf17972e83d521a099ba02248374683718f91",
"0x4f629c373acff9ac94035b99ff64b52110251fc646a4e21952c378efacca90e1",
"0x478b74354d01381e448f25082d481a254395e1c2726ef66b5a035c178c199955",
"0xed54117e27045011e2e4644dc03e57e1a04653f6a1fa107a929430e5b3d58047",
"0x053f584a7ca01c6ddd1d7be26d02881069b17030ed09094dc189fe524c0f720f",
"0x3d9e4e8b73dfac688f1c8fad3ea6b12ae5ac4b10b6ad6a7bba7a21942336130e",
"0x34284944ef642ca22db9ca7081ab9205f61a51a0d9e548f753e9a1c258e6167f"
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


