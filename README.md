# Prometeo Web App

This repository contains the [Prometeo](https://github.com/Code-and-Response/Prometeo) solution web application dashboard for firefighters to view .

This service wakes up every minute and calculates time weighted average exposures for all fire fighters and compares them to the configured limits.

[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Slack](https://img.shields.io/badge/Join-Slack-blue)](https://join.slack.com/t/code-and-response/shared_invite/enQtNzkyMDUyODg1NDU5LTdkZDhmMjJkMWI1MDk1ODc2YTc2OTEwZTI4MGI3NDI0NmZmNTg0Zjg5NTVmYzNiNTYzNzRiM2JkZjYzOWIwMWE)

## Contents

- [Prerequisites](#prerequisites)
- [Run locally with Python](#run-locally-with-python)
- [Run locally with Docker](#run-locally-with-docker)
- [Run on Kubernetes](#run-on-kubernetes)
- [Troubleshooting](#troubleshooting)
- [Built with](#built-with)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites
1. [Docker](https://docs.docker.com/desktop/)
2. [IBM CLI](https://cloud.ibm.com/docs/cli?topic=cli-install-ibmcloud-cli)
3. [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
4. [Helm](https://helm.sh/docs/intro/install/)
5. [Skaffold](https://skaffold.dev/docs/install/)

## Run locally with Python
You can run this solution locally in docker as follows

1. Set up environment variables in the `.env` file
2. Install mariadb locally
   1. build 
    ```
        docker pull mariadb
    ```
   2. run the image
    ```
        docker run -p 3306:3306 --name prometeo-mariadb -e MYSQL_ROOT_PASSWORD='' -d mariadb
    ```
    3. Use the prometeo.sql and procedure.sql to dump into the new database to get the initial framework set. 
    4. Test the image - TBD
3. Create python virtual environment
   ```
        python3 -m venv python3
   ```
4. Activate virtual environment
   ```
        source python3/bin/activate
   ```
5. Run the application
   ```
        python src/manage.py start 3000
   ```
6. You should see the following output
   ```
        starting application
        * Serving Flask app "core_decision_flask_app" (lazy loading)
        * Environment: production
        WARNING: Do not use the development server in a production environment.
        Use a production WSGI server instead.
        * Debug mode: off
        * Running on http://0.0.0.0:3000/ (Press CTRL+C to quit)
   ```

## Run locally with Docker
1. Build the local .env file
    ```
    MARIADB_HOST= <node port ip>
    MARIADB_USERNAME=root
    MARIADB_PASSWORD=<password>
    MARIADB_PORT=31672
    WS_HOST=<WS://>
    WS_PORT=8080
    ```
1. Build the image
    ```
        docker build . -t webapp
    ```
1. Run the image
   ```
        docker run -p3000:3000 -t webapp
   ```
1. You should see the application logs
   ```
        2020-09-23 18:02:12 +0000] [9] [INFO] Starting gunicorn 19.7.1
    [2020-09-23 18:02:12 +0000] [9] [INFO] Listening at: http://0.0.0.0:3000 (9)
    [2020-09-23 18:02:12 +0000] [9] [INFO] Using worker: sync
    [2020-09-23 18:02:12 +0000] [12] [INFO] Booting worker with pid: 12
    INFO:prometeo.fuel_types.fuelTypes:creating an instance of fuelTypes
    INFO:prometeo.fuel_types.fuelTypes:calling the stored procedure
    DEBUG:prometeo.fuel_types.fuelTypes:there is data:
    DEBUG:prometeo.fuel_types.fuelTypes:(1, 'Pinar', None)
    DEBUG:prometeo.fuel_types.fuelTypes:(2, 'Matojo', None)
    DEBUG:prometeo.fuel_types.fuelTypes:(3, 'Campo de trigo', None)
    DEBUG:prometeo.status.status_webapp:creating an instance of status
    get_allstatus - entro en la funcion
    get_allstatus - llamada a sql
    get_allstatus - Hay informacion
    (1, 'Planificado', None)
    (2, 'En curso', None)
    (3, 'Finalizado', None)
    (4, 'Cancelado', None)
    DEBUG:prometeo.eventTypes.event_Types:creating an instance of eventTypes
    get_alleventTypes - entro en la función
    get_alleventTypes - llamada a sql
    get_alleventTypes - Hay informacion
    (1, 'Quema Prescrita', None)
    (2, 'Incendio Forestal', None)
    WARNING:ibmcloudenv:The specified config.json file /app/server/config/mappings.json does not exist
   ```
1. Test by opening "http://0.0.0.0:3000" in a browser 

## Run on Kubernetes
You can run this application on Kubernetes. The skaffold.yaml file let's you quickly run the application on the cluster by using [Skaffold](https://skaffold.dev/docs/pipeline-stages/deployers/helm/). There are two profiles provided. To run the solution on the `test` namespace use:
    ```
        skaffold dev -p test
    ```

## Troubleshooting
1. Database does not connect
   1. ensure `.env` file has the correct values for database connection
2. Change the db password

## Built with

* Docker
* MariaDB
* Flask
* [IBM Kubernetes Service](https://cloud.ibm.com/kubernetes/overview)


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting Prometeo pull requests.

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.