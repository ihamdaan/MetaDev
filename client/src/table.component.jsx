import React from 'react';
import profile__bg__test__img from "./default_edit_profile_img.png";
import test__img__2 from "./test_img_2.jpg";

function TableComponent() {
    return (
      <div className='tableComponent w-full p-6'>

        {/*Main Table Component Div*/}
        <div class="table__main w-full border border-separate rounded-lg">

            {/*Table Head*/}
            <div className='table__head'>
                {/*Table Row*/}
                <div className='table__row font-semibold text-gray-500 flex'>
                    <div className='table__data text-sm w-full px-4 py-2'>NAME</div>
                    <div className='table__data text-sm text-right w-1/3 px-4 py-2'>JOINED DATE</div>
                    <div className='table__data w-1/2 px-4 py-2 '></div>
                </div>
            </div>

            {/*Table Body*/}
            <div className='table__body'>

                {/*Table Row*/}
                <div className='table__row hover:bg-gray-50 cursor-pointer flex items-center border-t'>

                    <div className='table__data flex gap-2 w-full px-4 py-2'>
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
                    </div>

                    <div className='table__data text-sm text-right w-1/3 px-4 py-2'>
                        20 Jun'22
                    </div>

                    <div className='table__data text-right w-1/2 px-4 py-2'>
                        <button className='px-3 py-2 bg-gray-600 text-white font-medium rounded-xl hover:bg-gray-500'>
                            Save Changes
                        </button>
                    </div>

                </div>

            </div>

        </div>

      </div>
    );
  }
  
  export default TableComponent;