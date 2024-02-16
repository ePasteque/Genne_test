# Use an official Python runtime as a parent image
FROM python:3.9

# Set the working directory in the container
WORKDIR /usr/src/app



#Optionally: Install virtualenv for creating a virtual environment
RUN pip install --no-cache-dir virtualenv
# Create a virtual environment in the container named 'venv'
RUN virtualenv venv

# Activate the virtual environment
# Note: Every RUN command runs in a new layer, so you cannot simply activate
# the virtual environment in one RUN command and use it in the next. Instead,
# prefix commands with 'source venv/bin/activate &&' within the same RUN command.
# Install Flask within the virtual environment
RUN . venv/bin/activate && pip install Flask

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# # Make port 5000 available to the world outside this container
# EXPOSE 5000

# Define environment variable
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_ENV=development

# Run app.py using the virtual environment
CMD ["sh", "-c", ". venv/bin/activate && flask run"]
