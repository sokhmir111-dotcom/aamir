import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Feedbacks = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alvan',
      role: 'Creative Director, BrandWorks',
      content: `Aamir did a great job with my graphic design. Works quickly, and is talented. Would hire again`,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Pheonix',
      role: 'Marketing Head, TechNova',
      content: 'Aamir is Really good at his job. He is very professional and always delivers on time.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Jenna',
      role: 'CEO, StartupX',
      content: 'Aamir was really kind and great at communicating. He made sure I was happy with the final product.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      name: 'Frank',
      role: 'Art Director, CreativeCo',
      content: 'Aamir did an outstanding job designing Facebook ad graphics for us! His attention to detail, creativity, and ability to deliver engaging visuals exceeded our expectations.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      name: 'Rothwell',
      role: 'Art Director, CreativeCo',
      content: 'Working with Aamir khan was an absolute pleasure! Their creativity, attention to detail, and professionalism exceeded my expectations. They perfectly understood my vision and brought it to life with a stunning design.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      name: 'Jane',
      role: 'Art Director, CreativeCo',
      content: 'He is very professional and always delivers on time. He is very good at his job.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 7,
      name: 'Jeana',
      role: 'Art Director, CreativeCo',
      content: 'Did a fantastic job on our project. He is very talented and professional. I would highly recommend him.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 8,
      name: 'Allen',
      role: 'Art Director, CreativeCo',
      content: 'It was an absolute pleasure working on this project! The communication was clear, feedback was timely, and the professionalism throughout made the entire experience seamless. I would be delighted to work together again.',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 9,
      name: 'Jackson',
      role: 'Art Director, CreativeCo',
      content: 'Working with Amir Khan on this children’s book illustration was fantastic! Amir, an expert in illustration, valued the clear direction and collaborative process. Highly recommended client—looking forward to future opportunities together!.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 10,
      name: 'Hannah',
      role: 'Art Director, CreativeCo',
      content: 'Aamir did an outstanding job on my presentation! His attention to detail and professionalism were truly impressive, and the final visual appeal was top-notch. Working with him was a breeze thanks to his excellent cooperation, prompt delivery, and exceptional language fluency. Highly recommend!.',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 11,
      name: 'Betsy',
      role: 'Art Director, CreativeCo',
      content: 'He is very professional and always delivers on time, he is very good at his job.',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 12,
      name: 'Bryan',
      role: 'Art Director, CreativeCo',
      content: 'Super quick turnaround and exactly what we wanted. Would use again!',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 13,
      name: 'Charbel',
      role: 'Art Director, CreativeCo',
      content: 'Aamir did a great job understanding our needs and what we needed help with. He created a design that helped our brand. Thank you.',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 14,
      name: 'Eric Sean',
      role: 'Art Director, CreativeCo',
      content: 'Very good designer. Will use again. Highly recommend and would work with him again.',
      avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80'
    },
    {
      id: 15,
      name: 'Chris Ware',
      role: 'Art Director, CreativeCo',
      content: 'Aamir was very communicative and was able to understand what I was asking for and delivered perfectly.',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80'
    },
  ];

  return (
    <section id="feedbacks" className="py-16 md:py-24 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-gray-500 mb-4">
            Client Feedbacks
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-lg font-medium text-gray-600 dark:text-gray-500">
            Hear what industry leaders say about collaborating with me
          </p>
        </motion.div>

        {/* Swiper Container */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
          modules={[Pagination, Autoplay]}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="bg-white dark:bg-dark-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full mx-2"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <FaQuoteLeft className="text-primary text-3xl opacity-20 absolute top-6 right-6" />
                <p className="text-lg italic text-gray-700 dark:text-gray-500 mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 flex-shrink-0 mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name.trim())}&background=cde633&color=000&bold=true`;
                      }}
                      className="rounded-full object-cover border-2 border-primary w-full h-full shadow-sm"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark dark:text-gray-500">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Feedbacks;