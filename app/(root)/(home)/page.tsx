import MeetingTypeList from "@/components/MeetingTypeList";


const Home = () => {

  const now = new Date();

  const time = now.toLocaleTimeString('en-IN', {hour12: false, hour: '2-digit', minute: '2-digit'})
  const date = (new Intl.DateTimeFormat('en-IN', {dateStyle: 'full'})).format(now)

  return (
    <section className='flex size-full flex-col  gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 md:px-9 md:py-8'>
          <h2 className="glassmorphism max-w-[270px] rounded-full py-2 text-center text-base font-normal"> Upcoming meeting at 13:30 </h2>
          <div className='flex flex-col gap-2'>
            <h1 className='font-medium text-4xl lg:text-7xl'>{time}</h1>
            <p className='text-lg font-medium text-purple-1 lg:text-2xl'>{date}</p>
        </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  )
}

export default Home