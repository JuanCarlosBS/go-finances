import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native"
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from "../../components/Forms/Button";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { Input } from "../../components/Forms/Input";
import { InputForm } from "../../components/Forms/InputForm";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelect } from "../CategorySelect";

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from './styles'

interface FormData {
    name: string;
    amount: string;
}

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('Nome é obrigatório'),
    amount: Yup
        .number()
        .typeError("Informe um valor númerico")
        .positive("O valor não pode ser negativo")
})

export function Register() {
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    })

    const [transactionType, setTransactionType] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    function handleTransactionsTypeSelect(type: 'up' | 'down') {
        setTransactionType(type)

    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true)
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false)
    }

    function handleRegister(form: FormData) {
        if (!transactionType)
            return Alert.alert("Selecione o tipo da transação!")

        if (category.key === 'category')
            return Alert.alert("Selecione uma categoria!")

        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key,
        }

        console.log(data)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>
                        Cadastro
                    </Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm
                            name="name"
                            control={control}
                            placeholder="Nome"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />

                        <InputForm
                            name="amount"
                            control={control}
                            placeholder="Preço"
                            keyboardType="numeric"
                            error={errors.amount && errors.amount.message}
                        />

                        <TransactionTypes>
                            <TransactionTypeButton
                                type="up"
                                title="Income"
                                onPress={() => handleTransactionsTypeSelect('up')}
                                isActive={transactionType === 'up'}
                            />

                            <TransactionTypeButton
                                type="down"
                                title="Outcome"
                                onPress={() => handleTransactionsTypeSelect('down')}
                                isActive={transactionType === 'down'}
                            />
                        </TransactionTypes>

                        <CategorySelectButton title={category.name} onPress={handleOpenSelectCategoryModal} />
                    </Fields>
                    <Button title='Enviar' onPress={handleSubmit(handleRegister)} />
                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                    />
                </Modal>

            </Container>
        </ TouchableWithoutFeedback>
    );
}