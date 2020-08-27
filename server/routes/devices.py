#import requests
import json
import mariadb
import os
import sys
import logging
from dotenv import load_dotenv



class devices(object):


    def __init__(self):
        load_dotenv()
        self.logger = logging.getLogger('prometeo.device.devices')
        self.logger.debug('creating an instance of devices')

    def insert_device(self, sensorid, model, version):

        # Instantiate Connection
        try:
            conn = mariadb.connect(
                user = os.getenv("MARIADB_USERNAME"),
                password = os.getenv("MARIADB_PASSWORD"),
                host = os.getenv("MARIADB_HOST"),
                database = "prometeo",
                port = int(os.getenv("MARIADB_PORT")))

            cursor = conn.cursor()

            cursor.callproc('sp_create_device', (sensorid, model, version))

            data = cursor.fetchall()

            if len(data[0][0]) == 0:
                con.commit()
                return True
            else:
                return False
        except mariadb.Error as e:
            print("Error connecting to MariaDB Platform: {e}")

        finally:
            cursor.close()
            conn.close()


    def update_device(self, sensorid, model, version):
        try:
            conn = mariadb.connect(
                user = os.getenv("MARIADB_USERNAME"),
                password = os.getenv("MARIADB_PASSWORD"),
                host = os.getenv("MARIADB_HOST"),
                database = "prometeo",
                port = int(os.getenv("MARIADB_PORT")))

            cursor = conn.cursor()

            cursor.callproc('sp_update_device', (sensorid, model, version))

            data = cursor.fetchall()

            if len(data[0][0]) == 0:
                con.commit()
                return True
            else:
                return False

        except mariadb.Error as e:
            print("Error connecting to MariaDB Platform: {e}")

        except Exception as e:
            return None

        finally:
            cursor.close()
            conn.close()

    def get_device(self, sensorid):
        try:
            conn = mariadb.connect(
                user = os.getenv("MARIADB_USERNAME"),
                password = os.getenv("MARIADB_PASSWORD"),
                host = os.getenv("MARIADB_HOST"),
                database = "prometeo",
                port = int(os.getenv("MARIADB_PORT")))

            cursor = conn.cursor()

            cursor.callproc('sp_select_device', (sensorid))

            data = cursor.fetchall()

            if len(data) > 0:
                return(data[0])
            else:
                return None
        
        except mariadb.Error as e:
            print("Error connecting to MariaDB Platform: {e}")

        except Exception as e:
            return None

        finally:
            cursor.close()
            conn.close()

    def get_alldevices(self):
        print("get_alldevices - entro en la funcion")

        try:
            conn = mariadb.connect(
                user = os.getenv("MARIADB_USERNAME"),
                password = os.getenv("MARIADB_PASSWORD"),
                host = os.getenv("MARIADB_HOST"),
                database = "prometeo",
                port = int(os.getenv("MARIADB_PORT")))

            cursor = conn.cursor()

            print("get_alldevices - llamada a sql")
            cursor.callproc('sp_select_all_devices')
            data = cursor.fetchall()
            if len(data) > 0:
                print("get_alldevices - Hay informacion")
                for i in data:
                    print(i)
                return(data)
            else:
                print("get_alldevices - NO HAY INFORMACION")
                return None
        except Exception as e:
            print("get_alldevices - Estoy en la excepcion")
            return None

        finally:
            cursor.close()
            conn.close()
