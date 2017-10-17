import { HrModule } from './hr.module';

describe('HrModule', () => {
  let hrModule: HrModule;

  beforeEach(() => {
    hrModule = new HrModule();
  });

  it('should create an instance', () => {
    expect(hrModule).toBeTruthy();
  });
});
