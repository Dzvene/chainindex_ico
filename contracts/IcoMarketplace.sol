// File: @openzeppelin/contracts/GSN/Context.sol

// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
pragma solidity >=0.4.22 <0.9.0;
contract  IcoMarketplace is ReentrancyGuard{

    address payable owner;


 using Counters for Counters.Counter;
     Counters.Counter public  itemId;
    Counters.Counter public  icosCountEnded;


   struct icosAvliableItem{
       uint256 icoId;
     address tokenContract;
      address icoContract;
      bool isAvaliable;
      address icoAdmin;
      string icoImage;
      string icoName;
    }


     event IcoMarketItemCreated(  uint256  indexed id,   address tokenContract, address icoContract,bool isAvaliable , address icoAdmin, string icoImage
     , string icoName);

            mapping(uint256=>icosAvliableItem) public  idsForMarketItem;

//Create Icos

    function createIcoForSale(address tokenContract,address icoContract, string  memory icoImage,
      string memory icoName)public  nonReentrant {
        
        require(tokenContract != address(0),"address should not be equal 0x0");
        require(icoContract != address(0),"address should not be equal 0x0");



        itemId.increment();
        uint256 id = itemId.current();

        idsForMarketItem[id]= icosAvliableItem(id,tokenContract,icoContract,true,msg.sender ,icoImage,icoName);


        emit IcoMarketItemCreated(id, tokenContract,  icoContract, true,msg.sender,icoImage,icoName);

    }

//change tHE ICO AVALIABLITY AFTER END ICO SALE

function changeAvilablity(uint256 id)public  {

require(idsForMarketItem[id].icoAdmin==msg.sender, "Only admin of ico can end it");
require(idsForMarketItem[id].isAvaliable , "this Ico Already Ended");

 idsForMarketItem[id].isAvaliable = false;
 icosCountEnded.increment();


}

//Fetch  all Avaliable ICOs items
function getAllAvaliableICOs()public view returns (icosAvliableItem[] memory){

uint256 totalItemCount = itemId.current(); 
uint myItemCount= itemId.current() - icosCountEnded.current();
uint myCurrentIndex =0;



icosAvliableItem [] memory avilableIcos = new icosAvliableItem[](myItemCount); //list[3]
for(uint i = 0;i<totalItemCount;i++){
    if(idsForMarketItem[i+1].isAvaliable== true){      //[1,2,3,4,5]
      uint currentId = i+1;
        icosAvliableItem storage  currentItem = idsForMarketItem[currentId];
        avilableIcos[myCurrentIndex] = currentItem;
        myCurrentIndex +=1;
        
    }
}


return avilableIcos;


}


    

}
