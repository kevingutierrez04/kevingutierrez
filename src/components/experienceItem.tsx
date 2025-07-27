import Image from 'next/image';

interface ExperienceItemProps {
    logoSrc: string;
    role: string;
    company: string;
    companyUrl: string;
    tenure: string;
    description: string;
  }

  export const ExperienceItem = ({
    logoSrc,
    role,
    company,
    companyUrl,
    tenure,
    description,
  }: ExperienceItemProps) => {
    return (
      <div className="flex items-start gap-4 w-full border-b border-gray-200 pb-6">
        {/* Logo */}
        <div className="w-14 h-14 flex-shrink-0">
          <Image src={logoSrc} alt={`${company} logo`} width={56} height={56} className="object-contain" />
        </div>
  
        {/* Details */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{role}</h3>
              <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                {company}
              </a>
            </div>
            <span className="text-sm text-gray-500">{tenure}</span>
          </div>
          <p className="text-sm mt-2 text-gray-700">{description}</p>
        </div>
      </div>
    );
  };