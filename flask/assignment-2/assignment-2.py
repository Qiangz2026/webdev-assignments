import json
from flask import Flask, Response, jsonify

app = Flask(__name__)

with open("dictionary.json", encoding="utf-8") as file:
    dictionary = json.load(file)


@app.get("/translate/<word>")
def translate(word):
    word_lower = word.lower()
    found_key = None

    for key in dictionary:
        if key.lower() == word_lower:
            found_key = key
            break

    if found_key is None:
        error_body = json.dumps({"error": "Word not found"})
        return Response(response=error_body, status=404, mimetype="application/json")

    return jsonify({
        "English": word,
        "Finnish": dictionary[found_key]
    })


@app.get("/words")
def words():
    return jsonify(list(dictionary.keys()))


if __name__ == "__main__":
    app.run(port=3000, debug=True)