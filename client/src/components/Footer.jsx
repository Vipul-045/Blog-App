import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsGithub,BsTwitterX} from 'react-icons/bs';

export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center text-lg sm:text-xl dark:color-white font-semibold"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-red-700 via-pink-500 to-violet-600 rounded-xl text-white">
                Vipul's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="../pages/about.jsx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vipul's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Vipul-045"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://twitter.com/vipulyadav0479"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms &amp; Conditions
                </Footer.Link>
                
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
         <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
          href="#"
          by="Vipul's Blog"
          year={new Date().getFullYear()}
          />
          <div className="flex gap-4 sm:mt-0 mt-4">
            <Footer.Icon href="#" icon={BsFacebook}/>
            <Footer.Icon href="#" icon={BsInstagram}/>
            <Footer.Icon href="#" icon={BsTwitterX}/>
            <Footer.Icon href="#" icon={BsGithub}/>
          </div>
         </div>
      </div>
      <div></div>
    </Footer>
  );
}
