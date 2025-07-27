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
          className="text-lg font-semibold text-blue-600 hover:underline mt-3"
        >
          {title}
        </a>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      </div>
    );
  };