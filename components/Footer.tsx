import Link from "next/link";
import { logofont, h2font } from "@/fonts";
import { socials, navdata } from "@/constants";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className={`${h2font.className} bg-[#2a3d58] text-darkwhite`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <span className={`${logofont.className} antialiased text-2xl`}>Cashivo</span>
            <p>Empowering smarter financial decisions through secure, seamless technology. Built for clarity and powered by innovation</p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <Link key={social.id} href={social.href} className="text-lg hover:text-contrast active:text-contrast">
                  {social.logo}
                </Link>
              ))}{" "}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold md:text-center">Quick Links</h4>
            <div className="flex flex-col gap-4 md:mx-auto">
              {navdata.map((data) => (
                <Link key={data.id} href={data.href} className="hover:text-contrast hover:font-semibold active:text-contrast">
                  {data.title}
                </Link>
              ))}{" "}
              privacy
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p>Subscribe to get updates and information delivered to your inbox</p>
            <div className="flex flex-col mr-6 md:mr-0 sm:w-[70%] md:w-full sm:flex-row gap-2">
              <Input type="email" placeholder="your email" name="email address" autoComplete="on" />
              <Button className="w-fit">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-4 border-t border-contrast/30 text-center text-sm">
          <div className="flex flex-col gap-2">
            <p>&copy; {new Date().getFullYear()} Cashivo Technologies. All rights reserved</p>
            <a href="https://www.vecteezy.com/free-photos/online" className="text-[13px]">
              Online Stock photos by Vecteezy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
