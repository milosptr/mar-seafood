export const AboutSection = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 items-center gap-5 sm:gap-10'>
      <div>
        <h2 className='text-3xl sm:text-5xl xl:text-6xl font-bold'>
          Fresh <br className='hidden sm:block' />
          Icelandic <br className='hidden sm:block' />
          Seafood <br className='hidden sm:block' />
          Products
        </h2>
        <p className='mt-5 sm:mt-8'>
          We are a leading exporter of premium Icelandic seafood, committed to
          delivering the finest products directly from the pristine waters of
          Iceland. Specializing in a wide range of seafood, we focus on
          sustainability sourced fish and by-products, ensuring quality and
          freshness in every shipment.
        </p>
      </div>
      <div className='flex items-center justify-center'>
        <img
          src='/images/about.jpg'
          alt='About'
          className='rounded-full aspect-square object-fit object-top w-full max-w-[300px] sm:max-w-[500px]'
        />
      </div>
    </section>
  )
}
