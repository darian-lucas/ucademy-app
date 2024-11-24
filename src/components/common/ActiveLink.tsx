"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface ActiveLinkProps {
  url: string;
  children: React.ReactNode;
}

const ActiveLink = ({ url, children }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = url === pathname;
  console.log("🚀 ~ ActiveLink ~ isActive:", isActive)
  return (
    <Link
      href={url}
      className={`p-4 rounded-md flex items-center gap-3 transition-all ${isActive ?"text-white bg-primary" : "hover:text-primary hover:bg-primary hover:bg-opacity-10 "}`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
