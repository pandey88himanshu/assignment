import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container1 scroll-smooth bg-[#0c3c60] text-white">
        <div className="wrapper1 max-w-[1300px] mx-auto">
          <div className="form flex items-center justify-center flex-col gap-7">
            <div>
              <p className="text-[36px] tracking-wide mt-[30px]">CONTACT</p>
            </div>
            <div>
              <form
                action=""
                className="flex items-center justify-between flex-col gap-8 w-screen"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex flex-col w-[30vw] gap-4">
                    <label htmlFor="fname" className="text-[20px]">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      className="border-b border-solid border-white  bg-transparent focus:outline-none "
                    />
                  </div>
                  <div className="flex flex-col w-[30vw] gap-4">
                    <label htmlFor="lname" className="text-[20px]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      className="border-b border-solid border-white  bg-transparent focus:outline-none "
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <div className="flex flex-col w-[30vw] gap-4">
                    <label htmlFor="email" className="text-[20px]">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="border-b border-solid border-white  bg-transparent focus:outline-none "
                    />
                  </div>
                  <div className="flex flex-col w-[30vw] gap-4">
                    <label htmlFor="subject" className="text-[20px]">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="border-b border-solid border-white  bg-transparent focus:outline-none "
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <div className="flex flex-col w-[52vw] gap-4">
                    <label htmlFor="" className="text-[20px]">
                      Message
                    </label>
                    <input
                      type="text"
                      name="message"
                      id
                      message
                      className="border-b border-solid border-white  bg-transparent focus:outline-none "
                    />
                  </div>
                  <div className="flex flex-col  ">
                    <input
                      type="submit"
                      value="Submit"
                      className="px-[40px] py-[15px] bg-white text-black hover:bg-[#ebeff0] hover:text-black cursor-pointer "
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="map mt-[40px] mb-[40px]">
              <iframe
                className="w-[60vw] h-[30vh]"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25228.095053554676!2d-122.419415!3d37.778042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580990e4645ed%3A0xed007ec6a060de06!2sWar%20Memorial%20Opera%20House!5e0!3m2!1sen!2sus!4v1717121393283!5m2!1sen!2sus"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
