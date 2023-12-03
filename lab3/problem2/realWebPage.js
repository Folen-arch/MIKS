class RealWebPage extends WebPage {
    constructor(url) {
        super();
        this.url = url;
        this.content = null;
    }

    load() {
        console.log(`Loading ${this.url} from the internet`);
        this.content = `Content of ${this.url}`;
    }
}
