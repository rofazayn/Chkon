// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract PresentationRegistry {
    // Mapping from presentation id to its signature
    mapping(string => bytes32) public presentationSignatures;

    // Store the signature of a presentation
    function storePresentationSignature(
        string memory _id,
        bytes32 _signature
    ) public {
        presentationSignatures[_id] = _signature;
    }

    // Verify the signature of a presentation
    function verifyPresentationSignature(
        string memory _id,
        bytes32 _signature
    ) public view returns (bool) {
        return (presentationSignatures[_id] == _signature);
    }
}
