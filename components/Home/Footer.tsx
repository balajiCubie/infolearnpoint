import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#282A35] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Top Tutorials</h3>
            <ul className="space-y-2">
              <li><Link href="/html">HTML Tutorial</Link></li>
              <li><Link href="/css">CSS Tutorial</Link></li>
              <li><Link href="/javascript">JavaScript Tutorial</Link></li>
              <li><Link href="/how-to">How To Tutorial</Link></li>
              <li><Link href="/sql">SQL Tutorial</Link></li>
              <li><Link href="/python">Python Tutorial</Link></li>
              <li><Link href="/bootstrap">Bootstrap Tutorial</Link></li>
              <li><Link href="/php">PHP Tutorial</Link></li>
              <li><Link href="/java">Java Tutorial</Link></li>
              <li><Link href="/cpp">C++ Tutorial</Link></li>
              <li><Link href="/jquery">jQuery Tutorial</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Top References</h3>
            <ul className="space-y-2">
              <li><Link href="/html/ref">HTML Reference</Link></li>
              <li><Link href="/css/ref">CSS Reference</Link></li>
              <li><Link href="/js/ref">JavaScript Reference</Link></li>
              <li><Link href="/sql/ref">SQL Reference</Link></li>
              <li><Link href="/python/ref">Python Reference</Link></li>
              <li><Link href="/bootstrap/ref">Bootstrap Reference</Link></li>
              <li><Link href="/php/ref">PHP Reference</Link></li>
              <li><Link href="/colors/ref">HTML Colors</Link></li>
              <li><Link href="/java/ref">Java Reference</Link></li>
              <li><Link href="/angular/ref">Angular Reference</Link></li>
              <li><Link href="/jquery/ref">jQuery Reference</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Top Examples</h3>
            <ul className="space-y-2">
              <li><Link href="/html/examples">HTML Examples</Link></li>
              <li><Link href="/css/examples">CSS Examples</Link></li>
              <li><Link href="/js/examples">JavaScript Examples</Link></li>
              <li><Link href="/how-to/examples">How To Examples</Link></li>
              <li><Link href="/sql/examples">SQL Examples</Link></li>
              <li><Link href="/python/examples">Python Examples</Link></li>
              <li><Link href="/bootstrap/examples">Bootstrap Examples</Link></li>
              <li><Link href="/php/examples">PHP Examples</Link></li>
              <li><Link href="/java/examples">Java Examples</Link></li>
              <li><Link href="/xml/examples">XML Examples</Link></li>
              <li><Link href="/jquery/examples">jQuery Examples</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Get Certified</h3>
            <ul className="space-y-2">
              <li><Link href="/cert/html">HTML Certificate</Link></li>
              <li><Link href="/cert/css">CSS Certificate</Link></li>
              <li><Link href="/cert/javascript">JavaScript Certificate</Link></li>
              <li><Link href="/cert/frontend">Front End Certificate</Link></li>
              <li><Link href="/cert/sql">SQL Certificate</Link></li>
              <li><Link href="/cert/python">Python Certificate</Link></li>
              <li><Link href="/cert/php">PHP Certificate</Link></li>
              <li><Link href="/cert/jquery">jQuery Certificate</Link></li>
              <li><Link href="/cert/java">Java Certificate</Link></li>
              <li><Link href="/cert/cpp">C++ Certificate</Link></li>
              <li><Link href="/cert/csharp">C# Certificate</Link></li>
              <li><Link href="/cert/xml">XML Certificate</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-center space-x-4">
          <Link href="https://www.youtube.com/" className="text-white hover:text-gray-300">
            <span className="sr-only">YouTube</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/" className="text-white hover:text-gray-300">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          <Link href="https://discord.gg/" className="text-white hover:text-gray-300">
            <span className="sr-only">Discord</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
          </Link>
          <Link href="https://www.facebook.com/" className="text-white hover:text-gray-300">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link href="https://www.instagram.com/" className="text-white hover:text-gray-300">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/forum" className="text-white hover:text-gray-300">FORUM</Link>
          <Link href="/about" className="text-white hover:text-gray-300">ABOUT</Link>
          <Link href="/academy" className="text-white hover:text-gray-300">ACADEMY</Link>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          InfoLearnPoint is optimized for learning and training. Examples might be simplified to improve reading and learning.
          Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
          of all content. While using InfoLearnPoint, you agree to have read and accepted our terms of use, cookie and privacy policy.
        </p>
        <p className="mt-4 text-center text-sm text-gray-400">
          Copyright 1999-2024 by InfoLearnPoint. All Rights Reserved. InfoLearnPoint is Powered by InfoLearnPoint.CSS.
        </p>
      </div>
      <div className="absolute bottom-0 right-0 mb-4 mr-4">
        <Image src="/astronaut.png" alt="InfoLearnPoint Mascot" width={100} height={100} />
      </div>
    </footer>
  );
};

export default Footer;
