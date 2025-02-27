export const FooterSection = () => {
  return (
    <section>
      <h3 className='text-2xl sm:text-4xl font-medium'>Please contact us at</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-10 md:gap-0 mt-8'>
        <div>
          <div className=''>
            <p className='text-lg sm:text-xl font-bold'>Sales Department</p>
            <a
              href='mailto:sales@marseafood.is'
              className='font-medium text-gray-700'
            >
              sales@marseafood.is
            </a>
          </div>
          <div className='mt-8'>
            <p className='text-lg sm:text-xl font-bold'>
              Thorsteinn Finnbogason
            </p>
            <p className='font-bold text-gray-700'>Owner</p>

            <a
              href='mailto:steini@marseafood.is'
              className='block font-medium text-gray-700 mt-4'
            >
              steini@marseafood.is
            </a>
            <a
              href='tel:+3546631678'
              className='block font-medium text-gray-700'
            >
              +354 6631 678
            </a>
          </div>
        </div>
        <div>
          <img src='/images/iceland.png' alt='Iceland' className='w-full' />
        </div>
      </div>
    </section>
  )
}
