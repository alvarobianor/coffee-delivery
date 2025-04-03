import { FinishOrder } from '@components/FinishOrder';
import { Payment } from '@components/Payment';
import { ResumeOrder } from '@components/ResumeOrder';
import { zodResolver } from '@hookform/resolvers/zod';
import { useOrderContext } from '@hooks/useOrder';
import { FormProvider, useForm } from 'react-hook-form';
import { OrderInformations } from 'src/reducer/orderReducer';
import { styled } from 'styled-components';
import * as zod from 'zod';

const AddressValidationSchema = zod.object({
  street: zod.string().nonempty(),
  number: zod.string().nonempty(),
  neighborhood: zod.string().nonempty(),
  complement: zod.string().optional(),
  city: zod.string().nonempty(),
  state: zod.string().nonempty(),
  code: zod.string().nonempty(),
  paymentMethod: zod.string().nonempty(),
  paymentMethodId: zod.number(),
});

export function Checkout() {
  const useFormMethods = useForm<OrderInformations>({
    resolver: zodResolver(AddressValidationSchema),
    defaultValues: {
      code: '',
      street: '',
      number: '',
      neighborhood: '',
      complement: '',
      city: '',
      state: '',
      paymentMethod: '',
      paymentMethodId: 0,
    },
  });

  const { updateAddress, updatePayment } = useOrderContext();

  const { handleSubmit } = useFormMethods;

  return (
    <main>
      <ContainerForm
        onSubmit={handleSubmit((props) => {
          console.log('props ->', props);
          updateAddress(props);
          updatePayment(props);
        })}
      >
        <Section>
          <h2>Complete seu pedido</h2>
          <FormProvider {...useFormMethods}>
            <FinishOrder />
            <Payment />
          </FormProvider>
        </Section>
        <Section>
          <h2>Cafés Selecionados</h2>
          <ResumeOrder />
        </Section>
      </ContainerForm>
    </main>
  );
}

const ContainerForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  flex-direction: row;
  margin-bottom: 5rem;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes['title-title-m']};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`;
