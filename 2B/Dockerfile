# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the desired port for the application
EXPOSE 3000

# Specify the command to run the application
CMD [ "node", "app.js" ]


# sudo docker build -t "static-nodejs" .
# sudo docker run static-nodejs
