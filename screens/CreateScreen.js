import { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, FlatList, View, Image } from 'react-native';
import axios from 'axios';

export default function CreateScreen () {

    const [fieldText, setFieldText] = useState('');
    const [list, setList] = useState([]);

    return (
        <>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                marginVertical: 20
            }}>NOTÍCIAS</Text>
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
                        axios.get('https://newsapi.org/v2/everything?q=' + fieldText + '&from=2025-03-23&sortBy=popularity&apiKey=bcfb558715494ffab76ba663b5107143')
                        .then((response) => {
                            console.log(response.data);
                            setList(response.data.articles);
                        })
                        .catch((error) => {
                            console.log(error);
                        });

                        setFieldText('');
                    }
                }}
            >
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>PESQUISAR</Text>
            </TouchableOpacity>

            <FlatList
                data={list}
                renderItem={({item, index}) => (
                    <View
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
                            fontWeight: 800,
                            textAlign: 'center'
                        }}>{item.title}</Text>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 500,
                            marginVertical: 15
                        }}>{item.description}</Text>
                        <Image
                            style={{
                                width: '100%',
                                height: 200
                            }}
                            source={{
                                uri: item.urlToImage,
                            }}
                        />
                    </View>
                )}
            />
        </>
    )
}