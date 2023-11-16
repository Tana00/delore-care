import { useEffect } from "react";

export const Notification = ({ title, message, closeModal }) => {
  return (
    <div className={`z-50 box-modal modal-show`}>
      <div className="overlay"></div>
      <div className="body-modal flex flex-col items-center justify-center relative">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-auto absolute top-8 right-10 cursor-pointer"
          onClick={closeModal}
        >
          <circle cx="24" cy="24" r="24" fill="#F7F7F7" />
          <path
            d="M20.7515 24L14.4633 17.7118C13.5663 16.8148 13.5663 15.3605 14.4633 14.4635C15.3603 13.5665 16.8145 13.5665 17.7116 14.4635L23.9998 20.7517L30.2879 14.4635C31.1849 13.5665 32.6392 13.5665 33.5362 14.4635C34.4332 15.3605 34.4332 16.8148 33.5362 17.7118L27.248 24L33.5362 30.2882C34.4332 31.1852 34.4332 32.6395 33.5362 33.5365C33.0877 33.9849 32.4999 34.2092 31.9121 34.2092C31.3243 34.2092 30.7364 33.985 30.288 33.5365L23.9998 27.2483L17.7116 33.5365C17.2631 33.9849 16.6753 34.2092 16.0874 34.2092C15.4996 34.2092 14.9118 33.985 14.4633 33.5365C13.5663 32.6395 13.5663 31.1852 14.4633 30.2882L20.7515 24Z"
            fill="#373737"
            fillOpacity="0.5"
          />
        </svg>

        <div className="flex flex-col items-center justify-center font-gilmer">
          <img
            src="/assets/icons/checked-green.svg"
            alt="checked icon"
            className="my-4"
          />
          <div className="text-blue font-bold text-4xl leading-[60px]">
            {title}
          </div>
          <div className="font-medium text-base text-black">{message}</div>
        </div>
      </div>
    </div>
  );
};

export const ErrorToast = ({ closeToast, message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast();
    }, 5000); // 30000 milliseconds = 30 seconds

    // This function will run when the component unmounts or when the dependencies of useEffect change
    return () => {
      clearTimeout(timer);
    };
  }, [closeToast]);
  return (
    <div className="bg-[#fef2f2] border border-[#f87171] rounded text-[#991b1b] text-sm p-4 flex justify-between sm:w-[380px] lg:w-2/5 max-w-[430px] fixed right-1 top-4 z-50">
      <div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <p>
            {/* <span className="font-bold">Error: </span> 
            Unable to send message. Please try again*/}
            {message}
          </p>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={closeToast}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};
