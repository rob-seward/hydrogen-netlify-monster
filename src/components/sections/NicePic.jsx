import nicepic from "../../assets/images/watchingDisplay.png";
import {Image} from '@shopify/hydrogen';


export function NicePic() {
  return (
    <>
    <div>
      <Image 
    className="object-cover h-full w-full"
    alt="person watching fitrworks"
    src={nicepic}
    height="7"
    width="20"
    />
    </div>
    </>
    
      
    
  );
}