import React, { useState } from 'react';
import profile__bg__test__img from "./default_edit_profile_img.png";
import test__img__2 from "./test_img_2.jpg";

function TableComponent() {
    const  [isOpen, setIsOpen] = useState(false)
    const  [isOpen2, setIsOpen2] = useState(false)

    return (
      <div className='tableComponent w-full p-6'>

        {/*Main Table Component Div*/}
        <div class="table__main w-full border border-separate rounded-lg">

            {/*Table Head*/}
            <div className='table__head'>
                {/*Table Row*/}
                <tr className='table__row font-semibold text-gray-500 flex'>
                    <th className='table__data text-sm text-left w-full px-4 py-2'>NAME</th>
                    <th className='table__data text-sm text-right w-1/3 px-4 py-2'>JOINED DATE</th>
                    <th className='table__data w-1/2 px-4 py-2 '></th>
                    <th className='table__data w-12 px-4 py-2 '></th>
                </tr>
            </div>

            {/*Table Body*/}
            <div className='table__body'>

                {/*Table Row*/}
                <tr className='table__row hover:bg-gray-50 cursor-pointer flex items-center border-t'>

                    <td className='table__data flex gap-2 w-full px-4 py-2'>
                        <div className='w-10 h-10' >
                            <img 
                                src={profile__bg__test__img} 
                                alt="profile pic" 
                                className='w-full h-full rounded-full  object-cover'
                            />
                        </div>
                        <div class>
                            <div className='text-sm font-normal'>
                                Malcolm Lockyer
                            </div> 
                            <div className='text-xs text-gray-300'>
                                casig86030@tagbert.com
                            </div>
                        </div>
                    </td>

                    <td className='table__data text-sm text-right w-1/3 px-4 py-2'>
                        20 Jun'22
                    </td>

                    <td className='table__data text-right w-1/2 px-4 py-2'>
                        <button className='px-3 py-2 bg-gray-600 text-sm border-none text-white font-medium rounded-xl hover:bg-gray-500'>
                            Save Changes
                        </button>
                    </td>

                    <td className='table__data text-right w-12 px-4 py-2 '>
                        <div className='w-4 h-4 text-gray-400' onClick={() => setIsOpen(!isOpen)}>
                            {
                                isOpen ? <svg xmlns="http://www.w3.org/2000/svg" className='rotate-180' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                            }
                        </div>
                    </td>

                </tr>

                {
                    isOpen && 
                    <tr className='table__row hover:bg-gray-50 flex items-center bg-gray-50 border-t border-gray-100' >

                        <td className='p-4 w-full'>
                            <div className='flex justify-between w-full'>
                                <div className='table__data flex gap-4 w-full px-4 py-2 items-center'>
                                    <div className='w-11 h-11' >
                                        <img 
                                            src={profile__bg__test__img} 
                                            alt="profile pic" 
                                            className='w-full h-full rounded-full  object-cover'
                                        />
                                    </div>
                                    <div>
                                        <div className='text-md font-semibold'>
                                            Malcolm Lockyer
                                        </div> 
                                        <div className='text-xs text-gray-400 leading-7'>
                                            casig86030@tagbert.com
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-4 text-sm p-2 font-medium'>
                                    <span className='text-gray-400 cursor-pointer hover:text-gray-500'>
                                        Accept
                                    </span>

                                    <span className='text-red-400 cursor-pointer hover:text-red-500'>
                                        Reject
                                    </span>
                                </div>
                            </div>

                            <div className='border-t w-full px-2 mt-4'>
                                <form className='w-1/3 pt-2'>
                                    <label for="messageText" className='font-semibold text-lg p-1'>Add Message</label>

                                    <textarea id="messageText" name="w3review" rows="4" cols="50" className='rounded-xl mt-4 border-none p-2 text-sm font-normal' placeholder='Write your Messages here!'>
                                    </textarea>

                                    <button className='mt-2 px-3 py-1 bg-gray-600 text-sm border-none text-white font-medium rounded-lg hover:bg-gray-500'>
                                        Send
                                    </button>
                                </form>
                            </div>
                        </td>

                    </tr>
                }

                {/*Table Row*/}
                <tr className='table__row hover:bg-gray-50 cursor-pointer flex items-center border-t'>

                    <td className='table__data flex gap-2 w-full px-4 py-2'>
                        <div className='w-10 h-10' >
                            <img 
                                src={profile__bg__test__img} 
                                alt="profile pic" 
                                className='w-full h-full rounded-full  object-cover'
                            />
                        </div>
                        <div class>
                            <div className='text-sm font-normal'>
                                Malcolm Lockyer
                            </div> 
                            <div className='text-xs text-gray-300'>
                                casig86030@tagbert.com
                            </div>
                        </div>
                    </td>

                    <td className='table__data text-sm text-right w-1/3 px-4 py-2'>
                        20 Jun'22
                    </td>

                    <td className='table__data text-right w-1/2 px-4 py-2'>
                        <button className='px-3 py-2 bg-gray-600 text-sm border-none text-white font-medium rounded-xl hover:bg-gray-500'>
                            Save Changes
                        </button>
                    </td>

                    <td className='table__data text-right w-12 px-4 py-2 '>
                        <div className='w-4 h-4 text-gray-400' onClick={() => setIsOpen2(!isOpen2)}>
                            {
                                isOpen2 ? <svg xmlns="http://www.w3.org/2000/svg" className='rotate-180' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                            }
                        </div>
                    </td>

                </tr>

                {
                    isOpen2 && 
                    <tr className='table__row hover:bg-gray-50 flex items-center bg-gray-50 border-t border-gray-100' >

                        <td className='p-4 w-full'>
                            <div className='flex justify-between w-full'>
                                <div className='table__data flex gap-4 w-full px-4 py-2 items-center'>
                                    <div className='w-11 h-11' >
                                        <img 
                                            src={profile__bg__test__img} 
                                            alt="profile pic" 
                                            className='w-full h-full rounded-full  object-cover'
                                        />
                                    </div>
                                    <div>
                                        <div className='text-md font-semibold'>
                                            Malcolm Lockyer
                                        </div> 
                                        <div className='text-xs text-gray-400 leading-7'>
                                            casig86030@tagbert.com
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-4 text-sm p-2 font-medium'>
                                    <span className='text-gray-400 cursor-pointer hover:text-gray-500'>
                                        Accept
                                    </span>

                                    <span className='text-red-400 cursor-pointer hover:text-red-500'>
                                        Reject
                                    </span>
                                </div>
                            </div>

                            <div className='border-t w-full px-2 mt-4'>
                                <form className='w-1/3 pt-2'>
                                    <label for="messageText" className='font-semibold text-lg p-1'>Add Message</label>

                                    <textarea id="messageText" name="w3review" rows="4" cols="50" className='rounded-xl mt-4 border-none p-2 text-sm font-normal' placeholder='Write your Messages here!'>
                                    </textarea>

                                    <button className='mt-2 px-3 py-1 bg-gray-600 text-sm border-none text-white font-medium rounded-lg hover:bg-gray-500'>
                                        Send
                                    </button>
                                </form>
                            </div>
                        </td>

                    </tr>
                }

            </div>

        </div>

      </div>
    );
  }
  
  export default TableComponent;