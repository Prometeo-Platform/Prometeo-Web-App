#import requests
import json
import mariadb
import os
import sys




class devices(object):

    def insert_device(self, sensorid, model, version):

        # Instantiate Connection
        try:
            conn = mariadb.connect(
                user=os.getenv("MARIADB_USERNAME"),
                password=os.getenv("MARIADB_PASSWORD"),
                host=os.getenv("MARIADB_HOST"),
                database="prometeo",
                port=3306)

            cursor = conn.cursor()

            cursor.callproc('sp_create_device', (sensorid, model, version))

            for result in cursor.stored_results():
                data = result.fetchall()

            if len(data[0][0]) is 0:
                con.commit()
                return True
            else:
                return False
        except mariadb.Error as e:
            print("Error connecting to MariaDB Platform: {e}")

        finally:
            cursor.close()
            con.close()


    def update_device(self, sensorid, model, version):
        try:
            conn = mariadb.connect(
                user=os.getenv("MARIADB_USERNAME"),
                password=os.getenv("MARIADB_PASSWORD"),
                host=os.getenv("MARIADB_HOST"),
                database="prometeo",
                port=3306)

            cursor = conn.cursor()

            cursor.callproc('sp_update_device', (sensorid, model, version))

            for result in cursor.stored_results():
                data = result.fetchall()

            if len(data[0][0]) is 0:
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
            con.close()

    def get_device(self, sensorid):
        try:
            conn = mariadb.connect(
                user=os.getenv("MARIADB_USERNAME"),
                password=os.getenv("MARIADB_PASSWORD"),
                host=os.getenv("MARIADB_HOST"),
                database="prometeo",
                port=3306)

            cursor = conn.cursor()

            cursor.callproc('sp_select_device', (sensorid))

            for result in cursor.stored_results():
                data = result.fetchall()

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
            con.close()

    def get_alldevices(self):
        print("get_alldevices - entro en la funcion")

        try:
            conn = mariadb.connect(
                user=os.getenv("MARIADB_USERNAME"),
                password=os.getenv("MARIADB_PASSWORD"),
                host=os.getenv("MARIADB_HOST"),
                database="prometeo",
                port=3306)

            cursor = conn.cursor()

            print("get_alldevices - llamada a sql")
            cursor.callproc('sp_select_all_devices')
            for result in cursor.stored_results():
                data = result.fetchall()
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
            con.close()
