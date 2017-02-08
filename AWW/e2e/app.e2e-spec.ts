import { AWWPage } from './app.po';

describe('aww App', function() {
  let page: AWWPage;

  beforeEach(() => {
    page = new AWWPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
