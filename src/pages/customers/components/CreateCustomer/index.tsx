import React, { useEffect, useState } from 'react'

import { Formik } from 'formik'

import Button from '@components/Button'
import { Dropdown } from '@components/Dropdown'
import Input from '@components/Input'
import Line from '@components/Line'
import Sidebar from '@components/Sidebar'

import { useCustomers } from '@contexts/customers'

import api from '@services/http/api'
import { maskCnpj, maskCpf } from '@utils/masks'
import { onlyNumbers } from '@utils/validators'
import { CreateCustomerSchema } from '@schemas/customer'

import BankIcon from '@assets/icons/building-bank.svg'
import ChevronLeftIcon from '@assets/icons/chevron-left.svg'
import ChevronRightIcon from '@assets/icons/chevron-right.svg'
import LoaderIcon from '@assets/icons/loader.svg'
import UserIcon from '@assets/icons/user.svg'

import { ButtonWrapper, Container, InputsContainer, SectionForm, Title, TitleSection } from './styles'

export type CreateCustomerProps = {
  visible: boolean
  onClose: () => void
}

const CreateCustomer = ({ visible, onClose }: CreateCustomerProps) => {
  const { newCustomer } = useCustomers()
  const [isLoading, setLoading] = useState(false)
  const [banks, setBanks] = useState<string[]>([])

  useEffect(() => {
    api.get('listBanks').then((response) => {
      const arrayOfBanks = response.data.map((bank: any) => `${bank.code} - ${bank.bank}`)
      setBanks(arrayOfBanks)
    })
  }, [])

  return (
    <Sidebar visible={visible} onClose={onClose}>
      <Container>
        <Title>Novo cliente</Title>
        <Formik
          initialValues={{ name: '', documentType: '', document: '', bankName: '', agency: '', account: '' }}
          validationSchema={CreateCustomerSchema}
          validateOnChange={true}
          onSubmit={(values, { resetForm }) => {
            setLoading(true)
            newCustomer(values)
              .then(() => {
                onClose()
                resetForm()
              })
              .finally(() => setTimeout(() => setLoading(false), 500))
          }}
        >
          {({ handleSubmit, setFieldValue, setFieldError, resetForm, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <SectionForm>
                <TitleSection>Informação pessoal</TitleSection>
                <InputsContainer>
                  <Input
                    name='name'
                    id='name'
                    label='Nome'
                    placeholder='Digite o nome'
                    value={values.name}
                    error={errors.name}
                    iconLeft={<UserIcon />}
                    onChange={(e) => {
                      setFieldValue('name', e.target.value)
                    }}
                  />
                  <Dropdown
                    label='Tipo'
                    value={values.documentType}
                    placeholder='Selecione o Tipo'
                    options={['Pessoa física', 'Pessoa jurídica']}
                    onSelect={(value) => {
                      setFieldValue('documentType', value)
                      setFieldError('documentType', '')
                      setFieldValue('document', '')
                    }}
                    error={errors.documentType}
                  />
                  <Input
                    name='document'
                    id='document'
                    label='Documento'
                    placeholder='Digite o documento'
                    value={values.document}
                    error={errors.document}
                    iconLeft={<UserIcon />}
                    maxLength={values.documentType === 'Pessoa física' ? 14 : 18}
                    onChange={(e) => {
                      const value = onlyNumbers(e.target.value)
                      if (values.documentType === 'Pessoa física') {
                        const newValue = maskCpf(value)
                        setFieldValue('document', newValue)
                      } else {
                        const newValue = maskCnpj(value)
                        setFieldValue('document', newValue)
                      }
                    }}
                  />
                </InputsContainer>
              </SectionForm>
              <Line />
              <SectionForm>
                <TitleSection>Informação bancaria</TitleSection>
                <InputsContainer>
                  <Dropdown
                    label='Banco'
                    value={values.bankName}
                    placeholder='Selecione o Banco'
                    options={banks}
                    onSelect={(value) => {
                      setFieldValue('bankName', value)
                      setFieldError('bankName', '')
                    }}
                    error={errors.bankName}
                  />
                  <Input
                    name='agency'
                    id='agency'
                    label='Documento'
                    placeholder='Digite a agencia'
                    value={values.agency}
                    error={errors.agency}
                    iconLeft={<BankIcon />}
                    maxLength={4}
                    onChange={(e) => {
                      const value = onlyNumbers(e.target.value)
                      setFieldValue('agency', value)
                    }}
                  />
                  <Input
                    name='account'
                    id='account'
                    label='Numero da Conta'
                    placeholder='Digite o numero da conta'
                    value={values.account}
                    error={errors.account}
                    iconLeft={<BankIcon />}
                    maxLength={12}
                    onChange={(e) => {
                      const value = onlyNumbers(e.target.value)
                      setFieldValue('account', value)
                    }}
                  />
                </InputsContainer>
              </SectionForm>
              <ButtonWrapper>
                <Button
                  type='button'
                  title='Cancelar'
                  onClick={() => {
                    onClose()
                    resetForm()
                  }}
                  width={50}
                  variant='secondary'
                  iconLeft={<ChevronLeftIcon />}
                  disabled={isLoading}
                />
                <Button
                  type='submit'
                  title='Cadastrar'
                  width={50}
                  variant='primary'
                  iconRight={isLoading ? <LoaderIcon /> : <ChevronRightIcon />}
                  disabled={
                    !values.name ||
                    !values.documentType ||
                    !values.document ||
                    !values.bankName ||
                    !values.agency ||
                    !values.account ||
                    !!errors.name ||
                    !!errors.documentType ||
                    !!errors.document ||
                    !!errors.bankName ||
                    !!errors.agency ||
                    !!errors.account ||
                    isLoading
                  }
                />
              </ButtonWrapper>
            </form>
          )}
        </Formik>
      </Container>
    </Sidebar>
  )
}

export default CreateCustomer
