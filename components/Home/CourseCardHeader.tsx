"use client"
import React from 'react';
import LanguageComponents from './LanguageCard';
import Link from 'next/link';

interface CourseData {
  title: string;
  description: string;
  learnLink: string;
  videoLink: string;
  referenceLink: string;
  certificationLink: string;
  codeExample: string;
  backgroundColor: string;
}

const courses: CourseData[] = [
  {
    title: "HTML",
    description: "The language for building web pages",
    learnLink: "/learn-html",
    videoLink: "/video-tutorial-html",
    referenceLink: "/html-reference",
    certificationLink: "/get-certified-html",
    codeExample: `<!DOCTYPE html>
<html>
<head>
<title>HTML Tutorial</title>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`,
    backgroundColor: "#D9EEE1"
  },
  {
    title: "CSS",
    description: "The language for styling web pages",
    learnLink: "/learn-css",
    videoLink: "/video-tutorial-css",
    referenceLink: "/css-reference",
    certificationLink: "/get-certified-css",
    codeExample: `body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`,
    backgroundColor: "#FFF4A3"
  },
  {
    title: "JavaScript",
    description: "The language for programming web pages",
    learnLink: "/learn-javascript",
    videoLink: "/video-tutorial-javascript",
    referenceLink: "/javascript-reference",
    certificationLink: "/get-certified-javascript",
    codeExample: `function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}`,
    backgroundColor: "#282A35"
  },
  {
    title: "Python",
    description: "A popular programming language",
    learnLink: "/learn-python",
    videoLink: "/video-tutorial-python",
    referenceLink: "/python-reference",
    certificationLink: "/get-certified-python",
    codeExample: `x = 5
y = 10
print(x + y)`,
    backgroundColor: "#F3ECEA"
  },
  {
    title: "SQL",
    description: "A language for accessing databases",
    learnLink: "/learn-sql",
    videoLink: "/video-tutorial-sql",
    referenceLink: "/sql-reference",
    certificationLink: "/get-certified-sql",
    codeExample: `SELECT * FROM Customers
WHERE Country='Mexico';`,
    backgroundColor: "#96D4D4"
  }
];

const CourseCard: React.FC<CourseData> = ({ title, description, learnLink, videoLink, referenceLink, certificationLink, codeExample, backgroundColor }) => {
  return (
    <>
    <div style={{ backgroundColor }} className="h-[600px]">
      <div className="container mx-auto px-4 py-12 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className={`text-6xl font-bold mb-4 ${title === "JavaScript" ? "text-white" : "text-black"}`}>{title}</h1>
            <p className={`text-xl mb-6 ${title === "JavaScript" ? "text-white" : "text-black"}`}>{description}</p>
            <div className="space-y-4">
              <Link href={learnLink} className="inline-block bg-[#04AA6D] text-white py-2 px-4 rounded-full text-lg font-semibold hover:bg-[#059862] transition-colors">
                Learn {title}
              </Link>
              <Link href={videoLink} className="inline-block bg-[#FFF4A3] text-black py-2 px-4 rounded-full text-lg font-semibold hover:bg-[#fff080] transition-colors ml-4">
                Video Tutorial
              </Link>
              <Link href={referenceLink} className="inline-block bg-black text-white py-2 px-4 rounded-full text-lg font-semibold hover:bg-[#1d1f20] transition-colors">
                {title} Reference
              </Link>
              <Link href={certificationLink} className="inline-block bg-[#FFC0C7] text-black py-2 px-4 rounded-full text-lg font-semibold hover:bg-[#ffb3bb] transition-colors ml-4">
                Get Certified
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 h-full flex flex-col">
            <div className="bg-[#E7E9EB] rounded-lg p-4 shadow-lg flex-grow flex flex-col">
              <h2 className="text-xl font-semibold mb-3 text-black">{title} Example:</h2>
              <div className="bg-[#ffffff] p-4 rounded flex-grow overflow-auto">
                <pre className="text-sm h-full">
                  <code className="text-black">{codeExample}</code>
                </pre>
              </div>
              <button className="mt-4 bg-[#04AA6D] text-white py-2 px-4 rounded-full text-lg font-semibold hover:bg-[#059862] transition-colors">
                Try it Yourself
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      </>
  );
};

const CourseCardHeader: React.FC = () => {
  return (
    <>
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />

      ))}
      <LanguageComponents.LanguageCards />

    </>
  );
};

export default CourseCardHeader;
