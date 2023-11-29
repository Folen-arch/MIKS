// webPageProxy.js
class WebPageProxy extends WebPage {
    constructor(url, cacheLifetime) {
        super();
        this.url = url;
        this.cacheLifetime = cacheLifetime;
        this.cachedPage = null;
        this.lastAccessTime = null;
    }

    load() {
        if (!this.cachedPage || this.isCacheExpired()) {
            const realPage = new RealWebPage(this.url);
            realPage.load();
            this.cachedPage = realPage;
            this.lastAccessTime = new Date();
        } else {
            console.log(`Retrieving ${this.url} from cache`);
        }

        return this.cachedPage.content;
    }

    isCacheExpired() {
        const currentTime = new Date();
        const elapsedMilliseconds = currentTime - this.lastAccessTime;
        const elapsedSeconds = elapsedMilliseconds / 1000;
        return elapsedSeconds > this.cacheLifetime;
    }
}
