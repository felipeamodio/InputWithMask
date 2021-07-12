import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';

export default function Input(){
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const cpfRef = useRef(null);

    function showCpf(){ //tirando a máscara do CPF
        const unmask = cpfRef?.current.getRawValue();
        const cpfIsValid = cpfRef?.current.isValid();
        alert(unmask + ' É válido? ' + cpfIsValid)
    }

    return(
        <View>
            <Text style={styles.title}>Digite seu telefone</Text>

            <TextInputMask 
                style={styles.input}
                type={'cel-phone'} //tipo do input
                placeholder="(99) 99999-9999" 
                options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                }} //opções para facilitar no entendimento do input
                value={phone} //passando o useState
                onChangeText={text => setPhone(text)} //passando o useState
            />

            <Text style={[styles.title, {marginTop: 42}]}>Digite seu CPF</Text>

            <TextInputMask 
                style={[styles.input, {marginBottom: 55}]}
                placeholder="99.999.999-99"
                type={'cpf'}
                value={cpf}
                onChangeText={text => setCpf(text)}
                ref={cpfRef}
            />

            <Button
                title="Mostrar CPF sem máscara"
                onPress={showCpf}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 14,
        fontWeight: '600'
    },
    input: {
        width: 200,
        height: 40,
        backgroundColor: '#DDDDDD',
        borderRadius: 5,
        fontSize: 20,
        padding: 5,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})