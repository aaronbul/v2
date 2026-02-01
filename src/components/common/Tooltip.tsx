import { useState, ReactNode } from 'react';
import Portal from './Portal';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const tooltipWidth = 300;
    const offset = 15;

    let x = e.clientX + offset;
    const y = e.clientY + offset;

    // Adjust if tooltip would overflow right edge
    if (x + tooltipWidth > window.innerWidth) {
      x = e.clientX - tooltipWidth - offset;
    }

    setPosition({ x, y });
  };

  return (
    <div
      className={className}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {children}

      {isVisible && content && (
        <Portal>
          <div
            className="fixed bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-[9999] pointer-events-none hidden md:block whitespace-nowrap"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`
            }}
          >
            <div className="text-sm text-gray-700">{content}</div>
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Tooltip;
