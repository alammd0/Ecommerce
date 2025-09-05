import { useState } from "react";
import { Link } from "react-router-dom";


export function Contact() {

    const [formData, setFormDat] = useState({
        firstName : "",
        lastName : "",
        email : "",
        message : ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormDat( prev => ({
            ...prev,
            [name] : value
        }))
    };

    const handleSubmitData = (e) => {
        e.preventDefault();
        console.log(formData);

        // here api logic ( Means Server Connection )
    }

    return (
        <div className="mt-30">
            <div className="flex flex-col gap-20">
                <div className='w-6/12 mx-auto flex items-center gap-2 justify-center flex-col'>
                    <h1 className='text-5xl font-bold text-center font-primary'>Contact</h1>
                    <div className='w-40 bg-black/60 h-[2px] mt-2'></div>
                    <p className='text-center text-[18px] font-semibold font-secondary tracking-[0.0125rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deserunt eligendi aliquam perspiciatis cumque, consequuntur est nihil</p>
                </div>

                <div className="flex gap-10 w-9/12 mx-auto pb-10">

                    <div className="bg-section px-10 py-20 max-w-[50%] w-full space-y-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-bold font-primary">Get in touch</h1>
                            <p className="text-[18px] font-normal font-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.</p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <Link className="flex flex-row gap-2 underline" to="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </span>
                                    <p>123 Fifth Avenue, New York, NY 10160</p>
                                </Link>
                            </div>

                            <div>
                                <Link className="flex flex-row gap-2 underline" to="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </span>
                                    <p>contact@info.com</p>
                                </Link>
                            </div>

                            <div>
                                 <Link className="flex flex-row gap-2" to="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </span>
                                    <p>+91 9507283573</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="px-10 py-20 max-w-[50%] w-full">
                        <form  onSubmit={handleChange} className="flex flex-col gap-4">
                            {/* name Section */}
                            <div className="flex gap-4">
                                {/* first name */}
                                <div className="w-full">
                                    <input type="text"
                                        value={formData.firstName}
                                        name="firstName"
                                        placeholder="First Name" 
                                        id="firstName"
                                        required
                                        className="outline-0 border-1 px-1 py-2 font-primary capitalize w-full"
                                        onChange={handleChange}
                                     />
                                </div>

                                {/* last name */}
                                <div className="w-full">
                                     <input type="text"
                                        value={formData.lastName}
                                        name="lastName"
                                        placeholder="Last Name" 
                                        id="lastName"
                                        required
                                        className="outline-0 border-1 px-1 py-2 font-primary capitalize w-full"
                                        onChange={handleChange}
                                     />
                                </div>
                            </div>

                            {/* email */}
                            <div>
                                <input type="email"
                                     value={formData.email}
                                     name="email"
                                     required
                                     placeholder="Your Email address..." 
                                     id="email"
                                      className="outline-0 border-1 px-1 py-2 font-primary capitalize w-full"
                                     onChange={handleChange}
                                />
                            </div>

                            {/* message */}
                            <div>
                                 <textarea type="text"
                                     value={formData.message}
                                     name="message"
                                     required
                                     placeholder="Message..." 
                                     id="message"
                                     className="outline-0 border-1 px-1 py-2 font-primary capitalize w-full"
                                     onChange={handleChange}
                                 />
                            </div>

                            <button type="submit" className="bg-black text-white w-fit px-4 py-2 rounded cursor-pointer hover:bg-black/80">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}