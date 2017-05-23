
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
/*  iterateOnDestinations = async (origins, destinations) => {
    //alert('in iterateondest');
     distMatrix = fetch(
      "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" +
        origins +
        "&destinations=" +
        destinations +
        "&key=AIzaSyB3p1VnII0ff1Mxl0VQp5nmWtnapy0UlbE"
    );
    return distMatrix;
    //('http://api.icndb.com/jokes/random/4')
  };
  calculateDistances = () => {
    //{calculateDistances}
    const destinationsArray = this.state.texts;
    let totalKm = 0;
    let origIndex = 0;
    let destIndex = 1;
    if (destinationsArray[0] == null || destinationsArray[1] == null) {
      alert("Can you at least fill the first two input fields ? yes ?");
    } else {
     while (destinationsArray[destIndex] != null) {
      let origins = destinationsArray[origIndex]; //"bari";
      let destinations = destinationsArray[destIndex]; //"san%20ferdinando%20di%20puglia";
    const dist = this.iterateOnDestinations(origins, destinations)
    dist.then(data => {
      const distances = data.json();
      distances.then(data => {
        console.log(data);
        const distance = parseInt(`${data.rows[0].elements[0].distance.value}`);
        const destinText =`${data.destination_addresses[0]}`;
        const originsText = `${data.origin_addresses[0]}`;
        texts = this.state.texts;
        texts[origIndex]=originsText;
        console.log('texts index'+origIndex+' = '+texts[origIndex]);
          console.log('texts index'+destIndex+' = '+texts[destIndex]);
        texts[destIndex]=destinText;
        this.setState({ texts: texts });
        totalKm = this.state.totKm + distance;
        totKm = totalKm;
        this.setState({ totKm: totKm });
        console.log(totalKm);
        //fn(distance);
      });
    })
    .catch(err => {
      alert(err + "error in distMatrix.then");
    });
    //mode = no-cors ?
    origIndex++;
    destIndex++;
  }//while ends
    }
  console.log('eschio');
};*/
resetData = () => {
  let totalKm = 0;
  this.setState({ totKm: totalKm });
  let zeroS = ['','','','','','','','','',''];
  this.setState({ texts: zeroS });
}
iterateOnDestinations = async (origins, destinations) => {
  //alert('in iterateondest');
   distMatrix = fetch(
    "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" +
      origins +
      "&destinations=" +
      destinations +
      "&key=AIzaSyB3p1VnII0ff1Mxl0VQp5nmWtnapy0UlbE"
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
  if (destinationsArray[0] == null || destinationsArray[1] == null) {
    alert("Can you at least fill the first two input fields ? yes ?");
  } else {
      while (destinationsArray[destIndex] != null) {
        let origins = destinationsArray[origIndex]; //"bari";
        let destinations = destinationsArray[destIndex]; //"san%20ferdinando%20di%20puglia";
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
            <Title>Carella Travels</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label style={styles.textContent}>City No.1</Label>
              <Input
                onChangeText={text => {
                  var texts = this.state.texts.slice();
                  texts[0] = text;
                  this.setState({ texts: texts });

                }}
                value={this.state.texts[0]}
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
                  value={this.state.texts[1]}
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
                value={this.state.texts[2]}
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
                value={this.state.texts[3]}
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
                value={this.state.texts[4]}
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
                value={this.state.texts[5]}
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
                value={this.state.texts[6]}
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
                value={this.state.texts[7]}
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
                value={this.state.texts[8]}
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
  textContent : {
    fontSize: 4
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
