import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, List, ListItem, Thumbnail, Left, Right, Body, Icon } from 'native-base';
import style from './style'
import LogoTitle from '../../components/LogoTitle'
export default class Search extends React.Component {
  state = {
    error: false,
    list: []
  };
  static navigationOptions = {
    headerTitle: <LogoTitle />
  }
  
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  renderList() {
    console.log(this.state.list);
    if(this.state.list.length === 0){
      return null;
    }
    return(<List>
      {
        this.state.list.map((item) => (
        <ListItem key={ `item-${item.id}` }>
            <Left>
                <Thumbnail
                square
                small
                source={ { uri: item.image.url } }
                />
            </Left>
            <Body>
                <Text>{ item.id }</Text>
                <Text>{ item.name }</Text>
            </Body>
            <Right style={ { paddingLeft: 10 } }>
                <Button
                    transparent
                    dark
                    onPress={
                        () => this.props.navigation.push('Profile', {
                            id: item.id,
                        })
                    }
                >
                    <Icon name="arrow-forward" />
                </Button>
            </Right>
          </ListItem>
        ))
      }
      </List>)
  }

  renderError() {
    if (this.state.error){
      return(<Text> Ops! </Text>)
    }
  }
  
  search(value){
    if (value.length > 3){
      console.log('value', value);
      this.setState({list: []});
      fetch(`https://www.superheroapi.com/api.php/10216378608089852/search/${value}`)
      .then(response => response.json())
      .then((data) => {
        if(data.error){
          return this.setState({list:[], error: true})
        }
        const results = data.results;
        return this.setState({list:results, error:false});
      })
  }
}

  render() {
    return (
      <View style={style.container}>
      <TextInput
        style={style.textInput} onChangeText={this.search} />
     {this.renderList()}
     {this.renderError()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
