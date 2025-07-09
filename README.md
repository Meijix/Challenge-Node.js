# Challenge Node.js
Mini Challenge with NodeJS
No frontend or database is required. You can build everything locally.

## Console task using NodeJS
Create a script index.js that does the following:

When run with node index.js, it prompts the user:
> Ask me something:

It captures the user's question via the terminal.

It sends that question to the OpenAI API using the provided API key.

It prints the result as a JSON object like this:

{ "answer": "Your response from OpenAI goes here." }
Please don't use your own money to do the testing, here is an API key with couple bucks that you can use to make requests to open ai API
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
We recommend using axios to make the request.

## Bonus, with Express:
If you finish early, try extending it with a simple API server:

Create a server.js file using Express.

Add a POST endpoint /ask.

It should accept a JSON body like:

{ "question": "What is the speed of light?" }
It should return a response like:

{ "answer": "The speed of light is approximately 299,792,458 meters per second." }
