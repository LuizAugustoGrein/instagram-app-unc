import { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function SearchScreen () {

    const [fieldText, setFieldText] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        console.log(list);
    }, [list]);

    return (
        <>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                marginVertical: 20
            }}>TO DO LIST</Text>
            <TextInput style={{
                    height: 50,
                    margin: 15,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10
                }}
                value={fieldText}
                onChangeText={setFieldText}
            />
            <TouchableOpacity
                style={{
                    margin: 15,
                    backgroundColor: '#2b478a',
                    padding: 15,
                    borderRadius: 10
                }}
                onPress={() => {
                    if (fieldText.trim()) {
                        setList([...list, fieldText]);
                        setFieldText('');
                    }
                }}
            >
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>ADICIONAR</Text>
            </TouchableOpacity>

            <FlatList
                data={list}
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        onPress={() => {
                            setList(list.filter((_, i) => {
                                return i != index;
                            }));
                        }}
                        style={{
                            backgroundColor: '#ccc',
                            marginHorizontal: 15,
                            marginVertical: 10,
                            padding: 15,
                            borderRadius: 10
                        }}
                    >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 600
                        }}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </>
    )
}