// src/components/FeaturedHighlight.jsx
import React from 'react';

const FeaturedHighlight = () => {
  const features = [
    {
      id: 1,
      title: 'Code Reviews',
      description:
        'We don’t just give you assignments, we review your solutions and give you insightful feedbacks on your code to enhance and reinforce your understanding.',
      image: '/Images/image5.png',
    },
    {
      id: 2,
      title: 'Mentorship',
      description:
        'We don’t just give you assignments, we review your solutions and give you insightful feedbacks on your code to enhance and reinforce your understanding.',
      image: '/Images/image6.png',
    },
    {
      id: 3,
      title: 'Live Code Editor',
      description:
        'We don’t just give you assignments, we review your solutions and give you insightful feedbacks on your code to enhance and reinforce your understanding.',
      image: '/Images/image7.png',
    },
    {
      id: 4,
      title: 'Community Forums',
      description:
        'We don’t just give you assignments, we review your solutions and give you insightful feedbacks on your code to enhance and reinforce your understanding.',
      image: '/Images/image8.png',
    },
  ];

  return (
    <section className="bg-white py-16 px-4 text-gray-800 pt-70">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-2xl font-bold mb-8">Features Includes</h1>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((f) => (
            <div
              key={f.id}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition"
            >
              <img
                src={f.image}
                alt={f.title}
                className="h-40 w-345 mb-4 object-contain"
              />
              <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHighlight;
