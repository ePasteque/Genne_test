# Project Name
NAME = Geenee_test_project 

# Operating System Detection
UNAME_S := $(shell uname -s)

# Current User
USER = $(shell whoami)

# Current Working Directory
CWD = $(shell pwd)

# Docker Compose Command with Project Name
COMPOSE = docker compose -f ./docker-compose.yml -p $(NAME)

# Sed Command Variation for Different Operating Systems
ifeq ($(UNAME_S),Linux)
    SED_INPLACE := sed -i
endif
ifeq ($(UNAME_S),Darwin)
    SED_INPLACE := sed -i ''
endif

# Default Rule: Build and Start Containers
all: check-docker up

# Update Environment Variables (Modify as needed for your project)
update_env:
	@$(SED_INPLACE) 's#^STORAGE_PATH=.*#STORAGE_PATH=$(CWD)#' ./.env

# Start Services in Detached Mode
up: build
	@echo "Starting services..."
	$(COMPOSE) up -d

# Build Images
build: check-docker
	@echo "Building images..."
	$(COMPOSE) build

# Check if Docker Daemon is Running
check-docker:
	@echo "Checking Docker daemon..."
	@docker info > /dev/null 2>&1 || (echo "Docker daemon is not running"; exit 1)

# Start Services
start:
	@echo "Starting services..."
	$(COMPOSE) start

# Restart Services
restart:
	@echo "Restarting services..."
	$(COMPOSE) restart

# Show Services Status
ps:
	$(COMPOSE) ps

# Show Services Images
images:
	$(COMPOSE) images

# Stop Services
stop:
	@echo "Stopping services..."
	$(COMPOSE) stop

# Stop and Remove Containers, Networks, Images, and Volumes
down: stop
	@echo "Removing resources..."
	$(COMPOSE) down --rmi all --volumes

# View Logs
logs:
	$(COMPOSE) logs

# Prune Unused Docker Resources
prune:
	@echo "Pruning unused Docker resources..."
	docker system prune -f -a

# Full Cleanup: Remove Containers, Images, Volumes, and Build Artifacts
fclean: down
	@echo "Cleaning frontend and backend artifacts..."
	@rm -rf ./srcs/frontend/node_modules ./srcs/frontend/package-lock.json
	@rm -rf ./srcs/backend/node_modules ./srcs/backend/package-lock.json

# Rebuild and Restart Everything
re: fclean all

.PHONY: all re up down build start restart stop fclean images ps check-docker update_env prune
