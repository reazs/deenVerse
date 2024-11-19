import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Community Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Ahmed",
              testimonial:
                "DeenVerse has deepened my understanding of the Quran and brought me closer to my faith.",
            },
            {
              name: "Fatima",
              testimonial:
                "The community here is so supportive. I've learned so much from the discussions and shared insights.",
            },
            {
              name: "Omar",
              testimonial:
                "As a new Muslim, DeenVerse has been an invaluable resource for learning and growing in my faith journey.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-emerald-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">"{testimonial.testimonial}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials