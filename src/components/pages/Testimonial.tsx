import React, { useState } from 'react';
import '../../styles/testimonials.css';
import { testimonials } from '../../utils/assets/data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);

    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % testimonials.length
        : (currentIndex - 1 + testimonials.length) % testimonials.length;

    setNextIndex(newIndex);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setNextIndex(null);
      setIsAnimating(false);
    }, 1000); // Match animation duration
  };

  const getClassName = (index: number | null) => {
    if (index === null) return '';
    return index === currentIndex
      ? 'current'
      : index === nextIndex
        ? 'next'
        : '';
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonial-slider">
      <button
        className={`arrow left ${isAnimating ? 'disabled' : ''}`}
        onClick={() => handleChange('prev')}
        disabled={isAnimating}
      >
        &lt;
      </button>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial ${getClassName(index)}`}>
            <div className="image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="text-content">
              <h3>{testimonial.name}</h3>
              <p className="designation">{testimonial.designation}</p>
              <p className="review">{testimonial.review}</p>
              <p className="rating">{'⭐'.repeat(testimonial.rating)}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`arrow right ${isAnimating ? 'disabled' : ''}`}
        onClick={() => handleChange('next')}
        disabled={isAnimating}
      >
        &gt;
      </button>
    </div>
  );
}
