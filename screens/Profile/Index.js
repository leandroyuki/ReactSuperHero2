import React from 'react';
import {Text, View} from 'react-native';
import { Thumbnail } from 'native-base';
import { SafeAreaView } from 'react-native';

export default class Profile extends React.Component{
    state = {
        data: {
            image: {
                url: `https://via.placeholder.com/300x300?text=...`,
            }
        }
    };

    static navigationOptions = {
        title: 'Personagem'
    };
    componentDidMount(){
        const id = this.props.navigation.getParam('id');
        console.log('ID -- ', id);
        fetch(`https://www.superheroapi.com/api.php/10216378608089852/${id}`)
        .then(response => response.json())
        .then((data) => this.setState({data}));
    };
    render(){
        const {data} = this.state;
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Text
                    style={{
                    padding: 10,
                    fontSize: 25}}>
                {data.name}
                </Text>
                <Thumbnail
                style={{width: '50%', height: '50%'}}
                source={{uri: data.image.url}}
                />
            </View>
        )
    }
}