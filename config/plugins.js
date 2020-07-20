module.exports = ({ env }) => ({
    
    upload: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env('officailrj18'),
          api_key: env('252494111954577'),
          api_secret: env('A-dApR9BNOpmJVdWF1dwXsU9WIk')
        }
      },
  });