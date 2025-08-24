import React from "react";

const Clippath = () => {
    return (
        <>
            {/* Big Center Text */}
            <div className="w-full h-[50vh] flex flex-col justify-center items-center m-8 text-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#009E66] tracking-wide">
                    Talk with me <span className="text-white bg-[#009E66] px-4 py-2 rounded-2xl">AI</span>
                </h1>

                {/* Tagline just below */}
                <p className="mt-6 text-lg italic text-black">
                    Click on chat icon to talk to my personal assistant
                </p>
            </div>

            {/* Footer */}
            <p className="text-white w-full h-10 flex justify-center items-center text-md text-center bg-[#009e66]">
                © {new Date().getFullYear()} Pankaj Kumar. All rights reserved.
            </p>
        </>
    );
};

export default Clippath;
