// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract Vegetable {
    string public  VegeName;
    uint104  public VegeID;
    string public VegeFarm;
    string public VegeFarmerName;
    string public VegeDetail;

     constructor(
        uint104 _vegeID,
        string memory  _vegeName,
        string memory _vegeFarm,
        string memory _vegeFarmerName,
        string memory _vegeDetail) {
        VegeName = _vegeName;
        VegeID = _vegeID;
        VegeFarm = _vegeFarm;
        VegeFarmerName = _vegeFarmerName;
        VegeDetail = _vegeDetail;
     }


    function setVegeAll(
        string memory  _vegeName,
        string memory _vegeFarm,
        string memory _vegeFarmerName,
        string memory _vegeDetail
    )public {
        VegeName = _vegeName;
        VegeFarm = _vegeFarm;
        VegeFarmerName = _vegeFarmerName;
        VegeDetail = _vegeDetail;
        }

    function returnAll()
        public
        view
        returns (
            string memory,
            uint256 ,
            string memory,
            string memory,
            string memory
        )
    {
        return (VegeName, VegeID, VegeFarm, VegeFarmerName, VegeDetail);
    }

    function getVegeName() public view returns (string memory) {
        return VegeName;
    }

    function setVegeName(string memory _VegeName) public {
        VegeName = _VegeName;
    }

    function getVegeID() public view returns (uint104 ) {
        return VegeID;
    }

    function setVegeID(uint104 _VegeID) public {
        VegeID = _VegeID;
    }

    function getVegeFarm() public view returns (string memory) {
        return VegeFarm;
    }

    function setVegeFarm(string memory _VegeFarm) public {
        VegeFarm = _VegeFarm;
    }

    function getVegeFarmerName() public view returns (string memory) {
        return VegeName;
    }

    function setVegeFarmerName(string memory _VegeFarmerName) public {
        VegeFarmerName = _VegeFarmerName;
    }

}
