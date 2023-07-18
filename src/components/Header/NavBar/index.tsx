import Link from 'next/link'

export const NavBar = () => {
  const links = [
    {
      id: '#',
      name: 'Novidades',
    },
    {
      id: '#',
      name: 'Feminino',
    },
    {
      id: '#',
      name: 'Masculino',
    },
    {
      id: '#',
      name: 'Paquetá Esportes',
    },
    {
      id: '#',
      name: 'Outlet',
    },
    {
      id: '#',
      name: 'Cashback',
    },
  ]

  return (
    <nav>
      <ul className="flex w-full justify-between">
        {links.map((link, index) => (
          <li key={index} className="text-lg font-medium text-secondary-2">
            {' '}
            <Link href={link.id}>{link.name}</Link>{' '}
          </li>
        ))}
      </ul>
    </nav>
  )
}
