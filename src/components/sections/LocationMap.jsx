import shoploco from "../../assets/images/location.jpg"
import {Image} from '@shopify/hydrogen';


export function LocationMap() {
  return (
    <>
    <div>
      <Image 
    className="object-cover h-full w-full"
    alt="location map of the monster fireworks shop"
    src={shoploco}
    height="7"
    width="20"
    
    />
    </div>
    </>
    
      
    
  );
}