from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config ['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:1234@localhost/demoDB'
db = SQLAlchemy(app)


# Define db model.
# Create a table in our demoDB
class Data(db.Model):
     __tablename__ = "customers"
     id=db.Column(db.Integer, primary_key=True)
     firstname = db.Column(db.String(120))
     lastname = db.Column(db.String(120))
     email = db.Column(db.String(120), unique = True)
     total = db.Column(db.Integer)


     def __init__(self, firstname, lastname, email, total):
         self.firstname = firstname
         self.lastname = lastname
         self.email = email
         self.total = total

# Homepage when application is ran
@app.route("/")
def home():
    return render_template("checkOut.html")

# Handle the homepage when the form is submitted
# request .method == "POST" is collecting the data of the form when submit button is clicked
@app.route("/checkOut", methods=["POST"])
def checkOut():
    if request.method == "POST":
        firstname = request.form["first_name"]
        lastname = request.form["last_name"]
        email = request.form["email_address"]
        total = request.form["total_price"]
        print(request.form)
    # Last Step: Commit and send data to database
    customers = Data(firstname, lastname, email, total)
    db.session.add(customers)
    db.session.commit() # Execute the data into database
    return render_template("orderConfirmed.html")

if __name__ =="__main__":
    app.debug=True
    app.run()
