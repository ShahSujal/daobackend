export const registrationAbi = [
      {
        "inputs": [],
        "name": "AccessDenied",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "AgentNotFound",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "DaoNotFound",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidLogo",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidMetadata",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidName",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NotOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ZeroAddress",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "daoId",
            "type": "uint32"
          },
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "agentId",
            "type": "uint32"
          }
        ],
        "name": "AIAction",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "agentId",
            "type": "uint32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "agentAddress",
            "type": "address"
          }
        ],
        "name": "AIAgentRegistered",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "daoId",
            "type": "uint32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "contractAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "daoName",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "logo",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "projectDescription",
            "type": "string"
          }
        ],
        "name": "DaoRegistered",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "uint32",
            "name": "daoId",
            "type": "uint32"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "projectDescription",
            "type": "string"
          }
        ],
        "name": "DaoUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "previousAdminRole",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "newAdminRole",
            "type": "bytes32"
          }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "RoleGranted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "RoleRevoked",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "AI_MANAGER_ROLE",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "name": "agentConfigurations",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "agentId",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "agentAddress",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "reputation",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "numberOfDecisions",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "agentIds",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_agentId",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "_daoId",
            "type": "uint32"
          }
        ],
        "name": "aiAction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "name": "daoConfigurations",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "daoId",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "contractAddress",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "daoName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "daoLogoUrl",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "projectDescription",
                "type": "string"
              }
            ],
            "internalType": "struct DaoRegistry.DaoMetadata",
            "name": "daoMetadata",
            "type": "tuple"
          },
          {
            "internalType": "address",
            "name": "ownerAddress",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "daoIds",
        "outputs": [
          {
            "internalType": "uint32",
            "name": "",
            "type": "uint32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          }
        ],
        "name": "getRoleAdmin",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "hasRole",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_agentAddress",
            "type": "address"
          }
        ],
        "name": "registerAIAgent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_logo",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_contractAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "_projectDescryption",
            "type": "string"
          }
        ],
        "name": "registerDao",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "role",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint32",
            "name": "_daoId",
            "type": "uint32"
          },
          {
            "internalType": "string",
            "name": "_projectDescryption",
            "type": "string"
          }
        ],
        "name": "updateDaoConfiguration",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ] as const;
   