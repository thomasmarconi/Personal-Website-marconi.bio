from flask import Flask, render_template
app = Flask(__name__, static_url_path='/static', static_folder='static')

@app.route("/")
def portfolio():
    return render_template("portfolio.html")
@app.route("/info")
def info():
    return render_template("info.html")
@app.route("/about")
def about():
    return render_template("/articles/about.html")
@app.route("/working_with_my_first_client")
def working_with_my_first_client():
    return render_template("/articles/working_with_my_first_client.html")
@app.route("/blog")
def blog():
    return render_template("blog.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0')
