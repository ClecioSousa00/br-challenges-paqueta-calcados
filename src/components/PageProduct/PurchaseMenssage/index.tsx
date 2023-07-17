import { CloseSgv } from '@/components/icons/CloseSvg.index'
import { SuccessSvg } from '@/components/icons/SuccessSvg'

type PurchaseMenssageProps = {
  isOpen: boolean
  closeMenssage: () => void
}

export const PurchaseMenssage = ({
  isOpen,
  closeMenssage,
}: PurchaseMenssageProps) => {
  return (
    <div className={` w-96 rounded-lg shadow-lg ${isOpen ? 'flex' : 'hidden'}`}>
      <div className="flex items-center rounded-l-lg bg-primary-2 px-6 py-4">
        <SuccessSvg />
      </div>
      <div className="flex w-full items-center justify-between rounded-r-lg border border-secondary-2 border-l-transparent border-opacity-50 bg-white px-4 py-6 shadow-lg">
        <p className="text-secondary">Adicionado na sacola!</p>
        <button onClick={closeMenssage}>
          <CloseSgv />
        </button>
      </div>
    </div>
  )
}
