import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official Vitto Logo — geometric asterisk mark + "Vitto" wordmark.
 * The mark is built from 8 diamond/rhombus shapes arranged in a circle,
 * exactly as seen in the official brand identity.
 *
 * @param {object} props
 * @param {string}  props.className   - extra className on the outer wrapper
 * @param {number}  props.iconSize    - pixel size of the SVG mark (default 36)
 * @param {string}  props.textSize    - Tailwind font-size class (default 'text-2xl')
 * @param {boolean} props.noLink      - if true, renders a div instead of a Link to="/"
 */
const VittoLogo = ({ className = '', iconSize = 36, textSize = 'text-2xl', noLink = false }) => {
  const mark = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/*
        The official Vitto mark is 8 rhombus shapes, each rotated 45° apart,
        forming a kaleidoscopic asterisk. Each diamond is ~30% of the icon size.
      */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 18 18)`}>
          {/* A slim vertical diamond pointing outward from center */}
          <polygon
            points="18,2 21,11 18,14 15,11"
            fill="#E2183C"
          />
        </g>
      ))}
    </svg>
  );

  const wordmark = (
    <span
      className={`${textSize} font-bold text-accent tracking-tight leading-none`}
      style={{ fontFamily: "'Outfit', 'Inter', sans-serif", letterSpacing: '-0.01em' }}
    >
      Vitto
    </span>
  );

  const inner = (
    <span className={`flex items-center gap-2 group ${className}`}>
      <span className="group-hover:scale-110 transition-transform duration-300 inline-flex items-center justify-center">
        {mark}
      </span>
      {wordmark}
    </span>
  );

  if (noLink) return inner;

  return (
    <Link to="/" aria-label="Vitto Home" className="inline-flex">
      {inner}
    </Link>
  );
};

export default VittoLogo;
