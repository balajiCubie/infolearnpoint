import React from 'react';
import Link from 'next/link';
import AdditionalLanguageCards from './AdditionalLanguageCards';

interface LanguageCardProps {
  name: string;
  description: string;
  color: string;
  learnLink: string;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ name, description, color, learnLink }) => {
  return (
    <div className="transform hover:scale-105 transition-transform duration-300 ease-in-out m-8">
      <div className={`${color} p-8 rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-center text-center`}>
        <h2 className="text-3xl font-bold mb-4 text-black">{name}</h2>
        <p className="mb-6 text-black text-lg">{description}</p>
        <Link href={learnLink} className="bg-gray-800 text-white py-3 px-6 rounded-full hover:bg-gray-700 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-md">
          Learn {name}
        </Link>
      </div>
    </div>
  );
};

const languageData: LanguageCardProps[] = [
  {
    name: "PHP",
    description: "A web server programming language",
    color: "bg-pink-200",
    learnLink: "/learn/php"
  },
  {
    name: "jQuery",
    description: "A JS library for developing web pages",
    color: "bg-yellow-200",
    learnLink: "/learn/jquery"
  },
  {
    name: "Java",
    description: "A programming language",
    color: "bg-pink-100",
    learnLink: "/learn/java"
  },
  {
    name: "C++",
    description: "A programming language",
    color: "bg-green-100",
    learnLink: "/learn/cpp"
  },
  {
    name: "W3.CSS",
    description: "A CSS framework for faster and better responsive web pages",
    color: "bg-teal-200",
    learnLink: "/learn/w3css"
  },
  {
    name: "Bootstrap",
    description: "A CSS framework for designing better web pages",
    color: "bg-purple-200",
    learnLink: "/learn/bootstrap"
  },
  {
    name: "C",
    description: "A programming language",
    color: "bg-pink-200",
    learnLink: "/learn/c"
  },
  {
    name: "C#",
    description: "A programming language",
    color: "bg-yellow-200",
    learnLink: "/learn/cs"
  }
];

const LanguageCards: React.FC = () => {
  return (
    <div className="space-y-8 mx-6 md:mx-12 lg:mx-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {languageData.map((language, index) => (
          <LanguageCard key={index} {...language} />
        ))}
      </div>
      <AdditionalLanguageCards />
    </div>
  );
};

const LanguageComponents = {
  LanguageCard,
  LanguageCards,
  AdditionalLanguageCards
};

export default LanguageComponents;
