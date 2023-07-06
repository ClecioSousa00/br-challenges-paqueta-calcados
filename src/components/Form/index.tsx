import { ButtonGeneric } from '../ButtonGeneric'
import { FormInput } from './FormInput'
import { FaRegEnvelope } from 'react-icons/fa6'
import { LuUser } from 'react-icons/lu'

export const Form = () => {
  return (
    <form>
      <p className="text-lg font-medium">
        Nos informe o seu e-mail e nome para o melhor atendimento!
      </p>
      <div>
        <div className="mt-10 flex items-center gap-7">
          <FormInput placeholder="maria@seuemail.com">
            <FaRegEnvelope size={18} />
          </FormInput>
          <FormInput placeholder="Maria da Silva">
            <LuUser size={18} />
          </FormInput>
        </div>
        <div className="mb-10 mt-6 flex items-center gap-9">
          <p className="text-base font-medium">Tenho interesse na categoria:</p>
          <div className="flex gap-1">
            <input
              className="text-primary-2 accent-white"
              type="checkbox"
              name="woman"
              id="idWoman"
            />
            <label htmlFor="idWoman">Feminina</label>
          </div>
          <div className="flex gap-1">
            <input
              className="text-red-500 accent-white"
              type="checkbox"
              name="man"
              id="idMan"
            />
            <label htmlFor="idMan">Masculina</label>
          </div>
        </div>
      </div>
      <ButtonGeneric text="Quero receber" />
    </form>
  )
}
