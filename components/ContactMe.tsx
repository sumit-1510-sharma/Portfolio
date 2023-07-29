'use client';
import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {}

function ContactMe({}: Props) {

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:sparashar.sp27@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col mt-24'>
            <h4 className='text-lg sm:text-2xl mb-4 font-semibold text-center text-gray-200'>
                I have got just what you need.{" "}
                <span className='decoration-[#f7ab0a]/50 underline text-[#f7ab0a]'>Lets Talk.</span>
            </h4>

            <div className='space-y-1'>
              <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse'/>
                <p className='text-lg sm:text-xl'>+91 8920113810</p>
              </div>

              <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse'/>
                <p className='text-lg sm:text-xl'>sparashar.sp27@gmail.com</p>
              </div>

              <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-6 w-6 animate-pulse mb-4'/>
                <p className='text-lg sm:text-xl mb-7'>Vadgaon BK</p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
              <div className='flex space-x-2'>
                <input {...register('name')} placeholder='Name' className='contactInput' type="text" /><input {...register('email')} placeholder='Email' className='contactInput' type="email" />
              </div>

              <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

              <textarea {...register('message')} placeholder='Message' className='contactInput h-12' />

              <button type='submit' className='bg-[#f7ab0a] py-3 px-8 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe