export const Footer = () => {
  return (
    <footer className='flex items-center justify-between pb-4'>
      <div className='text-xs sm:text-sm font-bold'>
        <p className='leading-none'>Mar Seafood ehf</p>
        <p className='leading-none'>Hafnargata 16</p>
        <p className='leading-none'>230, Reykjanesbær</p>
        <p className='leading-none'>Iceland</p>
      </div>
      <img
        src='/images/footer-cert.png'
        alt='Certification'
        className='h-8 sm:h-10'
      />
    </footer>
  )
}
