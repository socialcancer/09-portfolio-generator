module.exports = testData => {
    const personObj = {
        name: "Daniel",
        occupation: "Web Developer"
    };

    console.log(testData);

    const { name, age } = personObj;
    console.log(name, age);

    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${testData.name}</h1>
    <h2><a href="https://github.com/${testData.occupation}">Github</a></h2>
  </body>
  </html>
  `;

}