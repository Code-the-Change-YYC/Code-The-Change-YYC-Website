# Website

Code for the Code the Change YYC website

## Dev Environment

There is currently a bug with NPM and Gatsby Plugins.
A simple fix is to use Yarn instead of NPM.
Make sure to use Yarn as the package manager rather than NPM, and to **never mix both**. If a **package-lock.json** exists in the project, NPM was used and this file must be deleted to avoid issues.

The order that Gatsby Plugins are installed matters. So keep note of that.

## Deployment

Every commit to the master branch will trigger a webhook to AWS CodePipeline which will pull from GitHub and deploy those changes to the S3 bucket (codethechangeyyc).

A Slack notification is also sent to the group's Slack account (https://codethechangeyyc.slack.com/) and into the #uofc channel with a link to the changeset on GitHub. This is configured by creating a simple Lambda function that receives the event from CodePipeline and then makes a POST to the Slack webhook endpoint. The lambda code and a sample event that it receives is in the `slack` directory in this repo.

## Credits

Website template by Inovatik (https://inovatik.com/)

CTCYYC
