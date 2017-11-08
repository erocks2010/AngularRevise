import { AngularRevisePage } from './app.po';

describe('angular-revise App', () => {
  let page: AngularRevisePage;

  beforeEach(() => {
    page = new AngularRevisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
