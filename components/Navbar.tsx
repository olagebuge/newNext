import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container z-30 py-5 relative">
      <Link href="/">
        <Image src="/hilink-logo.svg" width={74} height={29} alt="logo" />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              className="regular-16 text-gray-50 flexCenter 
                  cursor-pointer pb-1.5 transition-all hover:font-bold"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image 
        src="menu.svg" 
        alt="menu" 
        width={32} 
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
