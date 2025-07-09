import job from '../fixtures/job.json';

describe('user journey', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/job-hunting-organizer/');

    cy.getByData('open-form').should('exist').click();

    Object.entries(job).forEach(([field, value]) => {
      cy.typeIntoInput(field, value);
    });
    cy.getByData('workplace').should('exist').select('Remote');
    cy.getByData('add-job').should('exist').click();
  });

  it('can add a new job offer', () => {
    cy.get('h3').should('contain.text', job.company);
  });

  it('edit an existing job', () => {
    cy.getByData('edit-form').click();
    cy.typeIntoInput('company', 'Amazon');
    cy.getByData('save-edited').click();
    cy.get('h3').should('contain.text', 'Amazon');
  });

  it('drag a job and drop it on a different column', () => {
    cy.getByData('job-card')
      .should('exist')
      .first()
      .drag('[data-test="Applied"]');
    cy.getByData('Applied').should('contain.text', job.company);
  });
});
