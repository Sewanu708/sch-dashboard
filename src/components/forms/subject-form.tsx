'use client'
import React, { useState } from 'react'

import { string, z } from 'zod'
import { teachersData } from '../../../lib/data'
import InputField from '../input-field'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Select, { MultiValue } from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

type option = { value: string, label: string }
const schema = z.object(
    {
        subject: z.string().min(2, { message: 'Course name must be greater than two' }),
        teacher: z.array(z.string()).nonempty({ message: `Teacher's details required` })
    }
)
const formatData = (data: string[]) => {
    return data?.map(d => ({ label: d, value: d }))
}
function SubjectForm({
    type,
    data
}: {
    type: "create" | "update",
    data?: any
}) {
    const [selectedOption, setSelectedOption] = useState<MultiValue<option> | null>(formatData(data?.teachers) ?? null);
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
       
    })

    const onSubmit = handleSubmit((data) => {
        console.log("running", data);
    });



    return (
        <form
            className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8 flex flex-col gap-6"
            onSubmit={onSubmit}
        >
            {/* Heading */}
            <h1 className="text-2xl font-bold text-gray-800">
                {type === "create" ? "Add New Subject" : "Update Subject"}
            </h1>

            {/* Section Label */}
            <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                Subject Information
            </span>

            {/* Fields */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Subject Input */}
                <div className="flex-1">
                    <InputField
                        label="Subject"
                        type="text"
                        register={register}
                        name="subject"
                        defaultValue={data?.name}
                        error={errors?.subject}
                    />
                </div>

                {/* Teacher Select */}
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Teacher
                    </label>
                    <Controller
                        control={control}
                        name="teacher"
                        render={({ field, fieldState }) => {
                            return <>
                                <Select
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    defaultValue={selectedOption}
                                    onChange={(e) => {
                                        setSelectedOption(e);
                                        field.onChange(e.map(i => i.value));
                                    }}
                                    isMulti
                                    options={options}
                                />

                                {fieldState.error?.message && (
                                    <p className="text-xs text-red-400">{fieldState.error.message.toString()}</p>)
                                }
                            </>
                        }}

                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="mt-6 w-fit px-6 py-2 bg-blue-600 hover:bg-blue-300 text-white font-medium rounded-lg shadow-sm transition"
            >
                {type === "create" ? "Create" : "Update"}
            </button>
        </form>

    )
}

export default SubjectForm