import React, { Component } from 'react';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import Icon from "@material-ui/core/Icon";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Table from "components/Table/Table.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class Exchange extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    tokens:[
      {
        tokenSymbol: "jpct1",
        title: "Project One",
        summary: "Item one is a video game",
        price: "3 EOS"
      }
    ]
  }

  displayProjects = (classes) => {
    return this.state.items.map((item) => {
      return (
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>{item.title}</h4>
              <p className={classes.cardCategoryWhite}>
                Details
              </p>
            </CardHeader>
            <Card>
              <CardBody>
                <GridContainer>
                  <Card>
                  </Card>
                  <GridItem xs={12} sm={12} md={4}>
                    Summary: {item.summary}
                  </GridItem>
                </GridContainer>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        Price: {item.price}
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </Card>
        </GridItem>
      )
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        {this.displayProjects(classes)}
      </GridContainer>
    )
  }
}

export default withStyles(styles)(Exchange);
