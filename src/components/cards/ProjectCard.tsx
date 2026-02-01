import { Project } from '../../data/projects';
import Tooltip from '../common/Tooltip';

type ProjectCardProps = {
  project: Project;
  onOpenModal: (project: Project) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <Tooltip content={<>Cliquez pour plus de détails sur <strong>{project.title}</strong></>}>
      <div
        onClick={() => onOpenModal(project)}
        className="cursor-pointer"
      >
        <section className="bg-white shadow-lg rounded-xl hover:scale-[1.02] transition-all duration-300 flex flex-col">
          <div className="overflow-hidden rounded-t-xl">
            <img
              className="aspect-video w-full object-cover"
              src={project.imageUrl}
              alt={project.title}
            />
          </div>
          <div className="p-4">
            <p className="font-bold text-black">
              {project.title}
            </p>
            <p className="text-xs mt-2 text-gray-500 font-light">
              {project.description}
            </p>
          </div>
        </section>
      </div>
    </Tooltip>
  );
};

export default ProjectCard;
  