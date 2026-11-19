import json
from pathlib import Path
from flask import Flask, Response, jsonify, request

app = Flask(__name__)

BASE_DIR = Path(__file__).resolve().parent
DICTIONARY_PATH = BASE_DIR / "dictionary.json"


def read_dictionary() -> dict[str, str]:
    with open(DICTIONARY_PATH, encoding="utf-8") as file:
        data = json.load(file)
    return {str(k).lower(): str(v) for k, v in data.items()}


def write_dictionary(data: dict[str, str]) -> None:
    with open(DICTIONARY_PATH, "w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=2)


@app.get("/add")
def add_word():
    en = request.args.get("en")
    fi = request.args.get("fi")

    if not en or not fi:
        payload = json.dumps({"error": "Missing 'en' or 'fi' parameter"}, ensure_ascii=False)
        return Response(response=payload, status=400, mimetype="application/json")

    en_key = en.strip().lower()
    fi_val = fi.strip()

    dictionary = read_dictionary()
    dictionary[en_key] = fi_val
    write_dictionary(dictionary)

    return jsonify({
        "added": {
            "en": en_key,
            "fi": fi_val,
        }
    })


@app.get("/translate/<word>")
def translate(word: str):
    dictionary = read_dictionary()
    key = word.lower()

    if key not in dictionary:
        payload = json.dumps({"error": "Word not found"}, ensure_ascii=False)
        return Response(response=payload, status=404, mimetype="application/json")

    return jsonify({
        "English": word,
        "Finnish": dictionary[key],
    })


@app.get("/words")
def words():
    dictionary = read_dictionary()
    return jsonify(list(dictionary.keys()))


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)