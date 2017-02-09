import { BuddhaSoftPage } from './app.po';

describe('buddha-soft App', function() {
  let page: BuddhaSoftPage;

  beforeEach(() => {
    page = new BuddhaSoftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
