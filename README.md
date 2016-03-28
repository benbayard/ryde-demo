# Welcome Everyone!
This is the web-app that I built for you. It includes:

    1. A server for sending the HTML and sending the API.
    2. A front end build on react and redux. It has examples of asynchronous actions as well as how to do client side interactions.
    3. Back-end and front end testing.

# How to get started.
First run `npm install` and `npm run build`. This builds the most up to date version of the webpack file and installs all my dependencies. Then you can run `npm test` to run my tests. Those are configured in `tests/client/client-entry.js` as well as `karma.conf.js`.

# But what about the webapp?
To get the webapp to run do `npm start`, this runs a node server running on harmony. This will serve the API and the HTML. To view, go to `http://localhost:3000` in your web browser. It should look perfect in chrome and firefox. The only real piece of user inter activity you will see is clicking the caret to show more content.

# Things I would like to add
    1. A lot more tests. Normally, I would have significantly more tests. However, I felt that all the coverage for my components was sufficient to show how I do testing and what things I like to test.
    2. More user functionality. I would have liked to add in the filtering functionality. But I showed how I would do user interactivity with the `expands` functionality.
    3. Linting. I would have loved to add in linting. 
