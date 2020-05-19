import sqlalchemy
import os
import flask
import datetime
from datetime import datetime
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy import create_engine
from flask_session import Session
from flask import Flask, session, render_template, request, redirect, url_for, flash, get_flashed_messages, jsonify
from sqlalchemy import or_, and_
from sqlalchemy.sql import func

serachresults = ""

# Check for environment variable
if not os.getenv("DATABASE_URL"):
    raise RuntimeError("DATABASE_URL is not set")

# Set up database
engine = create_engine(os.getenv("DATABASE_URL"))

app = Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/add", methods=["POST"])
def search_api():
    serachresults = request.form.get("username")
    app.logger.info("Updated List")
    app.logger.info(serachresults)
    return jsonify({"success": True})


@app.route("/api/get", methods=["GET"])
def get_api():
    app.logger.info(type(serachresults))
    app.logger.info(jsonify(serachresults))
    return jsonify(serachresults)
    # return jsonify({"success": True})
