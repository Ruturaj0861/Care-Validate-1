/// <reference types="Cypress" />

import LoginPage from "../../Pages/loginPage";
import HomePage from "../../Pages/homePage";
import SettingsPage from "../../Pages/settingsPage";

describe('POM Test', function () {
    beforeEach(function () {
        cy.fixture('ConduitData').as('data')
    })

    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const settingsPage = new SettingsPage()

    it('Conduit Login using POM', function () {
        cy.visit('http://139.5.189.142:3111/signin')
        loginPage.enterEmail(this.data.email)
        loginPage.enterPassword(this.data.password)
        loginPage.clickSigninButton()
        homePage.checkInactiveAccounts()
        homePage.clickOnActiveAccount()
        homePage.clickOnprofile()
        homePage.clickSettingsButton()
        settingsPage.clickLogoutButton()
    })
})
