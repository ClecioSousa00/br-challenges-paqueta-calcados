import Link from 'next/link'

export const NavBar = () => {
  return (
    <nav className="mb-4 mt-10 px-20">
      <ul className="flex w-full justify-between">
        <li className="text-lg font-medium text-[#383838]">
          {' '}
          <Link href={'#'}>Novidades</Link>{' '}
        </li>
        <li className="text-lg font-medium text-[#383838]">
          {' '}
          <Link href={'#'}>Feminino</Link>{' '}
        </li>
        <li className="text-lg font-medium text-[#383838]">
          {' '}
          <Link href={'#'}>Masculino</Link>{' '}
        </li>
        <li className="text-lg font-medium text-[#383838]">
          {' '}
          <Link href={'#'}>Paquetá Esportes</Link>{' '}
        </li>
        <li className="text-lg font-medium text-[#383838]">
          {' '}
          <Link href={'#'}>Outlet</Link>{' '}
        </li>
        <li className="text-lg font-medium text-[#383838]">
          {' '}
          <Link href={'#'}>Cashback</Link>{' '}
        </li>
      </ul>
    </nav>
  )
}
