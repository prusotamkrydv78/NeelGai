import React from "react";

const Home = () => {
  return (
    <>
      <section id="page1 " className="bg-[#fcf5b1]  flex flex-col gap-7 items-center    justify-center pt-12 text-center">
        <div className="w-[45vw] flex flex-col gap-7 items-center">
          <h1 className="text-[60px] leading-[1] capitalize">
            <span>welcome</span> <br />to Neelgai
          </h1>
          <p>
            We builad software, AI models, web and mobile applications, and
            manage cloud infrastructure and cybersecurity at a low cost. With a
            global presence, we operate 24/7 to meet tight deadlines. We adopt
            latest technologies to stay relevant with the current tech
            landscape.
          </p>
          <div className=" inline-flex justify-center items-center bg-black text-white   rounded-full px-5 py-2 w-fit">

          <button type="button">let's talk</button>
          </div>
        </div>
          <div className="flex justify-center items-center">
            <img src="https://www.neelgai.com/static/media/home.e8e52af37861220e2122.png" className="w-[85%]" alt="" />
          </div>
          <div>
            
          </div>
      </section>
    </>
  );
};

export default Home;
