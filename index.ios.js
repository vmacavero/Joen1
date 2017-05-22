
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, Fetch } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Form,
  Item,
  Label,
  Input,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon
} from "native-base";
import axios from "axios";
export default class peppe1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: []
    };
  }

  iterateOnDestinations = (origins, destinations) => {
    //alert('in iterateondest');
    const distMatrix = fetch(
      "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" +
        origins +
        "&destinations=" +
        destinations +
        "&key=AIzaSyB3p1VnII0ff1Mxl0VQp5nmWtnapy0UlbE"
    );
    //('http://api.icndb.com/jokes/random/4')
    distMatrix
      .then(data => {
        const distances = data.json();
        distances.then(data => {
          console.log(`${data.rows[0].elements[0].distance.value}`);
          const distance = `${data.rows[0].elements[0].distance.value}`;
          return distance;

        });
      })
      .catch(err => {
        alert(err + "error in distMatrix.then");
      });

    //return pippo;
  };
  calculateDistances = () => {
    //{calculateDistances}
    const destinationsArray = this.state.texts;
    let totalKm = 0;
    if (destinationsArray[0] == null || destinationsArray[1] == null) {
      alert("Can you at least fill the first two input fields ? yes ?");
    } else {
      let origins = destinationsArray[0]; //"bari";
      let destinations = destinationsArray[1]; //"san%20ferdinando%20di%20puglia";
      totalKm = this.iterateOnDestinations(origins, destinations);
      console.log("ttkkm = " +totalKm);

    //mode = no-cors ?
    }
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>City No.1</Label>
              <Input
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[0] = text;
                  this.setState({ texts: texts });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label>City No.2</Label>
              <Input
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[1] = text;
                  this.setState({ texts: texts });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label>City No.3</Label>
              <Input
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[2] = text;
                  this.setState({ texts: texts });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label>City No.4</Label>
              <Input
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[3] = text;
                  this.setState({ texts: texts });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label>City No.5</Label>
              <Input
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[4] = text;
                  this.setState({ texts: texts });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label>City No.6</Label>
              <Input
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[5] = text;
                  this.setState({ texts: texts });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label>City No.7</Label>
              <Input
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[6] = text;
                  this.setState({ texts: texts });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label>City No.8</Label>
              <Input
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[7] = text;
                  this.setState({ texts: texts });
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label>City No.9</Label>
              <Input
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[8] = text;
                  this.setState({ texts: texts });
                }}
              />
            </Item>
            <Item floatingLabel last>
              <Label>City No.10</Label>
              <Input
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[9] = text;
                  this.setState({ texts: texts });
                }}
              />
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Button onPress={this.calculateDistances}><Text>GO</Text></Button>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

/*axios.get('http://api.icndb.com/jokes/random/3')
  .then(function (response) {
    alert(response);
  })
  .catch(function (error) {
    alert(error);
  });*/

AppRegistry.registerComponent("peppe1", () => peppe1);
