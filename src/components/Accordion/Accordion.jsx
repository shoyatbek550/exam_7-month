'use client'
import { useState } from "react";
import "./page.scss"; // Import your SCSS stylesheet

function Accordion({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div
        className="accordion-header"
        onClick={toggleAccordion}
      >
        <h2 className="accordion-title">{data.title}</h2>
        <div className={`accordion-icon ${isOpen ? "open" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <circle
              cx="15.7456"
              cy="15.856"
              r="14.5023"
              fill="#6C5FBC"
              stroke="#6C5FBC"
              strokeWidth="1.11556"
            />
            <rect
              x="10.168"
              y="15.8564"
              width="10.5978"
              height="1.11556"
              fill="white"
            />
            <rect
              x="14.9087"
              y="21.2681"
              width="10.5978"
              height="1.11556"
              transform="rotate(-90 14.9087 21.2681)"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <p className="accordion-text">{data.text}</p>
      </div>
    </div>
  );
}

export default Accordion;
