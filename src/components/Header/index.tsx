import { BarHeader } from '@/components/BarHeader'
import Image from 'next/image'
import logoPaqueta from '@/assets/logos/logo (1).png'
import { ContainerIcons } from '@/components/ContainerIcons'
import { FavoritesIcon } from '@/components/FavoritesIcon'
import { BagIcon } from '@/components/BagIcon'
import { UserIcon } from '@/components/UserIcon'
import { NavBar } from '@/components/NavBar'
import { Container } from '@/components/Container'

export const Header = () => {
  return (
    <header>
      <BarHeader />
      <Container>
        <div className="flex items-center justify-between  pt-3">
          <Image
            className="w-60"
            src={logoPaqueta}
            alt="Nome da empresa Paquetá"
          />
          <div>
            <ContainerIcons>
              <FavoritesIcon />
              <BagIcon />
              <UserIcon />
            </ContainerIcons>
          </div>
        </div>
      </Container>
      <NavBar />
    </header>
  )
}
