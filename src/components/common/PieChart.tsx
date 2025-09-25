import React, { useState, useRef, useEffect } from 'react';
import { Skill } from '../../data/skills';

interface PieChartProps {
  skills: Skill[];
  onSkillClick: (skill: Skill) => void;
}

const PieChart: React.FC<PieChartProps> = ({ skills, onSkillClick }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [tooltipData, setTooltipData] = useState<{
    skill: Skill;
    percentage: number;
    color: string;
    x: number;
    y: number;
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  // Hook pour détecter les changements de taille d'écran
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  // Couleurs pastel uniques pour les compétences
  const colors = [
    '#A5B4FC', '#93C5FD', '#60A5FA', '#3B82F6', '#1D4ED8',
    '#A7F3D0', '#6EE7B7', '#34D399', '#10B981', '#059669',
    '#FDE68A', '#FCD34D', '#F59E0B', '#D97706', '#B45309',
    '#F9A8D4', '#F472B6', '#EC4899', '#DB2777', '#BE185D',
    '#C4B5FD', '#A78BFA', '#8B5CF6', '#7C3AED', '#6D28D9',
    '#F87171', '#EF4444', '#DC2626', '#B91C1C', '#991B1B',
    '#818CF8', '#6366F1', '#4F46E5', '#4338CA', '#3730A3',
    '#84CC16', '#65A30D', '#4D7C0F', '#365314', '#1A2E05',
    '#22D3EE', '#06B6D4', '#0891B2', '#0E7490', '#155E75',
    '#4ADE80', '#22C55E', '#16A34A', '#15803D', '#166534',
    '#FBBF24', '#F59E0B', '#D97706', '#B45309', '#92400E',
    '#A78BFA', '#8B5CF6', '#7C3AED', '#6D28D9', '#5B21B6',
    '#F472B6', '#EC4899', '#DB2777', '#BE185D', '#9D174D'
  ];

  // Calculer les pourcentages
  const totalExperience = skills.reduce((sum, skill) => sum + skill.experience, 0);
  
  const slices = skills.map((skill, index) => {
    const percentage = (skill.experience / totalExperience) * 100;
    return {
      skill,
      percentage,
      color: colors[index % colors.length]
    };
  });

  // Calculer les angles
  let currentAngle = 0;
  const slicesWithAngles = slices.map(slice => {
    const startAngle = currentAngle;
    const endAngle = currentAngle + (slice.percentage / 100) * 360;
    currentAngle = endAngle;
    return {
      ...slice,
      startAngle,
      endAngle
    };
  });

  // Fonction pour créer le path SVG
  const createPath = (startAngle: number, endAngle: number, radius: number) => {
    const start = {
      x: Math.cos((startAngle - 90) * Math.PI / 180) * radius,
      y: Math.sin((startAngle - 90) * Math.PI / 180) * radius
    };
    const end = {
      x: Math.cos((endAngle - 90) * Math.PI / 180) * radius,
      y: Math.sin((endAngle - 90) * Math.PI / 180) * radius
    };
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M 0 0 L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y} Z`;
  };

  // Dimensions adaptatives pour mobile
  const dimensions = {
    radius: isMobile ? 120 : 200,
    centerX: isMobile ? 150 : 300,
    centerY: isMobile ? 150 : 300,
    svgSize: isMobile ? 300 : 600
  };

  const { radius, centerX, centerY, svgSize } = dimensions;

  // Fonction pour gérer le survol avec tooltip
  const handleMouseEnter = (event: React.MouseEvent, slice: any) => {
    setHoveredSkill(slice.skill.name);
    
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      setTooltipData({
        skill: slice.skill,
        percentage: slice.percentage,
        color: slice.color,
        x,
        y
      });
    }
  };

  // Fonction pour gérer les interactions tactiles
  const handleTouchStart = (event: React.TouchEvent, slice: any) => {
    event.preventDefault();
    setHoveredSkill(slice.skill.name);
    
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const touch = event.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      
      setTooltipData({
        skill: slice.skill,
        percentage: slice.percentage,
        color: slice.color,
        x,
        y
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
    setTooltipData(null);
  };

  const handleTouchEnd = () => {
    // Délai pour permettre la lecture du tooltip sur mobile
    setTimeout(() => {
      setHoveredSkill(null);
      setTooltipData(null);
    }, 2000);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (tooltipData && svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      setTooltipData(prev => prev ? { ...prev, x, y } : null);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      <svg 
        ref={svgRef}
        width={svgSize} 
        height={svgSize} 
        viewBox={`0 0 ${svgSize} ${svgSize}`} 
        className="mx-auto w-full max-w-md md:max-w-lg"
        onMouseMove={handleMouseMove}
      >
        <g transform={`translate(${centerX}, ${centerY})`}>
          {slicesWithAngles.map((slice) => {
            const isHovered = hoveredSkill === slice.skill.name;
            const isOtherHovered = hoveredSkill !== null && hoveredSkill !== slice.skill.name;
            
            return (
              <g key={slice.skill.name}>
                <path
                  d={createPath(slice.startAngle, slice.endAngle, radius)}
                  fill={slice.color}
                  stroke="white"
                  strokeWidth="2"
                  className={`cursor-pointer transition-all duration-200 ${
                    isHovered ? 'grayscale-0' : isOtherHovered ? 'grayscale' : 'grayscale-0'
                  }`}
                  onClick={() => onSkillClick(slice.skill)}
                  onMouseEnter={(e) => handleMouseEnter(e, slice)}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={(e) => handleTouchStart(e, slice)}
                  onTouchEnd={handleTouchEnd}
                />
              </g>
            );
          })}
        </g>
      </svg>
      
      {/* Tooltip */}
      {tooltipData && (
        <div
          className="absolute bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 pointer-events-none max-w-xs"
          style={{
            left: `${Math.min(tooltipData.x + 10, window.innerWidth - 250)}px`,
            top: `${Math.max(tooltipData.y - 10, 10)}px`,
            transform: tooltipData.y < 100 ? 'translateY(0)' : 'translateY(-100%)'
          }}
        >
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: tooltipData.color }} 
            />
            <span className="font-semibold text-gray-900">{tooltipData.skill.name}</span>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            Expérience: <span className="font-medium text-gray-900">
              {tooltipData.skill.experience} {tooltipData.skill.experience > 1 ? 'ans' : 'an'}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            Pourcentage: <span className="font-medium text-gray-900">
              {tooltipData.percentage.toFixed(1)}%
            </span>
          </div>
        </div>
      )}
      
      {/* Légende */}
      <div className="mt-6 md:mt-8 space-y-2">
        <h3 className="text-lg md:text-xl font-semibold text-center mb-4 md:mb-6 px-4">Années d'expérience par compétence</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 max-h-60 md:max-h-80 overflow-y-auto px-4">
          {slicesWithAngles
            .sort((a, b) => b.skill.experience - a.skill.experience)
            .map((slice) => {
              const isHovered = hoveredSkill === slice.skill.name;
              const isOtherHovered = hoveredSkill !== null && hoveredSkill !== slice.skill.name;
              
              return (
                <div
                  key={slice.skill.name}
                  className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    isHovered ? 'bg-gray-100' : isOtherHovered ? 'opacity-30' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => onSkillClick(slice.skill)}
                  onMouseEnter={() => setHoveredSkill(slice.skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div
                    className="w-4 h-4 md:w-5 md:h-5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: slice.color }}
                  />
                  <span className="text-sm md:text-base font-medium flex-1 truncate">{slice.skill.name}</span>
                  <span className="text-sm md:text-base text-gray-600 font-semibold flex-shrink-0">
                    {slice.skill.experience} {slice.skill.experience > 1 ? 'ans' : 'an'}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PieChart;