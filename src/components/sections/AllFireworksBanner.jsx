import allfireworks from '../../assets/images/ShopFront.png';
import {Image, Link} from '@shopify/hydrogen';

export function AllFireworksBanner() {
    return (
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            width="20"
            height="20"
            src={allfireworks}
            alt="firework display crowd watching"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <Link to="/openingtimes">
            <p className="h-25 w-1/4 px-6 m-2 text-lgtransition-colors duration-150 max-md:bg-white rounded-lg focus:shadow-outline hover:bg-indigo-800 text-3xl font-bold tracking-tight text-white text-center ">Opening times</p>
            </Link>
        </div>
      </div>
    )
  }