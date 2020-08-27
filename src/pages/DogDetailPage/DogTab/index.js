import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

class DogTab extends Component {
    render() {
      return (
        <>
          <Box>
          <Container style={{ maxWidth: "1208px" }}>
            <Box className="dog-info-tab-parent">
              <Box display="flex" flexDirection={this.props.width==="xs" ? "column" : "row"}>
                <Box className="tab-div" borderTop= "6px solid rgb(219, 94, 30)">
                  <Box
                    marginTop="-8px"
                    paddingTop="32px"
                    paddingBottom="32px"
                    borderRight="1px solid rgb(224, 219, 213)"
                    borderBottom="0px"
                  >
                    Availability
                  </Box>
                </Box>
                <Box className="tab-div" style={{backgroundColor: "#efe9e4"}}>
                  <Box
                    marginTop="-8px"
                    paddingTop="32px"
                    paddingBottom="32px"
                    borderRight="1px solid rgb(224, 219, 213)"
                    borderBottom="0px"
                  >
                    Litter History
                  </Box>
                </Box>
                <Box className="tab-div" style={{backgroundColor: "#efe9e4"}}>
                  <Box
                    marginTop="-8px"
                    paddingTop="32px"
                    paddingBottom="32px"
                    borderRight="1px solid rgb(224, 219, 213)"
                    borderBottom="0px"
                  >
                    Health Testing
                  </Box>
                </Box>
                <Box className="tab-div" style={{backgroundColor: "#efe9e4"}}>
                  <Box
                    marginTop="-8px"
                    paddingTop="32px"
                    paddingBottom="32px"
                    borderRight="1px solid rgb(224, 219, 213)"
                    borderBottom="0px"
                  >
                    Temperament
                  </Box>
                </Box>
                <Box className="tab-div" style={{backgroundColor: "#efe9e4"}}>
                  <Box marginTop="-8px" paddingTop="32px" paddingBottom="32px">
                    Hunt Tests
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection={this.props.width==="xs" ? "column" : "row"}
                textAlign={this.props.width==="xs" ? "center" : "left"}
                paddingTop={this.props.width==="xs" ? "25px" : "72px"}
                paddingBottom="72px"
              >
                <Box paddingTop="24px" paddingLeft={this.props.width==="xs" ? "0px" : "56px"} paddingRight={this.props.width==="xs" ? "0px" : "80px"}>
                  <img
                    src="data:image/png;base64,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"
                    alt="dog-img"
                  />
                </Box>
                <Box width="100%">
                  <Box
                    width="100%"
                    fontSize="15px"
                    fontWeight="500"
                    paddingLeft="2px"
                    maxWidth="680px"
                  >
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum
                  </Box>
                  <Box className="dog-right-bottom" flexDirection={this.props.width==="xs" ? "column" : ""} marginRight={this.props.width==="xs" ? "0px" : "48px"}>
                    <Box display="flex" marginRight={this.props.width==="xs" ? "0px" : "50px"} justifyContent={this.props.width==="xs" ? "center" : ""} >
                      <Box marginRight="13px">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsSAAALEgHS3X78AAABMklEQVQokY1T0W2DMBB9RfmvmSBsULqAxQYFFmiyQUagG2SDMgHKBsVMkGyQTmBvQPSsc3V1U7UnWYLj3r33fMfDuq7Q0S+lAdAAqCUdAMyT9WdkUWTAAcAVwKDSbDL3S8lT6/rILGyz5A6T9XPWlN8P6UzWjxp8FKnNZH3I5akmOwCsrSfrr5t+KSsATFb3gAJ4B/BMRpFOW7tCpJx+AVbCdFEXxvdXyIWx00kBGoVn4aMoi0G5bMa6jRpHio9+KS8CfAHwdmdMITEHNVPGHsCT+PyUJnmwPhQiuVWyRmngKDe/C7EVoprOGdM5EzpnWo7tr9M5c+6cGfic5kxmMrb5gihGLkqacbT5tdtqAWjjmC5JQGyeVpcE0cq3H0PmyiL62ipi+h/TWqb48Vf9OwDcAGajr52m3I56AAAAAElFTkSuQmCC"
                          alt="icon"
                        />
                      </Box>
                      <Box marginRight="12px" marginTop="-2px" cursor="pointer">
                        Draft Name
                      </Box>
                      <Box marginRight="12px" cursor="pointer">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAACXBIWXMAAAsSAAALEgHS3X78AAAAyklEQVQokZ2SfQ2DQAzFf4cCJCABCczBJEzCJEwCEpAwCUhAAhKGgi4v6126ZuGPNWl6vH5cee+KmRGtlDIBN2AI8A4sZrZ+FavZB6hYSTtx5YfW440j8ApNuukOTB73kFPdWDfuU3ITVqd7Ue94HC6MOa05ecOjun9ri1g3Fz9EDoSJODvDZB1w8J8dna/dzKWSXYILv6Yr5kpIJKOxGQjLamxRqsymfHHCFCPe1MhyZOazK99k/PU89dL0f4paVzdJ16eZKX4MeAO6a540Jc+44QAAAABJRU5ErkJggg=="
                          alt="eye-icon"
                        />
                      </Box>
                      <Box cursor="pointer">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAACXBIWXMAAAsSAAALEgHS3X78AAAAo0lEQVQokcVRQQ3DMBDzDUEhBEIhDMIgBEIhDMKYrWOSIbjJJzfKqmv3nKVTIjv2JRe4e1oAyqGWksANADc10y/IMYstmXpkOsUfTGZWzGzODpGnnr2pAniaWd0ZgpfesWharKZRr7u1SZ/0HUHe9T+jcaswSL+S+5qeuzOZxpeoNw+KJ9gpwKSepkSKTJ0GbrxFvGm8zq96GFM06t76BM3d1w9xDYvgEEh1WgAAAABJRU5ErkJggg=="
                          alt="download-icon"
                        />
                      </Box>
                    </Box>
                    <Box display="flex" justifyContent={this.props.width==="xs" ? "center" : ""} >
                      <Box marginRight="13px">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsSAAALEgHS3X78AAABMklEQVQokY1T0W2DMBB9RfmvmSBsULqAxQYFFmiyQUagG2SDMgHKBsVMkGyQTmBvQPSsc3V1U7UnWYLj3r33fMfDuq7Q0S+lAdAAqCUdAMyT9WdkUWTAAcAVwKDSbDL3S8lT6/rILGyz5A6T9XPWlN8P6UzWjxp8FKnNZH3I5akmOwCsrSfrr5t+KSsATFb3gAJ4B/BMRpFOW7tCpJx+AVbCdFEXxvdXyIWx00kBGoVn4aMoi0G5bMa6jRpHio9+KS8CfAHwdmdMITEHNVPGHsCT+PyUJnmwPhQiuVWyRmngKDe/C7EVoprOGdM5EzpnWo7tr9M5c+6cGfic5kxmMrb5gihGLkqacbT5tdtqAWjjmC5JQGyeVpcE0cq3H0PmyiL62ipi+h/TWqb48Vf9OwDcAGajr52m3I56AAAAAElFTkSuQmCC"
                          alt="icon"
                        />
                      </Box>
                      <Box marginRight="12px" marginTop="-2px" cursor="pointer">
                        Draft Name
                      </Box>
                      <Box marginRight="12px" cursor="pointer">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAACXBIWXMAAAsSAAALEgHS3X78AAAAyklEQVQokZ2SfQ2DQAzFf4cCJCABCczBJEzCJEwCEpAwCUhAAhKGgi4v6126ZuGPNWl6vH5cee+KmRGtlDIBN2AI8A4sZrZ+FavZB6hYSTtx5YfW440j8ApNuukOTB73kFPdWDfuU3ITVqd7Ue94HC6MOa05ecOjun9ri1g3Fz9EDoSJODvDZB1w8J8dna/dzKWSXYILv6Yr5kpIJKOxGQjLamxRqsymfHHCFCPe1MhyZOazK99k/PU89dL0f4paVzdJ16eZKX4MeAO6a540Jc+44QAAAABJRU5ErkJggg=="
                          alt="eye-icon"
                        />
                      </Box>
                      <Box cursor="pointer">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAACXBIWXMAAAsSAAALEgHS3X78AAAAo0lEQVQokcVRQQ3DMBDzDUEhBEIhDMIgBEIhDMKYrWOSIbjJJzfKqmv3nKVTIjv2JRe4e1oAyqGWksANADc10y/IMYstmXpkOsUfTGZWzGzODpGnnr2pAniaWd0ZgpfesWharKZRr7u1SZ/0HUHe9T+jcaswSL+S+5qeuzOZxpeoNw+KJ9gpwKSepkSKTJ0GbrxFvGm8zq96GFM06t76BM3d1w9xDYvgEEh1WgAAAABJRU5ErkJggg=="
                          alt="download-icon"
                        />
                      </Box>
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
  
  export default withWidth()(DogTab);
  