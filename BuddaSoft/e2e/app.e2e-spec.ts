import { BuddaSoftPage } from './app.po';

describe('budda-soft App', function() {
  let page: BuddaSoftPage;

  beforeEach(() => {
    page = new BuddaSoftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
