"use client";
import Image from "next/image";
import AppBar from "./components/AppBar";
import Icon from "../components/website/Icon";


const Home: React.FC = () => {
  return (
    <div className="bg-backgroundImage text-white min-h-screen">
      <AppBar>
        {/* <div className="flex">
          <div className="hidden sm:block grow">
            <label htmlFor="icon" className="sr-only">
              Search
            </label>
            <div className="relative min-w-72 md:min-w-80">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4 text-gray-400">
                <Icon iconName="search" width={16} height={16} color="currentColor" />
              </div>
              <input
                type="text"
                id="icon"
                name="icon"
                className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Search"
              />
            </div>
          </div>
        </div> */}
        <a
        
              className="flex text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="#"
              aria-label="Brand"
            >
              <Image src={'/VP.png'} width={150} height={50} alt='VP_text' />
            </a>
      </AppBar>
      <div className="flex flex-col items-center p-8">
      <div className="container mx-auto">
        {/* <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Reports generated
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle text-gray-500">
                  <Icon iconName="question-circle" width={16} height={16} color="currentColor"/>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                    role="tooltip"
                  >
                    The number of reports generated via platform
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                1,345
              </h3>
              <span className="flex items-center gap-x-1 text-green-600">
                <svg
                  className="inline-block size-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-sm">1.7%</span>
              </span>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col items-center">
        <div className="flex flex-col border-4 border-white shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="p-4 md:p-5">
            <div className="text-center">
              <p className="text-6xl text-[#CDACFF] dark:text-neutral-500 font-mina">
                Toolkit
              </p>
              {/* <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <Icon iconName="question-circle" width={16} height={16} color="currentColor"/>

                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                    role="tooltip"
                  >
                    The number of threats identified via platform
                  </span>
                </div>
              </div> */}
            </div>

            {/* <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                127,222
              </h3>
              <span className="flex items-center gap-x-1 text-green-600">
                <svg
                  className="inline-block size-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-sm">5%</span>
              </span>
            </div> */}
          </div>
        </div>
        <div className="flex items-center my-4">
          <div className="hidden sm:block grow">
            <label htmlFor="icon" className="sr-only">
              Search
            </label>
            <div className="relative min-w-80 md:min-w-96">
              <div className="flex h-10 bg-[#6E509D] rounded-lg focus-within:ring-2 focus-within:ring-[#F5F3F8]">
                <div className="flex flex-col gap-2 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-40 text-white">
                  <Icon iconName="search" width={16} height={16} color="white" />
                  <input
                  type="text"
                  id="icon"
                  name="icon"
                  className="py-2 w-56 border-gray-200 bg-[#6E509D] rounded-lg text-sm focus:outline-none"
                  placeholder="Search"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        {/* <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                Threats Mitigated
              </p>
              <div className="hs-tooltip">
                <div className="hs-tooltip-toggle">
                  <Icon iconName="question-circle" width={16} height={16} color="currentColor"/>

                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                    role="tooltip"
                  >
                    The number of threats mitigated via platform
                  </span>
                </div>
              </div>
            </div> */}

            {/* <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                1,345
              </h3>
              <span className="flex items-center gap-x-1 text-green-600">
                <svg
                  className="inline-block size-4 self-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <span className="inline-block text-sm">1.7%</span>
              </span>
            </div>
          </div>
        </div> */}
      </div>
      { /* <!-- Table Section --> */}
<div className="max-w-[85rem] py-10 lg:py-14 mx-auto">
{/* <!--  Grid --> */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!--  Card-Grid --> */}
          <div className="group flex flex-col h-full bg-white border border-[#CDACFF] shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-[#6B44A7] rounded-t-xl">
              <Image src={'/logo.png'} width={200} height={200} alt="logo"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-[#6806FB]">
                SQL Injection
              </span>
              <h3 className="text-xl font-semibold font-mina text-gray-800">SQLMap</h3>
              <p className="mt-3 text-gray-500">
                A tool that automates the process of detecting and exploiting SQL injection flaws.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View Docs
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 hover:text-[#813BEA] disabled:opacity-50 disabled:pointer-events-none"
                href="/home/services/web-app-testing/sqlmap"
              >
                Generate Report
              </a>
            </div>
          </div>
          {/* <!--  End Card --> */}

          {/* <!--  Card --> */}
          <div className="group flex flex-col h-full bg-white border border-[#CDACFF] shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-[#6B44A7] rounded-t-xl">
              <Image src={'/logo.png'} width={200} height={200} alt="logo"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-[#6806FB]">
                Web Traffic Analysis
              </span>
              <h3 className="text-xl font-semibold font-mina text-gray-800">Whatweb</h3>
              <p className="mt-3 text-gray-500">
                A tool that automates the process of detecting and analysing website traffic.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View Docs
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 hover:text-[#813BEA] disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Generate Report
              </a>
            </div>
          </div>
          {/* <!--  End Card --> */}

          {/* <!--  Card for Nikto --> */}
          <div className="group flex flex-col h-full bg-white border border-[#CDACFF] shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-[#6B44A7] rounded-t-xl">
              <Image src={'/logo.png'} width={200} height={200} alt="logo"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-[#6806FB]">
                Web Server Scanning
              </span>
              <h3 className="text-xl font-semibold font-mina text-gray-800">Nikto</h3>
              <p className="mt-3 text-gray-500">
                A tool that automates the process of scanning web servers for vulnerabilities.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View Docs
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 hover:text-[#813BEA] disabled:opacity-50 disabled:pointer-events-none"
                href="/home/services/web-app-testing/nikto"
              >
                Generate Report
              </a>
            </div>
          </div>
          {/* <!--  End Card --> */}
          
          {/* <!--  Card for Sherlock --> */}
          <div className="group flex flex-col h-full bg-white border border-[#CDACFF] shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-[#6B44A7] rounded-t-xl">
              <Image src={'/logo.png'} width={200} height={200} alt="logo"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-[#6806FB]">
                Reconnaissance
              </span>
              <h3 className="text-xl font-semibold font-mina text-gray-800">Sherlock</h3>
              <p className="mt-3 text-gray-500">
                A tool that automates the process of finding usernames across many social networks.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View Docs
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 hover:text-[#813BEA] disabled:opacity-50 disabled:pointer-events-none"
                href="/home/services/web-app-testing/sherlock"
              >
                Generate Report
              </a>
            </div>
          </div>
          {/* <!--  End Card --> */}

           {/* <!--  Card for Dirsearch --> */}
           <div className="group flex flex-col h-full bg-white border border-[#CDACFF] shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-[#6B44A7] rounded-t-xl">
              <Image src={'/logo.png'} width={200} height={200} alt="logo"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-[#6806FB]">
                Web Server Scanning
              </span>
              <h3 className="text-xl font-semibold font-mina text-gray-800">Dirsearch</h3>
              <p className="mt-3 text-gray-500">
                A tool that automates the process of brute-forcing web paths.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View Docs
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 hover:text-[#813BEA] disabled:opacity-50 disabled:pointer-events-none"
                href="/home/services/web-app-testing/dirsearch"
              >
                Generate Report
              </a>
            </div>
          </div>
          {/* <!--  End Card --> */}

          {/* <!--  Card for theHarvester --> */}
          <div className="group flex flex-col h-full bg-white border border-[#CDACFF] shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-[#6B44A7] rounded-t-xl">
              <Image src={'/logo.png'} width={200} height={200} alt="logo"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-[#6806FB]">
                Reconnaissance
              </span>
              <h3 className="text-xl font-semibold font-mina text-gray-800">theHarvester</h3>
              <p className="mt-3 text-gray-500">
                An OSINT tool for red team assessment of webpages.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View Docs
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 hover:text-[#813BEA] disabled:opacity-50 disabled:pointer-events-none"
                href="/home/services/web-app-testing/harvester"
              >
                Generate Report
              </a>
            </div>
          </div>
          {/* <!--  End Card --> */}

          {/* <!--  Card for Dirb --> */}
          <div className="group flex flex-col h-full bg-white border border-[#CDACFF] shadow-sm rounded-xl">
            <div className="h-52 flex flex-col justify-center items-center bg-[#6B44A7] rounded-t-xl">
              <Image src={'/logo.png'} width={200} height={200} alt="logo"/>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-[#6806FB]">
               Web Content Scanner
              </span>
              <h3 className="text-xl font-semibold font-mina text-gray-800">Dirb</h3>
              <p className="mt-3 text-gray-500">
                A tool that automates the process of brute-forcing web paths to find hidden content.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                View Docs
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 hover:text-[#813BEA] disabled:opacity-50 disabled:pointer-events-none"
                href="/home/services/web-app-testing/dirb"
              >
                Generate Report
              </a>
            </div>
          </div>
          {/* <!--  End Card --> */}      
        </div>
  { /* <!-- End Card-Grid --> */}
</div>
{ /* <!-- End Table Section --> */}
      </div>
      
    </div>
  );
};

export default Home;
