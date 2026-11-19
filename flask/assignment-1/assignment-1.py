import math
from flask import Flask, jsonify

app = Flask(__name__)


def is_prime(n: int) -> bool:
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    limit = math.isqrt(n)
    for i in range(3, limit + 1, 2):
        if n % i == 0:
            return False
    return True


@app.get("/prime_number/<number>")
def prime_number(number):
    try:
        num = int(number)
    except ValueError:
        return jsonify({"error": "Invalid number"}), 400

    return jsonify({
        "Number": num,
        "isPrime": is_prime(num),
    })


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)