
import monster from '../../assets/images/monster.png';
import bronze from '../../assets/images/kb-bronze.jpg';
import gold from '../../assets/images/kb-gold.jpg';

import {Image} from '@shopify/hydrogen';


export function SelectionBoxes() {

const monsterFeatures = ['✔️ 12 Items', '✔️ 8 metres'];
const goldFeatures = ['✔️ 23 Items', '✔️ 8 metres'];
const bronzeFeatures = ['✔️ 12 Items', '✔️ 8 metres'];


  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-xl font-semibold leading-6 text-gray-300">Selection Boxes</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The finest family garden fireworks
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Each selection box is carefully choosen to offer the greatest variety of products and effects
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-hobby">
                          Gold
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">£</span>
                            <span className="font-bold">60</span>
                          </span>
                          
                        </div>
        
                      </div>
                      
                    </div>
                    <Image
                    width="10"
                    height="10"
          className="h-full w-full object-cover"
          src={gold}
          alt="Kimbolton gold selection box"
        />
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                    <ul role="list" className="space-y-4">
                        {goldFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                             
                            </div>
                            <p className="text-2xl text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="/products/gold?title=default%2520title"
                            className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50"
                            aria-describedby="tier-hobby"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 translate-y-px transform">
                    <div className="flex -translate-y-1/2 transform justify-center">
                      <span className="inline-flex rounded-full bg-violet-800 px-4 py-1 text-base font-semibold text-white">
                        Monster Selection
                      </span>
                    </div>
                  </div>
                  <div className="rounded-t-lg bg-white px-6 pt-12 pb-10">
                    <div>
                      <h3
                        className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:-mx-6"
                        id="tier-growth"
                      >
                        Monster Selection
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">£</span>
                          <span className="font-bold">100</span>
                        </span>
                        
                      </div>
                      
                    </div>
                  </div>
                  <Image
                  width="10"
                  height="10"
                    className="h-full w-full object-cover"
                    src={monster}
                    alt="Monster Fireworks monster selection"
                    />
                  <div className="rounded-b-lg border-t-2 border-gray-100 bg-gray-50 px-6 pt-10 pb-8 sm:px-10 sm:py-10">
                  <ul role="list" className="space-y-4">
                        {monsterFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                             
                            </div>
                            <p className="text-2xl text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a
                          href="/products/monster-selection?title=default%2520title"
                          className="block w-full rounded-lg border border-transparent bg-violet-800 px-6 py-4 text-center text-xl font-medium leading-6 text-white hover:bg-violet-700"
                          aria-describedby="tier-growth"
                        >
                          More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-scale">
                          Bronze
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">£</span>
                            <span className="font-bold">30</span>
                          </span>
                          
                        </div>
                      </div>
                    </div>
                    <Image
                    width="10"
                    height="10"
                        className="h-full w-full object-cover"
                        src={bronze}
                        alt="Kimbolton Bronze selection box"
                        />
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                    <ul role="list" className="space-y-4">
                        {bronzeFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                             
                            </div>
                            <p className="text-2xl text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                 
                      <div className="mt-8">
                          
                        <div className="rounded-lg shadow-md">
                          <a
                            href="/products/bronze?title=default%2520title"
                            className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50"
                            aria-describedby="tier-scale"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
