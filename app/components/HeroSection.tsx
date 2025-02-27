export const HeroSection = () => {
  return (
    <section className='flex flex-col items-center justify-center space-y-8 sm:space-y-12 min-h-[50vh]'>
      <img
        src='/images/marseafood-logo.svg'
        alt='Mar Seafood'
        className='w-full max-w-56 sm:max-w-96'
      />
      <h1 className='text-2xl sm:text-4xl text-center font-medium uppercase tracking-wide'>
        Icelandic Seafood
        <br />
        Products
      </h1>
    </section>
  )
}
