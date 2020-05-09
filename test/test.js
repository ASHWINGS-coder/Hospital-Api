let chai = require('chai'); // importing assertion libraray chai
let chaiHttp = require('chai-http'); 
let server = require("../index")  // importing index file

// Assertion Style 
chai.should();

chai.use(chaiHttp); // use chai-http

describe('Testing',() => {

    // Tests to check that the API returns the newly created patient
    describe("get newly added patients",() => {
        it("it should get newly added patients" ,(done) => {
            chai.request(server)
                    .get('/patients/register')
                    .end((err,response) => {
                        response.should.have.status(200);
                        response.body.should.be.an('object');
                        done();
                    })
        })
    })

    // Tests to check that the API returns the newly created report
    describe("get newly created report",() => {
        it("it should get newly created reports" ,(done) => {
            chai.request(server)
                    .get('/patients/:id/create_report')
                    .end((err,response) => {
                        response.should.have.status(200);
                        response.body.should.be.an('array');
                        done();
                    })
        })
    })

    // Tests to check that the API returns all report
    describe("get all reports",() => {
        it("it should get all reports" ,(done) => {
            chai.request(server)
                    .get('/patients/:id/all_reports ')
                    .end((err,response) => {
                        response.should.have.status(200);
                        response.body.should.be.an('array');
                        done();
                    })
        })
    })


})


