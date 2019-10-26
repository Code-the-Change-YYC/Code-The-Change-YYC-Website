# website

Code for the Code the Change YYC website

## Deployment

Every commit to this repo will trigger a webhook to AWS CodePipeline which will pull from GitHub and deploy those changes to the S3 bucket (codethechangeyyc).

A Slack notification is also sent to the group's Slack account (https://codethechangeyyc.slack.com/) and into the #uofc channel with a link to the changeset on GitHub.

## Credits

Website template by  Inovatik (https://inovatik.com/)

