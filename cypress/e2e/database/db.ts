// / <reference types="Cypress"/>
describe("Test DB", () => {
  //Dummy data to insert in the customer, and then to check if those data are added correctly
  const cNumber = 99929292;
  const customerData = {
    customerNumber: cNumber,
    customerName: "ABC Company",
    contactLastName: "Smith",
    contactFirstName: "John",
    phone: "123-456-7890",
    addressLine1: "123 Main St",
    addressLine2: "Apt 4B",
    city: "Nantes",
    state: "CA",
    postalCode: "12345",
    country: "United States",
    salesRepEmployeeNumber: 1611,
    creditLimit: 50000.00,
  };
  // console.log(customerData)
  // it('',() => {
  //   cy.task<string[]>("queryDb", "SELECT * FROM customers WHERE city = 'NANTES'").then(response => {
  //     console.log(response)
  //     expect(response).to.have.length(2)
  //   }) 
  // })
  it('insert',() => {
    cy.insertCustomer(customerData);
  })

  it("Get specific customer", () => {
    cy.task<any[]>("queryDb", `SELECT * FROM customers`).then(response => {
      const lastRecord = response[response.length - 1];
      // console.log(lastRecord)
      const formattedLastRecord = {
        customerNumber: lastRecord.customerNumber,
        customerName: lastRecord.customerName,
        contactLastName: lastRecord.contactLastName,
        contactFirstName: lastRecord.contactFirstName,
        phone: lastRecord.phone,
        addressLine1: lastRecord.addressLine1,
        addressLine2: lastRecord.addressLine2,
        city: lastRecord.city,
        state: lastRecord.state,
        postalCode: lastRecord.postalCode,
        country: lastRecord.country,
        salesRepEmployeeNumber: lastRecord.salesRepEmployeeNumber,
        creditLimit: parseFloat(lastRecord.creditLimit), // Ensure creditLimit is parsed as a number
      };
  
      console.log(formattedLastRecord);
      expect(formattedLastRecord).to.deep.equal(customerData);
      // expect(lastRecord).to.deep.equal(customerData);
    });
  });

  it.only('Update customer in MySQL', () => {
  const updateQuery = `
        UPDATE customers
        SET
          customerName = '${customerData.customerName}aaa',
          contactLastName = '${customerData.contactLastName}',
          contactFirstName = '${customerData.contactFirstName}',
          phone = '${customerData.phone}',
          addressLine1 = '${customerData.addressLine1}',
          addressLine2 = '${customerData.addressLine2}',
          city = '${customerData.city}',
          state = '${customerData.state}',
          postalCode = '${customerData.postalCode}',
          country = '${customerData.country}',
          salesRepEmployeeNumber = ${customerData.salesRepEmployeeNumber},
          creditLimit = ${customerData.creditLimit}
        WHERE
          customerNumber = ${cNumber}
      `;
      cy.task('queryDb', updateQuery).then(() => {
        cy.log('Customer updated successfully');
      });
    });
  });


 
