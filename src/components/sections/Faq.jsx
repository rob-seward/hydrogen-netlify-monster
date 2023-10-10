const faqs = [
    {
      id: 1,
      question: "Can I order my fireworks for New Yewar now?",
      answer:
        "Yes, You can order your fireworks online now and collect after Christmas up until 31st Dec",
    },
    {
        id: 2,
        question: "Do you sale sparklers?",
        answer:
          "Yes, In packs of 3 outers min order",
      },
      {
        id: 3,
        question: "Are you open all year round?",
        answer:
          "Not anymore just for Bonfire and New Year",
      },
      {
        id: 4,
        question: "Do you sale Sky lanterns",
        answer:
          "Not anymore just fireworks",
      },
      {
        id: 5,
        question: "Do you deliver",
        answer:
          "No, just shop collections",
      },
      {
        id: 6,
        question: "Do you sale big rockets",
        answer:
          "Yes, the biggest we can legally sale is the 4inch Ball rocket",
      },

    // More questions...
  ]
  
  export function Faq() {
    return (
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:mx-auto lg:max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>
            <p className="mt-4 text-gray-400">
              
            </p>
          </div>
          <div className="mt-20">
            <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="font-semibold text-white">{faq.question}</dt>
                  <dd className="mt-3 text-gray-400">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }