import { Mumbai } from "@thirdweb-dev/chains";

export const THIRDWEB_API = "cfc6c065d92c4eb1763bad5b29ba13b3";
export const chain = Mumbai;
export const factoryAddress = "0x0DAbc440052ED94FfE69de2D704b1F151bF12c16";
// export const
export const ACCOUNT_ABI = {
  _format: "hh-sol-artifact-1",
  contractName: "CredentialAccount",
  sourceName: "contracts/Account.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "contract IEntryPoint",
          name: "_entrypoint",
          type: "address",
        },
        {
          internalType: "address",
          name: "_factory",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "signer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "isAdmin",
          type: "bool",
        },
      ],
      name: "AdminUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "prevURI",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "newURI",
          type: "string",
        },
      ],
      name: "ContractURIUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint8",
          name: "version",
          type: "uint8",
        },
      ],
      name: "Initialized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "authorizingSigner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "targetSigner",
          type: "address",
        },
        {
          components: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
            {
              internalType: "uint8",
              name: "isAdmin",
              type: "uint8",
            },
            {
              internalType: "address[]",
              name: "approvedTargets",
              type: "address[]",
            },
            {
              internalType: "uint256",
              name: "nativeTokenLimitPerTransaction",
              type: "uint256",
            },
            {
              internalType: "uint128",
              name: "permissionStartTimestamp",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "permissionEndTimestamp",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "reqValidityStartTimestamp",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "reqValidityEndTimestamp",
              type: "uint128",
            },
            {
              internalType: "bytes32",
              name: "uid",
              type: "bytes32",
            },
          ],
          indexed: false,
          internalType: "struct IAccountPermissions.SignerPermissionRequest",
          name: "permissions",
          type: "tuple",
        },
      ],
      name: "SignerPermissionsUpdated",
      type: "event",
    },
    {
      inputs: [],
      name: "addDeposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "contractURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "entryPoint",
      outputs: [
        {
          internalType: "contract IEntryPoint",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_target",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_value",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "_calldata",
          type: "bytes",
        },
      ],
      name: "execute",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "_target",
          type: "address[]",
        },
        {
          internalType: "uint256[]",
          name: "_value",
          type: "uint256[]",
        },
        {
          internalType: "bytes[]",
          name: "_calldata",
          type: "bytes[]",
        },
      ],
      name: "executeBatch",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "factory",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getAllActiveSigners",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "approvedTargets",
              type: "address[]",
            },
            {
              internalType: "uint256",
              name: "nativeTokenLimitPerTransaction",
              type: "uint256",
            },
            {
              internalType: "uint128",
              name: "startTimestamp",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "endTimestamp",
              type: "uint128",
            },
          ],
          internalType: "struct IAccountPermissions.SignerPermissions[]",
          name: "signers",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getAllAdmins",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getAllSigners",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "approvedTargets",
              type: "address[]",
            },
            {
              internalType: "uint256",
              name: "nativeTokenLimitPerTransaction",
              type: "uint256",
            },
            {
              internalType: "uint128",
              name: "startTimestamp",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "endTimestamp",
              type: "uint128",
            },
          ],
          internalType: "struct IAccountPermissions.SignerPermissions[]",
          name: "signers",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "message",
          type: "bytes",
        },
      ],
      name: "getMessageHash",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getNonce",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "signer",
          type: "address",
        },
      ],
      name: "getPermissionsForSigner",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "approvedTargets",
              type: "address[]",
            },
            {
              internalType: "uint256",
              name: "nativeTokenLimitPerTransaction",
              type: "uint256",
            },
            {
              internalType: "uint128",
              name: "startTimestamp",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "endTimestamp",
              type: "uint128",
            },
          ],
          internalType: "struct IAccountPermissions.SignerPermissions",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_defaultAdmin",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "_data",
          type: "bytes",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "signer",
          type: "address",
        },
      ],
      name: "isActiveSigner",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_account",
          type: "address",
        },
      ],
      name: "isAdmin",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_message",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "_signature",
          type: "bytes",
        },
      ],
      name: "isValidSignature",
      outputs: [
        {
          internalType: "bytes4",
          name: "magicValue",
          type: "bytes4",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_signer",
          type: "address",
        },
        {
          components: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "initCode",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "callData",
              type: "bytes",
            },
            {
              internalType: "uint256",
              name: "callGasLimit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "verificationGasLimit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "preVerificationGas",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxFeePerGas",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxPriorityFeePerGas",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "paymasterAndData",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "signature",
              type: "bytes",
            },
          ],
          internalType: "struct UserOperation",
          name: "_userOp",
          type: "tuple",
        },
      ],
      name: "isValidSigner",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes[]",
          name: "data",
          type: "bytes[]",
        },
      ],
      name: "multicall",
      outputs: [
        {
          internalType: "bytes[]",
          name: "results",
          type: "bytes[]",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "onERC1155BatchReceived",
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "onERC1155Received",
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "onERC721Received",
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "username",
          type: "string",
        },
        {
          internalType: "string",
          name: "metadataURI",
          type: "string",
        },
      ],
      name: "register",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_uri",
          type: "string",
        },
      ],
      name: "setContractURI",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IEntryPoint",
          name: "_entrypointOverride",
          type: "address",
        },
      ],
      name: "setEntrypointOverride",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
            {
              internalType: "uint8",
              name: "isAdmin",
              type: "uint8",
            },
            {
              internalType: "address[]",
              name: "approvedTargets",
              type: "address[]",
            },
            {
              internalType: "uint256",
              name: "nativeTokenLimitPerTransaction",
              type: "uint256",
            },
            {
              internalType: "uint128",
              name: "permissionStartTimestamp",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "permissionEndTimestamp",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "reqValidityStartTimestamp",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "reqValidityEndTimestamp",
              type: "uint128",
            },
            {
              internalType: "bytes32",
              name: "uid",
              type: "bytes32",
            },
          ],
          internalType: "struct IAccountPermissions.SignerPermissionRequest",
          name: "_req",
          type: "tuple",
        },
        {
          internalType: "bytes",
          name: "_signature",
          type: "bytes",
        },
      ],
      name: "setPermissionsForSigner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "initCode",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "callData",
              type: "bytes",
            },
            {
              internalType: "uint256",
              name: "callGasLimit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "verificationGasLimit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "preVerificationGas",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxFeePerGas",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxPriorityFeePerGas",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "paymasterAndData",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "signature",
              type: "bytes",
            },
          ],
          internalType: "struct UserOperation",
          name: "userOp",
          type: "tuple",
        },
        {
          internalType: "bytes32",
          name: "userOpHash",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "missingAccountFunds",
          type: "uint256",
        },
      ],
      name: "validateUserOp",
      outputs: [
        {
          internalType: "uint256",
          name: "validationData",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
            {
              internalType: "uint8",
              name: "isAdmin",
              type: "uint8",
            },
            {
              internalType: "address[]",
              name: "approvedTargets",
              type: "address[]",
            },
            {
              internalType: "uint256",
              name: "nativeTokenLimitPerTransaction",
              type: "uint256",
            },
            {
              internalType: "uint128",
              name: "permissionStartTimestamp",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "permissionEndTimestamp",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "reqValidityStartTimestamp",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "reqValidityEndTimestamp",
              type: "uint128",
            },
            {
              internalType: "bytes32",
              name: "uid",
              type: "bytes32",
            },
          ],
          internalType: "struct IAccountPermissions.SignerPermissionRequest",
          name: "req",
          type: "tuple",
        },
        {
          internalType: "bytes",
          name: "signature",
          type: "bytes",
        },
      ],
      name: "verifySignerPermissionRequest",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool",
        },
        {
          internalType: "address",
          name: "signer",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "withdrawAddress",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "withdrawDepositTo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ],
  bytecode:
    "0x6101806040523480156200001257600080fd5b50604051620045d1380380620045d18339810160408190526200003591620002a1565b60408051808201825260078152661058d8dbdd5b9d60ca1b6020808301918252835180850190945260018452603160f81b908401528151902060e08190527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc66101008190524660a05285938593859385939192917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6200011a8184846040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b6080523060c0526101205250620001359250506200015e9050565b6001600160a01b03908116610140521661016052506200015690506200015e565b5050620002e0565b60006200016a62000248565b5460ff16905060006200017c62000248565b54610100900460ff1690508015620001ea5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60ff8281161015620002445760ff6200020262000248565b805460ff191660ff9283161790556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b60006200025f6200026460201b62001e2e1760201c565b905090565b7f322cf19c484104d3b1a9c2982ebae869ede3fa5f6c4703ca41b9a48c76ee030090565b6001600160a01b03811681146200029e57600080fd5b50565b60008060408385031215620002b557600080fd5b8251620002c28162000288565b6020840151909250620002d58162000288565b809150509250929050565b60805160a05160c05160e0516101005161012051610140516101605161425a6200037760003960006117f20152600081816104f101528181610be40152818161244b015281816125db01528181612611015281816126d90152818161274f015261277f01526000611f1101526000611f6001526000611f3b01526000611e9401526000611ebe01526000611ee8015261425a6000f3fe6080604052600436106101c65760003560e01c8063938e3d7b116100f7578063c45a015511610095578063e8a3d48511610064578063e8a3d4851461055d578063e9523c971461057f578063f15d424e146105a1578063f23a6e61146105ce57600080fd5b8063c45a0155146104df578063d087d28814610513578063d1f5789414610528578063d42f2f351461054857600080fd5b8063b0d691fe116100d1578063b0d691fe14610446578063b61d27f614610473578063b76464d514610493578063bc197c81146104b357600080fd5b8063938e3d7b146103ba578063a9082d84146103da578063ac9650d81461041957600080fd5b80633ffbd47f116101645780634d44560d1161013e5780634d44560d146103385780635892e236146103585780637dff5a79146103785780638b52d7231461039857600080fd5b80633ffbd47f146102ee57806347e1da2a146103105780634a58db191461033057600080fd5b80631626ba7e116101a05780631626ba7e1461026e5780631dd756c51461028e57806324d7806c146102ae5780633a871cdd146102ce57600080fd5b806301ffc9a7146101d25780630a1028c414610207578063150b7a021461023557600080fd5b366101cd57005b600080fd5b3480156101de57600080fd5b506101f26101ed36600461305a565b6105fa565b60405190151581526020015b60405180910390f35b34801561021357600080fd5b50610227610222366004613141565b610640565b6040519081526020016101fe565b34801561024157600080fd5b5061025561025036600461319a565b6106e4565b6040516001600160e01b031990911681526020016101fe565b34801561027a57600080fd5b50610255610289366004613205565b6106f5565b34801561029a57600080fd5b506101f26102a9366004613264565b610835565b3480156102ba57600080fd5b506101f26102c93660046132a9565b610b0d565b3480156102da57600080fd5b506102276102e93660046132c6565b610b3c565b3480156102fa57600080fd5b5061030e610309366004613354565b610b62565b005b34801561031c57600080fd5b5061030e61032b366004613403565b610c92565b61030e610e03565b34801561034457600080fd5b5061030e61035336600461349c565b610e6a565b34801561036457600080fd5b5061030e6103733660046134c8565b610ee3565b34801561038457600080fd5b506101f26103933660046132a9565b6112a0565b3480156103a457600080fd5b506103ad611359565b6040516101fe91906135de565b3480156103c657600080fd5b5061030e6103d5366004613640565b6115a0565b3480156103e657600080fd5b506103fa6103f53660046134c8565b6115f1565b6040805192151583526001600160a01b039091166020830152016101fe565b34801561042557600080fd5b50610439610434366004613688565b611648565b6040516101fe9190613719565b34801561045257600080fd5b5061045b6117b7565b6040516001600160a01b0390911681526020016101fe565b34801561047f57600080fd5b5061030e61048e36600461376e565b611817565b34801561049f57600080fd5b5061030e6104ae3660046132a9565b6118a7565b3480156104bf57600080fd5b506102556104ce36600461384b565b63bc197c8160e01b95945050505050565b3480156104eb57600080fd5b5061045b7f000000000000000000000000000000000000000000000000000000000000000081565b34801561051f57600080fd5b506102276118f0565b34801561053457600080fd5b5061030e6105433660046138f8565b611970565b34801561055457600080fd5b506103ad611b22565b34801561056957600080fd5b50610572611c93565b6040516101fe919061393f565b34801561058b57600080fd5b50610594611d44565b6040516101fe9190613952565b3480156105ad57600080fd5b506105c16105bc3660046132a9565b611d56565b6040516101fe919061399f565b3480156105da57600080fd5b506102556105e93660046139b2565b63f23a6e6160e01b95945050505050565b60006001600160e01b03198216630271189760e51b148061062b57506001600160e01b03198216630a85bd0160e11b145b8061063a575061063a82611e52565b92915050565b6000807f82cac545155fcbf147f2a9013809613677ac7d65498556e6d19ce43bcbf6c2848380519060200120604051602001610686929190918252602082015260400190565b6040516020818303038152906040528051906020012090506106a6611e87565b60405161190160f01b602082015260228101919091526042810182905260620160405160208183030381529060405280519060200120915050919050565b630a85bd0160e11b5b949350505050565b6000806107228460405160200161070e91815260200190565b604051602081830303815290604052610640565b905060006107308285611fae565b905061073b81610b0d565b156107525750630b135d3f60e11b915061063a9050565b33600061075d611fd2565b6001600160a01b03841660009081526006919091016020526040902090506107858183611ff6565b806107b5575061079481612018565b60011480156107b5575060006107aa8282612022565b6001600160a01b0316145b6108125760405162461bcd60e51b8152602060048201526024808201527f4163636f756e743a2063616c6c6572206e6f7420617070726f7665642074617260448201526333b2ba1760e11b60648201526084015b60405180910390fd5b61081b836112a0565b1561082b57630b135d3f60e11b94505b5050505092915050565b600061083f611fd2565b6001600160a01b0384166000908152600491909101602052604090205460ff161561086c5750600161063a565b6000610876611fd2565b6001600160a01b0385166000908152600591909101602090815260408083208151606081018352815481526001909101546001600160801b0380821694830194909452600160801b90049092169082015291506108d1611fd2565b6006016000866001600160a01b03166001600160a01b0316815260200190815260200160002090504282602001516001600160801b03161180610921575081604001516001600160801b03164210155b80610932575061093081612018565b155b156109425760009250505061063a565b60006109596109546060870187613a1a565b61202e565b9050600061096683612018565b60011480156109875750600061097c8482612022565b6001600160a01b0316145b90506324f16c0560e11b6001600160e01b03198316016109fe576000806109b96109b460608a018a613a1a565b612068565b91509150826109df576109cc8583611ff6565b6109df576000965050505050505061063a565b85518111156109f7576000965050505050505061063a565b5050610b00565b635c0f12eb60e11b6001600160e01b0319831601610af357600080610a2e610a2960608a018a613a1a565b6120cd565b509150915082610a985760005b8251811015610a9657610a70838281518110610a5957610a59613a60565b602002602001015187611ff690919063ffffffff16565b610a8457600097505050505050505061063a565b80610a8e81613a8c565b915050610a3b565b505b60005b8251811015610aeb57818181518110610ab657610ab6613a60565b602002602001015187600001511015610ad957600097505050505050505061063a565b80610ae381613a8c565b915050610a9b565b505050610b00565b600094505050505061063a565b5060019695505050505050565b6000610b17611fd2565b6001600160a01b03909216600090815260049290920160205250604090205460ff1690565b6000610b4661211a565b610b508484612184565b9050610b5b826122ca565b9392505050565b333014610bcd5760405162461bcd60e51b815260206004820152603360248201527f43726564656e7469616c4163636f756e743a206f6e6c79206163636f756e742060448201527234ba39b2b6331031b0b7103932b3b4b9ba32b960691b6064820152608401610809565b604051633203996360e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633203996390610c1b9087908790600401613aa5565b600060405180830381600087803b158015610c3557600080fd5b505af1158015610c49573d6000803e3d6000fd5b50505050610c8c82828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061231792505050565b50505050565b610c9a6117b7565b6001600160a01b0316336001600160a01b03161480610cbd5750610cbd33610b0d565b610cd95760405162461bcd60e51b815260040161080990613ad4565b610ce1612436565b8481148015610cef57508483145b610d3b5760405162461bcd60e51b815260206004820152601d60248201527f4163636f756e743a2077726f6e67206172726179206c656e677468732e0000006044820152606401610809565b60005b85811015610dfa57610de7878783818110610d5b57610d5b613a60565b9050602002016020810190610d7091906132a9565b868684818110610d8257610d82613a60565b90506020020135858585818110610d9b57610d9b613a60565b9050602002810190610dad9190613a1a565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061251892505050565b5080610df281613a8c565b915050610d3e565b50505050505050565b610e0b6117b7565b60405163b760faf960e01b81523060048201526001600160a01b03919091169063b760faf99034906024016000604051808303818588803b158015610e4f57600080fd5b505af1158015610e63573d6000803e3d6000fd5b5050505050565b610e72612589565b610e7a6117b7565b60405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c2878906044015b600060405180830381600087803b158015610ec757600080fd5b505af1158015610edb573d6000803e3d6000fd5b505050505050565b6000610ef260208501856132a9565b905042610f0560e0860160c08701613b2c565b6001600160801b031611158015610f345750610f28610100850160e08601613b2c565b6001600160801b031642105b610f6a5760405162461bcd60e51b8152602060048201526007602482015266085c195c9a5bd960ca1b6044820152606401610809565b600080610f788686866115f1565b9150915081610fb25760405162461bcd60e51b8152600401610809906020808252600490820152632173696760e01b604082015260600190565b6001610fbc611fd2565b610100880135600090815260079190910160209081526040808320805460ff1916941515949094179093559091610ff891908901908901613b58565b60ff1611156110255760006110136040880160208901613b58565b60ff166001149050610dfa84826125c7565b61102e83610b0d565b156110635760405162461bcd60e51b815260206004820152600560248201526430b236b4b760d91b6044820152606401610809565b6110788361106f611fd2565b6002019061270e565b506040518060600160405280876060013581526020018760800160208101906110a19190613b2c565b6001600160801b031681526020016110bf60c0890160a08a01613b2c565b6001600160801b031690526110d2611fd2565b6001600160a01b03851660009081526005919091016020908152604080832084518155918401519301516001600160801b03908116600160801b02931692909217600190920191909155611148611127611fd2565b6001600160a01b038616600090815260069190910160205260409020612723565b805190915060005b818110156111b25761119f83828151811061116d5761116d613a60565b602002602001015161117d611fd2565b6001600160a01b03891660009081526006919091016020526040902090612730565b506111ab600182613b73565b9050611150565b506111c06040890189613b86565b9050905060005b818110156112415761122e6111df60408b018b613b86565b838181106111ef576111ef613a60565b905060200201602081019061120491906132a9565b61120c611fd2565b6001600160a01b0389166000908152600691909101602052604090209061270e565b5061123a600182613b73565b90506111c7565b5061124b88612745565b846001600160a01b0316836001600160a01b03167ff21d10c26e35863a8df291aca54181ee8c4a3bc8e00246c3f7a5a14b69d826a78a60405161128e9190613c60565b60405180910390a35050505050505050565b6000806112ab611fd2565b6001600160a01b038416600090815260059190910160209081526040918290208251606081018452815481526001909101546001600160801b03808216938301849052600160801b9091041692810192909252909150421080159061131c575080604001516001600160801b031642105b8015610b5b57506000611351611330611fd2565b6001600160a01b038616600090815260069190910160205260409020612018565b119392505050565b60606000611370611368611fd2565b600201612723565b80519091506000805b82811015611401576113a384828151811061139657611396613a60565b60200260200101516112a0565b156113ba57816113b281613a8c565b9250506113ef565b60008482815181106113ce576113ce613a60565b60200260200101906001600160a01b031690816001600160a01b0316815250505b6113fa600182613b73565b9050611379565b50806001600160401b0381111561141a5761141a613084565b60405190808252806020026020018201604052801561145357816020015b611440613010565b8152602001906001900390816114385790505b5093506000805b838110156115985760006001600160a01b031685828151811061147f5761147f613a60565b60200260200101516001600160a01b0316146115865760008582815181106114a9576114a9613a60565b6020026020010151905060006114bd611fd2565b6001600160a01b038316600081815260059290920160209081526040928390208351606081018552815481526001909101546001600160801b0380821683850152600160801b9091041681850152835160a081019094529183529092508101611527611127611fd2565b81526020018260000151815260200182602001516001600160801b0316815260200182604001516001600160801b031681525088858061156690613a8c565b96508151811061157857611578613a60565b602002602001018190525050505b611591600182613b73565b905061145a565b505050505090565b6115a86127f3565b6115e55760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152606401610809565b6115ee81612317565b50565b6000806116076116008661280b565b858561294f565b9050611611611fd2565b6101008601356000908152600791909101602052604090205460ff1615801561163e575061163e81610b0d565b9150935093915050565b6060816001600160401b0381111561166257611662613084565b60405190808252806020026020018201604052801561169557816020015b60608152602001906001900390816116805790505b509050336000805b848110156117ae57811561171c576116fa308787848181106116c1576116c1613a60565b90506020028101906116d39190613a1a565b866040516020016116e693929190613d59565b6040516020818303038152906040526129a1565b84828151811061170c5761170c613a60565b602002602001018190525061179c565b61177e3087878481811061173257611732613a60565b90506020028101906117449190613a1a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506129a192505050565b84828151811061179057611790613a60565b60200260200101819052505b806117a681613a8c565b91505061169d565b50505092915050565b7f036f52c1827dab135f7fd44ca0bddde297e2f659c710e0ec53e975f22b548300546000906001600160a01b031680156117f057919050565b7f000000000000000000000000000000000000000000000000000000000000000091505090565b61181f6117b7565b6001600160a01b0316336001600160a01b03161480611842575061184233610b0d565b61185e5760405162461bcd60e51b815260040161080990613ad4565b611866612436565b610e63848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061251892505050565b6118af612589565b7f036f52c1827dab135f7fd44ca0bddde297e2f659c710e0ec53e975f22b54830080546001600160a01b0319166001600160a01b0392909216919091179055565b60006118fa6117b7565b604051631aab3f0d60e11b8152306004820152600060248201526001600160a01b0391909116906335567e1a90604401602060405180830381865afa158015611947573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196b9190613d7f565b905090565b600061197a6129c6565b5460ff169050600061198a6129c6565b54610100900460ff16905080158080156119a7575060018360ff16105b806119bf5750303b1580156119bf57508260ff166001145b611a225760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610809565b6001611a2c6129c6565b805460ff191660ff929092169190911790558015611a65576001611a4e6129c6565b80549115156101000261ff00199092169190911790555b611aa58686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506129d092505050565b6000805160206141de83398151915255611ac08660016125c7565b8015610edb576000611ad06129c6565b80549115156101000261ff0019909216919091179055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050505050565b60606000611b31611368611fd2565b8051909150806001600160401b03811115611b4e57611b4e613084565b604051908082528060200260200182016040528015611b8757816020015b611b74613010565b815260200190600190039081611b6c5790505b50925060005b81811015611c8d576000838281518110611ba957611ba9613a60565b602002602001015190506000611bbd611fd2565b6001600160a01b038316600081815260059290920160209081526040928390208351606081018552815481526001909101546001600160801b0380821683850152600160801b9091041681850152835160a081019094529183529092508101611c27611127611fd2565b81526020018260000151815260200182602001516001600160801b0316815260200182604001516001600160801b0316815250868481518110611c6c57611c6c613a60565b60200260200101819052505050600181611c869190613b73565b9050611b8d565b50505090565b60607f4bc804ba64359c0e35e5ed5d90ee596ecaa49a3a930ddcb1470ea0dd625da9008054611cc190613d98565b80601f0160208091040260200160405190810160405280929190818152602001828054611ced90613d98565b8015611d3a5780601f10611d0f57610100808354040283529160200191611d3a565b820191906000526020600020905b815481529060010190602001808311611d1d57829003601f168201915b5050505050905090565b606061196b611d51611fd2565b612723565b611d5e613010565b6000611d68611fd2565b6001600160a01b038416600081815260059290920160209081526040928390208351606081018552815481526001909101546001600160801b0380821683850152600160801b9091041681850152835160a081019094529183529092508101611df3611dd2611fd2565b6001600160a01b038716600090815260069190910160205260409020612723565b81526020018260000151815260200182602001516001600160801b0316815260200182604001516001600160801b0316815250915050919050565b7f322cf19c484104d3b1a9c2982ebae869ede3fa5f6c4703ca41b9a48c76ee030090565b60006001600160e01b03198216630271189760e51b148061063a57506301ffc9a760e01b6001600160e01b031983161461063a565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015611ee057507f000000000000000000000000000000000000000000000000000000000000000046145b15611f0a57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6000806000611fbd8585612a03565b91509150611fca81612a48565b509392505050565b7f3181e78fc1b109bc611fd2406150bf06e33faa75f71cba12c3e1fd670f2def0090565b6001600160a01b03811660009081526001830160205260408120541515610b5b565b600061063a825490565b6000610b5b8383612b92565b600060048210156120515760405162461bcd60e51b815260040161080990613dcc565b61205f600460008486613deb565b610b5b91613e15565b600080604483101561208c5760405162461bcd60e51b815260040161080990613dcc565b61209a602460048587613deb565b8101906120a791906132a9565b91506120b7604460248587613deb565b8101906120c49190613e45565b90509250929050565b6060808060648410156120f25760405162461bcd60e51b815260040161080990613dcc565b6120ff8460048188613deb565b81019061210c9190613edd565b919790965090945092505050565b6121226117b7565b6001600160a01b0316336001600160a01b0316146121825760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606401610809565b565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c829052603c812060006122036121c6610140870187613a1a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508693925050611fae9050565b905061220f8186610835565b61221e5760019250505061063a565b6000612228611fd2565b6001600160a01b03929092166000908152600590920160209081526040808420815160608082018452825482526001909201546001600160801b0380821683870152600160801b8204908116928501929092528351928301845295825265ffffffffffff8087169483019490945292831691015260d09290921b6001600160d01b03191660a09290921b65ffffffffffff60a01b169190911795945050505050565b80156115ee57604051600090339060001990849084818181858888f193505050503d8060008114610e63576040519150601f19603f3d011682016040523d82523d6000602084013e610e63565b60007f4bc804ba64359c0e35e5ed5d90ee596ecaa49a3a930ddcb1470ea0dd625da900805461234590613d98565b80601f016020809104026020016040519081016040528092919081815260200182805461237190613d98565b80156123be5780601f10612393576101008083540402835291602001916123be565b820191906000526020600020905b8154815290600101906020018083116123a157829003601f168201915b50505050509050816123ed7f4bc804ba64359c0e35e5ed5d90ee596ecaa49a3a930ddcb1470ea0dd625da90090565b906123f8908261400d565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a16818360405161242a9291906140cc565b60405180910390a15050565b60405163c3c5a54760e01b81523060048201527f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b0382169063c3c5a54790602401602060405180830381865afa15801561249c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124c091906140fa565b6115ee576000805160206141de833981519152546040516320e80fe360e21b815260048101919091526001600160a01b038216906383a03f8c906024015b600060405180830381600087803b158015610e4f57600080fd5b60606000846001600160a01b03168484604051612535919061411c565b60006040518083038185875af1925050503d8060008114612572576040519150601f19603f3d011682016040523d82523d6000602084013e612577565b606091505b509250905080611fca57815160208301fd5b61259233610b0d565b6121825760405162461bcd60e51b815260206004820152600660248201526510b0b236b4b760d11b6044820152606401610809565b6125d18282612bbc565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163b1561270a5780156126a2576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016630b61e12b837f036f52c1827dab135f7fd44ca0bddde297e2f659c710e0ec53e975f22b548300600101546040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610ec757600080fd5b6000805160206141de833981519152546040516301270f4760e71b81526001600160a01b03848116600483015260248201929092527f000000000000000000000000000000000000000000000000000000000000000090911690639387a38090604401610ead565b5050565b6000610b5b836001600160a01b038416612c6b565b60606000610b5b83612cba565b6000610b5b836001600160a01b038416612d16565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163b156115ee576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016630b61e12b6127b160208401846132a9565b6000805160206141de8339815191525460405160e084901b6001600160e01b03191681526001600160a01b0392909216600483015260248201526044016124fe565b60006127fe33610b0d565b8061196b57505030331490565b60607f3fd4a1a1a267c84185e3b7eecd57c68783c0581d538b9d6e5f23e4670497c1e961283b60208401846132a9565b61284b6040850160208601613b58565b6128586040860186613b86565b604051602001612869929190614138565b60408051601f198184030181529190528051602090910120606086013561289660a0880160808901613b2c565b6128a660c0890160a08a01613b2c565b6128b660e08a0160c08b01613b2c565b6128c76101008b0160e08c01613b2c565b60408051602081019a909a526001600160a01b039098169789019790975260ff9095166060880152608087019390935260a08601919091526001600160801b0390811660c086015290811660e0850152908116610100848101919091529116610120830152830135610140820152610160016040516020818303038152906040529050919050565b60006106ed83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250508751602089012061299b92509050612e09565b90611fae565b6060610b5b83836040518060600160405280602781526020016141fe60279139612e36565b600061196b611e2e565b600082826040516020016129e592919061417a565b60405160208183030381529060405280519060200120905092915050565b6000808251604103612a395760208301516040840151606085015160001a612a2d87828585612eae565b94509450505050612a41565b506000905060025b9250929050565b6000816004811115612a5c57612a5c61419e565b03612a645750565b6001816004811115612a7857612a7861419e565b03612ac55760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610809565b6002816004811115612ad957612ad961419e565b03612b265760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610809565b6003816004811115612b3a57612b3a61419e565b036115ee5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610809565b6000826000018281548110612ba957612ba9613a60565b9060005260206000200154905092915050565b80612bc5611fd2565b6001600160a01b038416600090815260049190910160205260409020805460ff19169115159190911790558015612c0e57612c0882612c02611fd2565b9061270e565b50612c22565b612c2082612c1a611fd2565b90612730565b505b816001600160a01b03167f235bc17e7930760029e9f4d860a2a8089976de5b381cf8380fc11c1d88a1113382604051612c5f911515815260200190565b60405180910390a25050565b6000818152600183016020526040812054612cb25750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561063a565b50600061063a565b606081600001805480602002602001604051908101604052809291908181526020018280548015612d0a57602002820191906000526020600020905b815481526020019060010190808311612cf6575b50505050509050919050565b60008181526001830160205260408120548015612dff576000612d3a6001836141b4565b8554909150600090612d4e906001906141b4565b9050818114612db3576000866000018281548110612d6e57612d6e613a60565b9060005260206000200154905080876000018481548110612d9157612d91613a60565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080612dc457612dc46141c7565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061063a565b600091505061063a565b600061063a612e16611e87565b8360405161190160f01b8152600281019290925260228201526042902090565b6060600080856001600160a01b031685604051612e53919061411c565b600060405180830381855af49150503d8060008114612e8e576040519150601f19603f3d011682016040523d82523d6000602084013e612e93565b606091505b5091509150612ea486838387612f72565b9695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115612ee55750600090506003612f69565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612f39573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116612f6257600060019250925050612f69565b9150600090505b94509492505050565b60608315612fe1578251600003612fda576001600160a01b0385163b612fda5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610809565b50816106ed565b6106ed8383815115612ff65781518083602001fd5b8060405162461bcd60e51b8152600401610809919061393f565b6040518060a0016040528060006001600160a01b03168152602001606081526020016000815260200160006001600160801b0316815260200160006001600160801b031681525090565b60006020828403121561306c57600080fd5b81356001600160e01b031981168114610b5b57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156130c2576130c2613084565b604052919050565b60006001600160401b038311156130e3576130e3613084565b6130f6601f8401601f191660200161309a565b905082815283838301111561310a57600080fd5b828260208301376000602084830101529392505050565b600082601f83011261313257600080fd5b610b5b838335602085016130ca565b60006020828403121561315357600080fd5b81356001600160401b0381111561316957600080fd5b6106ed84828501613121565b6001600160a01b03811681146115ee57600080fd5b803561319581613175565b919050565b600080600080608085870312156131b057600080fd5b84356131bb81613175565b935060208501356131cb81613175565b92506040850135915060608501356001600160401b038111156131ed57600080fd5b6131f987828801613121565b91505092959194509250565b6000806040838503121561321857600080fd5b8235915060208301356001600160401b0381111561323557600080fd5b61324185828601613121565b9150509250929050565b6000610160828403121561325e57600080fd5b50919050565b6000806040838503121561327757600080fd5b823561328281613175565b915060208301356001600160401b0381111561329d57600080fd5b6132418582860161324b565b6000602082840312156132bb57600080fd5b8135610b5b81613175565b6000806000606084860312156132db57600080fd5b83356001600160401b038111156132f157600080fd5b6132fd8682870161324b565b9660208601359650604090950135949350505050565b60008083601f84011261332557600080fd5b5081356001600160401b0381111561333c57600080fd5b602083019150836020828501011115612a4157600080fd5b6000806000806040858703121561336a57600080fd5b84356001600160401b038082111561338157600080fd5b61338d88838901613313565b909650945060208701359150808211156133a657600080fd5b506133b387828801613313565b95989497509550505050565b60008083601f8401126133d157600080fd5b5081356001600160401b038111156133e857600080fd5b6020830191508360208260051b8501011115612a4157600080fd5b6000806000806000806060878903121561341c57600080fd5b86356001600160401b038082111561343357600080fd5b61343f8a838b016133bf565b9098509650602089013591508082111561345857600080fd5b6134648a838b016133bf565b9096509450604089013591508082111561347d57600080fd5b5061348a89828a016133bf565b979a9699509497509295939492505050565b600080604083850312156134af57600080fd5b82356134ba81613175565b946020939093013593505050565b6000806000604084860312156134dd57600080fd5b83356001600160401b03808211156134f457600080fd5b90850190610120828803121561350957600080fd5b9093506020850135908082111561351f57600080fd5b5061352c86828701613313565b9497909650939450505050565b80516001600160a01b03908116835260208083015160a082860181905281519086018190526000939183019290849060c08801905b808310156135905785518516825294830194600192909201919083019061356e565b5060408701516040890152606087015194506135b760608901866001600160801b03169052565b608087015194506135d360808901866001600160801b03169052565b979650505050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561363357603f19888603018452613621858351613539565b94509285019290850190600101613605565b5092979650505050505050565b60006020828403121561365257600080fd5b81356001600160401b0381111561366857600080fd5b8201601f8101841361367957600080fd5b6106ed848235602084016130ca565b6000806020838503121561369b57600080fd5b82356001600160401b038111156136b157600080fd5b6136bd858286016133bf565b90969095509350505050565b60005b838110156136e45781810151838201526020016136cc565b50506000910152565b600081518084526137058160208601602086016136c9565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561363357603f1988860301845261375c8583516136ed565b94509285019290850190600101613740565b6000806000806060858703121561378457600080fd5b843561378f81613175565b93506020850135925060408501356001600160401b038111156137b157600080fd5b6133b387828801613313565b60006001600160401b038211156137d6576137d6613084565b5060051b60200190565b600082601f8301126137f157600080fd5b81356020613806613801836137bd565b61309a565b82815260059290921b8401810191818101908684111561382557600080fd5b8286015b848110156138405780358352918301918301613829565b509695505050505050565b600080600080600060a0868803121561386357600080fd5b853561386e81613175565b9450602086013561387e81613175565b935060408601356001600160401b038082111561389a57600080fd5b6138a689838a016137e0565b945060608801359150808211156138bc57600080fd5b6138c889838a016137e0565b935060808801359150808211156138de57600080fd5b506138eb88828901613121565b9150509295509295909350565b60008060006040848603121561390d57600080fd5b833561391881613175565b925060208401356001600160401b0381111561393357600080fd5b61352c86828701613313565b602081526000610b5b60208301846136ed565b6020808252825182820181905260009190848201906040850190845b818110156139935783516001600160a01b03168352928401929184019160010161396e565b50909695505050505050565b602081526000610b5b6020830184613539565b600080600080600060a086880312156139ca57600080fd5b85356139d581613175565b945060208601356139e581613175565b9350604086013592506060860135915060808601356001600160401b03811115613a0e57600080fd5b6138eb88828901613121565b6000808335601e19843603018112613a3157600080fd5b8301803591506001600160401b03821115613a4b57600080fd5b602001915036819003821315612a4157600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201613a9e57613a9e613a76565b5060010190565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60208082526021908201527f4163636f756e743a206e6f742061646d696e206f7220456e747279506f696e746040820152601760f91b606082015260800190565b80356001600160801b038116811461319557600080fd5b600060208284031215613b3e57600080fd5b610b5b82613b15565b803560ff8116811461319557600080fd5b600060208284031215613b6a57600080fd5b610b5b82613b47565b8082018082111561063a5761063a613a76565b6000808335601e19843603018112613b9d57600080fd5b8301803591506001600160401b03821115613bb757600080fd5b6020019150600581901b3603821315612a4157600080fd5b6000808335601e19843603018112613be657600080fd5b83016020810192503590506001600160401b03811115613c0557600080fd5b8060051b3603821315612a4157600080fd5b8183526000602080850194508260005b85811015613c55578135613c3a81613175565b6001600160a01b031687529582019590820190600101613c27565b509495945050505050565b60208152613c8160208201613c748461318a565b6001600160a01b03169052565b6000613c8f60208401613b47565b60ff8116604084015250613ca66040840184613bcf565b610120806060860152613cbe61014086018385613c17565b925060608601356080860152613cd660808701613b15565b6001600160801b03811660a08701529150613cf360a08701613b15565b6001600160801b03811660c08701529150613d1060c08701613b15565b6001600160801b03811660e08701529150613d2d60e08701613b15565b9150610100613d46818701846001600160801b03169052565b9590950135939094019290925250919050565b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b600060208284031215613d9157600080fd5b5051919050565b600181811c90821680613dac57607f821691505b60208210810361325e57634e487b7160e01b600052602260045260246000fd5b602080825260059082015264214461746160d81b604082015260600190565b60008085851115613dfb57600080fd5b83861115613e0857600080fd5b5050820193919092039150565b6001600160e01b03198135818116916004851015613e3d5780818660040360031b1b83161692505b505092915050565b600060208284031215613e5757600080fd5b5035919050565b600082601f830112613e6f57600080fd5b81356020613e7f613801836137bd565b82815260059290921b84018101918181019086841115613e9e57600080fd5b8286015b848110156138405780356001600160401b03811115613ec15760008081fd5b613ecf8986838b0101613121565b845250918301918301613ea2565b600080600060608486031215613ef257600080fd5b83356001600160401b0380821115613f0957600080fd5b818601915086601f830112613f1d57600080fd5b81356020613f2d613801836137bd565b82815260059290921b8401810191818101908a841115613f4c57600080fd5b948201945b83861015613f73578535613f6481613175565b82529482019490820190613f51565b97505087013592505080821115613f8957600080fd5b613f95878388016137e0565b93506040860135915080821115613fab57600080fd5b50613fb886828701613e5e565b9150509250925092565b601f82111561400857600081815260208120601f850160051c81016020861015613fe95750805b601f850160051c820191505b81811015610edb57828155600101613ff5565b505050565b81516001600160401b0381111561402657614026613084565b61403a816140348454613d98565b84613fc2565b602080601f83116001811461406f57600084156140575750858301515b600019600386901b1c1916600185901b178555610edb565b600085815260208120601f198616915b8281101561409e5788860151825594840194600190910190840161407f565b50858210156140bc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6040815260006140df60408301856136ed565b82810360208401526140f181856136ed565b95945050505050565b60006020828403121561410c57600080fd5b81518015158114610b5b57600080fd5b6000825161412e8184602087016136c9565b9190910192915050565b60008184825b8581101561416f57813561415181613175565b6001600160a01b03168352602092830192919091019060010161413e565b509095945050505050565b6001600160a01b03831681526040602082018190526000906106ed908301846136ed565b634e487b7160e01b600052602160045260246000fd5b8181038181111561063a5761063a613a76565b634e487b7160e01b600052603160045260246000fdfe036f52c1827dab135f7fd44ca0bddde297e2f659c710e0ec53e975f22b548301416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a9270ecd200ea2db7f4c96b6e6f161b55d8e6c151fd774b77cccd511e070b16164736f6c63430008110033",
  deployedBytecode:
    "0x6080604052600436106101c65760003560e01c8063938e3d7b116100f7578063c45a015511610095578063e8a3d48511610064578063e8a3d4851461055d578063e9523c971461057f578063f15d424e146105a1578063f23a6e61146105ce57600080fd5b8063c45a0155146104df578063d087d28814610513578063d1f5789414610528578063d42f2f351461054857600080fd5b8063b0d691fe116100d1578063b0d691fe14610446578063b61d27f614610473578063b76464d514610493578063bc197c81146104b357600080fd5b8063938e3d7b146103ba578063a9082d84146103da578063ac9650d81461041957600080fd5b80633ffbd47f116101645780634d44560d1161013e5780634d44560d146103385780635892e236146103585780637dff5a79146103785780638b52d7231461039857600080fd5b80633ffbd47f146102ee57806347e1da2a146103105780634a58db191461033057600080fd5b80631626ba7e116101a05780631626ba7e1461026e5780631dd756c51461028e57806324d7806c146102ae5780633a871cdd146102ce57600080fd5b806301ffc9a7146101d25780630a1028c414610207578063150b7a021461023557600080fd5b366101cd57005b600080fd5b3480156101de57600080fd5b506101f26101ed36600461305a565b6105fa565b60405190151581526020015b60405180910390f35b34801561021357600080fd5b50610227610222366004613141565b610640565b6040519081526020016101fe565b34801561024157600080fd5b5061025561025036600461319a565b6106e4565b6040516001600160e01b031990911681526020016101fe565b34801561027a57600080fd5b50610255610289366004613205565b6106f5565b34801561029a57600080fd5b506101f26102a9366004613264565b610835565b3480156102ba57600080fd5b506101f26102c93660046132a9565b610b0d565b3480156102da57600080fd5b506102276102e93660046132c6565b610b3c565b3480156102fa57600080fd5b5061030e610309366004613354565b610b62565b005b34801561031c57600080fd5b5061030e61032b366004613403565b610c92565b61030e610e03565b34801561034457600080fd5b5061030e61035336600461349c565b610e6a565b34801561036457600080fd5b5061030e6103733660046134c8565b610ee3565b34801561038457600080fd5b506101f26103933660046132a9565b6112a0565b3480156103a457600080fd5b506103ad611359565b6040516101fe91906135de565b3480156103c657600080fd5b5061030e6103d5366004613640565b6115a0565b3480156103e657600080fd5b506103fa6103f53660046134c8565b6115f1565b6040805192151583526001600160a01b039091166020830152016101fe565b34801561042557600080fd5b50610439610434366004613688565b611648565b6040516101fe9190613719565b34801561045257600080fd5b5061045b6117b7565b6040516001600160a01b0390911681526020016101fe565b34801561047f57600080fd5b5061030e61048e36600461376e565b611817565b34801561049f57600080fd5b5061030e6104ae3660046132a9565b6118a7565b3480156104bf57600080fd5b506102556104ce36600461384b565b63bc197c8160e01b95945050505050565b3480156104eb57600080fd5b5061045b7f000000000000000000000000000000000000000000000000000000000000000081565b34801561051f57600080fd5b506102276118f0565b34801561053457600080fd5b5061030e6105433660046138f8565b611970565b34801561055457600080fd5b506103ad611b22565b34801561056957600080fd5b50610572611c93565b6040516101fe919061393f565b34801561058b57600080fd5b50610594611d44565b6040516101fe9190613952565b3480156105ad57600080fd5b506105c16105bc3660046132a9565b611d56565b6040516101fe919061399f565b3480156105da57600080fd5b506102556105e93660046139b2565b63f23a6e6160e01b95945050505050565b60006001600160e01b03198216630271189760e51b148061062b57506001600160e01b03198216630a85bd0160e11b145b8061063a575061063a82611e52565b92915050565b6000807f82cac545155fcbf147f2a9013809613677ac7d65498556e6d19ce43bcbf6c2848380519060200120604051602001610686929190918252602082015260400190565b6040516020818303038152906040528051906020012090506106a6611e87565b60405161190160f01b602082015260228101919091526042810182905260620160405160208183030381529060405280519060200120915050919050565b630a85bd0160e11b5b949350505050565b6000806107228460405160200161070e91815260200190565b604051602081830303815290604052610640565b905060006107308285611fae565b905061073b81610b0d565b156107525750630b135d3f60e11b915061063a9050565b33600061075d611fd2565b6001600160a01b03841660009081526006919091016020526040902090506107858183611ff6565b806107b5575061079481612018565b60011480156107b5575060006107aa8282612022565b6001600160a01b0316145b6108125760405162461bcd60e51b8152602060048201526024808201527f4163636f756e743a2063616c6c6572206e6f7420617070726f7665642074617260448201526333b2ba1760e11b60648201526084015b60405180910390fd5b61081b836112a0565b1561082b57630b135d3f60e11b94505b5050505092915050565b600061083f611fd2565b6001600160a01b0384166000908152600491909101602052604090205460ff161561086c5750600161063a565b6000610876611fd2565b6001600160a01b0385166000908152600591909101602090815260408083208151606081018352815481526001909101546001600160801b0380821694830194909452600160801b90049092169082015291506108d1611fd2565b6006016000866001600160a01b03166001600160a01b0316815260200190815260200160002090504282602001516001600160801b03161180610921575081604001516001600160801b03164210155b80610932575061093081612018565b155b156109425760009250505061063a565b60006109596109546060870187613a1a565b61202e565b9050600061096683612018565b60011480156109875750600061097c8482612022565b6001600160a01b0316145b90506324f16c0560e11b6001600160e01b03198316016109fe576000806109b96109b460608a018a613a1a565b612068565b91509150826109df576109cc8583611ff6565b6109df576000965050505050505061063a565b85518111156109f7576000965050505050505061063a565b5050610b00565b635c0f12eb60e11b6001600160e01b0319831601610af357600080610a2e610a2960608a018a613a1a565b6120cd565b509150915082610a985760005b8251811015610a9657610a70838281518110610a5957610a59613a60565b602002602001015187611ff690919063ffffffff16565b610a8457600097505050505050505061063a565b80610a8e81613a8c565b915050610a3b565b505b60005b8251811015610aeb57818181518110610ab657610ab6613a60565b602002602001015187600001511015610ad957600097505050505050505061063a565b80610ae381613a8c565b915050610a9b565b505050610b00565b600094505050505061063a565b5060019695505050505050565b6000610b17611fd2565b6001600160a01b03909216600090815260049290920160205250604090205460ff1690565b6000610b4661211a565b610b508484612184565b9050610b5b826122ca565b9392505050565b333014610bcd5760405162461bcd60e51b815260206004820152603360248201527f43726564656e7469616c4163636f756e743a206f6e6c79206163636f756e742060448201527234ba39b2b6331031b0b7103932b3b4b9ba32b960691b6064820152608401610809565b604051633203996360e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633203996390610c1b9087908790600401613aa5565b600060405180830381600087803b158015610c3557600080fd5b505af1158015610c49573d6000803e3d6000fd5b50505050610c8c82828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061231792505050565b50505050565b610c9a6117b7565b6001600160a01b0316336001600160a01b03161480610cbd5750610cbd33610b0d565b610cd95760405162461bcd60e51b815260040161080990613ad4565b610ce1612436565b8481148015610cef57508483145b610d3b5760405162461bcd60e51b815260206004820152601d60248201527f4163636f756e743a2077726f6e67206172726179206c656e677468732e0000006044820152606401610809565b60005b85811015610dfa57610de7878783818110610d5b57610d5b613a60565b9050602002016020810190610d7091906132a9565b868684818110610d8257610d82613a60565b90506020020135858585818110610d9b57610d9b613a60565b9050602002810190610dad9190613a1a565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061251892505050565b5080610df281613a8c565b915050610d3e565b50505050505050565b610e0b6117b7565b60405163b760faf960e01b81523060048201526001600160a01b03919091169063b760faf99034906024016000604051808303818588803b158015610e4f57600080fd5b505af1158015610e63573d6000803e3d6000fd5b5050505050565b610e72612589565b610e7a6117b7565b60405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c2878906044015b600060405180830381600087803b158015610ec757600080fd5b505af1158015610edb573d6000803e3d6000fd5b505050505050565b6000610ef260208501856132a9565b905042610f0560e0860160c08701613b2c565b6001600160801b031611158015610f345750610f28610100850160e08601613b2c565b6001600160801b031642105b610f6a5760405162461bcd60e51b8152602060048201526007602482015266085c195c9a5bd960ca1b6044820152606401610809565b600080610f788686866115f1565b9150915081610fb25760405162461bcd60e51b8152600401610809906020808252600490820152632173696760e01b604082015260600190565b6001610fbc611fd2565b610100880135600090815260079190910160209081526040808320805460ff1916941515949094179093559091610ff891908901908901613b58565b60ff1611156110255760006110136040880160208901613b58565b60ff166001149050610dfa84826125c7565b61102e83610b0d565b156110635760405162461bcd60e51b815260206004820152600560248201526430b236b4b760d91b6044820152606401610809565b6110788361106f611fd2565b6002019061270e565b506040518060600160405280876060013581526020018760800160208101906110a19190613b2c565b6001600160801b031681526020016110bf60c0890160a08a01613b2c565b6001600160801b031690526110d2611fd2565b6001600160a01b03851660009081526005919091016020908152604080832084518155918401519301516001600160801b03908116600160801b02931692909217600190920191909155611148611127611fd2565b6001600160a01b038616600090815260069190910160205260409020612723565b805190915060005b818110156111b25761119f83828151811061116d5761116d613a60565b602002602001015161117d611fd2565b6001600160a01b03891660009081526006919091016020526040902090612730565b506111ab600182613b73565b9050611150565b506111c06040890189613b86565b9050905060005b818110156112415761122e6111df60408b018b613b86565b838181106111ef576111ef613a60565b905060200201602081019061120491906132a9565b61120c611fd2565b6001600160a01b0389166000908152600691909101602052604090209061270e565b5061123a600182613b73565b90506111c7565b5061124b88612745565b846001600160a01b0316836001600160a01b03167ff21d10c26e35863a8df291aca54181ee8c4a3bc8e00246c3f7a5a14b69d826a78a60405161128e9190613c60565b60405180910390a35050505050505050565b6000806112ab611fd2565b6001600160a01b038416600090815260059190910160209081526040918290208251606081018452815481526001909101546001600160801b03808216938301849052600160801b9091041692810192909252909150421080159061131c575080604001516001600160801b031642105b8015610b5b57506000611351611330611fd2565b6001600160a01b038616600090815260069190910160205260409020612018565b119392505050565b60606000611370611368611fd2565b600201612723565b80519091506000805b82811015611401576113a384828151811061139657611396613a60565b60200260200101516112a0565b156113ba57816113b281613a8c565b9250506113ef565b60008482815181106113ce576113ce613a60565b60200260200101906001600160a01b031690816001600160a01b0316815250505b6113fa600182613b73565b9050611379565b50806001600160401b0381111561141a5761141a613084565b60405190808252806020026020018201604052801561145357816020015b611440613010565b8152602001906001900390816114385790505b5093506000805b838110156115985760006001600160a01b031685828151811061147f5761147f613a60565b60200260200101516001600160a01b0316146115865760008582815181106114a9576114a9613a60565b6020026020010151905060006114bd611fd2565b6001600160a01b038316600081815260059290920160209081526040928390208351606081018552815481526001909101546001600160801b0380821683850152600160801b9091041681850152835160a081019094529183529092508101611527611127611fd2565b81526020018260000151815260200182602001516001600160801b0316815260200182604001516001600160801b031681525088858061156690613a8c565b96508151811061157857611578613a60565b602002602001018190525050505b611591600182613b73565b905061145a565b505050505090565b6115a86127f3565b6115e55760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152606401610809565b6115ee81612317565b50565b6000806116076116008661280b565b858561294f565b9050611611611fd2565b6101008601356000908152600791909101602052604090205460ff1615801561163e575061163e81610b0d565b9150935093915050565b6060816001600160401b0381111561166257611662613084565b60405190808252806020026020018201604052801561169557816020015b60608152602001906001900390816116805790505b509050336000805b848110156117ae57811561171c576116fa308787848181106116c1576116c1613a60565b90506020028101906116d39190613a1a565b866040516020016116e693929190613d59565b6040516020818303038152906040526129a1565b84828151811061170c5761170c613a60565b602002602001018190525061179c565b61177e3087878481811061173257611732613a60565b90506020028101906117449190613a1a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506129a192505050565b84828151811061179057611790613a60565b60200260200101819052505b806117a681613a8c565b91505061169d565b50505092915050565b7f036f52c1827dab135f7fd44ca0bddde297e2f659c710e0ec53e975f22b548300546000906001600160a01b031680156117f057919050565b7f000000000000000000000000000000000000000000000000000000000000000091505090565b61181f6117b7565b6001600160a01b0316336001600160a01b03161480611842575061184233610b0d565b61185e5760405162461bcd60e51b815260040161080990613ad4565b611866612436565b610e63848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061251892505050565b6118af612589565b7f036f52c1827dab135f7fd44ca0bddde297e2f659c710e0ec53e975f22b54830080546001600160a01b0319166001600160a01b0392909216919091179055565b60006118fa6117b7565b604051631aab3f0d60e11b8152306004820152600060248201526001600160a01b0391909116906335567e1a90604401602060405180830381865afa158015611947573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196b9190613d7f565b905090565b600061197a6129c6565b5460ff169050600061198a6129c6565b54610100900460ff16905080158080156119a7575060018360ff16105b806119bf5750303b1580156119bf57508260ff166001145b611a225760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610809565b6001611a2c6129c6565b805460ff191660ff929092169190911790558015611a65576001611a4e6129c6565b80549115156101000261ff00199092169190911790555b611aa58686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506129d092505050565b6000805160206141de83398151915255611ac08660016125c7565b8015610edb576000611ad06129c6565b80549115156101000261ff0019909216919091179055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050505050565b60606000611b31611368611fd2565b8051909150806001600160401b03811115611b4e57611b4e613084565b604051908082528060200260200182016040528015611b8757816020015b611b74613010565b815260200190600190039081611b6c5790505b50925060005b81811015611c8d576000838281518110611ba957611ba9613a60565b602002602001015190506000611bbd611fd2565b6001600160a01b038316600081815260059290920160209081526040928390208351606081018552815481526001909101546001600160801b0380821683850152600160801b9091041681850152835160a081019094529183529092508101611c27611127611fd2565b81526020018260000151815260200182602001516001600160801b0316815260200182604001516001600160801b0316815250868481518110611c6c57611c6c613a60565b60200260200101819052505050600181611c869190613b73565b9050611b8d565b50505090565b60607f4bc804ba64359c0e35e5ed5d90ee596ecaa49a3a930ddcb1470ea0dd625da9008054611cc190613d98565b80601f0160208091040260200160405190810160405280929190818152602001828054611ced90613d98565b8015611d3a5780601f10611d0f57610100808354040283529160200191611d3a565b820191906000526020600020905b815481529060010190602001808311611d1d57829003601f168201915b5050505050905090565b606061196b611d51611fd2565b612723565b611d5e613010565b6000611d68611fd2565b6001600160a01b038416600081815260059290920160209081526040928390208351606081018552815481526001909101546001600160801b0380821683850152600160801b9091041681850152835160a081019094529183529092508101611df3611dd2611fd2565b6001600160a01b038716600090815260069190910160205260409020612723565b81526020018260000151815260200182602001516001600160801b0316815260200182604001516001600160801b0316815250915050919050565b7f322cf19c484104d3b1a9c2982ebae869ede3fa5f6c4703ca41b9a48c76ee030090565b60006001600160e01b03198216630271189760e51b148061063a57506301ffc9a760e01b6001600160e01b031983161461063a565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015611ee057507f000000000000000000000000000000000000000000000000000000000000000046145b15611f0a57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6000806000611fbd8585612a03565b91509150611fca81612a48565b509392505050565b7f3181e78fc1b109bc611fd2406150bf06e33faa75f71cba12c3e1fd670f2def0090565b6001600160a01b03811660009081526001830160205260408120541515610b5b565b600061063a825490565b6000610b5b8383612b92565b600060048210156120515760405162461bcd60e51b815260040161080990613dcc565b61205f600460008486613deb565b610b5b91613e15565b600080604483101561208c5760405162461bcd60e51b815260040161080990613dcc565b61209a602460048587613deb565b8101906120a791906132a9565b91506120b7604460248587613deb565b8101906120c49190613e45565b90509250929050565b6060808060648410156120f25760405162461bcd60e51b815260040161080990613dcc565b6120ff8460048188613deb565b81019061210c9190613edd565b919790965090945092505050565b6121226117b7565b6001600160a01b0316336001600160a01b0316146121825760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606401610809565b565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c829052603c812060006122036121c6610140870187613a1a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508693925050611fae9050565b905061220f8186610835565b61221e5760019250505061063a565b6000612228611fd2565b6001600160a01b03929092166000908152600590920160209081526040808420815160608082018452825482526001909201546001600160801b0380821683870152600160801b8204908116928501929092528351928301845295825265ffffffffffff8087169483019490945292831691015260d09290921b6001600160d01b03191660a09290921b65ffffffffffff60a01b169190911795945050505050565b80156115ee57604051600090339060001990849084818181858888f193505050503d8060008114610e63576040519150601f19603f3d011682016040523d82523d6000602084013e610e63565b60007f4bc804ba64359c0e35e5ed5d90ee596ecaa49a3a930ddcb1470ea0dd625da900805461234590613d98565b80601f016020809104026020016040519081016040528092919081815260200182805461237190613d98565b80156123be5780601f10612393576101008083540402835291602001916123be565b820191906000526020600020905b8154815290600101906020018083116123a157829003601f168201915b50505050509050816123ed7f4bc804ba64359c0e35e5ed5d90ee596ecaa49a3a930ddcb1470ea0dd625da90090565b906123f8908261400d565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a16818360405161242a9291906140cc565b60405180910390a15050565b60405163c3c5a54760e01b81523060048201527f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b0382169063c3c5a54790602401602060405180830381865afa15801561249c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124c091906140fa565b6115ee576000805160206141de833981519152546040516320e80fe360e21b815260048101919091526001600160a01b038216906383a03f8c906024015b600060405180830381600087803b158015610e4f57600080fd5b60606000846001600160a01b03168484604051612535919061411c565b60006040518083038185875af1925050503d8060008114612572576040519150601f19603f3d011682016040523d82523d6000602084013e612577565b606091505b509250905080611fca57815160208301fd5b61259233610b0d565b6121825760405162461bcd60e51b815260206004820152600660248201526510b0b236b4b760d11b6044820152606401610809565b6125d18282612bbc565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163b1561270a5780156126a2576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016630b61e12b837f036f52c1827dab135f7fd44ca0bddde297e2f659c710e0ec53e975f22b548300600101546040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610ec757600080fd5b6000805160206141de833981519152546040516301270f4760e71b81526001600160a01b03848116600483015260248201929092527f000000000000000000000000000000000000000000000000000000000000000090911690639387a38090604401610ead565b5050565b6000610b5b836001600160a01b038416612c6b565b60606000610b5b83612cba565b6000610b5b836001600160a01b038416612d16565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163b156115ee576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016630b61e12b6127b160208401846132a9565b6000805160206141de8339815191525460405160e084901b6001600160e01b03191681526001600160a01b0392909216600483015260248201526044016124fe565b60006127fe33610b0d565b8061196b57505030331490565b60607f3fd4a1a1a267c84185e3b7eecd57c68783c0581d538b9d6e5f23e4670497c1e961283b60208401846132a9565b61284b6040850160208601613b58565b6128586040860186613b86565b604051602001612869929190614138565b60408051601f198184030181529190528051602090910120606086013561289660a0880160808901613b2c565b6128a660c0890160a08a01613b2c565b6128b660e08a0160c08b01613b2c565b6128c76101008b0160e08c01613b2c565b60408051602081019a909a526001600160a01b039098169789019790975260ff9095166060880152608087019390935260a08601919091526001600160801b0390811660c086015290811660e0850152908116610100848101919091529116610120830152830135610140820152610160016040516020818303038152906040529050919050565b60006106ed83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250508751602089012061299b92509050612e09565b90611fae565b6060610b5b83836040518060600160405280602781526020016141fe60279139612e36565b600061196b611e2e565b600082826040516020016129e592919061417a565b60405160208183030381529060405280519060200120905092915050565b6000808251604103612a395760208301516040840151606085015160001a612a2d87828585612eae565b94509450505050612a41565b506000905060025b9250929050565b6000816004811115612a5c57612a5c61419e565b03612a645750565b6001816004811115612a7857612a7861419e565b03612ac55760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610809565b6002816004811115612ad957612ad961419e565b03612b265760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610809565b6003816004811115612b3a57612b3a61419e565b036115ee5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610809565b6000826000018281548110612ba957612ba9613a60565b9060005260206000200154905092915050565b80612bc5611fd2565b6001600160a01b038416600090815260049190910160205260409020805460ff19169115159190911790558015612c0e57612c0882612c02611fd2565b9061270e565b50612c22565b612c2082612c1a611fd2565b90612730565b505b816001600160a01b03167f235bc17e7930760029e9f4d860a2a8089976de5b381cf8380fc11c1d88a1113382604051612c5f911515815260200190565b60405180910390a25050565b6000818152600183016020526040812054612cb25750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561063a565b50600061063a565b606081600001805480602002602001604051908101604052809291908181526020018280548015612d0a57602002820191906000526020600020905b815481526020019060010190808311612cf6575b50505050509050919050565b60008181526001830160205260408120548015612dff576000612d3a6001836141b4565b8554909150600090612d4e906001906141b4565b9050818114612db3576000866000018281548110612d6e57612d6e613a60565b9060005260206000200154905080876000018481548110612d9157612d91613a60565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080612dc457612dc46141c7565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061063a565b600091505061063a565b600061063a612e16611e87565b8360405161190160f01b8152600281019290925260228201526042902090565b6060600080856001600160a01b031685604051612e53919061411c565b600060405180830381855af49150503d8060008114612e8e576040519150601f19603f3d011682016040523d82523d6000602084013e612e93565b606091505b5091509150612ea486838387612f72565b9695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115612ee55750600090506003612f69565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612f39573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116612f6257600060019250925050612f69565b9150600090505b94509492505050565b60608315612fe1578251600003612fda576001600160a01b0385163b612fda5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610809565b50816106ed565b6106ed8383815115612ff65781518083602001fd5b8060405162461bcd60e51b8152600401610809919061393f565b6040518060a0016040528060006001600160a01b03168152602001606081526020016000815260200160006001600160801b0316815260200160006001600160801b031681525090565b60006020828403121561306c57600080fd5b81356001600160e01b031981168114610b5b57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156130c2576130c2613084565b604052919050565b60006001600160401b038311156130e3576130e3613084565b6130f6601f8401601f191660200161309a565b905082815283838301111561310a57600080fd5b828260208301376000602084830101529392505050565b600082601f83011261313257600080fd5b610b5b838335602085016130ca565b60006020828403121561315357600080fd5b81356001600160401b0381111561316957600080fd5b6106ed84828501613121565b6001600160a01b03811681146115ee57600080fd5b803561319581613175565b919050565b600080600080608085870312156131b057600080fd5b84356131bb81613175565b935060208501356131cb81613175565b92506040850135915060608501356001600160401b038111156131ed57600080fd5b6131f987828801613121565b91505092959194509250565b6000806040838503121561321857600080fd5b8235915060208301356001600160401b0381111561323557600080fd5b61324185828601613121565b9150509250929050565b6000610160828403121561325e57600080fd5b50919050565b6000806040838503121561327757600080fd5b823561328281613175565b915060208301356001600160401b0381111561329d57600080fd5b6132418582860161324b565b6000602082840312156132bb57600080fd5b8135610b5b81613175565b6000806000606084860312156132db57600080fd5b83356001600160401b038111156132f157600080fd5b6132fd8682870161324b565b9660208601359650604090950135949350505050565b60008083601f84011261332557600080fd5b5081356001600160401b0381111561333c57600080fd5b602083019150836020828501011115612a4157600080fd5b6000806000806040858703121561336a57600080fd5b84356001600160401b038082111561338157600080fd5b61338d88838901613313565b909650945060208701359150808211156133a657600080fd5b506133b387828801613313565b95989497509550505050565b60008083601f8401126133d157600080fd5b5081356001600160401b038111156133e857600080fd5b6020830191508360208260051b8501011115612a4157600080fd5b6000806000806000806060878903121561341c57600080fd5b86356001600160401b038082111561343357600080fd5b61343f8a838b016133bf565b9098509650602089013591508082111561345857600080fd5b6134648a838b016133bf565b9096509450604089013591508082111561347d57600080fd5b5061348a89828a016133bf565b979a9699509497509295939492505050565b600080604083850312156134af57600080fd5b82356134ba81613175565b946020939093013593505050565b6000806000604084860312156134dd57600080fd5b83356001600160401b03808211156134f457600080fd5b90850190610120828803121561350957600080fd5b9093506020850135908082111561351f57600080fd5b5061352c86828701613313565b9497909650939450505050565b80516001600160a01b03908116835260208083015160a082860181905281519086018190526000939183019290849060c08801905b808310156135905785518516825294830194600192909201919083019061356e565b5060408701516040890152606087015194506135b760608901866001600160801b03169052565b608087015194506135d360808901866001600160801b03169052565b979650505050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561363357603f19888603018452613621858351613539565b94509285019290850190600101613605565b5092979650505050505050565b60006020828403121561365257600080fd5b81356001600160401b0381111561366857600080fd5b8201601f8101841361367957600080fd5b6106ed848235602084016130ca565b6000806020838503121561369b57600080fd5b82356001600160401b038111156136b157600080fd5b6136bd858286016133bf565b90969095509350505050565b60005b838110156136e45781810151838201526020016136cc565b50506000910152565b600081518084526137058160208601602086016136c9565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561363357603f1988860301845261375c8583516136ed565b94509285019290850190600101613740565b6000806000806060858703121561378457600080fd5b843561378f81613175565b93506020850135925060408501356001600160401b038111156137b157600080fd5b6133b387828801613313565b60006001600160401b038211156137d6576137d6613084565b5060051b60200190565b600082601f8301126137f157600080fd5b81356020613806613801836137bd565b61309a565b82815260059290921b8401810191818101908684111561382557600080fd5b8286015b848110156138405780358352918301918301613829565b509695505050505050565b600080600080600060a0868803121561386357600080fd5b853561386e81613175565b9450602086013561387e81613175565b935060408601356001600160401b038082111561389a57600080fd5b6138a689838a016137e0565b945060608801359150808211156138bc57600080fd5b6138c889838a016137e0565b935060808801359150808211156138de57600080fd5b506138eb88828901613121565b9150509295509295909350565b60008060006040848603121561390d57600080fd5b833561391881613175565b925060208401356001600160401b0381111561393357600080fd5b61352c86828701613313565b602081526000610b5b60208301846136ed565b6020808252825182820181905260009190848201906040850190845b818110156139935783516001600160a01b03168352928401929184019160010161396e565b50909695505050505050565b602081526000610b5b6020830184613539565b600080600080600060a086880312156139ca57600080fd5b85356139d581613175565b945060208601356139e581613175565b9350604086013592506060860135915060808601356001600160401b03811115613a0e57600080fd5b6138eb88828901613121565b6000808335601e19843603018112613a3157600080fd5b8301803591506001600160401b03821115613a4b57600080fd5b602001915036819003821315612a4157600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201613a9e57613a9e613a76565b5060010190565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60208082526021908201527f4163636f756e743a206e6f742061646d696e206f7220456e747279506f696e746040820152601760f91b606082015260800190565b80356001600160801b038116811461319557600080fd5b600060208284031215613b3e57600080fd5b610b5b82613b15565b803560ff8116811461319557600080fd5b600060208284031215613b6a57600080fd5b610b5b82613b47565b8082018082111561063a5761063a613a76565b6000808335601e19843603018112613b9d57600080fd5b8301803591506001600160401b03821115613bb757600080fd5b6020019150600581901b3603821315612a4157600080fd5b6000808335601e19843603018112613be657600080fd5b83016020810192503590506001600160401b03811115613c0557600080fd5b8060051b3603821315612a4157600080fd5b8183526000602080850194508260005b85811015613c55578135613c3a81613175565b6001600160a01b031687529582019590820190600101613c27565b509495945050505050565b60208152613c8160208201613c748461318a565b6001600160a01b03169052565b6000613c8f60208401613b47565b60ff8116604084015250613ca66040840184613bcf565b610120806060860152613cbe61014086018385613c17565b925060608601356080860152613cd660808701613b15565b6001600160801b03811660a08701529150613cf360a08701613b15565b6001600160801b03811660c08701529150613d1060c08701613b15565b6001600160801b03811660e08701529150613d2d60e08701613b15565b9150610100613d46818701846001600160801b03169052565b9590950135939094019290925250919050565b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b600060208284031215613d9157600080fd5b5051919050565b600181811c90821680613dac57607f821691505b60208210810361325e57634e487b7160e01b600052602260045260246000fd5b602080825260059082015264214461746160d81b604082015260600190565b60008085851115613dfb57600080fd5b83861115613e0857600080fd5b5050820193919092039150565b6001600160e01b03198135818116916004851015613e3d5780818660040360031b1b83161692505b505092915050565b600060208284031215613e5757600080fd5b5035919050565b600082601f830112613e6f57600080fd5b81356020613e7f613801836137bd565b82815260059290921b84018101918181019086841115613e9e57600080fd5b8286015b848110156138405780356001600160401b03811115613ec15760008081fd5b613ecf8986838b0101613121565b845250918301918301613ea2565b600080600060608486031215613ef257600080fd5b83356001600160401b0380821115613f0957600080fd5b818601915086601f830112613f1d57600080fd5b81356020613f2d613801836137bd565b82815260059290921b8401810191818101908a841115613f4c57600080fd5b948201945b83861015613f73578535613f6481613175565b82529482019490820190613f51565b97505087013592505080821115613f8957600080fd5b613f95878388016137e0565b93506040860135915080821115613fab57600080fd5b50613fb886828701613e5e565b9150509250925092565b601f82111561400857600081815260208120601f850160051c81016020861015613fe95750805b601f850160051c820191505b81811015610edb57828155600101613ff5565b505050565b81516001600160401b0381111561402657614026613084565b61403a816140348454613d98565b84613fc2565b602080601f83116001811461406f57600084156140575750858301515b600019600386901b1c1916600185901b178555610edb565b600085815260208120601f198616915b8281101561409e5788860151825594840194600190910190840161407f565b50858210156140bc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6040815260006140df60408301856136ed565b82810360208401526140f181856136ed565b95945050505050565b60006020828403121561410c57600080fd5b81518015158114610b5b57600080fd5b6000825161412e8184602087016136c9565b9190910192915050565b60008184825b8581101561416f57813561415181613175565b6001600160a01b03168352602092830192919091019060010161413e565b509095945050505050565b6001600160a01b03831681526040602082018190526000906106ed908301846136ed565b634e487b7160e01b600052602160045260246000fd5b8181038181111561063a5761063a613a76565b634e487b7160e01b600052603160045260246000fdfe036f52c1827dab135f7fd44ca0bddde297e2f659c710e0ec53e975f22b548301416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a9270ecd200ea2db7f4c96b6e6f161b55d8e6c151fd774b77cccd511e070b16164736f6c63430008110033",
  linkReferences: {},
  deployedLinkReferences: {},
};
