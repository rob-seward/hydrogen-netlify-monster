import crowd from '../../assets/images/display-crowd.jpg';
import {Image} from '@shopify/hydrogen';

export function HomeNYBanner() {
    return (
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            width="20"
            height="20"
            src={crowd}
            alt="firework display crowd watching"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-white text-center sm:text-4xl lg:text-6xl">Open Today Sunday 10.30am - 3pm</h2>
         
        </div>
      </div>
    )
  }
  
 