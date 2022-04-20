import {  suitsToUnicode } from "./cardFunctions";

export interface Point{
    x:number;
    y:number;
}
interface DisplayCardProps{
    suit:string, 
    rank:(string | number ),
    currentPoint:Point,
    ace:Point, 
    clickableCards:Point[]
    onSwap:(currentPoint:Point)=> void

}
export const DisplayCard = ({suit, rank,currentPoint,ace, clickableCards , onSwap }:DisplayCardProps)=>{
    let isClickable = !!clickableCards.find(element=> element.x === currentPoint.x && element.y === currentPoint.y)
    // let isClickable = false
    // for (let index = 0; index < clickableCards.length; index++) {
    //     const element = clickableCards[index];
    //     if (element.x === currentPoint.x && element.y === currentPoint.y ) {
            
    //         isClickable = true
           
    // }
    // }
   const isAce = "a"=== rank
    const handleOnClick = () => {
       if(isClickable){
          onSwap(currentPoint)
       }}


    return <div className={`card rank-${rank} ${suit}`}
          onClick={() => handleOnClick()}
    >
              <span className="rank">{rank}{isClickable?"click":""}</span>
              <span className="suit">{suitsToUnicode(suit,rank)}</span>
            </div>;

    
  
}

