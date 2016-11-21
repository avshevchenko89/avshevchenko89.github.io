import { EmployersPage } from './app.po';

describe('employers App', function() {
  let page: EmployersPage;

  beforeEach(() => {
    page = new EmployersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
