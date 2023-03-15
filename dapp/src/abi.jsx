export const JsonABI = [
    'constructor()',
    'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
    'event Paused(address account)',
    'event SetMessage(string message)',
    'event Unpaused(address account)',
    'function getMessage() view returns (string)',
    'function owner() view returns (address)',
    'function pause()',
    'function paused() view returns (bool)',
    'function renounceOwnership()',
    'function setMessage(string newMessage)',
    'function transferOwnership(address newOwner)',
    'function unpause()'
];