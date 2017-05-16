import { JoljakPage } from './app.po';

describe('joljak App', () => {
  let page: JoljakPage;

  beforeEach(() => {
    page = new JoljakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
