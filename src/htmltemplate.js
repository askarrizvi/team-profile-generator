//Main function to generate the HTML code for the cards
function generateCards(employees) {
    //Create an array with the manager object
    const manager = employees.filter(employee => {
        if (employee.getRole() === "Manager") {
            return true;
        }
        else {
            return false;
        }
    });

    //Create an array with the engineer objects
    const engineerArr = employees.filter(employee => {
        if (employee.getRole() === "Engineer") {
            return true;
        }
        else {
            return false;
        }
    });

    //Create an array with the intern objects
    const internArr = employees.filter(employee => {
        if (employee.getRole() === "Intern") {
            return true;
        }
        else {
            return false;
        }
    });

    //Generate the HTML code for the manager card
    const managerCard = manager.map((mgr) => {
        return `
    <div class="card border-dark m-2" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${mgr.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-danger">${mgr.getRole()}</h6>
    <h7 class="mb-2 text-muted">ID: ${mgr.getId()}</h7><br />
    <h7 class="mb-2 text-muted">Email: <a href="mailto:${mgr.getEmail()}">${mgr.getEmail()}</a></h7><br />
    <h7 class="mb-2 text-muted">Office: ${mgr.getOffice()}</h7><br />
    </div>
    </div>
        `;
    });

    //Generate the HTML code for the engineer cards
    const engineerCards = engineerArr.map((eng) => {
        return `
        <div class="card border-dark m-2" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${eng.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-success">${eng.getRole()}</h6>
        <h7 class="mb-2 text-muted">ID: ${eng.getId()}</h7><br />
        <h7 class="mb-2 text-muted">Email: <a href="mailto:${eng.getEmail()}">${eng.getEmail()}</a></h7><br />
        <h7 class="mb-2 text-muted">Github: <a href="https://github.com/${eng.getGithub()}">${eng.getGithub()}</a></h7><br />
        </div>
        </div>`
    });

    //Generate the HTML code for the Intern cards
    const internCards = internArr.map((int) => {
        return `
        <div class="card border-dark m-2" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${int.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-primary">${int.getRole()}</h6>
        <h7 class="mb-2 text-muted">ID: ${int.getId()}</h7><br />
        <h7 class="mb-2 text-muted">Email: <a href="mailto:${int.getEmail()}">${int.getEmail()}</a></h7><br />
        <h7 class="mb-2 text-muted">School: ${int.getSchool()}</h7><br />
        </div>
        </div>`
    });

    //Return the final HTML code with all of the cards
    return `
    <section class="my-3" id="employees">
    <div class="d-flex flex-wrap justify-content-center">
    ${managerCard.join('')}
    ${engineerCards.join('')}
    ${internCards.join('')}
    </div>
    </section>
    `;
}

//Return the HTML code to be written to file
module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <nav id="topNav" class="navbar fixed-top bg-dark">
            <h1 class="navbar-brand mx-auto text-white">My Team</h1>
        </nav>
        </div>
      </header>
      <main class="container my-5">
      ${generateCards(templateData)}
      </main>
    </body>
    </html>
    `;
};