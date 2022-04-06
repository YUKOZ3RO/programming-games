/* eslint-disable eqeqeq */
import { Card} from "./cardInterfaces";

export const getValueOfCard = (val: string | number): number => {
    switch (val) {
      case "a":
        return 11;
      case "j":
      case "q":
      case "k":
        return 10;
      default:
        return +val;
    }
  };
export  const individualSuites = (
    suites: string[],
    valueOfSuites: (string | number)[]
  ): Card[] => {
    let mergedSuites: Card[] = [];
    for (let index = 0; index < suites.length; index++) {
      const element = suites[index];
      for (let index = 0; index < valueOfSuites.length; index++) {
        const element2 = valueOfSuites[index];
  
        const card = {
          suit: element ,
          value: getValueOfCard(element2),
          rank: element2
        };
        mergedSuites.push(card);
      }
    }
    return mergedSuites;
  };
  
 export const cardsDelt = (suitsAndValues) => {
    let randomIndex = Math.floor(Math.random() * suitsAndValues.length);
    const result = suitsAndValues.splice(randomIndex, 1);
  
    return result[0];
  };
  export const suitsToUnicode=( suit:string , rank :string|number)=>{
   if (rank=="k" ||rank=="q"||rank=="j") {
     
    switch (suit) {
      case "spades":
        return "♠"
        case "clubs":
          return "	♣"
          case "diams":
            return "♦"
            case "hearts":
              return "♥"
        
    
    
        
    }
     
   }

  return "\u00A0"
  }
  
  let suites = ["spades", "clubs", "diams", "hearts"];
  const valueOfSuites = [
    "a",
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    "j",
    "q",
    "k",
  ];
  export const suitsAndValues: Card[] = individualSuites(suites, valueOfSuites);

  export const gameIsOver=(userHasHold, sumOfUserCards, sumOfHouseCards) =>{
    if (sumOfUserCards >21|| sumOfHouseCards > 21 ) {
      return true;
    }
    if (userHasHold && sumOfHouseCards > 17) {
      return true;
    }
    if (userHasHold && sumOfHouseCards > sumOfUserCards) {
      return true;
    }
  }
 export const gameResults =(sumOfHouseCards,sumOfUserCards )=>{
   if (sumOfUserCards > 21 ) {
     return "You Lose"
   }
    if(sumOfHouseCards > 21){
      return "You Win"}

  
  if (sumOfUserCards > sumOfHouseCards ){
    return "You Win"
  }
  
  if (sumOfUserCards < sumOfHouseCards ){
    return "You Lose"
  }
  
  if(sumOfUserCards == sumOfHouseCards){
    return "Its a Draw"
  }
}