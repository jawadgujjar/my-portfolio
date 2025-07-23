import { Star } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="section-card">
      <div className="section-header">
        <div className="green-dot"></div>
        <span className="section-label">TESTIMONIAL</span>
      </div>

      <h2 className="about-title">
        Client <span className="highlight">Testimonials</span>
      </h2>

      <div className="testimonial-card">
        <div className="testimonial-content">
          <Star className="testimonial-star" />
          <Star className="testimonial-star" />
          <Star className="testimonial-star" />
          <Star className="testimonial-star" />
          <Star className="testimonial-star" />
          <p className="testimonial-text">
            "Working with this developer was an absolute pleasure. They delivered beyond our expectations and were professional throughout the entire process."
          </p>
        </div>
        <div className="testimonial-author">
          <div className="author-image">
            <img src="https://via.placeholder.com/50x50/4B5563/FFFFFF?text=Client" alt="Client" />
          </div>
          <div className="author-info">
            <h4 className="author-name">Sarah Johnson</h4>
            <p className="author-position">CEO, TechStart Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;