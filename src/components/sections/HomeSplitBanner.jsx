

export function HomeSplitBanner() {
  return (
    <div className="relative bg-gradient-to-r from-fuchsia-800 via-violet-800 to-fuchsia-500">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="src/assets/images/ShopFront.png"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-gray-300">New Years 2022</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">ORDER NOW</p>
          <p className="mt-3 text-lg text-gray-300">
            Collect from the shop between 27th - 30th December
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Opening times
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

