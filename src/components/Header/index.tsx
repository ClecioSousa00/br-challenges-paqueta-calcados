import { BarHeader } from '@/components/Header/BarHeader'
import Image from 'next/image'
import logoPaqueta from '@/assets/logos/logo (1).png'
import { FavoritesIcon } from '@/components/FavoritesIcon'
import { BagIcon } from '@/components/BagIcon'
import { UserIcon } from '@/components/UserIcon'
import { Container } from '@/components/Container'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b-2 border-secondary-2 border-opacity-50 bg-white">
      <BarHeader />
      <Container>
        <div className="flex items-center justify-between  pt-3">
          <Link className="cursor-pointer" href={'/'}>
            <Image
              className="w-60"
              src={logoPaqueta}
              alt="Nome da empresa Paquetá"
            />
          </Link>
          <div>
            <div className="flex items-center gap-2 text-[#383838]">
              <FavoritesIcon />
              <BagIcon />
              <UserIcon />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
