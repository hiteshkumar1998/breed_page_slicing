const qs = require('qs');
const axios = require("axios");

// get request
export const httpGet = (url, params = "") => {
  return axios.get(url+params).then(
    (response) => {
      // handle success
      return response;
    },
    (err) => {}
  );
};

// post request
export const httpPost = (url, requestData, params = "") => {
  return axios({
    method: 'post',
    url: url,
    data: qs.stringify(requestData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(res => {
    return res;
  })
};

export const getHomePage = () => {
  const url = "http://breed-dev-back.vuwork.com:8082/getPage/1";
     return httpGet(url)
      .then((response) => {
        
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
};
