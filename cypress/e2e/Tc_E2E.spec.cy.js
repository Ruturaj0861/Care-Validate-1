import '../support/commands';
import 'cypress-xpath';

describe('End-to-End Testing for Task Management', () => {

    before(() => {
        cy.login('qa+employee@carevalidate.com', 'bLPgk5tr7D3ZqpXvV@aNKz');
    });

    it('should fill out and submit the Weight Loss Eligibility Intake Form', () => {
        cy.wait(5000);

        cy.xpath("//a[@class='q-item q-item-type row no-wrap q-router-link--exact-active q-router-link--active q-item--clickable q-link cursor-pointer q-focusable q-hoverable text-primary text-weight-bold rounded-borders bg-red-2']")
            .should('be.visible')
            .click();

        cy.xpath("//body/div[@id='q-app']/div[@class='q-layout q-layout--standard']/div[@class='q-page-container bg-accent']/main[@class='q-page q-layout-padding q-gutter-md']/div[@class='q-card q-card--bordered q-card--flat no-shadow']/div[@class='q-list q-list--bordered q-list--separator rounded-borders bg-white']/div[10]/div[2]")
            .should('be.visible')
            .click();

        cy.wait(2000);

        cy.xpath("//div[@class='q-field__native row items-center']")
            .should('be.visible')
            .select('Male');

        cy.xpath("//button[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase']")
            .should('be.visible')
            .click();

        cy.xpath("//input[@id='f_80d5dfa4-1979-402e-b2ca-d0879b2c209d']")
            .should('be.visible')
            .type('25');

        cy.xpath("button[class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase'] span[class='q-btn__content text-center col items-center q-anchor--skip justify-center row']")
            .should('be.visible')
            .click();

        cy.xpath("//input[@id='f_ae8e7f74-e8b3-4058-8886-a827ad3414c2']")
            .should('be.visible')
            .type('5.5');

        cy.xpath("//button[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase']")
            .should('be.visible')
            .click();

        cy.xpath("//input[@id='f_1008aca5-49c4-49c5-9e0d-230ccec5406b']")
            .should('be.visible')
            .type('65');

        cy.xpath("/html/body/div[7]/div/div[2]/main/form/div/div/div[6]/div[2]/div/div/button[2]")
            .should('be.visible')
            .click();

        cy.xpath("//div[@aria-label='none of the above']//div[@class='q-checkbox__bg absolute']//*[name()='svg']")
            .should('be.visible')
            .click();

        cy.xpath("//button[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase']")
            .should('be.visible')
            .click();

        cy.xpath("//div[@aria-label='None of the above']//div[@class='q-checkbox__bg absolute']//*[name()='svg']")
            .should('be.visible')
            .click();

        cy.xpath("//button[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase']")
            .should('be.visible')
            .click();

        cy.xpath("//select other")
            .should('be.visible')
            .select('Option Text');

        cy.xpath("//button[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase']")
            .should('be.visible')
            .click();

        cy.xpath("//div[@aria-label='Exercise']//div[@class='q-checkbox__bg absolute']//*[name()='svg']")
            .should('be.visible')
            .click();

        cy.xpath("//button[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase']")
            .should('be.visible')
            .click();

        cy.xpath(".q-btn.q-btn-item.non-selectable.no-outline.q-btn--unelevated.q-btn--rectangle.bg-primary.text-white.q-btn--actionable.q-focusable.q-hoverable.q-btn--no-uppercase")
            .should('be.visible')
            .click();

        cy.xpath("//button[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase']")
            .should('be.visible')
            .click();

        cy.xpath("//input[@id='f_63c33ea8-5d2e-4393-998c-bdbbbd8b6be9']")
            .should('be.visible')
            .type('test@gmail.com');

        cy.xpath("//button[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase']")
            .should('be.visible')
            .click();

        cy.xpath("//input[@id='f_c6af7616-89f6-4bcc-82b7-3691d7bcaa8a']")
            .should('be.visible')
            .type('3652571453');

        cy.xpath("//button[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase']")
            .should('be.visible')
            .click();

        cy.xpath("//input[@id='f_d04eb017-155a-47b0-a3f1-90ff2dbb283d']")
            .should('be.visible')
            .type('Mumbai');

        cy.xpath("//button[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase']")
            .should('be.visible')
            .click();

        cy.xpath("//input[@id='f_46f3641d-3405-4e05-8fe7-73441f087c56']")
            .should('be.visible')
            .type('Maharashtra');

        cy.xpath("//button[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase']")
            .should('be.visible')
            .click();

        cy.xpath("//input[@id='f_ceb23bf2-13a6-43bc-ae37-d42ee06b146d']")
            .should('be.visible')
            .type('4444');

        cy.xpath("//button[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase']")
            .should('be.visible')
            .click();

        cy.xpath("//div[@aria-label='No']//div[@class='q-radio__inner relative-position q-radio__inner--falsy']//*[name()='svg']")
            .should('be.visible')
            .click();

        cy.xpath("//button[@class='q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-primary text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase']")
            .should('be.visible')
            .click();

        cy.xpath("//input[@id='f_cba3d78e-9513-4e56-8abd-cca0536c09cc']")
            .should('be.visible')
            .attachFile('Pan.png');

        cy.xpath("//div[@role='tabpanel']//button[2]")
            .should('be.visible')
            .click();

        cy.xpath("//button[@type='submit']")
            .should('be.visible')
            .click();

        cy.xpath("//div[@id='q-portal--dialog--12']//button[2]")
            .should('be.visible')
            .click();

        cy.xpath("//div[@class='q-dialog__inner flex no-pointer-events q-dialog__inner--minimized q-dialog__inner--standard fixed-full flex-center']//div[@class='q-card q-card--bordered q-card--flat no-shadow']")
            .should('contain.text', 'Your request has been submitted successfully');
    });

    it('should verify the submission in My Requests', () => {
        cy.wait(5000);

        cy.xpath("//a[@class='q-item q-item-type row no-wrap q-item--clickable q-link cursor-pointer q-focusable q-hoverable rounded-borders text-dark']")
            .should('be.visible')
            .click();

        cy.xpath("//body/div[@id='q-app']/div[@class='q-layout q-layout--standard']/div[@class='q-page-container bg-accent']/main[@class='q-page q-layout-padding q-gutter-md']/div[@class='q-card q-card--bordered q-card--flat no-shadow']/div[@class='q-list q-list--bordered q-list--separator rounded-borders bg-white']/div[1]")
            .should('contain.text', 'Weight Loss Eligibility Intake Form');
    });
});
