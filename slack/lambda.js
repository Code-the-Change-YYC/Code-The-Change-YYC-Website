var https = require('https');
var util = require('util');

exports.handler = function(event, context) {
    console.log(JSON.stringify(event, null, 2));
   
    var postData = {
        "channel": "#yyc",
        "username": "AWS CodePipeline",
        "text": "*New code was pushed to our website!*",
        "icon_emoji": ":aws:"
    };

   var revision = event["CodePipeline.job"].data.inputArtifacts[0].revision;
   var url = "https://github.com/codethechangeyyc/website/commit/" + revision;
   var message = "Check out the changeset at " + url;
    var severity = "good";

    postData.attachments = [
        {
            "color": severity, 
            "text": message
        }
    ];

    var options = {
        method: 'POST',
        hostname: 'hooks.slack.com',
        port: 443,
        path: '/services/TKNG0UB43/BPFQ4SF42/PnGoKjDkXvi1pDo8DZKURNHv'
    };

    var req = https.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        context.done(null);
      });
    });
    
    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });    

    req.write(util.format("%j", postData));
    req.end();
};
