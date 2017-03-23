import { ContextualDashboardPage } from './app.po';

describe('contextual-dashboard App', () => {
  let page: ContextualDashboardPage;

  beforeEach(() => {
    page = new ContextualDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
