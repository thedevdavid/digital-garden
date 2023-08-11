import React from "react";

export const CTANewsletter = () => (
  <section className="mb-32 text-center lg:text-left">
    <div className="flex flex-wrap justify-center">
      <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12 lg:w-11/12 xl:w-10/12">
        <div className="grid items-center gap-x-6 lg:grid-cols-2">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold dark:text-white">
              Do not miss any updates.
              <br />
              <span className="dark:text-primary-400 text-primary">Subscribe to the newsletter</span>
            </h2>
          </div>
          <div className="mb-6 flex-row md:mb-0 md:flex">
            <div className="relative mb-3 w-full md:mb-0 md:mr-3 xl:w-96" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                placeholder="Enter your email"
              />
              <label
                htmlFor="exampleFormControlInput2"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Enter your email
              </label>
            </div>
            <button
              type="submit"
              className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
