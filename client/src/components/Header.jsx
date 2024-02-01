import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center sm:text-xl dark:color-white font-semibold text-sm"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-red-700 via-pink-500 to-violet-600 rounded-xl text-white">
          Vipul's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden " color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-3">
        <Button className="w-12 h-10 sm:inline hidden" color="gray" pill>
          <FaMoon />
        </Button>
        <Link>
          <Button gradientDuoTone="purpleToBlue" outline>Sign In</Button>
        </Link>
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
            <Navbar.Link active={path=== "/"} as={'div'}>
                <Link to='/'>
                    Home
                </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                <Link to='/about'>
                    About
                </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/Projects"} as={'div'}>
                <Link to='/Projects'>
                    Projects
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  );
}
