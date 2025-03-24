import { Skill } from '../data/skills';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-12">Mes compétences</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 group">
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className="h-20 w-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
            />
            <p className="mt-2 text-sm font-medium">{skill.name}</p>
            <p className="text-xs text-gray-600 mt-1">
              {skill.experience} {skill.experience > 1 ? 'ans' : 'an'} d'expérience
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection; 