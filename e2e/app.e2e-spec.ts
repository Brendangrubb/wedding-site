import { SamanthaAndBrendanPage } from './app.po';

describe('samantha-and-brendan App', () => {
  let page: SamanthaAndBrendanPage;

  beforeEach(() => {
    page = new SamanthaAndBrendanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
