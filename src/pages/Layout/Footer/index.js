import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { httpGet } from "../../../utils/http";
import Link from '@material-ui/core/Link';

class Footer extends Component {
  //state
  state = {
    fb_link: "",
    instagram_limk: "",
    linkedIn_link: "",
    twitter_limk: ""
  }
  componentDidMount(){
    this.getSocialLinks();
  }
  // declare social linksfunction
  getSocialLinks = () => {
    const url = "http://breed-dev-back.vuwork.com:8082/getSiteSettings";
    httpGet(url)
      .then((response) => {
        this.setState({
          fb_link: response.data.site_facebook_link,
          instagram_link: response.data.site_instagram_link,
          linkedIn_link: response.data.site_linkedIn_link,
          twitter_link: response.data.site_twitter_link
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  render() {
    const {fb_link, instagram_link, linkedIn_link, twitter_link} = this.state;
    return (
      <>
        <Box className="footer-section">
          <Container style={{ maxWidth: "1208px" }}>
            <Box>
              <Box className="footer-child-div">
                <Box
                  className="footer-grand-child-main"
                  flexDirection={this.props.width === "xs" ? "column" : "row"}
                >
                  <Box width={this.props.width === "xs" ? "100%" : "239px"}>
                    <Box>
                      <Box className="footer-text-1">
                        <strong> BEST IN BREED</strong>
                      </Box>
                      <Box className="footer-text-2">
                        Lorem ipsum, or lipsum as it is sometimes known, is
                        dummy text used in laying out print, graphic or web
                        designs.
                      </Box>
                      <Box
                        style={{
                          marginBottom: "48px",
                          display: "flex",
                        }}
                      >
                        <Box>
                          <strong>Read More</strong>
                        </Box>
                        <Box style={{ paddingLeft: "5px" }}>
                          <ArrowRightAltIcon />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box width={this.props.width === "xs" ? "100%" : "70%"}>
                    <Box className="fotter-text-3">Quick Links</Box>
                    <Box
                      className="footer-right-child-main-div"
                      flexDirection={
                        this.props.width === "xs" ? "column" : "row"
                      }
                    >
                      <Box
                        className="footer-right-child-left-div"
                        width={this.props.width === "xs" ? "100%" : "50%"}
                        marginBottom={
                          this.props.width === "xs" ? "15px" : "0px"
                        }
                      >
                        <Box className="right-child-1">
                          <Box className="footer-text-3">About us</Box>
                          <Box className="footer-text-3">How it works</Box>
                          <Box className="footer-text-3">Security</Box>
                          <Box className="footer-text-3">FAQ</Box>
                          <Box className="footer-text-3">Advertise</Box>
                          <Box className="footer-text-3">Contact Us</Box>
                          <Box className="footer-text-3">Legal disclaimers</Box>
                        </Box>
                        <Box className="right-child-1">
                          <Box className="footer-text-3">Breeder</Box>
                          <Box className="footer-text-3">List your Dog</Box>
                          <Box className="footer-text-3">What Breedwise is</Box>
                          <Box className="footer-text-3">Find a Match</Box>
                          <Box className="footer-text-3">
                            Breeders license laws
                          </Box>
                          <Box className="footer-text-3">Tips to Breeder</Box>
                        </Box>
                      </Box>
                      <Box className="footer-right-child-left-div">
                        <Box className="right-child-1">
                          <Box className="footer-text-3">Adopter</Box>
                          <Box className="footer-text-3">Adopt a Dog</Box>
                          <Box className="footer-text-3">Compare Breed</Box>
                          <Box className="footer-text-3">New to Dogs</Box>
                          <Box className="footer-text-3">Tips to Adopter</Box>
                        </Box>
                        <Box className="right-child-1">
                          <Box className="footer-text-3">Become a Member</Box>
                          <Box className="footer-text-3">Donate</Box>
                          <Box className="footer-text-3">
                            Education/Outreach
                          </Box>
                          <Box className="footer-text-3">Employment</Box>
                          <Box className="footer-text-3">Media</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box
                  className="footer-bootom-parent-div"
                  flexDirection={this.props.width === "xs" ? "column" : "row"}
                >
                  <Box
                    className="footer-bottom-right-main"
                    marginBottom={this.props.width === "xs" ? "10px" : "0px"}
                  >
                    <Box className="footer-bottom-right-child">
                      <Box style={{ marginRight: "8px" }}>Terms of Use</Box>
                      <Box>
                        <hr style={{ height: "6px" }} />
                      </Box>
                      <Box style={{ marginLeft: "8px", marginRight: "8px" }}>
                        Cookies
                      </Box>
                      <Box>
                        <hr style={{ height: "6px" }} />
                      </Box>
                      <Box style={{ marginLeft: "8px", marginRight: "8px" }}>
                        Copyright
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    className="footer-bottom-middle-main"
                    marginBottom={this.props.width === "xs" ? "10px" : "0px"}
                  >
                    <Box style={{ fontSize: "12px" }}>
                      © 2020Breedwise. All Right Reserved.
                    </Box>
                  </Box>
                  <Box className="footer-left-main-div">
                    <Box className="footer-left-main-child-div">
                      <Box className="social-links-div">
                        <Box marginRight="5px">
                          <Link href={twitter_link}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsSAAALEgHS3X78AAABXElEQVRIia1W223DMAxkg/7XG0QjeIO6G3iDeoSMkBHcCZoRMoKzgUdQN9AGLJiSgCCQouz6AMWIHrwTwYdeEBEaMRTbIg8fRFIZEyLe0UZExBkRQ82OtTCwgS24IWLXSnLdaDwHCes9kts/CASpJMoJpgMIBDF3nRAEVnAk5pJkq5sSG1mdfUFIOuMWi2EkFVFE/r8YJM/bnDjJ3pSEirz2KOZnAEjZ/5XHj2JjpB8i6Y2M/QSAwEQfAPDFhFqW056zMk9z3atSLgQPXiOVC4896E+VQ4Fd0wJLKIi7LJxZveXOXMy7R7I6Rrx177YJKuGXh/JoFFKvSiQJ4bujBIqQFVwA4Ns59xcsrGhRVERWmveKwHOtbWDMy8rQeGgLVq0K1zrgHgwaSddQ8Fox1ZrWEUTXlvbb7XQdhasa6rWXCvlUizrNOKlXHxE0Wt5dUonlK3kjJb6eZwDwC7rH2R7VmimJAAAAAElFTkSuQmCC" alt="twitter-icon"/>
                          </Link>
                        </Box>
                        <Box marginRight="5px">
                          <Link href={linkedIn_link}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsSAAALEgHS3X78AAABRElEQVRIibWW4W2EMAyFXXT/ywZlBDY4ugHdgA3aEa4bMALdgBHoBnQDbgM28MnScxWiixPlck+yIJD4I8R28sLMlKCaiFpYje4bEa0wWwIxrGPmmW3tzDwxcxPyEwLIgCXi/J4uqZAWX5erlZlrC/IoQHUAuYC6EEA134PEFjhHvQvpDAcDLGeWm/ivEN+DEecdrq8pCeXpjYh6TcY900mKfipksQV4h/3BtH0log/cfxvjm9h6sBMYC8wNdzcfvkIOKuMLYhpQvxr0m0L9H4F84jePaO/PgKjqyPurQJYCIEurzuT3iZD5hBtZtHOg0wXXxmuT89x/doC4tWvLrlBhjX6B7AsDds0jfz8ZC0Jaa2ecCgCGlD0+WCIiknX9n0EMooeJ1FnJ/5dDxGFvV0s5d0mI9qjWGsYqOXNJMs/B0UR0A/zwJI9EY2/dAAAAAElFTkSuQmCC" alt="linkedIn-icon"/>
                          </Link>
                        </Box>
                        <Box marginRight="5px">
                          <Link href={fb_link}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAbRJREFUSEu1lg1RAzEQhd9zgAOoAkABoABQACigKIAqoA4oCjgHrQOKAq4KwMEyLyRHuJ8k12kz05mb3iZf9t2+TYiCYWYHAI4BnADQ8zeANYAPknrODqYizOwWwL0HDIUKOCf5mlqrF2Rm2vkbgKPsVv8CagB3JFd9czogn8XLCEA7VLBF+89/oB1AwvodWAPycr0XZDIDUJHUt4GZPQF47Jl3EcsYg6TxYQY0I6mFm5EA1SQnIdCBSiUjGW/sypf8OQD9+sYDybleBJBkkE+SI4BGyLwmeepA3oxfOYgL9hmZmTJYlswBMCFZC5SbtAGg7yeQk8hn5CTxXkt922uSlUBTAM+J3XUKoFUMFYDL3HyBhsozzM2B1AnOSkC5jLSQaysk5SFJp9Z04xfXfDXaoeE2WvKNmgW2LAbXJQTS7j5LKmhL0G/VeSnG+ihXqWHfG5LuBNiqMxRYolNIo3rdSOmabJqMvHxZOUaCnFFDavs6jzre28cJ22vwoTuDZNRxnDufYleoJ05jueKXuVuQXK+bUOoIEWDRPhDbvkyCQrA3tbKMb0Xq6CuZscjsJUG7iPkBpCjJG3IAO6gAAAAASUVORK5CYII=" alt="facebook-icon"/>
                          </Link>
                        </Box>
                        <Box>
                          <Link href={instagram_link}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAiJJREFUSEu1lv1VFEEQxKsiUCNQIhAjUCJQIhAiACIQIpAM1AjACMQIPCIQIgAiGN9vX8869M1+6NP+5/Zme6a6q6t71lphpZSnkl5K2pXE872kjaRr2zwvmuc8SikHko4CYMoVwHPbX+bO6gKVUoj8QtKLxVB/O9xIOrR91duzBRRZfPoDgOwK2Oe8+AjoH4DU87fARqCg68dEJreSoKZnryfW91oaWyAOep42fZWEIDBUl+3B9qaU8k4SdD1pHG5s79T/A9AEZd8lcQCieDNTM+R9Ehl/S34nts9Zq0BINEe8F9m8XxDGoSTEQ/Rk1VK5sf1qAIpmvOsc9iyastJJhge2h1oFC0T7M/oMQNqCvmtthz0AQUtOWbZ5V2LHddBXaax08csadha/HxLQvu1LDjuW9DFnlID2A2grWkmXQfsU0JntU4BOJeUockbUC78s5XZ9EehvM3qImqzOaE2NUCXRU3xUSAMTILZUo2FKQB2DE+Vky6pjWNIXNChXBYDQyTM2r7qQaq+PpgTQa6tMY/W5tT3cAHOTodJFE76daVpA6piqNFb3QXEjUGTVm3XQBSX0C82Y7T6opF4ot9KI35hNBuqKIk6uV3cvsak5ODRq3fC/7qORsi5QUNjtq5ka5VdbII+oa71j/iGCfD/N4Q291dLVOi99BZEdiupdeqOEuR6quqYimQWqm6KpKXr7VYRKr+q1sUTtKqClQ9a8/wUNY+Abb4D3CgAAAABJRU5ErkJggg==" alt="instagaram-icon"/>
                          </Link>
                        </Box>
                      </Box>
                      <Box className="social-links-divider">
                        <hr style={{ width: "25px", background: "white" }}/>
                      </Box>
                      <Box className="follow-us-text">Follow Us</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </>
    );
  }
}

export default withWidth()(Footer);
