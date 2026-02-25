import getin from '../../assets/images/kbgettheglory.png';
import {Image} from '@shopify/hydrogen';

export function HomeGetInSplitBanner() {
  return (
    <div className="relative bg-gradient-to-r from-fuchsia-800 via-violet-800 to-fuchsia-500">
      <div className="h-56 bg-gray-900 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <Image
        width="10"
        height="10"
          className="h-full w-full object-cover"
          src={getin}
          alt="Kimbolton getin 96 shot single ignition"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          
          <h2 className="text-lg font-semibold text-gray-300">Bonfire 2026</h2>

          <span className="flex">
            <span className="flex-none">
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Get the glory!</p>
            </span>
            <span className="flex-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
  <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
</svg>

            </span>
          
          </span>
          

          <p className="mt-3 text-lg text-gray-300">
            Single fuse £100 rrp £149.99
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://monsterfireworks.co.uk/products/get-the-glory?title=default%2520title"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Play video
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

