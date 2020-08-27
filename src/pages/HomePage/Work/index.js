import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { getHomePage } from "../../../utils/http";

class Work extends Component {
  //state
  state = {
    page_section: [],
  };

  componentDidMount() {
    getHomePage().then((res) =>
      this.setState({
        page_section: res.data.page_sections,
      })
    );
  }

  render() {
    const { page_section } = this.state;
    return (
      <>
        <Box className="works-section">
          <Container style={{ maxWidth: "1208px" }}>
            <Box className="work-section-parent">
              <Box
                className="work-section-child"
                flexDirection={this.props.width === "xs" ? "column" : "row"}
              >
                <Box style={{ width: "100%" }}>
                  <Box
                    className="how-does-it-work-div"
                    textAlign={this.props.width === "xs" ? "center" : "left"}
                    width={this.props.width === "xs" ? "100%" : "355px"}
                  >
                    {Boolean(page_section.length) && (
                      <Box
                        className="how-does-it-work-text"
                        fontSize={this.props.width === "xs" ? "30px" : "50px"}
                        dangerouslySetInnerHTML={{
                          __html: page_section[1].name,
                        }}
                      />
                    )}
                    {Boolean(page_section.length) && (
                      <Box
                        className="how-does-it-work-description-text"
                        dangerouslySetInnerHTML={{
                          __html: page_section[1].content,
                        }}
                      />
                    )}
                    <Box
                      style={{ display: "flex", marginBottom: "110px" }}
                      justifyContent={
                        this.props.width === "xs" ? "center" : "flex-start"
                      }
                    >
                      <Box>
                        <strong>Learn more</strong>
                      </Box>
                      <Box style={{ paddingLeft: "5px" }}>
                        <ArrowRightAltIcon />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box style={{ display: "flex", width: "100%" }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Box className="right-section-div">
                          <Box className="right-section-child-div">
                            <Box>
                              <Box className="child-1">01</Box>
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAYAAADoSujCAAAACXBIWXMAAAsSAAALEgHS3X78AAAExUlEQVRogcVZ3XHaQBBeM7xDBRGe0TukAskVWBVEuIKQCmJXEKjAUge4guAKIj1HM0YdQAVkFn+Ll+MknYTG2RkNQtrb+/bn9nZPN4fDgVypiL0JEelrK5eflltnQXZZOyLK2spqVAATLYgoIiKvhrUkooSvKgCQNcfVJGtNRMsmZSoVKGJvzAKIKLYI10JnRDQyeFZE9Oin5U7JeiSi7wbfHlYXmlgUS9mAIstJgSL2IlhTgJVQZm2zCCwbwVOeGhPhfm08b5IVQmEZw4rO/bRcNypQxB6791kNXABABNcH6l3op2VmjF9g8hF4SN2zV5Y2S9oIWJbKkA9+WiaadVADPodLxwiZZwWe1AI+IwCcYfwIF9/P2oCnd1kJMOR49AyMJzp5oIg9nnSjJrwnoie1BvYIK3b9xsF6Y/AT3G+NYReCLJ5zanpeK5CBIUcMJlCCmhbSZ5ChRO6nJRv8PYTglqlhrRD/Oe6usmAfhPklfKYSSrIGHsXS7BqEEzPcmYvmPyuRIRpIMN/8/faFwf7Bw1sA/0lEX80M04ZUaqWqlHmF3Df8vRsot7xgEk6ZL1dOssAkv3C94dnVBIyCLxoi5REWiLgp6jpREXshQBM2LcKG9IsThUsGc6ANEsxsoHJ753AxSCzNHp3wpSzWixcU1mAoT9paBiEhnkrUYh/LM8UuKXmsxktRR1gjzpscYy3i9ypj0MhtB58hTAJcvEOaBogq7gm8srMHEl5dsHAWOkCrG0fwCxXjK/xKlfmAXylHJOXFFe/N8T9cPVHE3hH3QD0Y1474ILHmk5+WvDsvFJA5QkkDF/Ap3knYrNT4JzxzSh4a6xC1xQjZqM06yCru2ZtzhMkEj7aWDVHvC23DRzLnfojBAUoHFwWkpDiW2bCGZJcTqJodfIv5WMkEJYKMdy1XpMzJBti4SLm2iSRGgyL2pKSWOsql7BAeHrOFDEnlrpnolL14EZ9tzY6lstlo7FGtJup9qEJoh1SZuIxvmJvl/sbf22M5jXhlK7z6aRk2yBBBYxWLvMPuUAQmyiMm5VjomW2847xnWEUBrZVzKrMotFVWTdWaCo3GaNKlPDdS+DFadEOTYBJrr+sgXCxT1Svrjs/Z0xXjV0i/ZzvxQvWxGwxwFT5RCzGyKW8UiQHGdAGfq/7lQwHV8eyVEm03t7wuCeBdboxpAj9W4Pdmf31WC8FKYQclhMclroWnUa4F/EVoXhRzhhLTlp7ojepOImoV6KiEhE1Qx4d3gTGmiq8RfKUCSonTKUCdEoht6b7qNiN5V1atFQM8yb5RJbC2H8BZpJTA04ZaSeqZe06pOovxPdLsvcFrIw3+wXYeqsnp+4Bx5MhlsbVuMviq6OJ8U41PdO/gUlo4dWQQJJ6IMVEV3x1vVJbXr3XnTF3Ak6sH1CROnqCKWqmGtxN4aqsAJluqFrBWCUd5GvypRHCl1k09Jji1jFCoK/il0XK2PnZp7QE1eWe3U8twrKNOxyqEvld54uLDw2eAp2sUoI5K9AmergkhA9RGlQh1eV6Db90T2OgqDyiKjO9Yia73+R5rRn9/63yArKkXD9BH3l8bHwJt9Iqmp5cvPr0pIIQwWVga+xxf3nv94tO7AkJdTx1aERH9A8pBzh6YjomSAAAAAElFTkSuQmCC"
                                alt="heart-img"
                              />
                              <Box className="child-2">Lorem Ipsum</Box>
                              <Box className="child-3">
                                <Box className="parent">
                                  Lorem ipsum, or lipsum as it is sometimes
                                  known, is dummy text.
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box className="right-section-div">
                          <Box className="right-section-child-div">
                            <Box>
                              <Box className="child-1">02</Box>
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAYAAADoSujCAAAACXBIWXMAAAsSAAALEgHS3X78AAAExUlEQVRogcVZ3XHaQBBeM7xDBRGe0TukAskVWBVEuIKQCmJXEKjAUge4guAKIj1HM0YdQAVkFn+Ll+MknYTG2RkNQtrb+/bn9nZPN4fDgVypiL0JEelrK5eflltnQXZZOyLK2spqVAATLYgoIiKvhrUkooSvKgCQNcfVJGtNRMsmZSoVKGJvzAKIKLYI10JnRDQyeFZE9Oin5U7JeiSi7wbfHlYXmlgUS9mAIstJgSL2IlhTgJVQZm2zCCwbwVOeGhPhfm08b5IVQmEZw4rO/bRcNypQxB6791kNXABABNcH6l3op2VmjF9g8hF4SN2zV5Y2S9oIWJbKkA9+WiaadVADPodLxwiZZwWe1AI+IwCcYfwIF9/P2oCnd1kJMOR49AyMJzp5oIg9nnSjJrwnoie1BvYIK3b9xsF6Y/AT3G+NYReCLJ5zanpeK5CBIUcMJlCCmhbSZ5ChRO6nJRv8PYTglqlhrRD/Oe6usmAfhPklfKYSSrIGHsXS7BqEEzPcmYvmPyuRIRpIMN/8/faFwf7Bw1sA/0lEX80M04ZUaqWqlHmF3Df8vRsot7xgEk6ZL1dOssAkv3C94dnVBIyCLxoi5REWiLgp6jpREXshQBM2LcKG9IsThUsGc6ANEsxsoHJ753AxSCzNHp3wpSzWixcU1mAoT9paBiEhnkrUYh/LM8UuKXmsxktRR1gjzpscYy3i9ypj0MhtB58hTAJcvEOaBogq7gm8srMHEl5dsHAWOkCrG0fwCxXjK/xKlfmAXylHJOXFFe/N8T9cPVHE3hH3QD0Y1474ILHmk5+WvDsvFJA5QkkDF/Ap3knYrNT4JzxzSh4a6xC1xQjZqM06yCru2ZtzhMkEj7aWDVHvC23DRzLnfojBAUoHFwWkpDiW2bCGZJcTqJodfIv5WMkEJYKMdy1XpMzJBti4SLm2iSRGgyL2pKSWOsql7BAeHrOFDEnlrpnolL14EZ9tzY6lstlo7FGtJup9qEJoh1SZuIxvmJvl/sbf22M5jXhlK7z6aRk2yBBBYxWLvMPuUAQmyiMm5VjomW2847xnWEUBrZVzKrMotFVWTdWaCo3GaNKlPDdS+DFadEOTYBJrr+sgXCxT1Svrjs/Z0xXjV0i/ZzvxQvWxGwxwFT5RCzGyKW8UiQHGdAGfq/7lQwHV8eyVEm03t7wuCeBdboxpAj9W4Pdmf31WC8FKYQclhMclroWnUa4F/EVoXhRzhhLTlp7ojepOImoV6KiEhE1Qx4d3gTGmiq8RfKUCSonTKUCdEoht6b7qNiN5V1atFQM8yb5RJbC2H8BZpJTA04ZaSeqZe06pOovxPdLsvcFrIw3+wXYeqsnp+4Bx5MhlsbVuMviq6OJ8U41PdO/gUlo4dWQQJJ6IMVEV3x1vVJbXr3XnTF3Ak6sH1CROnqCKWqmGtxN4aqsAJluqFrBWCUd5GvypRHCl1k09Jji1jFCoK/il0XK2PnZp7QE1eWe3U8twrKNOxyqEvld54uLDw2eAp2sUoI5K9AmergkhA9RGlQh1eV6Db90T2OgqDyiKjO9Yia73+R5rRn9/63yArKkXD9BH3l8bHwJt9Iqmp5cvPr0pIIQwWVga+xxf3nv94tO7AkJdTx1aERH9A8pBzh6YjomSAAAAAElFTkSuQmCC"
                                alt="heart-img"
                              />
                              <Box className="child-2">Lorem Ipsum</Box>
                              <Box className="child-3">
                                <Box className="parent">
                                  Lorem ipsum, or lipsum as it is sometimes
                                  known, is dummy text.
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box className="right-section-div">
                          <Box className="right-section-child-div">
                            <Box>
                              <Box className="child-1">03</Box>
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAYAAADoSujCAAAACXBIWXMAAAsSAAALEgHS3X78AAAExUlEQVRogcVZ3XHaQBBeM7xDBRGe0TukAskVWBVEuIKQCmJXEKjAUge4guAKIj1HM0YdQAVkFn+Ll+MknYTG2RkNQtrb+/bn9nZPN4fDgVypiL0JEelrK5eflltnQXZZOyLK2spqVAATLYgoIiKvhrUkooSvKgCQNcfVJGtNRMsmZSoVKGJvzAKIKLYI10JnRDQyeFZE9Oin5U7JeiSi7wbfHlYXmlgUS9mAIstJgSL2IlhTgJVQZm2zCCwbwVOeGhPhfm08b5IVQmEZw4rO/bRcNypQxB6791kNXABABNcH6l3op2VmjF9g8hF4SN2zV5Y2S9oIWJbKkA9+WiaadVADPodLxwiZZwWe1AI+IwCcYfwIF9/P2oCnd1kJMOR49AyMJzp5oIg9nnSjJrwnoie1BvYIK3b9xsF6Y/AT3G+NYReCLJ5zanpeK5CBIUcMJlCCmhbSZ5ChRO6nJRv8PYTglqlhrRD/Oe6usmAfhPklfKYSSrIGHsXS7BqEEzPcmYvmPyuRIRpIMN/8/faFwf7Bw1sA/0lEX80M04ZUaqWqlHmF3Df8vRsot7xgEk6ZL1dOssAkv3C94dnVBIyCLxoi5REWiLgp6jpREXshQBM2LcKG9IsThUsGc6ANEsxsoHJ753AxSCzNHp3wpSzWixcU1mAoT9paBiEhnkrUYh/LM8UuKXmsxktRR1gjzpscYy3i9ypj0MhtB58hTAJcvEOaBogq7gm8srMHEl5dsHAWOkCrG0fwCxXjK/xKlfmAXylHJOXFFe/N8T9cPVHE3hH3QD0Y1474ILHmk5+WvDsvFJA5QkkDF/Ap3knYrNT4JzxzSh4a6xC1xQjZqM06yCru2ZtzhMkEj7aWDVHvC23DRzLnfojBAUoHFwWkpDiW2bCGZJcTqJodfIv5WMkEJYKMdy1XpMzJBti4SLm2iSRGgyL2pKSWOsql7BAeHrOFDEnlrpnolL14EZ9tzY6lstlo7FGtJup9qEJoh1SZuIxvmJvl/sbf22M5jXhlK7z6aRk2yBBBYxWLvMPuUAQmyiMm5VjomW2847xnWEUBrZVzKrMotFVWTdWaCo3GaNKlPDdS+DFadEOTYBJrr+sgXCxT1Svrjs/Z0xXjV0i/ZzvxQvWxGwxwFT5RCzGyKW8UiQHGdAGfq/7lQwHV8eyVEm03t7wuCeBdboxpAj9W4Pdmf31WC8FKYQclhMclroWnUa4F/EVoXhRzhhLTlp7ojepOImoV6KiEhE1Qx4d3gTGmiq8RfKUCSonTKUCdEoht6b7qNiN5V1atFQM8yb5RJbC2H8BZpJTA04ZaSeqZe06pOovxPdLsvcFrIw3+wXYeqsnp+4Bx5MhlsbVuMviq6OJ8U41PdO/gUlo4dWQQJJ6IMVEV3x1vVJbXr3XnTF3Ak6sH1CROnqCKWqmGtxN4aqsAJluqFrBWCUd5GvypRHCl1k09Jji1jFCoK/il0XK2PnZp7QE1eWe3U8twrKNOxyqEvld54uLDw2eAp2sUoI5K9AmergkhA9RGlQh1eV6Db90T2OgqDyiKjO9Yia73+R5rRn9/63yArKkXD9BH3l8bHwJt9Iqmp5cvPr0pIIQwWVga+xxf3nv94tO7AkJdTx1aERH9A8pBzh6YjomSAAAAAElFTkSuQmCC"
                                alt="heart-img"
                              />
                              <Box className="child-2">Lorem Ipsum</Box>
                              <Box className="child-3">
                                <Box className="parent">
                                  Lorem ipsum, or lipsum as it is sometimes
                                  known, is dummy text.
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box className="right-section-div">
                          <Box className="right-section-child-div">
                            <Box>
                              <Box className="child-1">04</Box>
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAYAAADoSujCAAAACXBIWXMAAAsSAAALEgHS3X78AAAExUlEQVRogcVZ3XHaQBBeM7xDBRGe0TukAskVWBVEuIKQCmJXEKjAUge4guAKIj1HM0YdQAVkFn+Ll+MknYTG2RkNQtrb+/bn9nZPN4fDgVypiL0JEelrK5eflltnQXZZOyLK2spqVAATLYgoIiKvhrUkooSvKgCQNcfVJGtNRMsmZSoVKGJvzAKIKLYI10JnRDQyeFZE9Oin5U7JeiSi7wbfHlYXmlgUS9mAIstJgSL2IlhTgJVQZm2zCCwbwVOeGhPhfm08b5IVQmEZw4rO/bRcNypQxB6791kNXABABNcH6l3op2VmjF9g8hF4SN2zV5Y2S9oIWJbKkA9+WiaadVADPodLxwiZZwWe1AI+IwCcYfwIF9/P2oCnd1kJMOR49AyMJzp5oIg9nnSjJrwnoie1BvYIK3b9xsF6Y/AT3G+NYReCLJ5zanpeK5CBIUcMJlCCmhbSZ5ChRO6nJRv8PYTglqlhrRD/Oe6usmAfhPklfKYSSrIGHsXS7BqEEzPcmYvmPyuRIRpIMN/8/faFwf7Bw1sA/0lEX80M04ZUaqWqlHmF3Df8vRsot7xgEk6ZL1dOssAkv3C94dnVBIyCLxoi5REWiLgp6jpREXshQBM2LcKG9IsThUsGc6ANEsxsoHJ753AxSCzNHp3wpSzWixcU1mAoT9paBiEhnkrUYh/LM8UuKXmsxktRR1gjzpscYy3i9ypj0MhtB58hTAJcvEOaBogq7gm8srMHEl5dsHAWOkCrG0fwCxXjK/xKlfmAXylHJOXFFe/N8T9cPVHE3hH3QD0Y1474ILHmk5+WvDsvFJA5QkkDF/Ap3knYrNT4JzxzSh4a6xC1xQjZqM06yCru2ZtzhMkEj7aWDVHvC23DRzLnfojBAUoHFwWkpDiW2bCGZJcTqJodfIv5WMkEJYKMdy1XpMzJBti4SLm2iSRGgyL2pKSWOsql7BAeHrOFDEnlrpnolL14EZ9tzY6lstlo7FGtJup9qEJoh1SZuIxvmJvl/sbf22M5jXhlK7z6aRk2yBBBYxWLvMPuUAQmyiMm5VjomW2847xnWEUBrZVzKrMotFVWTdWaCo3GaNKlPDdS+DFadEOTYBJrr+sgXCxT1Svrjs/Z0xXjV0i/ZzvxQvWxGwxwFT5RCzGyKW8UiQHGdAGfq/7lQwHV8eyVEm03t7wuCeBdboxpAj9W4Pdmf31WC8FKYQclhMclroWnUa4F/EVoXhRzhhLTlp7ojepOImoV6KiEhE1Qx4d3gTGmiq8RfKUCSonTKUCdEoht6b7qNiN5V1atFQM8yb5RJbC2H8BZpJTA04ZaSeqZe06pOovxPdLsvcFrIw3+wXYeqsnp+4Bx5MhlsbVuMviq6OJ8U41PdO/gUlo4dWQQJJ6IMVEV3x1vVJbXr3XnTF3Ak6sH1CROnqCKWqmGtxN4aqsAJluqFrBWCUd5GvypRHCl1k09Jji1jFCoK/il0XK2PnZp7QE1eWe3U8twrKNOxyqEvld54uLDw2eAp2sUoI5K9AmergkhA9RGlQh1eV6Db90T2OgqDyiKjO9Yia73+R5rRn9/63yArKkXD9BH3l8bHwJt9Iqmp5cvPr0pIIQwWVga+xxf3nv94tO7AkJdTx1aERH9A8pBzh6YjomSAAAAAElFTkSuQmCC"
                                alt="heart-img"
                              />
                              <Box className="child-2">Lorem Ipsum</Box>
                              <Box className="child-3">
                                <Box className="parent">
                                  Lorem ipsum, or lipsum as it is sometimes
                                  known, is dummy text.
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
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

export default withWidth()(Work);
