function generateHTML(response) {

    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Team Profile Generator</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="./Assets/css/style.css" />
      </head>
      <body>
        <header>
          <div class= "team-heading">${response.team}</div>
        </header>
    
        <main>
            <div class="constainer">
                <div class="row">
                    <div class="col">
                        <div class="employee-card">
                            <div class="card-header">${response.memberName}<br>${response.role}</div>
                            <div class="card-body">
                            
                            <ul class="list-group-item list-group-flush">
                              <li class="list-group-item">ID: ${response.id}</li>
                              <li class="list-group-item">Email: ${response.email}</li>
                              <li class="list-group-item">Github: ${response.github}</li>
                            </ul>
                            </div>
                          </div>
                    </div>
                    <div class="col">
                        
                    </div>
                    <div class="col">
                        
                    </div>
                </div>
            </div>
        </main>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
      </body>
    </html>
    `
    }
    module.exports = { 
        generateHTML,
    }; 