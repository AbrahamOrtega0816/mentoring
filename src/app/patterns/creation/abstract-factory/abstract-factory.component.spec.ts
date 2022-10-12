import FacebookFactory from "./factories/facebook/facebook-factory";
import LinkedinFactory from "./factories/linkedin/linkedin-factory";
import SlackFactory from "./factories/slack/slack-factory";
import FacebookConnector from "./factories/facebook/facebook-connector";
import FacebookPublisher from "./factories/facebook/facebook-publisher";
import LinkedinConnector from "./factories/linkedin/linkedin-connector";
import LinkedinPublisher from "./factories/linkedin/linkedin-publisher";
import SlackConnector from "./factories/slack/slack-connector";
import SlackPublisher from "./factories/slack/slack-publisher";

const facebookFactory = new FacebookFactory(),
    linkedinFactory = new LinkedinFactory(),
    slackFactory = new SlackFactory();

describe("Facebook Publisher", () => {
    it("It must be a Facebook connector", () => {
        expect(true).toEqual(facebookFactory.getConnector() instanceof FacebookConnector);
    });

    it("It must be a Facebook publisher", () => {
        const connector = facebookFactory.getConnector();
        expect(true).toEqual(facebookFactory.getPublisher(connector) instanceof FacebookPublisher);
    });
});

describe("Linkedin Publisher", () => {
    it("It must be a Linkedin connector", () => {
        expect(true).toEqual(linkedinFactory.getConnector() instanceof LinkedinConnector);
    });

    it("It must be a Linkedin publisher", () => {
        const connector = linkedinFactory.getConnector();
        expect(true).toEqual(linkedinFactory.getPublisher(connector) instanceof LinkedinPublisher);
    });
});

describe("Slack Publisher", () => {
    it("It must be a Slack connector", () => {
        expect(true).toEqual(slackFactory.getConnector() instanceof SlackConnector);
    });

    it("It must be a Slack publisher", () => {
        const connector = slackFactory.getConnector();
        expect(true).toEqual(slackFactory.getPublisher(connector) instanceof SlackPublisher);
    });
});
