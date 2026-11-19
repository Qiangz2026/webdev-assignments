from flask import Flask, jsonify

app = Flask(__name__)


def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True


@app.get("/prime_number/<number>")
def prime_number(number):
    num = int(number)
    return jsonify({
        "Number": num,
        "isPrime": is_prime(num)
    })


if __name__ == "__main__":
    app.run(port=3000, debug=True)