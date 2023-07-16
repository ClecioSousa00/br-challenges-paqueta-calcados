import { ItemsInfosBar } from './ItemsInfosBar'
import { Arrows } from '../../icons/Arrows'
import { Box } from '../../icons/Box'
import { Card } from '../../icons/Card'
import { Discount } from '../../icons/Discount'
import { Location } from '../../icons/Location'

export const InfosBar = () => {
  return (
    <section className="flex justify-between bg-gradientBar px-20 py-14">
      <ItemsInfosBar>
        {' '}
        <Card />{' '}
        <p>
          Pague em até 10x <strong>sem juros</strong>
        </p>{' '}
      </ItemsInfosBar>
      <ItemsInfosBar>
        {' '}
        <Location />{' '}
        <p>
          <strong>Retire grátis </strong>em nossas lojas
        </p>{' '}
      </ItemsInfosBar>
      <ItemsInfosBar>
        {' '}
        <Discount /> <strong>ganhe 20% de desconto</strong>{' '}
      </ItemsInfosBar>
      <ItemsInfosBar>
        {' '}
        <Box />{' '}
        <p>
          <strong>frete grátis </strong>para regiões sul e sudeste*
        </p>{' '}
      </ItemsInfosBar>
      <ItemsInfosBar>
        {' '}
        <Arrows /> <p>primeira troca grátis</p>{' '}
      </ItemsInfosBar>
    </section>
  )
}
