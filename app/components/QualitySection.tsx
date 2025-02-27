export const QualitySection = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 items-center gap-5 sm:gap-10'>
      <div className='flex items-center justify-center row-start-2 md:row-start-auto'>
        <img
          src='/images/quality.jpg'
          alt='About'
          className='rounded-full aspect-square object-fit object-center w-full max-w-[300px] sm:max-w-[500px]'
        />
      </div>
      <div>
        <h2 className='text-3xl sm:text-5xl xl:text-6xl font-bold row-start-1 md:row-start-auto'>
          Quality you <br className='hidden sm:block' />
          can trust
        </h2>
        <p className='mt-5 sm:mt-10'>
          We specialize in exporting high-quality frozen Icelandic seafood,
          primarily focusing on white fish products. In addition, we are experts
          in delivering premium by-products such as mince and more, ensuring
          that every part of the catch is utilized. While frozen seafood is our
          main focus, we also accommodate fresh seafood inquiries upon request.
          Committed to sustainability and quality, we bring the best of
          Icelandic waters to markets worldwide.
        </p>
      </div>
    </section>
  )
}
