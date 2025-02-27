export const ProductsSection = () => {
  const species = [
    {
      img: '/images/products/catfish.png',
      name: 'Catfish',
    },
    {
      img: '/images/products/cod.png',
      name: 'Cod',
    },
    {
      img: '/images/products/halibut.png',
      name: 'Greenland Halibut',
    },
    {
      img: '/images/products/haddock.png',
      name: 'Hadddock',
    },
    {
      img: '/images/products/ling.png',
      name: 'Ling',
    },
    {
      img: '/images/products/lumpfish.png',
      name: 'Lumpfish',
    },
    {
      img: '/images/products/plaice.png',
      name: 'Plaice',
    },
    {
      img: '/images/products/redfish.png',
      name: 'Redfish',
    },
    {
      img: '/images/products/saithe.png',
      name: 'Saithe',
    },
  ]

  return (
    <section>
      <h2 className='text-2xl sm:text-3xl'>
        Main Species (and many others...)
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
        {species.map((s, idx) => (
          <div key={idx} className='flex flex-col items-center'>
            <div className='w-full border border-solid aspect-video rounded-sm overflow-hidden flex items-center justify-center'>
              <img src={s.img} alt={s.name} className='' />
            </div>
            <h4 className='sm:text-lg font-semibold leading-5 mt-3 text-left w-full'>
              {s.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  )
}
