export const counterAbi = [
  {
    inputs: [],
    name: "number",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "newNumber", type: "uint256" }],
    name: "setNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export const counterAddress =
  "0xa52D57bBdD75069F8d6E7ca86eF8E630c8EC9F9F"; // replace with your deployed contract
