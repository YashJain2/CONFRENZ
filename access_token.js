const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

// Used when generating any kind of Access Token
const twilioAccountSid = 'ACxxxxxxxxxx';
const twilioApiKey = 'SKxxxxxxxxxx';
const twilioApiSecret = 'xxxxxxxxxxxx';

// Create an access token which we will sign and return to the client,
// containing the grant we just created
const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret);
token.identity = 'alice';

// Create a Video grant which enables a client to use Video 
// and limits access to the specified Room (DailyStandup)
const videoGrant = new VideoGrant({
    room: 'DailyStandup'
});

// Add the grant to the token
token.addGrant(videoGrant);

// Serialize the token to a JWT string
console.log(token.toJwt());