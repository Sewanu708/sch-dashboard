'use client'
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from '../input-field'

const schema = z.object({
  title: z.string().min(2, { message: 'invalid' }),
  announcement: z.string().min(2, { message: 'invalid' }),
  class: z.string(),
})

function AnnouncementForm({
  type,
  data
}: {
  type: "create" | "update",
  data?: any
}) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log("running", data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-8 border border-gray-100"
    >
      {/* Heading */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-semibold text-gray-800">
          {type === "create" ? "Add New Subject" : "Update Subject"}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Fill in the fields below to {type === "create" ? "create a new subject" : "update this subject"}.
        </p>
      </div>

      {/* Section Label */}
      <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
        Subject Information
      </span>

      {/* Fields */}
      <div className="flex w-full flex-col gap-6">
        <InputField
          label="Title"
          type="text"
          register={register}
          name="title"
          defaultValue={data?.title}
          error={errors?.title}
        />

        <InputField
          label="Class"
          type="text"
          register={register}
          name="class"
          defaultValue={data?.class}
          error={errors?.class}
        />
        
        <InputField
          label="Announcement"
          type="text"
          register={register}
          name="announcement"
          defaultValue={data?.announcement}
          error={errors?.announcement}
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 ease-in-out"
        >
          {type === "create" ? "Create" : "Update"}
        </button>
      </div>
    </form>
  )
}

export default AnnouncementForm
