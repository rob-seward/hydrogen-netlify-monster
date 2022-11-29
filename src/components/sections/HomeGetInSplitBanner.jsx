import getin from '../../assets/images/homeGetin.png';
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
          
          <h2 className="text-lg font-semibold text-gray-300">Kimbolton</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Get In! Single Iginition</p>
          <p className="mt-3 text-lg text-gray-300">
            96 Shot 1.3g pattern firing with finale
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="products/get-in?title=default%2520title"
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

