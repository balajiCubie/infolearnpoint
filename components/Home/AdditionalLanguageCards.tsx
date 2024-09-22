import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface AdditionalLanguageCardProps {
  name: string;
  color: string;
  width?: string;
  learnLink: string;
}

const AdditionalLanguageCard: React.FC<AdditionalLanguageCardProps> = ({ name, color, width = 'col-span-1', learnLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={learnLink}>
      <div
        className={`${color} ${width} p-4 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out ${isHovered ? 'shadow-lg transform scale-105' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="text-xl font-semibold text-black font-bold">{name}</h3>
      </div>
    </Link>
  );
};

const additionalLanguageData: AdditionalLanguageCardProps[] = [
  { name: "R", color: "bg-gray-200", learnLink: "/learn/r" },
  { name: "Kotlin", color: "bg-green-200", learnLink: "/learn/kotlin" },
  { name: "Node.js", color: "bg-teal-200", learnLink: "/learn/nodejs" },
  { name: "React", color: "bg-pink-200", learnLink: "/learn/react" },
  { name: "JSON", color: "bg-yellow-200", learnLink: "/learn/json" },
  { name: "Vue", color: "bg-gray-200", learnLink: "/learn/vue" },
  { name: "MySQL", color: "bg-green-200", learnLink: "/learn/mysql" },
  { name: "XML", color: "bg-teal-200", learnLink: "/learn/xml" },
  { name: "Sass", color: "bg-pink-200", learnLink: "/learn/sass" },
  { name: "Icons", color: "bg-yellow-200", learnLink: "/learn/icons" },
  { name: "RWD", color: "bg-gray-200", learnLink: "/learn/rwd" },
  { name: "Graphics", color: "bg-green-200", learnLink: "/learn/graphics" },
  { name: "SVG", color: "bg-teal-200", learnLink: "/learn/svg" },
  { name: "Canvas", color: "bg-pink-200", learnLink: "/learn/canvas" },
  { name: "Raspberry Pi", color: "bg-yellow-200", learnLink: "/learn/raspberrypi" },
  { name: "Cyber Security", color: "bg-gray-200", learnLink: "/learn/cybersecurity" },
  { name: "Colors", color: "bg-gray-200", learnLink: "/learn/colors" },
  { name: "Git", color: "bg-teal-200", learnLink: "/learn/git" },
  { name: "Matplotlib", color: "bg-pink-200", learnLink: "/learn/matplotlib" },
  { name: "NumPy", color: "bg-yellow-200", learnLink: "/learn/numpy" },
  { name: "Pandas", color: "bg-gray-200", learnLink: "/learn/pandas" },
  { name: "SciPy", color: "bg-green-200", learnLink: "/learn/scipy" },
  { name: "ASP", color: "bg-teal-200", learnLink: "/learn/asp" },
  { name: "AngularJS", color: "bg-pink-200", learnLink: "/learn/angularjs" },
  { name: "AppML", color: "bg-yellow-200", learnLink: "/learn/appml" },
  { name: "Go", color: "bg-gray-200", learnLink: "/learn/go" },
  { name: "TypeScript", color: "bg-green-200", learnLink: "/learn/typescript" },
  { name: "Django", color: "bg-teal-200", learnLink: "/learn/django" },
  { name: "MongoDB", color: "bg-pink-200", learnLink: "/learn/mongodb" },
  { name: "Statistics", color: "bg-yellow-200", learnLink: "/learn/statistics" },
  { name: "Data Science", color: "bg-gray-200", learnLink: "/learn/datascience" },
  { name: "Typing Speed", color: "bg-green-200", learnLink: "/learn/typingspeed" },
  { name: "HowTo", color: "bg-teal-200", learnLink: "/learn/howto" },
  { name: "Code Game", color: "bg-pink-200", learnLink: "/learn/codegame" },
  { name: "Spaces", color: "bg-yellow-200", learnLink: "/learn/spaces" },
  { name: "PostgreSQL", color: "bg-gray-200", learnLink: "/learn/postgresql" },
  { name: "Excel", color: "bg-green-200", width: "col-span-2", learnLink: "/learn/excel" },
  { name: "DSA ", color: "bg-teal-200", width: "col-span-2", learnLink: "/learn/dsa" },
  { name: "Machine Learning", color: "bg-pink-200", width: "col-span-2", learnLink: "/learn/machinelearning" },
  { name: "Artificial Intelligence", color: "bg-yellow-200", width: "col-span-2", learnLink: "/learn/ai" },
];

const AdditionalLanguageCards: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<AdditionalLanguageCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCards = async () => {
      setIsLoading(true);
      // Simulating an API call or data fetching
      await new Promise(resolve => setTimeout(resolve, 1000));
      setVisibleCards(additionalLanguageData);
      setIsLoading(false);
    };

    loadCards();
  }, []);

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {visibleCards.map((language, index) => (
        <AdditionalLanguageCard key={index} {...language} />
      ))}
    </div>
  );
};

export default AdditionalLanguageCards;
