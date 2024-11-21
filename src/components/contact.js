export default function Contact(){

    const config={
        email:'suryashanmugam2002@gmail.com',
        phoneno:'+91 8608998527'
    }
    return <section id="contact" className='flex flex-col  bg-primary px-5 py-32'>
         
        <div className='flex flex-col items-center text-white'>
            <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[135px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail,Please Contact me</p>
            <p className="py-2"><span className="font-blod">Email:</span>{config.email}</p>
            <p className="py-2"><span className="font-blod">Phone:</span>{config.phoneno}</p>
        </div>
    </section>
}
