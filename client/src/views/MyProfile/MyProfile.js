import React, {Component} from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Table from "components/Table/Table.jsx";


import avatar from "assets/img/favicon.png";

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

class MyProfile extends Component{

  constructor(props) {
    super(props);
  }

  state = {
    account: "eosaccount",
    username: "User One",
    email: "userone@email.com",
    firstname: "First Name",
    lastname: "Last Name",
    city: "City",
    country: "Country",
    postalcode: "3333",
    aboutme: "This is the about me section. This such as interests and goals go here",
    myskills: "This is the skills section. Skills may include such things as programming, editing and animating",
    avatar: avatar
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Your Profile</h4>
                <p className={classes.cardCategoryWhite}>
                  Current Details
                </p>
              </CardHeader>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <Card>
                    <CardBody>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Username</h4>
                        <p className={classes.cardCategory}>
                          <span className={classes.successText}>
                          </span>{" "}
                          {this.state.username}
                        </p>
                      </CardBody>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <Card>
                    <CardBody>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Email</h4>
                        <p className={classes.cardCategory}>
                          <span className={classes.successText}>
                          </span>{" "}
                          {this.state.email}
                        </p>
                      </CardBody>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <Card>
                      <CardBody>
                        <h4 className={classes.cardTitle}>First Name</h4>
                        <p className={classes.cardCategory}>
                          <span className={classes.successText}>
                          </span>{" "}
                          {this.state.firstname}
                        </p>
                      </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <Card>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Last Name</h4>
                      <p className={classes.cardCategory}>
                        <span className={classes.successText}>
                        </span>{" "}
                        {this.state.lastname}
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={6} md={4}>
                  <Card>
                      <CardBody>
                        <h4 className={classes.cardTitle}>City</h4>
                        <p className={classes.cardCategory}>
                          <span className={classes.successText}>
                          </span>{" "}
                          {this.state.city}
                        </p>
                      </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <Card>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Country</h4>
                      <p className={classes.cardCategory}>
                        <span className={classes.successText}>
                        </span>{" "}
                        {this.state.country}
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <Card>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Postal Code</h4>
                      <p className={classes.cardCategory}>
                        <span className={classes.successText}>
                        </span>{" "}
                          {this.state.postalcode}
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
              <CardBody>
                <CardBody>
                  <h4 className={classes.cardTitle}>About Me</h4>
                  <p className={classes.cardCategory}>
                    <span className={classes.successText}>
                    </span>{" "}
                    {this.state.aboutme}
                  </p>
                </CardBody>
              </CardBody>
              <CardBody>
                <CardBody>
                  <h4 className={classes.cardTitle}>My Skills</h4>
                  <p className={classes.cardCategory}>
                    <span className={classes.successText}>
                    </span>{" "}
                    {this.state.myskills}
                  </p>
                </CardBody>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={this.state.avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}></h6>
                <h4 className={classes.cardTitle}>eosaccount</h4>
                <p className={classes.description}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves Kanye
                  I love Rick Owens’ bed design but the back is...
                </p>
                <Button color="primary" round>
                  Follow
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <p className={classes.cardCategoryWhite}>Complete your profile</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Email address"
                      id="email-address"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="First Name"
                      id="first-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="last-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="City"
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Country"
                      id="country"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Postal Code"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                    <CustomInput
                      labelText=""
                      id="about-me"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>My Skills</InputLabel>
                    <CustomInput
                      labelText=""
                      id="about-me"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary">Update Profile</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(styles)(MyProfile);
