#import requests
import json
import mariadb
import os
import logging
from dotenv import load_dotenv

class firefighters(object):

    def __init__(self):
        load_dotenv()
        self.logger = logging.getLogger('prometo.firefighters.fire_fighters')
        self.logger.debug('creating an instance of firefighters')

    def insert_firefighter(self, bomberoid, nombre, apellidos, email):

        
        try:
            conn = mariadb.connect(
                user=os.getenv("MARIADB_USERNAME"),
                password=os.getenv("MARIADB_PASSWORD"),
                host=os.getenv("MARIADB_HOST"),
                database="prometeo",
                port=3306)

            cursor = conn.cursor()

            cursor.callproc('sp_create_firefighter', (bomberoid, nombre, apellidos, email))

            data = cursor.fetchall()

            if len(data[0][0]) is 0:
                con.commit()
                return True
            else:
                return False

        except Exception as e:
            return None

        finally:
            cursor.close()
            conn.close()


    def update_firefighter(self, bomberoid, nombre, apellidos, email):
        try:
            conn = mariadb.connect(
                user=os.getenv("MARIADB_USERNAME"),
                password=os.getenv("MARIADB_PASSWORD"),
                host=os.getenv("MARIADB_HOST"),
                database="prometeo",
                port=3306)

            cursor = conn.cursor()

            cursor.callproc('sp_update_firefighter', (bomberoid, nombre, apellidos, email))

            data = cursor.fetchall()

            if len(data[0][0]) is 0:
                con.commit()
                return True
            else:
                return False

        except Exception as e:
            return None

        finally:
            cursor.close()
            conn.close()

    def get_firefighter(self, bomberoid):
        try:
            conn = mariadb.connect(
                user=os.getenv("MARIADB_USERNAME"),
                password=os.getenv("MARIADB_PASSWORD"),
                host=os.getenv("MARIADB_HOST"),
                database="prometeo",
                port=3306)

            cursor = conn.cursor()

            cursor.callproc('sp_select_firefighter', (bomberoid))

            data = cursor.fetchall()

            if len(data) > 0:
                return(data[0])
            else:
                return None

        except Exception as e:
            return None

        finally:
            cursor.close()
            conn.close()

    def get_allfirefighters(self):
        print("get_alldevices - entro en la funcion")

        try:
            conn = mariadb.connect(
                user=os.getenv("MARIADB_USERNAME"),
                password=os.getenv("MARIADB_PASSWORD"),
                host=os.getenv("MARIADB_HOST"),
                database="prometeo",
                port=3306)

            cursor = conn.cursor()

            self.logger.info("get_alldevices - llamada a sql")
            cursor.callproc('sp_select_all_firefighters')
            data = cursor.fetchall()
            if len(data) > 0:
                self.logger.info("get_alldevices - Hay informacion")
                for i in data:
                    self.logger.info(i)
                return(data)
            else:
                self.logger.info("get_alldevices - NO HAY INFORMACION")
                return None
        except Exception as e:
            self.logger.info("get_alldevices - Estoy en la excepcion")
            return None

        finally:
            cursor.close()
            conn.close()
