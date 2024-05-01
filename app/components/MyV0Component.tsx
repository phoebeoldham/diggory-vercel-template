=== component.jsx ===

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BBRCfBSEn97
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col">
      <header className="bg-gray-900 dark:bg-gray-950 text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manchester, UK</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ThermometerIcon className="w-5 h-5" />
              <span className="text-lg font-medium">12°C</span>
            </div>
            <div className="flex items-center gap-2">
              <SunSnowIcon className="w-5 h-5" />
              <span className="text-lg font-medium">Sunny</span>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8 px-6 flex-1 grid gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Today's Weather</h2>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="text-4xl font-bold">12°C</div>
                <div className="text-gray-500 dark:text-gray-400">Sunny</div>
              </div>
              <img
                alt="Weather icon"
                className="w-20 h-20"
                height="100"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">5-Day Forecast</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-lg font-medium">Mon</div>
                <div className="text-gray-500 dark:text-gray-400">10°C / 6°C</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium">Tue</div>
                <div className="text-gray-500 dark:text-gray-400">12°C / 8°C</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium">Wed</div>
                <div className="text-gray-500 dark:text-gray-400">14°C / 10°C</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium">Thu</div>
                <div className="text-gray-500 dark:text-gray-400">16°C / 12°C</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-medium">Fri</div>
                <div className="text-gray-500 dark:text-gray-400">18°C / 14°C</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Weather Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <WindIcon className="w-5 h-5" />
              <div>
                <div className="text-gray-500 dark:text-gray-400">Wind</div>
                <div className="font-medium">10 mph</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThermometerIcon className="w-5 h-5" />
              <div>
                <div className="text-gray-500 dark:text-gray-400">Humidity</div>
                <div className="font-medium">60%</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ViewIcon className="w-5 h-5" />
              <div>
                <div className="text-gray-500 dark:text-gray-400">Visibility</div>
                <div className="font-medium">10 km</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <PowerIcon className="w-5 h-5" />
              <div>
                <div className="text-gray-500 dark:text-gray-400">Pressure</div>
                <div className="font-medium">1020 hPa</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-4 px-6">
        <div className="container mx-auto text-center text-sm">© 2024 Acme Weather. All rights reserved.</div>
      </footer>
    </div>
  )
}

function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <line x1="12" x2="12" y1="2" y2="12" />
    </svg>
  )
}


function SunSnowIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 9a3 3 0 1 0 0 6" />
      <path d="M2 12h1" />
      <path d="M14 21V3" />
      <path d="M10 4V3" />
      <path d="M10 21v-1" />
      <path d="m3.64 18.36.7-.7" />
      <path d="m4.34 6.34-.7-.7" />
      <path d="M14 12h8" />
      <path d="m17 4-3 3" />
      <path d="m14 17 3 3" />
      <path d="m21 15-3-3 3-3" />
    </svg>
  )
}


function ThermometerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
}


function ViewIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  )
}


function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}

=== styles.css ===

body {
  font-family: var(--font-libre_franklin), sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-libre_franklin), sans-serif;
}

=== layout.jsx ===

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Libre_Franklin } from 'next/font/google'
import './styles.css'

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_franklin',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={libre_franklin.variable}>
        {children}
      </body>
    </html>
  )
}
