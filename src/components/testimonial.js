import React from "react";
import { Star } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      text: "Working with Jawad Ahmad was an absolute pleasure. His expertise in React and Node.js transformed our e-commerce platform into a seamless, user-friendly experience. Highly professional and responsive!",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "https://cdn.casarotto.co.uk/uploads/images/client-pictures/_small/SaraJohnson.jpg?v=1751363465"
    },
    {
      text: "Jawad delivered an exceptional task management app for our team. His attention to detail and commitment to deadlines made the project a success. I highly recommend his services!",
      author: "Michael Chen",
      position: "Project Manager, Innovate Solutions",
      image: "https://assets.publishing.service.gov.uk/media/678fb1576b8b7d3e01328afa/s465_david-knott-1.png"
    },
    {
      text: "Jawad's work on our portfolio website was outstanding. His use of GSAP brought our vision to life with stunning animations. A true professional who exceeds expectations!",
      author: "Emily Davis",
      position: "Creative Director, PixelCraft Studio",
      image: "https://m.media-amazon.com/images/M/MV5BODY4MmI1NjEtODc5Yy00ZmYyLThkMGItNzYyNzM4MjEzNjNiXkEyXkFqcGc@._V1_.jpg"
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className="section-card">
      <div className="section-header">
        <div className="green-dot"></div>
        <span className="section-label">TESTIMONIALS</span>
      </div>

      <h2 className="about-title">
        Client <span className="highlight">Testimonials</span>
      </h2>

      <div className="testimonial-carousel">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item"
          removeArrowOnDeviceType={["mobile"]}
        >
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  <Star className="testimonial-star" />
                  <Star className="testimonial-star" />
                  <Star className="testimonial-star" />
                  <Star className="testimonial-star" />
                  <Star className="testimonial-star" />
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.author} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;