const reverseString = async (req, res) => {
  try {
    let reqBody = req.body;
    // check if the data passed is an object or not, and if it is object, check if it is not empty
    if(typeof reqBody==="object" && Object.keys(reqBody).length){
      // fetch user string from (JSON) req body's "data" key
      let userString = reqBody.data;
      // if userString is not a string, then return with error 
      let userStringType = "";
      userStringType = typeof userString;

      // return error if user is not a string
      if(userStringType!="string"){
        // specifically written below line to match the design doc
        userStringType==="number"?userStringType="int":userStringType=userStringType;
        return res.json({
          ok: false,
          error: "data is " + userStringType + " and not a string"
        });
      }
      // if everything seems ok, reverse the string, and return response as reversed string
      let reverseUserString =  userString.split("").reverse().join("");
      return res.json({
        ok: true,
        data: reverseUserString
      });
    }else{
      // if json is invalid, send error, example: empty JSON
      return res.json({
        ok: false,
        error: "Invalid JSON"
      });      
    }
  } catch (error) {
    // if any error occurs, catch it, and send response with error details
    return res.status(500).json({
      ok: false,
      error: "Invalid JSON: " + error
    });
  }
};

module.exports = {
  reverseString
};
