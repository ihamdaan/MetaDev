import React from 'react'

function FeedComponent() {
  return (
    <div className='w-full bg-gray-100 p-[20px] border'>
        <div>
            <div className='inter_font flex items-center gap-3'>
                <div className='w-12 cursor-pointer'>
                    <img className='w-full rounded-full' src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1577558505149%2F0Uu__YlPv.png%3Fw%3D500%26h%3D500%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="profile_img" />
                </div>

                <div>
                    <span className='font-semibold cursor-pointer'>Apoorv Taneja</span>
                    <div className='text-gray-500 flex gap-2'>
                        <span className='cursor-pointer'>plxity.hashnode.dev</span>
                        <span>·</span>
                        <span>Jun 29, 2022</span>
                    </div>
                </div>
            </div>

            <div className='flex mt-5 gap-4' >
                <div className='w-full'>
                    <div className='font-bold text-2xl cursor-pointer'>
                        getReferral - Manage referrals easily and apply at one click for openings.
                    </div>

                    <div className='flex gap-2 text-gray-500 font-semibold my-2'>
                        <svg className='w-4 fill-gray-500' viewBox="0 0 576 512"><path d="M514.91 32h-.16c-24.08.12-144.75 8.83-219.56 48.09-4.05 2.12-10.33 2.12-14.38 0C205.99 40.83 85.32 32.12 61.25 32h-.16C27.4 32 0 58.47 0 91.01v296.7c0 31.41 25.41 57.28 57.85 58.9 34.77 1.76 122.03 8.26 181.89 30.37 5.27 1.95 10.64 3.02 16.25 3.02h64c5.62 0 10.99-1.08 16.26-3.02 59.87-22.11 147.12-28.61 181.92-30.37 32.41-1.62 57.82-27.48 57.82-58.89V91.01C576 58.47 548.6 32 514.91 32zM272 433c0 8.61-7.14 15.13-15.26 15.13-1.77 0-3.59-.31-5.39-.98-62.45-23.21-148.99-30.33-191.91-32.51-15.39-.77-27.44-12.6-27.44-26.93V91.01c0-14.89 13.06-27 29.09-27 19.28.1 122.46 7.38 192.12 38.29 11.26 5 18.64 15.75 18.66 27.84l.13 100.32V433zm272-45.29c0 14.33-12.05 26.16-27.45 26.93-42.92 2.18-129.46 9.3-191.91 32.51-1.8.67-3.62.98-5.39.98-8.11 0-15.26-6.52-15.26-15.13V230.46l.13-100.32c.01-12.09 7.4-22.84 18.66-27.84 69.66-30.91 172.84-38.19 192.12-38.29 16.03 0 29.09 12.11 29.09 27v296.7z"></path></svg>
                        5 mins read
                    </div>

                    <div className='text-gray-600 cursor-pointer'>
                        Problem statement 🛠 Job creator perspective 🕵️‍♀️ Imagine posting about a hiring post or referral job opening on Twitter or LinkedIn and receiving 100s of resumes to go through..sounds so tiring and…
                    </div>
                </div>

                <div className='w-2/3'>
                    <img className='w-[400px] h-[150px] rounded-xl cursor-pointer'
                    src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1656497375701%2FK5kdJI2AC.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="feed_img" />
                </div>
            </div>

            <div className='mt-6'>
                <div className='flex justify-between'>
                    <div className='flex gap-3'>
                        <svg className='w-5 text-gray-400' aria-hidden="true" data-icon="bookmark" data-prefix="fal" viewBox="0 0 384 512"><path fill="currentColor" d="M320 0H64C28.72 0 0 28.7 0 64v431.1c0 5.844 3.188 11.23 8.312 14.04 5.125 2.781 11.34 2.562 16.28-.531L192 402.1l167.4 106.5c2.6 2.6 5.6 3.4 8.6 3.4 2.656 0 5.281-.656 7.688-1.969C380.8 507.2 384 501.8 384 495.1V64c0-35.3-28.7-64-64-64zm32 466.9-151.4-96.36c-3.5-1.74-5.6-2.54-8.6-2.54s-5.969.828-8.594 2.5L32 466.9V64c0-17.64 14.34-32 32-32h256c17.66 0 32 14.36 32 32v402.9z"></path></svg>
                        <button className='bg-gray-100 border py-1 px-2 rounded-lg text-sm text-gray-500 font-semibold hover:bg-white hover:text-gray-700'>JavaScript</button>
                        <button className='bg-gray-100 border py-1 px-2 rounded-lg text-sm text-gray-500 font-semibold hover:bg-white hover:text-gray-700'>Hashnode</button>
                        <button className='bg-gray-100 border py-1 px-2 rounded-lg text-sm text-gray-500 font-semibold hover:bg-white hover:text-gray-700'>+3</button>
                    </div>

                    <div className='flex gap-4'>
                        <div className='flex gap-2 text-gray-500 cursor-pointer hover:text-gray-700 items-center'>
                            <svg className='w-5 fill-gray-500 hover:fill-gray-700' viewBox="0 0 512 512"><path d="M88 192H40c-22.06 0-40 17.9-40 40v208c0 22.1 17.94 40 40 40h48c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40zm8 248c0 4.4-3.59 8-8 8H40c-4.41 0-8-3.6-8-8V232c0-4.4 3.59-8 8-8h48c4.41 0 8 3.6 8 8v208zm416-218.5c0-33.9-27.6-61.5-61.5-61.5H348c11.98-27.06 18.83-53.48 18.83-67.33C366.9 62.84 343.6 32 304.9 32c-41.22 0-50.7 29.11-59.12 54.81C218.1 171.1 160 184.8 160 208c0 9.1 7.5 16 16 16 4.1 0 8.2-1.6 11.3-4.7 52.68-53.04 67.02-56.11 88.81-122.5C285.3 68.95 288.2 64 304.9 64c20.66 0 29.94 16.77 29.94 28.67 0 10.09-8.891 43.95-26.62 75.48a15.976 15.976 0 0 0-2.046 7.83C306.2 185.5 314 192 322.2 192h128.3c16.3 0 29.5 13.2 29.5 29.5 0 15.33-12.08 28.16-27.48 29.2-8.462.581-14.91 7.649-14.91 15.96 0 12.19 12.06 12.86 12.06 30.63 0 14.14-10.11 26.3-24.03 28.89-5.778 1.082-13.06 6.417-13.06 15.75 0 8.886 6.765 10.72 6.765 23.56 0 31.02-31.51 22.12-31.51 43.05 0 3.526 1.185 5.13 1.185 10.01C389 434.8 375.8 448 359.5 448h-55.6c-82.01 0-108.3-64.02-127.9-64.02-8.873 0-16 7.193-16 15.96-.9 16.36 64.6 80.06 143.9 80.06h55.63c33.91 0 61.5-27.58 61.5-61.47 18.55-10.86 30.33-31 30.33-53.06 0-4.797-.594-9.594-1.734-14.27 19.31-10.52 32.06-30.97 32.06-53.94 0-7.219-1.281-14.31-3.75-20.98C498.2 266.2 512 245.3 512 221.5z"></path></svg>
                            185
                        </div>

                        <div className='flex gap-2 text-gray-500 cursor-pointer hover:text-gray-700 items-center'>
                            <svg className='w-5 fill-gray-500 hover:fill-gray-700' viewBox="0 0 640 512"><path d="M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 41.48 17.07 79.54 45.44 109.6-15.17 32.34-38.65 58.07-38.95 58.38-6.514 6.836-8.309 16.91-4.568 25.67C5.754 378.4 14.26 384 23.66 384c54.19 0 97.76-20.73 125.9-39.17C168.1 349.4 187.7 352 208 352c114.9 0 208-78.8 208-176zM208 320c-16.96 0-34.04-2.098-50.75-6.232L143.7 310.4l-11.7 7.7c-20.43 13.38-51.58 28.99-89.85 32.97 9.377-12.11 22.3-30.63 32.24-51.82l9.242-19.71L68.72 263.7C44.7 238.2 32 207.9 32 176c0-79.4 78.1-144 176-144s176 64.6 176 144-79 144-176 144zm398.4 115.4c21.2-28.3 33.6-62.5 33.6-99.4 0-97.2-86-176-192-176-.315 0-.62.041-.934.043C447.5 165.3 448 170.6 448 176c0 5.43-.467 10.76-.941 16.09.341.01.641-.09.941-.09 88.22 0 160 64.6 160 144 0 28.69-9.424 56.45-27.25 80.26l-13.08 17.47 11.49 18.55c6.568 10.61 13.18 19.74 18.61 26.74-18.26-1.91-36.45-6.625-54.3-14.09l-12.69-5.305-12.58 5.557C495.9 475 472.3 480 448 480c-75.05 0-137.7-46.91-154.9-109.7-10.1 3.336-20.5 6.132-31.2 8.271C282.7 455.1 357.1 512 448 512c29.82 0 57.94-6.414 83.12-17.54C555 504.5 583.7 512 616.3 512c9.398 0 17.91-5.57 21.73-14.32 3.74-8.758 1.945-18.84-4.568-25.67-.162-.21-13.862-15.21-27.062-36.61z"></path></svg>
                            69
                        </div>

                        <div className='flex relative'>
                            <div className='w-8 cursor-pointer'>
                                <img className='w-full rounded-full border border-white' src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1641973344588%2FXMlrpfBz6.png%3Fw%3D75%26h%3D75%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="test_img" />
                            </div>

                            <div className='w-8 cursor-pointer absolute left-5'>
                                <img className='w-full rounded-full border border-white' src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1656512283073%2FfUF61_uIB.jpeg%3Fw%3D75%26h%3D75%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75" alt="test_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FeedComponent