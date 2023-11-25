#!/usr/bin/python3
"""
Script that takes in an argument and displays all values in the states
table of hbtn_0e_0_usa where name matches the argument.
"""

import MySQLdb
import sys

if __name__ == "__main__":
    # Get command line arguments
    mysql_username = sys.argv[1]
    mysql_password = sys.argv[2]
    db_name = sys.argv[3]
    state_name = sys.argv[4]

    # Connect to MySQL server
    db = MySQLdb.connect(
        host="localhost",
        port=3306,
        user=mysql_username,
        passwd=mysql_password,
        db=db_name
    )

    # Create a cursor object using cursor() method
    cursor = db.cursor()

    # Use the execute() method to execute SQL query
    cursor.execute("SELECT * FROM states WHERE name=%s ORDER BY id", (state_name,))

    # Fetch all the rows using fetchall() method
    data = cursor.fetchall()

    # Display the results
    for row in data:
        print(row)

    # Close the cursor and database connection
    cursor.close()
    db.close()

