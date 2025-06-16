// src/components/FeaturedCourses.jsx
import React from 'react';

const FeaturedCourses = () => {
  const features = [
    {
      id: 1,
      title: 'Detailed Syllabus with Localized Content',
      description:
        'We’ve got a comprehensive syllabus that leaves nothing untouched and with our localized contents and examples, you are sure to grasp programming concepts easier and faster even without prior experience (i.e. as a beginner).',
      image: '/Images/image3.png', 
    },
    {
      id: 2,
      title: 'An Interactive Personalized Learning Experience',
      description:
        'With StackJunior’s flexible learning options and 1-on-1 code review with seasoned tutors, your learning is suited just for you .flexible learning options and 1-on-1 code review with seasoned tutors, your learning is suited just for you ',
      image: '/Images/image2.png',
    },
    {
      id: 3,
      title: 'World-Class Learning with World-Class Jobs',
      description:
        'At StackJunior, we impact students with industry-standard skills and trainings. We also support them in getting jobs that are available from around the globe. How cool is that! At StackJunior, we impact students with industry-standard skills and trainings. We also support them in getting jobs that are available from around the globe. How cool is that',
      image: '/Images/image1.png',
    },
  ]; 

  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          Why Choose Us?
        </h2>

        <div className="space-y-12">
          {features.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
