import bg02 from '../assets/bg-02.jpg'
import AboutImg from "../assets/about-01.jpg"

export function About() {
    return (
        <div className="mt-30">
            <div className="flex flex-col gap-20">
                <div className='w-6/12 mx-auto flex items-center gap-2 justify-center flex-col'>
                    <h1 className='text-5xl font-bold text-center font-primary'>About Us</h1>
                    <div className='w-40 bg-black/60 h-[2px] mt-2'></div>
                    <p className='text-center text-[18px] font-semibold font-secondary tracking-[0.0125rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, deserunt eligendi aliquam perspiciatis cumque, consequuntur est nihil</p>
                    <p className='text-center text-[16px] font-normal mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit recusandae ut magni a officiis sed repudiandae veritatis et expedita iste aperiam veniam, quasi, ipsam excepturi inventore! Reprehenderit doloribus modi a itaque incidunt est maiores consequatur dolores quam temporibus! Voluptate obcaecati perferendis veniam nobis mollitia distinctio deleniti omnis odio facilis iste.</p>
                </div>

                <div className='w-11/12 mx-auto'>
                    <div className='bg-cover bg-center h-[500px] relative bg-fixed bg-gradient-to-r from-slate-500 to-black/70 rounded' style={{ backgroundImage : `url(${bg02})`}}>
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="relative z-10 flex justify-between items-center h-full px-26 text-white">
                            <div className='max-w-[40%] flex flex-col gap-4'>
                                <h6 className='text-xl font-bold text-white/70 font-primary'>The Mission</h6>
                                <div className='text-3xl font-bold font-primary'>At the heart of everything, we set out to offer the best quality.</div>
                                <div className='w-40 bg-white h-[2px] mt-2'></div>
                            </div>
                            <div className='max-w-[50%] w-full flex-1 flex flex-col gap-10 font-secondary'> 
                                <div className='text-xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Aenean placerat facilisis ex, eu laoreet lorem convallis.</div>
                                <div className='text-xl font-semibold'>Fusce gravida justo a lectus tempus lacinia. Ut mollis scelerisque ultricies. Aenean facilisis efficitur magna, at feugiat massa bibendum at. Etiam ut venenatis urna</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-20 max-w-5xl mx-auto mt-10 mb-10'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <h2 className='text-4xl font-bold font-primary'>How it Started</h2>
                        <div className='w-20 bg-black h-[2px] mt-2'></div>
                        <p className=' max-w-2xl text-center font-medium mx-auto text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                    <div className='flex gap-5'>
                        <div className='max-w-[50%] w-full bg-section px-8 py-10 flex flex-col gap-5 border-1 rounded-xl'>
                            <h3 className='text-4xl font-bold font-primary'>Vel mauris molestie dignissim</h3>
                            <div className='text-2xl font-normal font-primary'>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</div>
                            <p className='font-secondary text-[16px]'>Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet faucibus. Maecenas et odio id turpis sollicitudin pulvinar sit amet vitae augue. Phasellus nec ultricies arcu. Quisque efficitur tellus sit amet bibendum molestie. Duis id egestas odio. Phasellus lacinia ex quis faucibus tempor. Sed feugia.</p>
                        </div>

                        <div className='max-w-[50%] w-full h-[450px] border-1 rounded-xl'>
                            <img className='h-full w-full rounded-xl' src={AboutImg} alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}