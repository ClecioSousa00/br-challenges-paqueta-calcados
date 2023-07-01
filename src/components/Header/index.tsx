import Image from 'next/image'
import { BarHeader } from '../BarHeader'
import logoPaqueta from '@/assets/logos/logo (1).png'
import { ContainerIcons } from '../ContainerIcons'
import { FavoritesIcon } from '../FavoritesIcon'
import { BagIcon } from '../BagIcon'
import { UserIcon } from '../UserIcon'

export const Header = () => {
  return (
    <header>
      <BarHeader />
      <div className="flex items-center justify-between px-20 pt-7">
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
    </header>
  )
}
