import { CliDefaultPage } from './app.po';

describe('cli-default App', function() {
  let page: CliDefaultPage;

  beforeEach(() => {
    page = new CliDefaultPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
