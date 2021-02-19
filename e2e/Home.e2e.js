describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should Map be visible', async () => {
    await expect(element(by.id('map'))).toBeVisible();
  });

  it('should DatePickers be visible', async () => {
    await expect(element(by.id('startDate'))).toBeVisible();
    await expect(element(by.id('endDate'))).toBeVisible();
  });
});
