const faqs = [
    {
      id: 1,
      
      answer:
        "Any contract entered into by Monster Fireworks Ltd. for the supply of goods and services is subject to these conditions. No amendments to this contract will be accepted unless agreed in writing by Monster Fireworks Ltd.",
    },
       { id: 2,
        
      answer:
        "No order for supply arising from a quotation or otherwise shall be deemed to be accepted or constitute a legally enforceable contract until accepted in writing by Monster Fireworks Ltd.",
       },
{
        id: 3,
      answer:
        "It is illegal to purchase fireworks if you are under 18. Identification confirming proof of age may be required upon collection.",
},
    {   id: 4,
      answer:
        "All products are subject to availability and may be withdrawn if the stock is sold out. Where items are unavailable, these will be replaced with an item of similar price. If your order cannot be fulfilled we may at our discretion offer an alternative or a refund.",
    },
    {
        id: 5,
      answer:
        "Fireworks are a hazardous material and are subject to carriage constraints. Under the Consumer Protection (Distance Selling) Regulations 2000",
    },
    {
        id: 6,
      answer:
        "Please check the contents your order on collection. Errors in your order must be notified to Monster Fireworks Ltd. within 24 hours.",
    },
    {
        id: 7,
      answer:
        "Payment is non-refundable in the event of failure to collect an order before 4pm November 5th 2023.",
    },
    {
        id: 8,
      answer:
        "Payments via the internet are processed by Paypal in order to ensure security of your transaction. Should you have any problems with your transaction please email Paypal quoting your transaction id.",
    },
    {
        id: 9,
      answer:
        "Liability for faulty goods will not be accepted where products have not been used in accordance with the instructions and/or where Monster Fireworks Ltd. deems that the product has not been used correctly or the product has not been used for the purpose for which it was meant.",
    },
    {
        id: 10,
    
      answer:
        "Liability will not be accepted by Monster Fireworks Ltd. where Force Majeure is considered to have been a factor of failure.",
    },
    {
        id: 11,
      answer:
        "Insofar as is allowed by law, Monster Fireworks Ltd. accept no liability for loss and/or damage howsoever caused.",
    },
    {
        id: 12,
      answer:
        "It is your responsibility to ensure that you are covered by appropriate insurance in the event of loss and/or damage.",
    },
    {
        id: 13,
      answer:
        "In the event that any of the clauses within this agreement are deemed invalid, the clause shall be severed so that it shall not invalidate the remainder of this agreement.",
    },
    {
        id: 14,
      answer:
        "Monster Fireworks Ltd. will retain your email address, telephone number and other personal data so we can process your order and contact you with occasional promotional content. We do not exchange sell or provide your data to other companies",
    },
    {
        id: 15,
      answer:
        "Monster Fireworks Ltd. will retain your email address, telephone number and other personal data so we can process your order and contact you with occasional promotional content. We do not exchange sell or provide your data to other companies. ",
    },
    {
        id: 16,
      answer:
        "This contract is governed by the law in England and Wales.",
    },
    {
        id: 17,
      answer:
        "Monster Fireworks Ltd. is registered in England and Wales as company number 06838160",

        
        
    },
    // More questions...
  ]
  
  export function Terms() {
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Terms and conditions</h2>
          <div className="mt-8">
            
              {faqs.map((faq) => (
                <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">{faq.question}</dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            
          </div>
        </div>
      </div>
    )
  }