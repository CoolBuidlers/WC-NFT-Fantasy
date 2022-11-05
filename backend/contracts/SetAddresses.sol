import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/ISetAddresses.sol";
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SetAddresses is Ownable {
   function setTheAddresses(address _predictionAddress, address _worldCupDataAddress, address _fetchTeamOne, address _fetchTeamTwo, address _fetchTeamThree, address _fetchTeamFour, address _mintTeamOneAddress, address _mintTeamTwoAddress, address _evolveAddress, address _randomAndRoundAddress, address _changeOrder) external onlyOwner {
      ISetAddresses(_randomAndRoundAddress).setPredictionAddress(_predictionAddress);
      ISetAddresses(_randomAndRoundAddress).setWorldCupDataAddress(_worldCupDataAddress);
      ISetAddresses(_changeOrder).setPredictionAddress(_predictionAddress);
      ISetAddresses(_evolveAddress).setPredictionAddress(_predictionAddress);
      ISetAddresses(_evolveAddress).setFetchTeamOne(_fetchTeamOne);
      ISetAddresses(_evolveAddress).setFetchTeamTwo(_fetchTeamTwo);
      ISetAddresses(_evolveAddress).setFetchTeamThree(_fetchTeamThree);
      ISetAddresses(_evolveAddress).setFetchTeamFour(_fetchTeamFour);
      ISetAddresses(_evolveAddress).setMintTeamOneAddress(_mintTeamOneAddress);
      ISetAddresses(_evolveAddress).setMintTeamTwoAddress(_mintTeamTwoAddress);
      ISetAddresses(_fetchTeamOne).setWorldCupDataAddress(_worldCupDataAddress);
      ISetAddresses(_fetchTeamTwo).setWorldCupDataAddress(_worldCupDataAddress);
      ISetAddresses(_fetchTeamThree).setWorldCupDataAddress(_worldCupDataAddress);
      ISetAddresses(_fetchTeamFour).setWorldCupDataAddress(_worldCupDataAddress);
      ISetAddresses(_mintTeamOneAddress).setPredictionAddress(_predictionAddress);
      ISetAddresses(_mintTeamOneAddress).setEvolveAddress(_evolveAddress);
      ISetAddresses(_mintTeamOneAddress).setMintTeamTwoAddress(_mintTeamTwoAddress);
      ISetAddresses(_mintTeamTwoAddress).setPredictionAddress(_predictionAddress);
      ISetAddresses(_mintTeamTwoAddress).setEvolveAddress(_evolveAddress);
      ISetAddresses(_mintTeamTwoAddress).setMintTeamOneAddress(_mintTeamOneAddress);
      ISetAddresses(_predictionAddress).setRandomAndRoundAddress(_randomAndRoundAddress);
      ISetAddresses(_predictionAddress).setWorldCupDataAddress(_worldCupDataAddress);
      ISetAddresses(_predictionAddress).setChangeOrderAddress(_changeOrder);
      ISetAddresses(_predictionAddress).setFetchTeamOne(_fetchTeamOne);
      ISetAddresses(_predictionAddress).setMintTeamOneAddress(_mintTeamOneAddress);
      ISetAddresses(_worldCupDataAddress).setRandomAndRoundAddress(_randomAndRoundAddress);
      ISetAddresses(_worldCupDataAddress).setFetchTeamOne(_fetchTeamOne);
      ISetAddresses(_worldCupDataAddress).setFetchTeamTwo(_fetchTeamTwo);
      ISetAddresses(_worldCupDataAddress).setFetchTeamThree(_fetchTeamThree);
      ISetAddresses(_worldCupDataAddress).setFetchTeamFour(_fetchTeamFour);
      ISetAddresses(_worldCupDataAddress).setPredictionAddress(_predictionAddress);
   }
}