from flask import Flask, request


app = Flask(__name__)


@app.route('/api/length/<s>/')
def length():
    return {"original_string":s, "length": len(s)}