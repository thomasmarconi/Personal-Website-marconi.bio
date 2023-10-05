from flask import Flask, render_template
app = Flask(__name__, static_url_path='/static', static_folder='static')

@app.route("/")
def home():
    return render_template("home.html")
@app.route("/about")
def about():
    return render_template("about.html")
@app.route("/info")
def info():
    return render_template("info.html")
@app.route("/working_with_my_first_client")
def working_with_my_first_client():
    return render_template("working_with_my_first_client.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0')
