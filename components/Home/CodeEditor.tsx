import React, { useState, useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeEditor: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Interactive Demo</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
    <h1>Interactive Demo</h1>
    <p>Click the buttons to interact with the demo:</p>
    <button onclick="changeColor()">Change Text Color</button>
    <button onclick="changeBackground()">Change Background</button>
    <button onclick="addElement()">Add Element</button>
    <p id="colorText">This text will change color!</p>
    <div id="container"></div>
</body>
</html>
  `);

  const [cssCode, setCssCode] = useState(`
body {
    font-family: 'Roboto', sans-serif;
    transition: background-color 0.5s ease;
    padding: 20px;
}
button {
    margin: 5px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
}
#colorText {
    font-size: 18px;
    font-weight: bold;
    transition: color 0.3s ease;
}
.added-element {
    margin-top: 15px;
    padding: 15px;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.added-element:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.added-element::before {
    content: '✨';
    margin-right: 8px;
    font-size: 1.2em;
}

.added-element::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #4ECDC4, #45B7D1);
    margin-top: 10px;
}
  `);

  const [jsCode, setJsCode] = useState(`
// Color palette
const colors = {
    text: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#FFD700', '#9370DB', '#20B2AA', '#FF69B4', '#00CED1'],
    background: ['#F7F7F7', '#E8F5E9', '#FFF3E0', '#E3F2FD', '#FCE4EC', '#F0F4C3', '#E0F7FA', '#FFF9C4', '#F3E5F5', '#EFEBE9']
};

// Utility function to get random item from array
const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

// Debounce function to limit rate of execution
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

// Change color with transition
const changeColor = debounce(() => {
    const colorText = document.getElementById('colorText');
    const newColor = getRandomItem(colors.text);
    colorText.style.transition = 'color 0.5s ease';
    colorText.style.color = newColor;
}, 200);

// Change background with transition
const changeBackground = debounce(() => {
    const newColor = getRandomItem(colors.background);
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = newColor;
}, 200);

// Add element with animation
const addElement = (() => {
    let counter = 0;
    return () => {
        const container = document.getElementById('container');
        const newElement = document.createElement('div');
        newElement.className = 'added-element';
        newElement.textContent = \`Element #\${++counter} added at \${new Date().toLocaleTimeString()}\`;
        newElement.style.opacity = '0';
        newElement.style.transform = 'translateY(20px)';
        container.appendChild(newElement);

        // Trigger reflow
        newElement.offsetHeight;

        newElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        newElement.style.opacity = '1';
        newElement.style.transform = 'translateY(0)';

        // Remove oldest element if more than 5
        if (container.children.length > 5) {
            const oldestElement = container.firstElementChild;
            oldestElement.style.opacity = '0';
            oldestElement.style.transform = 'translateY(-20px)';
            setTimeout(() => container.removeChild(oldestElement), 500);
        }
    };
})();

// Event listeners
document.getElementById('colorButton').addEventListener('click', changeColor);
document.getElementById('backgroundButton').addEventListener('click', changeBackground);
document.getElementById('addElementButton').addEventListener('click', addElement);
  `);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [editMode, setEditMode] = useState<'html' | 'css' | 'js'>('html');
  const editorRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    updateOutput();
  }, [htmlCode, cssCode, jsCode]);

  const updateOutput = () => {
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          ${htmlCode}
          <style>${cssCode}</style>
          <script>${jsCode}</script>
        `);
        iframeDoc.close();
      }
    }
  };

  const getEditorContent = () => {
    switch (editMode) {
      case 'html':
        return htmlCode;
      case 'css':
        return cssCode;
      case 'js':
        return jsCode;
      default:
        return '';
    }
  };

  const setEditorContent = (newContent: string) => {
    switch (editMode) {
      case 'html':
        setHtmlCode(newContent);
        break;
      case 'css':
        setCssCode(newContent);
        break;
      case 'js':
        setJsCode(newContent);
        break;
    }
  };

  const handleEditorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setEditorContent(newContent);
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Code Editor</h2>
        <p className="mb-8 text-center">
          Edit HTML, CSS, and JavaScript code and see the results in real-time!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-700 px-4 py-2 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-sm">
                <button
                  onClick={() => setEditMode('html')}
                  className={`px-2 py-1 rounded ${editMode === 'html' ? 'bg-blue-500' : 'bg-gray-600'}`}
                >
                  HTML
                </button>
                <button
                  onClick={() => setEditMode('css')}
                  className={`px-2 py-1 rounded ml-2 ${editMode === 'css' ? 'bg-blue-500' : 'bg-gray-600'}`}
                >
                  CSS
                </button>
                <button
                  onClick={() => setEditMode('js')}
                  className={`px-2 py-1 rounded ml-2 ${editMode === 'js' ? 'bg-blue-500' : 'bg-gray-600'}`}
                >
                  JS
                </button>
              </div>
            </div>
            <div className="relative" style={{ height: '500px', overflow: 'hidden' }}>
              <textarea
                ref={editorRef}
                value={getEditorContent()}
                onChange={handleEditorChange}
                className="w-full h-full bg-gray-800 text-white font-mono text-sm resize-none outline-none p-4"
                spellCheck="false"
                style={{
                  lineHeight: '1.5',
                  tabSize: '2',
                }}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 px-4 py-2 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-700 text-sm">Live Preview</div>
            </div>
            <iframe
              ref={iframeRef}
              className="w-full h-[500px] border-none"
              title="Live Preview"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => {
              setHtmlCode('');
              setCssCode('');
              setJsCode('');
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Clear Editor
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
