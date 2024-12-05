import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const clientData = {
      name:data.name,
      email:data.email,
      message:data.message
    }

    console.log(clientData.name);
    
    try {
      await axios.post('https://getform.io/f/bmddglka', clientData)
      toast.success("Your request has been sent")
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
  }

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20  pb-20 shadow-md space-y-6"
      >
        <h1 className="md:text-2xl">Contact</h1>
        <p className="font-light text-sm mt-5">
          Please fill out form below to contact me.
        </p>
        <div className="bg-slate-300 sm:w-[500px] md:w-[450px] mx-auto flex flex-col justify-center items-center p-5 rounded-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/bmddglka"
            // method="POST"
            className="space-y-5"
          >
            <h1 className="sm:text-lg text-center mt-3">Send Your Message</h1>
            <div className="w-full space-y-2">
              <label htmlFor="" className="block text-gray-900  ">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                name="name"
                className="w-80 h-10 shadow rounded-lg appearance-none bottom-1 px-2 py-2 text-gray-700 leading-tight focus"
                placeholder="Enter Full Name"
              />
              {errors.name && <p>Full name is required.</p>}
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="" className="block text-gray-900  ">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                id="email"
                type="email"
                name="email"
                className="w-80 h-10 shadow rounded-lg appearance-none bottom-1 px-2 py-2 text-gray-700 leading-tight focus"
                placeholder="Enter Email"
              />
              {errors.email && <p>Email is required.</p>}
            </div>
            <div className="w-full space-y-2">
              <label htmlFor="" className="block text-gray-900  ">
                Email
              </label>
              <textarea
                {...register("message", { required: true })}
                rows={4}
                type="text"
                id="message"
                name="message"
                className="w-full shadow rounded-lg appearance-none bottom-1 px-2 py-2 text-gray-700 leading-tight focus"
                placeholder="Enter Query"
              />
              {errors.message && <p>Query is required.</p>}
            </div>

            <div className="w-full space-y-2">
              <button
                type="submit"
                className="bg-slate-900 px-4 py-3 rounded-lg text-white"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
