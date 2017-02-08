import { JbPage } from './app.po';

describe('jb App', function() {
  let page: JbPage;

  beforeEach(() => {
    page = new JbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
