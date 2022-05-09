const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment

let Contmult3 = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let Bumpmult3 = Contmult3.replace(solidityRegex, 'pragma solidity ^0.8.0');
Bumpmult3 = Bumpmult3.replace(verifierRegex, 'contract Multiplier3Verifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", Bumpmult3);

//
let _plonkContmult3 = fs.readFileSync("./contracts/_plonkMultiplier3Verifier.sol", { encoding: 'utf-8' });
let _plonkBumpmult3 = _plonkContmult3.replace(solidityRegex, 'pragma solidity ^0.8.0');
_plonkBumpmult3 = _plonkBumpmult3.replace(verifierRegex, 'contract PlonkVerifier');

fs.writeFileSync("./contracts/_plonkMultiplier3Verifier.sol", _plonkBumpmult3)