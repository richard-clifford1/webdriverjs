describe("Recording 16/06/2023 at 09:50:38", () => {
  it("tests Recording 16/06/2023 at 09:50:38", async () => {
    await browser.setWindowSize(1536, 792)
    await browser.url("chrome://new-tab-page/")
    await expect(browser).toHaveUrl("chrome://new-tab-page/")
    await browser.url("https://live-uob-dev.cloud.contensis.com/study/postgraduate")
    await expect(browser).toHaveUrl("https://live-uob-dev.cloud.contensis.com/study/postgraduate")
    await browser.$("//*[@id=\"StudyPageTitle\"]/section/nav").click()
    await browser.$("aria/Course structure").click()
    await browser.$("#search").click()
    await browser.$("#search").setValue("History")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await expect(browser).toHaveUrl("Test")
  });
});
//# recorderSourceMap=BCBDCFCHBIBJBKBLFQFVB
