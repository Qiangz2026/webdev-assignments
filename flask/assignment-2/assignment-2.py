import json
from pathlib import Path
from flask import Flask, Response, jsonify

app = Flask(__name__)

BASE_DIR = Path(__file__).resolve().parent
DICTIONARY_PATH = BASE_DIR / "dictionary.json"


def load_dictionary() -> dict[str, str]:
    with open(DICTIONARY_PATH, encoding="utf-8") as file:
        raw_dict = json.load(file)
    return {str(k).lower(): str(v) for k, v in raw_dict.items()}


dictionary = load_dictionary()


@app.get("/translate/<word>")
def translate(word: str):
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
    return jsonify(list(dictionary.keys()))


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)