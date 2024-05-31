import React from "react";

const About = () => {
  return (
    <>
      <div className="container1 scroll-smooth">
        <div className="relative wrapper1 bg-[url('https://i.ibb.co/4fG2mSh/2.jpg')] w-[100vw] h-[70vh] bg-cover bg-center bg-fixed ">
          <div className="absolute inset-0 bg-gradient-to-r from-[#dae9f2] to-[#dae9f2] opacity-90 w-[100vw] h-[70vh] z-70 text-black flex items-center justify-center flex-col gap-10">
            <p className="text-[36px] tracking-wide">ABOUT US</p>
            <div className="max-w-[800px] mx-auto flex items-center justify-center flex-col gap-6 text-[16px] font-light">
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you. ​
              </p>
              <p>
                This is a great space to write a long text about your company
                and your services. You can use this space to go into a little
                more detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out and
                show your visitors who you are.
              </p>
            </div>
            <button className="text-[#0c3c60] px-[40px] py-[15px] border border-solid border-black text-[16px] font-medium transition ease duration-300 hover:bg-[#0c3c60] hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
