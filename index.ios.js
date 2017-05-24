
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, Fetch, TextInput} from "react-native";
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
      texts: [],
      totKm: 0
    };
  }

resetData = () => {
  let totalKm = 0;
  this.setState({ totKm: totalKm });
  let zeroS = [null,null,null,null,null,null,null,null,null,null];
  this.setState({ texts: zeroS });
}
iterateOnDestinations = async (origins, destinations) => {
  //alert('in iterateondest');
   distMatrix = fetch(
    "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" +
      origins +
      "&destinations=" +
      destinations +
      "&key=YOURKEYHERE"
  )
  .then(data =>  data.json())
  .then(data => {
      console.log(data);
      let littleData = ['','',0]; //representing Origin, Destination and KM
      littleData[0] = `${data.origin_addresses[0]}`;
      littleData[1] =`${data.destination_addresses[0]}`;
      littleData[2] = parseInt(`${data.rows[0].elements[0].distance.value}`);
      return littleData;
    })
  .catch(err => {
    alert(err + "error in distMatrix.then");
  });
  return distMatrix;
};

calculateDistances = async () => {
  //{calculateDistances}
  const destinationsArray = this.state.texts;
  let totalKm = 0;
  this.setState({ totKm: totalKm });
  //we must reset state of totKm
  let origIndex = 0;
  let destIndex = 1;
  if (destinationsArray[0] == null
    || destinationsArray[0] == ''
    ||destinationsArray[1] == ''
    || destinationsArray[1] == null) {
    alert("Can you at least fill the first two input fields ? yes ?");
  } else {
      while (destinationsArray[destIndex] != null &&  destinationsArray[destIndex] != '') {
        let origins = destinationsArray[origIndex]; 
        let destinations = destinationsArray[destIndex]; 
        try {
          const arrayOfData = await this.iterateOnDestinations(origins,destinations);
          //console.log('await = ' +totalKm[0]+' e '+ totalKm[1]+' e '+totalKm[2]);
          texts = this.state.texts;
          console.log('original texts: = '+texts);
          texts[origIndex]=arrayOfData[0];
          texts[destIndex]=arrayOfData[1];
          console.log('texts index: = '+origIndex+' = '+texts[origIndex]);
          console.log('texts index: = '+destIndex+' = '+texts[destIndex]);
          this.setState({ texts: texts });
          console.log('final texts: = '+this.state.texts);
          totalKm = this.state.totKm + arrayOfData[2];
          totKm = totalKm;
          this.setState({ totKm: totKm });
          console.log(totalKm);
          origIndex++;
          destIndex++;
          } catch(e) {
              console.error("Problem", e)
            }
  //  totalKm = totalKm +
    //mode = no-cors ?

    }//while ends
  }
//transfomring meters in km
meters = this.state.totKm;
meters = meters/1000
this.setState({ totKm: meters })
console.log('eschio');
//
};

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#7FACC0'}}>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{fontSize: 10}}>Carella Travels</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label style={{fontSize: 12}}>City No.1</Label>
              <Input
                clearButtonMode = 'unless-editing'
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[0] = text;
                  this.setState({ texts: texts });

                }}
                value={this.state.texts[0]}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{fontSize: 12}}>City No.2</Label>
              <Input
              clearButtonMode = 'unless-editing'
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[1] = text;
                  this.setState({ texts: texts });
                }}
                  value={this.state.texts[1]}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{fontSize: 12}}>City No.3</Label>
              <Input
              clearButtonMode = 'unless-editing'
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[2] = text;
                  this.setState({ texts: texts });

                }}
                value={this.state.texts[2]}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{fontSize: 12}}>City No.4</Label>
              <Input
              clearButtonMode = 'unless-editing'
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[3] = text;
                  this.setState({ texts: texts });
                }}
                value={this.state.texts[3]}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{fontSize: 12}}>City No.5</Label>
              <Input
              clearButtonMode = 'unless-editing'
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[4] = text;
                  this.setState({ texts: texts });
                }}
                value={this.state.texts[4]}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{fontSize: 12}}>City No.6</Label>
              <Input
              clearButtonMode = 'unless-editing'
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[5] = text;
                  this.setState({ texts: texts });
                }}
                value={this.state.texts[5]}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{fontSize: 12}}>City No.7</Label>
              <Input
              clearButtonMode = 'unless-editing'
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[6] = text;
                  this.setState({ texts: texts });
                }}
                value={this.state.texts[6]}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{fontSize: 12}}>City No.8</Label>
              <Input
              clearButtonMode = 'unless-editing'
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[7] = text;
                  this.setState({ texts: texts });
                }}
                value={this.state.texts[7]}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{fontSize: 12}}>City No.9</Label>
              <Input
              clearButtonMode = 'unless-editing'
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[8] = text;
                  this.setState({ texts: texts });
                }}
                value={this.state.texts[8]}
              />
            </Item>
            <Item floatingLabel last>
              <Label style={{fontSize: 12}}>City No.10</Label>
              <Input
              clearButtonMode = 'unless-editing'
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[9] = text;
                  this.setState({ texts: texts });
                }}
                value={this.state.texts[9]}
              />
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Button onPress={this.calculateDistances}><Text>GO</Text></Button>
            </Button>
            <Button full>
              <Button onPress={this.resetData}><Text>RESET</Text></Button>
            </Button>
            <Label>
            {this.state.totKm}
            </Label>
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

AppRegistry.registerComponent("peppe1", () => peppe1);
