//const videojs = require('videojs-record');
const {vlc : Recorder} = require("screen-capture-recorder")
const sleep = require('nyks/function/sleep');
const puppeteer = require('puppeteer');

describe("Suite recording selenium sessions", function() {

  beforeEach(async function() {
    const specNum = Math.random().toString(36).slice(-5);
    const videoPath = "D:\\MyGitHubRepos\\javascript-testing-tools\\myfile-" + specNum + ".mp4";
    this.scene = new Recorder( {x : 0, y : 0 , w : 1920 , h : 1080}, {}, videoPath );
    await this.scene.warmup();
    await this.scene.StartRecord();

  });

  afterEach(async function() {
    const moviePath = await this.scene.StopRecord();
    console.log(moviePath);
  });

  it("verifies selenium session is recorded with video", async function() {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});
    await browser.close();
  });

  it("verifies puppeteer session is recorded with video for google.com", async function() {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.screenshot({path: 'google.png'});
    await browser.close();
  });

});