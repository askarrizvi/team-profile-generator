function generateCards(employees) {
    const manager = employees.filter(employee => {
        if (employee.getRole() === "Manager") {
            return true;
        }
        else {
            return false;
        }
    });

    const engineerArr = employees.filter(employee => {
        if (employee.getRole() === "Engineer") {
            return true;
        }
        else {
            return false;
        }
    });

    const internArr = employees.filter(employee => {
        if (employee.getRole() === "Intern") {
            return true;
        }
        else {
            return false;
        }
    });

    const managerCard = manager.map((mgr) => {
        return `
        <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${mgr.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${mgr.getRole()}</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    </div>
    </div>
        `;
    });

    const engineerCards = engineerArr.map((eng) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${eng.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${eng.getRole()}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
        </div>
        </div>`
    });

    const internCards = internArr.map((int) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${int.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${int.getRole()}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
        </div>
        </div>`
    });

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

module.exports = templateData => {
    // destructure page data by section
    //const { projects, about, ...header } = templateData;
    console.log(templateData);


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