from flask import Flask, render_template

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route("/")
@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html", judul="Dashboard")

@app.route("/orders")
def orders():
    return render_template("orders.html")

@app.route("/order/<order_id>")
def order_detail(order_id):
    if order_id == "sss":
        return render_template("order_details.html", order_id=order_id)
    else:
        return orders()
