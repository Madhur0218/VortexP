"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOut } from "@/lib/firebase/firebase";
import AppBar from "../components/AppBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AccountPage: React.FC = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <AppBar>
        <a
          className="flex text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
          href="#"
          aria-label="Brand"
        >
          <Image src={'/VP.png'} width={150} height={50} alt='VP_text' />
        </a>
      </AppBar>
      <div className="flex flex-col items-center p-8">
        <div className="flex items-center gap-8 px-80 m-8 mx-20">
          <Image
            width={96}
            height={96}
            className="inline-block rounded-full"
            src={user?.photoURL || "/profile.png"}
            alt="Image Description"
          />
          <p className="text-5xl font-mina font-semibold text-[#F5F3F8]">
            {user?.displayName || "Full Name"}
          </p>
        </div>


        <div className="flex flex-col w-3/5 h-auto pl-24 pr-12 py-16 m-8 rounded-lg shadow-lg bg-white">
        <div className="grid grid-cols-2 gap-4 mb-16">
              <div>
                <label className="block font-mina text-2xl font-medium text-black mx-1">
                  Username
                </label>
                <p className="py-1 text-lg font-normal text-black w-60 h-9 rounded-md px-2 bg-[#CFC5DE]">
                  {user?.displayName || "username"}
                </p>
              </div>
              <div>
                <label className="block font-mina text-2xl font-medium text-black mx-1">
                  Date of Birth
                </label>
                <p className="py-1 text-lg font-normal text-black w-60 h-9 rounded-md px-2 bg-[#CFC5DE]">
                  {user?.displayName || "dd/mm/yyyy"}
                </p>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-16">
             <div>
                <label className="block font-mina text-2xl font-medium text-black mx-1">
                  Email
                </label>
                <p className="py-1 text-lg font-normal text-black w-60 h-9 rounded-md px-2 bg-[#CFC5DE]">
                  {user?.displayName || "email"}
                </p>
              </div>
              <div>
              <div className="flex items-center gap-1">
            <label className="block font-mina text-2xl font-medium text-black mx-1 mx-1">
                Gender
              </label>
              <Image
                width={15}
                height={15}
                className="inline-block pb-0.5"
                src={user?.photoURL || "/edit.png"}
                alt="Image Description"
              />
            </div>
                <p className="py-1 text-lg font-normal text-black w-60 h-9 rounded-md px-2 bg-[#CFC5DE]">
                  {user?.displayName || "-"}
                </p>
              </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-1">
            <label className="block font-mina text-2xl font-medium text-black mx-1 mx-1">
                Password
              </label>
              <Image
                width={15}
                height={15}
                className="inline-block pb-0.5"
                src={user?.photoURL || "/edit.png"}
                alt="Image Description"
              />
            </div>
              <p className="py-1 text-lg font-normal text-black w-60 h-9 rounded-md px-2 bg-[#CFC5DE]">
                  {user?.displayName || "password"}
              </p>
           </div>
        </div>
        <div className="w-28 h-12 flex items-center bg-[#A375E8] shadow-sm rounded-xl md:p-5 hover:bg-[#6E509D]">
          <button
            type="button"
            className="ml-1 inline-flex items-center gap-x-2 text-[15px] font-semibold rounded-lg border border-transparent text-white"
            onClick={() => {
              signOut();
              router.push("/");
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
