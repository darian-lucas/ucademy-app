"use client";
import { MenuItem, ModeToggle } from "@/shared/components";
import { IconUsers } from "@/shared/components/icons";
import { menuItems } from "@/shared/constants";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";

const Sidebar = () => {
  const { userId } = useAuth();
  return (
    <div className="hidden p-5 border-r borderDarkMode bgDarkMode lg:flex flex-col fixed top-0 left-0 bottom-0 w-[300px]">
      <Link
        href="/"
        className="font-bold text-2xl inline-flex items-center gap-2 mb-5 h-10 self-start pl-3"
      >
        <span className="size-10 rounded-lg flex items-center justify-center text-lg text-primary bgDarkMode border borderDarkMode">
          U
        </span>
        <span>Ucademy</span>
      </Link>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          ></MenuItem>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-end gap-2">
        <ModeToggle></ModeToggle>
        {!userId ? (
          <Link
            href="/sign-in"
            className="size-10 rounded-lg bg-primary text-white flex items-center justify-center p-1"
          >
            <IconUsers />
          </Link>
        ) : (
          <UserButton />
        )}
      </div>
    </div>
  );
};

export default Sidebar;