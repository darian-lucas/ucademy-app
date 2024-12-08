import Link from "next/link";

const IconLeftArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <h1 className="font-bold text-7xl">404</h1>
      <h2 className="mb-5">Page not found</h2>
      <Link href="/" className="flex items-center gap-2 hover:text-primary">
        {IconLeftArrow}
        Trang chủ
      </Link>
    </div>
  );
};

export default PageNotFound;
