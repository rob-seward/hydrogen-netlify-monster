export function HomeNYBanner() {
    return (
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="src/assets/images/display-crowd.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Happy New Year 2022</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Choose the best fireworks from Kimbolton and Celtic 2022 New Years range. No matter how big or small we'll have something for everyones budget.
          </p>
        </div>
      </div>
    )
  }
  