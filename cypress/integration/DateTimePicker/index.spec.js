describe('DateTimePicker', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/cypress/datetimepicker');
  });

  describe('Display', () => {
    xit('should render calendar in viewPort', () => {
      // ждём 100мс, тк календари открываются не сразу
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.get('[data-test="dp1"] .datepicker-calendar-icon')
        .click()
        .get('[data-test=dp1] .calendar-wrapper')
        .isInViewport()
        .get('[data-test=dp2] .datepicker-calendar-icon')
        .click()
        .get('[data-test=dp2] .calendar-wrapper')
        .isInViewport()
        .get('[data-test=dp3] .datepicker-calendar-icon')
        .click()
        .get('[data-test=dp3] .calendar-wrapper')
        .isInViewport()
        .get('[data-test=dp4] .datepicker-calendar-icon')
        .click()
        .get('[data-test=dp4] .calendar-wrapper')
        .isInViewport();
    });
  });
});
