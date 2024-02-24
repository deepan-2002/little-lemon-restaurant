import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';

const ReservationForm = () => {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(z.object({
            date: z.string().refine((value) => {
                const currentDate = new Date().toISOString().split('T')[0];
                return value >= currentDate;
            }, { message: 'Date must be on or after the current date' }),
            time: z.string().min(1, { message: 'Please select a time' }),
            guests: z.string().refine((value) => {
                const parsedValue = parseInt(value, 10);
                return !isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 12;
            }, { message: 'Number of guests must be between 1 and 12' }),
            occation: z.string()
        })),
        defaultValues: {
            date: new Date().toISOString().split('T')[0],
            guests: '1',
        },
    });




    const handleData = (e) => {
        console.log(e);
        navigate('/confirmed')
    }

    return (
        <>
            <div className='bg-lemonGrey text-lemonWhite p-7 text-center text-4xl font-custom1'>
                <h1>
                    Table Reservation
                </h1>
            </div>

            <div className="max-w-md mx-auto my-8 p-4 bg-lemonWhite font-custom2 rounded-md">
                <form onSubmit={handleSubmit(handleData)}>
                    <label className="block mb-2 font-bold text-lemonGrey" htmlFor='date'>Date:</label>
                    {errors.date && <small className='text-red-500 font-semibold'>{errors.date.message}</small>}
                    <input
                        id='date'
                        type="date"
                        name='date'
                        className="w-full mb-4 p-2 border border-gray-400 rounded-md"
                        {...register("date")}
                    />


                    <label className="block mb-2 font-bold text-lemonGrey" htmlFor='time'>Time:</label>
                    {errors.time && <small className='text-red-500 font-semibold'>{errors.time.message}</small>}
                    <select
                        id='time'
                        name='time'
                        className="w-full mb-4 p-2 border border-gray-400 rounded-md"
                        {...register("time")}
                    >
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="10:00 PM">10:00 PM</option>
                    </select>

                    <label className="block mb-2 font-bold text-lemonGrey" htmlFor='guests'>Number of Guests:</label>
                    {errors.guests && <small className='text-red-500 font-semibold'>{errors.guests.message}</small>}
                    <input
                        id='guests'
                        name='guests'
                        placeholder='No of Guests'
                        type="number"
                        className="w-full mb-4 p-2 border border-gray-400 rounded-md"
                        min="1"
                        {...register("guests")}
                    />

                    <label className="block mb-2 font-bold text-lemonGrey" htmlFor='occation'>Occasion:</label>
                    {errors.occasion && <small className='text-red-500 font-semibold'>{errors.occasion.message}</small>}
                    <select
                        id='occation'
                        name='occation'
                        className="w-full mb-4 p-2 border border-gray-400 rounded-md"
                        {...register("occation")}
                    >
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-lemonYellow text-lemonBlack hover:bg-lemonGrey hover:text-white p-2 rounded-md"
                    >
                        Make Reservation
                    </button>
                </form>
            </div>
        </>
    );
};

export default ReservationForm;
