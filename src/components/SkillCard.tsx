import { Skill } from '../data/skills';

interface SkillCardProps {
  skill: Skill;
  onClick: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center p-3 md:p-4 border-2 border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={onClick}
    >
      <img 
        src={skill.logo} 
        alt={skill.name} 
        className="h-12 w-12 md:h-20 md:w-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
      />
      <p className="mt-2 text-xs md:text-sm font-medium text-center">{skill.name}</p>
      <p className="text-[10px] md:text-xs text-gray-600 mt-1 text-center">
        {skill.experience} {skill.experience > 1 ? 'ans' : 'an'} d'expérience
      </p>
    </div>
  );
};

export default SkillCard; 