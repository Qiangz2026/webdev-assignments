import json
from flask import Flask, Response, jsonify, request

app = Flask(__name__)


def load_dictionary():
    with open("dictionary.json", encoding="utf-8") as file:
        return json.load(file)


def save_dictionary(data):
    with open("dictionary.json", "w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=2)


@app.get("/add")
def add_word():
    en = request.args.get("en")
    fi = request.args.get("fi")

    dictionary = load_dictionary()
    dictionary[en] = fi
    save_dictionary(dictionary)

    return jsonify({
        "en": en,
        "fi": fi
    })


@app.get("/translate/<word>")
def translate(word):
    dictionary = load_dictionary()
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


if __name__ == "__main__":
    app.run(port=3000, debug=True)