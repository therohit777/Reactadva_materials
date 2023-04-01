// REACT JS(CHP1)

/*
   To create a React APP:  npx create-react-app appname
   To run a React App: npm start  
    

   NPM vs NPX:
    NPM is basically a package manager that is used to dowload 
    our required dependencies when need.

    NPX downloads and runs Node.js packages without installing 
    them, and deletes them immediately after use, so that they don't take up space on your hard drive.
   

   React-scripts inside Package.json:   
    'reac-scripts' helps to better build and test our application using this 4 scripts:
        Example:  
        "scripts": {
            "start": "react-scripts start", // runs our react app in Local development environment.
            "build": "react-scripts build", // It takes all scripts and condenses them down to most optimise built which can be send over the internet for a browser to consume.  
            "test": "react-scripts test", // It is used to test our application whether its working fine or not.
            "eject": "react-scripts eject" //The eject script gives you full control over the React app configuration. For example, you can customize the webpack or Babel configuration according to a specific need by ejecting the React app. But, Not recomended to do so until very necessary.
        },

        Note: Build here makes used of 2 tools to optimise our code:
                1. Babel: It takes funky javascript that we write in our application that is the JSX and converts it into the most simplified and optimal html,css,and js code that browsers understand.
                2. Webpack: Now, webpack takes the Big Js files present in our application and breaks them into chunks of Js files, here the chunks needed at a time only works. Not all chunks of Js files are required to work together.


    Entry Point of react Application:
      Entry point of our react application is index.js file.
      Here we come across 2 important modules:
        1. 'react' : react is the engine responsible for building the applications.
        2. 'react-dom' : react-dom is specifies that above engine should be directed towards web related applications.


    Snippet to render our entire react application:
       const root = ReactDOM.createRoot(     //ReactDOM directs apllication to be rendered over web
                          document.getElementById('root') //Selects an element having id as 'root' where we render our entire react application, present in index.html in public directory.
                    ); 
       root.render(
           <React.StrictMode> //restricts us from using deprecated stuffs.
              <App />  //Our entire react application
           </React.StrictMode>
        );

    
    Public Directory important File:
    Manifest.JSON() FIle:  Provides metadata about the application to improve the user experience when the app is locally by the users for their usage.
    robots.txt File: Used by webmasters to provide instructions to search engine crawlers about which pages or sections of their website should be crawled and indexed by the search engine. Used for SEO purpose. 
    
   
    
    Simplest way ro understand React:  
      * It is a Function returning HTML.
      * Makes use of JSX(Javascript Syntax Extension) to do so.
      *  


*/

