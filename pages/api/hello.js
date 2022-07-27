export default function handler(req, res) {

  let { SmartAPI } = require("smartapi-javascript");
  let smart_api = new SmartAPI({api_key: "OWOauGrj",});

// If user does not have valid access token and refresh token then use generateSession method
	smart_api.generateSession("MNJM1059", "@Mig273803")
	    .then((data) => {
	        return smart_api.getProfile();
	   })
	    .then((data) => {
	       console.log("SUCCESS")
	       console.log(data)   // Profile details
	    })
	    .catch(ex => {
	        //Log error
	       console.log("ERROR")
	       console.log(ex)
	    })

  res.status(200).json({ text: 'Hello' });
}
