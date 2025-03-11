import { useState, useEffect } from 'react';
import { Text, TextInput } from 'react-native';

export default function SearchScreen () {

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        console.log(searchText);
    }, [searchText])

    return (
        <>
            <Text>Tela de Pesquisa</Text>
            <TextInput style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10
                }}
                value={searchText}
                onChangeText={setSearchText}
            />
            <Text style={{fontSize: 50}}>{searchText}</Text>
        </>
    )
}