import React from "react";
import navbarLogo from "@/public/icons/logo/navbarLogo.svg";
import Link from "next/link";
import ThemeSwitch from "@/components/Modules/Navbar/ThemeSwitch";
import Image from "next/image";
import navbarRoutesItems from "@/constants/navbarRoutesItems";
import { useRouter } from "next/router";
import AccountPopover from "@/components/Modules/AccountPopover/AccountPopover";

export default function DesktopTopNavigation() {
  const router = useRouter();

  const { pathname } = router;
  return (
    <nav className="hidden mb-10 sm:flex items-center justify-between">
      <div className="flex items-center gap-x-10">
        <Image
          src={navbarLogo}
          priority={true}
          alt=""
          className="scale-110"
          style={{ width: "auto" }}
        />
        <ul className="flex items-center sm:gap-x-5 lg:gap-x-6 font-peyda">
          {navbarRoutesItems.map((route, index) => {
            const isActive = pathname === route.href;
            return (
              <li
                key={index}
                className={
                  isActive
                    ? "text-primary-darker dark:text-white"
                    : "text-lightBody dark:text-darkBody"
                }
              >
                <Link href={route.href}>{route.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center gap-x-2 md:gap-x-4">
        <ThemeSwitch />
        <AccountPopover />
      </div>
    </nav>
  );
}
