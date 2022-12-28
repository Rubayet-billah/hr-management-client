import { Footer } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterArea = () => {
  return (
    <Footer>
      <div className="w-full">
        <div className="border-t rounded-none">
          <div className='container mx-auto grid w-full grid-cols-2 gap-8 py-8 md:grid-cols-4'>
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">
                  About
                </Footer.Link>
                <Link to="/careers" className='hover:underline'>
                  Careers
                </Link>
                <Footer.Link href="#">
                  Brand Center
                </Footer.Link>
                <Footer.Link href="#">
                  Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">
                  Discord Server
                </Footer.Link>
                <Footer.Link href="#">
                  Twitter
                </Footer.Link>
                <Footer.Link href="#">
                  Facebook
                </Footer.Link>
                <Footer.Link href="#">
                  Contact Us
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Licensing
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="services" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">
                  Pricing
                </Footer.Link>
                <Footer.Link href="#">
                  Newsletter
                </Footer.Link>
                <Footer.Link href="#">
                  Team
                </Footer.Link>
                <Footer.Link href="#">
                  Testimonials
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full text-center border-t py-6 px-4 flex justify-center">
          <Footer.Copyright
            href="/"
            by="Staff Deck™"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
};

export default FooterArea;
