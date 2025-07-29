import Image from 'next/image';

interface ProjectItemProps {
    image: string;
    link: string;
    title: string;
    description: string;
  }

  export const ProjectItem = ({
    image,
    link,
    title,
    description,
  }: ProjectItemProps) => {
    return (
        <div className="flex flex-col items-center text-center border border-gray-200 rounded-lg p-4 shadow-sm">
        <Image
          src={image}
          alt={`${title} project screenshot`}
          width={300}
          height={200}
          className="object-cover rounded"
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 text-lg font-semibold hover:underline mt-3"
        >
          {title}
        </a>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
    );
  };