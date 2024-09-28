"use client"
import Image from "next/image";
import Icon from "./Icon";
import LoginModal from "./LoginModal";

const Hero: React.FC = () => {
  return (
    <div className="mt-auto mb-auto flex justify-center items-center">
    <div className="grid grid-cols-2 w-full max-w-[85rem] h-full">
        <div className="relative flex flex-col justify-center items-start text-left px-6">
            <h1 className="font-Mina text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight font-mina">
                VortexP
            </h1>
            <p className="mt-0 text-lg text-white" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                Ur friendly neighbourhood hacking toolkit.
            </p>

          {/* <!-- Buttons -> */}
          <div className="mt-5">
                        <button
                            type="button"
                            className="py-3 px-2 inline-flex items-center gap-x-2 text-md font-semibold rounded-lg border border-transparent bg-[#A375E8] text-white hover:bg-[#6E509D]"
                            data-hs-overlay="#hs-basic-modal"
                            style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                        >
                            Login
                            <Icon
                                iconName="chevron-right"
                                width={16}
                                height={16}
                                color="currentColor"
                            />
                        </button>
                    </div>
          {/* <!-- End Buttons -> */}
        </div>
        {/* <!-- End Col -> */}

        <div className="relative ms-4">
                    <Image
                        className="w-full rounded-md brightness-125 contrast-50"
                        width={400}
                        height={400}
                        src="/dc_home.webp"
                        alt="Image Description"
                    />
                </div>
        {/* <!-- End Col -> */}
      </div>
      <LoginModal />
    </div>
  );
};

export default Hero;
