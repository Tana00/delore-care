import Link from "next/link";

const BookAppointment = () => {
  return (
    <section className="py-6 px-5 sm:px-10 lg:px-20 xl:px-40 max-w-[1920px] mx-auto w-full my-10">
      <div className="bg-blue-light border border-blue-200 px-5 sm:px-10 rounded-2xl py-6">
        <p className="text-blue font-bold text-base leading-8">
          Book an appointment with us
        </p>
        <div className="flex items-center justify-center 2xl:justify-start flex-col xl:flex-row gap-4 py-4 w-full max-w-7xl mx-auto 2xl:mr-auto 2xl:ml-0 font-medium">
          <div className="flex items-center justify-between flex-col md:flex-row w-full gap-4">
            <div className="bg-white rounded-lg px-4 py-3.5 w-full">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-blue-light p-2 flex items-center justify-center rounded-full">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_266_348)">
                        <path
                          d="M4.4711 0C4.60106 0 4.72569 0.0516249 4.81758 0.143518C4.90948 0.23541 4.9611 0.360044 4.9611 0.49V1.4063H10.223V0.4963C10.223 0.366344 10.2746 0.24171 10.3665 0.149818C10.4584 0.0579249 10.583 0.0063 10.713 0.0063C10.843 0.0063 10.9676 0.0579249 11.0595 0.149818C11.1514 0.24171 11.203 0.366344 11.203 0.4963V1.4063H13.1C13.4712 1.4063 13.8272 1.5537 14.0897 1.8161C14.3522 2.0785 14.4998 2.43442 14.5 2.8056V12.6007C14.4998 12.9719 14.3522 13.3278 14.0897 13.5902C13.8272 13.8526 13.4712 14 13.1 14H1.9C1.52882 14 1.17283 13.8526 0.910298 13.5902C0.647767 13.3278 0.500186 12.9719 0.5 12.6007V2.8056C0.500186 2.43442 0.647767 2.0785 0.910298 1.8161C1.17283 1.5537 1.52882 1.4063 1.9 1.4063H3.9811V0.4893C3.98129 0.359465 4.03299 0.235012 4.12487 0.14327C4.21674 0.0515286 4.34126 -1.32484e-07 4.4711 0ZM1.48 5.4194V12.6007C1.48 12.6559 1.49086 12.7105 1.51197 12.7614C1.53308 12.8124 1.56401 12.8587 1.60302 12.8977C1.64202 12.9367 1.68832 12.9676 1.73927 12.9887C1.79023 13.0098 1.84484 13.0207 1.9 13.0207H13.1C13.1552 13.0207 13.2098 13.0098 13.2607 12.9887C13.3117 12.9676 13.358 12.9367 13.397 12.8977C13.436 12.8587 13.4669 12.8124 13.488 12.7614C13.5091 12.7105 13.52 12.6559 13.52 12.6007V5.4292L1.48 5.4194ZM5.1669 10.2333V11.3995H4V10.2333H5.1669ZM8.0831 10.2333V11.3995H6.9169V10.2333H8.0831ZM11 10.2333V11.3995H9.8331V10.2333H11ZM5.1669 7.4494V8.6156H4V7.4494H5.1669ZM8.0831 7.4494V8.6156H6.9169V7.4494H8.0831ZM11 7.4494V8.6156H9.8331V7.4494H11ZM3.9811 2.3856H1.9C1.84484 2.3856 1.79023 2.39646 1.73927 2.41757C1.68832 2.43868 1.64202 2.46961 1.60302 2.50862C1.56401 2.54762 1.53308 2.59392 1.51197 2.64487C1.49086 2.69583 1.48 2.75044 1.48 2.8056V4.4401L13.52 4.4499V2.8056C13.52 2.75044 13.5091 2.69583 13.488 2.64487C13.4669 2.59392 13.436 2.54762 13.397 2.50862C13.358 2.46961 13.3117 2.43868 13.2607 2.41757C13.2098 2.39646 13.1552 2.3856 13.1 2.3856H11.203V3.0359C11.203 3.16586 11.1514 3.29049 11.0595 3.38238C10.9676 3.47428 10.843 3.5259 10.713 3.5259C10.583 3.5259 10.4584 3.47428 10.3665 3.38238C10.2746 3.29049 10.223 3.16586 10.223 3.0359V2.3856H4.9611V3.0296C4.9611 3.15956 4.90948 3.28419 4.81758 3.37608C4.72569 3.46798 4.60106 3.5196 4.4711 3.5196C4.34114 3.5196 4.21651 3.46798 4.12462 3.37608C4.03272 3.28419 3.9811 3.15956 3.9811 3.0296V2.3856Z"
                          fill="#12355B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_266_348">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-base 2xl:text-lg">Mon. - Fri.</p>
                </div>
                <svg
                  width="2"
                  height="26"
                  viewBox="0 0 2 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="1"
                    height="25"
                    rx="0.5"
                    fill="#12355B"
                  />
                </svg>
                <div className="flex items-center justify-center gap-3 2xl:gap-6">
                  <div className="bg-blue-light p-2 flex items-center justify-center rounded-full">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.49325 1.33337C4.81325 1.33337 1.83325 4.32004 1.83325 8.00004C1.83325 11.68 4.81325 14.6667 8.49325 14.6667C12.1799 14.6667 15.1666 11.68 15.1666 8.00004C15.1666 4.32004 12.1799 1.33337 8.49325 1.33337ZM8.49992 13.3334C5.55325 13.3334 3.16659 10.9467 3.16659 8.00004C3.16659 5.05337 5.55325 2.66671 8.49992 2.66671C11.4466 2.66671 13.8333 5.05337 13.8333 8.00004C13.8333 10.9467 11.4466 13.3334 8.49992 13.3334ZM8.83325 4.66671H7.83325V8.66671L11.3333 10.7667L11.8333 9.94671L8.83325 8.16671V4.66671Z"
                        fill="#12355B"
                      />
                    </svg>
                  </div>
                  <p className="text-base 2xl:text-lg">5:30am - 10:00pm</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg px-6 py-3.5 w-full">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center justify-center gap-3 2xl:gap-6">
                  <div className="bg-blue-light p-2 flex items-center justify-center rounded-full">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_266_348)">
                        <path
                          d="M4.4711 0C4.60106 0 4.72569 0.0516249 4.81758 0.143518C4.90948 0.23541 4.9611 0.360044 4.9611 0.49V1.4063H10.223V0.4963C10.223 0.366344 10.2746 0.24171 10.3665 0.149818C10.4584 0.0579249 10.583 0.0063 10.713 0.0063C10.843 0.0063 10.9676 0.0579249 11.0595 0.149818C11.1514 0.24171 11.203 0.366344 11.203 0.4963V1.4063H13.1C13.4712 1.4063 13.8272 1.5537 14.0897 1.8161C14.3522 2.0785 14.4998 2.43442 14.5 2.8056V12.6007C14.4998 12.9719 14.3522 13.3278 14.0897 13.5902C13.8272 13.8526 13.4712 14 13.1 14H1.9C1.52882 14 1.17283 13.8526 0.910298 13.5902C0.647767 13.3278 0.500186 12.9719 0.5 12.6007V2.8056C0.500186 2.43442 0.647767 2.0785 0.910298 1.8161C1.17283 1.5537 1.52882 1.4063 1.9 1.4063H3.9811V0.4893C3.98129 0.359465 4.03299 0.235012 4.12487 0.14327C4.21674 0.0515286 4.34126 -1.32484e-07 4.4711 0ZM1.48 5.4194V12.6007C1.48 12.6559 1.49086 12.7105 1.51197 12.7614C1.53308 12.8124 1.56401 12.8587 1.60302 12.8977C1.64202 12.9367 1.68832 12.9676 1.73927 12.9887C1.79023 13.0098 1.84484 13.0207 1.9 13.0207H13.1C13.1552 13.0207 13.2098 13.0098 13.2607 12.9887C13.3117 12.9676 13.358 12.9367 13.397 12.8977C13.436 12.8587 13.4669 12.8124 13.488 12.7614C13.5091 12.7105 13.52 12.6559 13.52 12.6007V5.4292L1.48 5.4194ZM5.1669 10.2333V11.3995H4V10.2333H5.1669ZM8.0831 10.2333V11.3995H6.9169V10.2333H8.0831ZM11 10.2333V11.3995H9.8331V10.2333H11ZM5.1669 7.4494V8.6156H4V7.4494H5.1669ZM8.0831 7.4494V8.6156H6.9169V7.4494H8.0831ZM11 7.4494V8.6156H9.8331V7.4494H11ZM3.9811 2.3856H1.9C1.84484 2.3856 1.79023 2.39646 1.73927 2.41757C1.68832 2.43868 1.64202 2.46961 1.60302 2.50862C1.56401 2.54762 1.53308 2.59392 1.51197 2.64487C1.49086 2.69583 1.48 2.75044 1.48 2.8056V4.4401L13.52 4.4499V2.8056C13.52 2.75044 13.5091 2.69583 13.488 2.64487C13.4669 2.59392 13.436 2.54762 13.397 2.50862C13.358 2.46961 13.3117 2.43868 13.2607 2.41757C13.2098 2.39646 13.1552 2.3856 13.1 2.3856H11.203V3.0359C11.203 3.16586 11.1514 3.29049 11.0595 3.38238C10.9676 3.47428 10.843 3.5259 10.713 3.5259C10.583 3.5259 10.4584 3.47428 10.3665 3.38238C10.2746 3.29049 10.223 3.16586 10.223 3.0359V2.3856H4.9611V3.0296C4.9611 3.15956 4.90948 3.28419 4.81758 3.37608C4.72569 3.46798 4.60106 3.5196 4.4711 3.5196C4.34114 3.5196 4.21651 3.46798 4.12462 3.37608C4.03272 3.28419 3.9811 3.15956 3.9811 3.0296V2.3856Z"
                          fill="#12355B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_266_348">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-base 2xl:text-lg">Sat. - Sun.</p>
                </div>
                <svg
                  width="2"
                  height="26"
                  viewBox="0 0 2 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="1"
                    height="25"
                    rx="0.5"
                    fill="#12355B"
                  />
                </svg>
                <div className="flex items-center justify-center gap-3 2xl:gap-6">
                  <div className="bg-blue-light p-2 flex items-center justify-center rounded-full">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="max-w-full h-auto"
                    >
                      <path
                        d="M8.49325 1.33337C4.81325 1.33337 1.83325 4.32004 1.83325 8.00004C1.83325 11.68 4.81325 14.6667 8.49325 14.6667C12.1799 14.6667 15.1666 11.68 15.1666 8.00004C15.1666 4.32004 12.1799 1.33337 8.49325 1.33337ZM8.49992 13.3334C5.55325 13.3334 3.16659 10.9467 3.16659 8.00004C3.16659 5.05337 5.55325 2.66671 8.49992 2.66671C11.4466 2.66671 13.8333 5.05337 13.8333 8.00004C13.8333 10.9467 11.4466 13.3334 8.49992 13.3334ZM8.83325 4.66671H7.83325V8.66671L11.3333 10.7667L11.8333 9.94671L8.83325 8.16671V4.66671Z"
                        fill="#12355B"
                      />
                    </svg>
                  </div>
                  <p className="text-base 2xl:text-lg">7:00am - 10:00pm</p>
                </div>
              </div>
            </div>
          </div>
          <Link href="/contact-us" className="w-full md:w-auto">
            <button className="bg-blue text-white w-full sm:w-64 h-14 text-base font-medium rounded-lg mr-0 sm:mr-auto hover:scale-105 transition-all">
              Book an Appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
