/// <reference types="Cypress" />

describe('Login Functionality', function () {
    let authToken; // Variable to store the authentication token

    it("Post Method for Dashboard", function () {
        cy.visit('http://139.5.189.142:3111/signin');
        cy.get('#email').type('ruturajdarekar24@gmail.com');
        cy.get('#password').type('Test@123');
        cy.get('.signinform-button').click();

        cy.request({
            method: 'POST',
            url: 'https://api.ascendxcapital.com/auth/login/',
            body: {
                email: 'ruturajdarekar24@gmail.com',
                password: 'Test@123'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Store the authentication token for later use
            authToken = response.body.idToken;
            cy.log("Post method successfully done And API Done successfully..........");
        })
    })

    it("Get Method for get Funding Evaluation", function () {
        cy.visit('http://139.5.189.142:3111/signin');
        cy.get('#email').type('ruturajdarekar24@gmail.com');
        cy.get('#password').type('Test@123');
        cy.get('.signinform-button').click();
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3)').click()

        cy.request({
            method: 'GET',
            url: 'https://api.ascendxcapital.com/account/funding-evaluation/',
            headers: {
                Authorization: 'Bearer ' + authToken // Use the stored authentication token
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array').and.not.be.empty;
            expect(response.body[0]).to.have.property('id', 1);
            expect(response.body[0]).to.have.property('name', 'Ascendx Pro');
            cy.log("Get method successfully done And API Done successfully..........");
        })
    })

    it("Create Method for Trade Journal", function () {
        // Log in and navigate to the desired page
        cy.visit('http://139.5.189.142:3111/signin');
        cy.get('#email').type('ruturajdarekar24@gmail.com');
        cy.get('#password').type('Test@123');
        cy.get('.signinform-button').click();
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(4)').click();
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > li:nth-child(3) > a:nth-child(1) > span:nth-child(1)').click();
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > p:nth-child(1)').click();
        cy.get('div[class="create_button"] button').scrollIntoView();
        cy.get('div[class="create_button"] button').click();

        // Perform the request using the stored authentication token
        cy.request({
            method: 'POST',
            url: 'https://api.ascendxcapital.com/account/trade-journal/',
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            // Add further assertions as needed
            cy.log("Create method successfully done And API Done successfully..........");
        })
    })

    it("Delete Method for Trade Journal", function () {
        // Log in and navigate to the desired page
        cy.visit('http://139.5.189.142:3111/signin');
        cy.get('#email').type('ruturajdarekar24@gmail.com');
        cy.get('#password').type('Test@123');
        cy.get('.signinform-button').click();
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(4)').click();
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > li:nth-child(3) > a:nth-child(1) > span:nth-child(1)').click();
        cy.get('tbody tr:nth-child(1) td:nth-child(9) div:nth-child(1) p:nth-child(1)').scrollIntoView();
        cy.get('tbody tr:nth-child(1) td:nth-child(9) div:nth-child(1) p:nth-child(1)').click();
        cy.get('.confirm').click();
        cy.get('.success_modal_close_btn').click()
    
        // Perform the request to get the dynamic number
        cy.request({
            method: 'GET',
            url: 'https://api.ascendxcapital.com/account/trade-journal/', // Adjust the URL to match the endpoint that returns the dynamic number
            headers: {
                Authorization: 'Bearer ' + authToken
            }
        }).then((response) => {
            // Extract the dynamic number from the response and store it in dynamicNumber variable
            const dynamicNumber = response.body.id; // Adjust this based on your response structure
    
            // Ensure dynamicNumber is defined and not undefined
            if (dynamicNumber !== undefined) {
                // Perform the request using the stored authentication token and dynamic number
                cy.request({
                    method: 'DELETE',
                    url: 'https://api.ascendxcapital.com/account/trade-journal/' + dynamicNumber,
                    headers: {
                        Authorization: 'Bearer ' + authToken
                    }
                }).then((response) => {
                    expect(response.status).to.eq(204);
                    // Add further assertions as needed
                    cy.log("Delete method successfully done And API Done successfully..........");
                });
            } else {
                // Handle the case where dynamicNumber is undefined
                cy.log("Dynamic number is undefined");
            }
        });
    });

    it("PATCH Method for get Funding Evaluation", function () {
        cy.visit('http://139.5.189.142:3111/signin');
        cy.get('#email').type('ruturajdarekar24@gmail.com');
        cy.get('#password').type('Test@123');
        cy.get('.signinform-button').click();
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(8)').click()
        cy.get('img[alt="edit icon"]').click()
        cy.get('.save-btn')

        cy.request({
            method: 'PATCH',
            url: 'https://api.ascendxcapital.com/user/profile/',
            headers: {
                Authorization: 'Bearer ' + authToken // Use the stored authentication token
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.property('email', 'ruturajdarekar24@gmail.com');
            expect(response.body).to.have.property('country', 'India');
            cy.log("PATCH method successfully done And API Done successfully..........");
        })
    })
})
 