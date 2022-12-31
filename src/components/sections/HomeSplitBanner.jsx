import shop from '../../assets/images/ShopFront.png';
import {Image} from '@shopify/hydrogen';

export function HomeSplitBanner() {
  return (
    <div className="relative bg-gradient-to-r from-fuchsia-800 via-violet-800 to-fuchsia-500">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <Image
        width="10"
        height="10"
          className="h-full w-full object-cover"
          src={shop}
          alt="Monster fireworks shop front"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          
          
        

<span className="flex">
<span className="flex-none">
<p className=" mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">ORDER</p>
</span>

<span className="flex-none">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-14 h-14">
  <path fillRule="evenodd" d="M17.303 5.197A7.5 7.5 0 006.697 15.803a.75.75 0 01-1.061 1.061A9 9 0 1121 10.5a.75.75 0 01-1.5 0c0-1.92-.732-3.839-2.197-5.303zm-2.121 2.121a4.5 4.5 0 00-6.364 6.364.75.75 0 11-1.06 1.06A6 6 0 1118 10.5a.75.75 0 01-1.5 0c0-1.153-.44-2.303-1.318-3.182zm-3.634 1.314a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68z" clipRule="evenodd" /></svg>
</span>

  <span className="flex-none ">
  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">NOW</p>
  </span>
</span>
          
          <p className="mt-3 text-lg text-gray-300">
            We are now closed - Happy New Year!
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                All fireworks
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


