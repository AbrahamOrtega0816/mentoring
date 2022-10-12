import { VideoProxy } from "./video.proxy";
import { YouTubeApi } from "./youtube.api";

const proxy = new VideoProxy(new YouTubeApi());

describe("Video proxy", function () {
    it("was cached?", async () => {
        const key = 'courses';

        let result = await proxy.getPlayList(key);
        result = await proxy.getPlayList(key);

        expect(true).toBeDefined(proxy['cache'][key]);
    });
});
