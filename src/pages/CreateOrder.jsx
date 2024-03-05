import { useState } from "react";

function CreateOrder() {
  const [firstname, setFirstname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="font-bold text-gray-700 text-xl mb-8">
        Ready to order? Let&apos;s go!
      </h2>
      <form className="flex flex-col sm:w-[550px] items-start">
        <label
          htmlFor="firstname"
          className="flex justify-between flex-col md:flex-row w-full"
        >
          <span className="md:mt-3">First Name</span>
          <input
            className="w-full border border-gray-200 rounded-full px-4 py-3 mb-5 bg-white outline-none focus:ring focus:ring-yellow-300 focus:border-none md:w-96"
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <label
          htmlFor="phoneNumber"
          className="flex justify-between flex-col md:flex-row w-full"
        >
          <span className="md:mt-3">Phone number</span>
          <input
            className="w-full border border-gray-200 rounded-full px-4 py-3 mb-5 bg-white outline-none focus:ring focus:ring-yellow-300 focus:border-none md:w-96"
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <label
          htmlFor="phoneNumber"
          className="relative flex justify-between flex-col md:flex-row w-full"
        >
          <span className="md:mt-3">Address</span>
          <input
            className="w-full border border-gray-200 rounded-full px-4 py-3 mb-5 bg-white outline-none focus:ring focus:ring-yellow-300 focus:border-none md:w-96"
            type="text"
            id="phoneNumber"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button
            type="button"
            className="absolute items-center sm:right-1 right-1 sm:top-1 top-7 h-10 text-sm text-gray-800 bg-yellow-400 rounded-full px-4 transition-all hover:bg-yellow-300"
          >
            GET POSITION
          </button>
        </label>

        <div className="flex items-center gap-3 mt-5 mb-10">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            id="priority"
          />

          <label htmlFor="priority" className="font-bold text-gray-700">
            Want to you give your order priority?
          </label>
        </div>
        <button
          type="button"
          className="font-semibold text-gray-800 bg-yellow-400 rounded-full px-4 py-3 transition-all hover:bg-yellow-300"
        >
          ORDER NOW FROM €18.00
        </button>
      </form>
    </div>
  );
}

export default CreateOrder;
