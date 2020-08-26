import requests
import json
import os
import mariadb
import logging
from dotenv import load_dotenv

class eventTypes(object):

    def __init__(self):
            load_dotenv()
            self.logger = logging.getLogger('prometo.eventTypes.event_Types')
            self.logger.debug('creating an instance of eventTypes')

    def get_alleventtypes(self):
        print("get_alleventTypes - entro en la función")

        try:
            conn = mariadb.connect(
                user = os.getenv("MARIADB_USERNAME"),
                password = os.getenv("MARIADB_PASSWORD"),
                host = os.getenv("MARIADB_HOST"),
                database = "prometeo",
                port = 3306)

            cursor = conn.cursor()
            print("get_alleventTypes - llamada a sql")
            cursor.callproc('sp_select_all_event_types')
            data = cursor.fetchall()
            if len(data) > 0:
                print("get_alleventTypes - Hay informacion")
                for i in data:
                    print(i)
                return(data)
            else:
                print("get_alleventTypes - NO HAY INFORMACION")
                return None
        except Exception as e:
            print("get_alleventTypes - Estoy en la excepción")
            return None

        finally:
            cursor.close()
            conn.close()
