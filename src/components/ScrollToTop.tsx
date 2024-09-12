'use client'

export default function ScrollToTop() {
  return (
    <div className="fixed bottom-0 right-0 z-50 m-4 flex items-center justify-center gap-2 rounded-full bg-white p-2 shadow-md hover:bg-main hover:text-white hover:shadow-lg">
      <svg
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
        <path d="M9 5l7 7-7 7"></path>
      </svg>
      <span>Back to top</span>
    </div>
  )
}
