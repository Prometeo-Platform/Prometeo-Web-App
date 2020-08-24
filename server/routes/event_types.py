import requests
import json
import json
import mariadb

class eventTypes(object):

    def get_alleventtypes(self):
        print("get_alleventTypes - entro en la función")

        try:
            conn = mariadb.connect(
                user=os.getenv("MARIADB_USERNAME"),
                password=os.getenv("MARIADB_PASSWORD"),
                host=os.getenv("MARIADB_HOST"),
                database="prometeo",
                port=3306)

            cursor = conn.cursor()
            print("get_alleventTypes - llamada a sql")
            cursor.callproc('sp_select_all_event_types')
            for result in cursor.stored_results():
                data = result.fetchall()
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
            con.close()
