module.exports = { 
    client: { 
      service: { 
        name: "my-graphql-app", 
        url: "http://localhost:8055/graphql", 
      }, 
      includes: [
          "./src/**/*.js",
          "./src/**/*.vue"
    ]
    } 
  };