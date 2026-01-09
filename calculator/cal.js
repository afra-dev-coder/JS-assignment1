
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;

        switch (value) {

            case "AC":
                expression = "";
                screen.value = "";
                break;

            case "CE":
                expression = expression.slice(0, -1);
                screen.value = expression;
                break;

            case "=":
                try {
                    let exp = expression
                        .replace(/pi/g, Math.PI)
                        .replace(/e/g, Math.E)
                        .replace(/sin/g, "Math.sin")
                        .replace(/cos/g, "Math.cos")
                        .replace(/tan/g, "Math.tan")
                        .replace(/log/g, "Math.log10")
                        .replace(/root/g, "Math.sqrt");

                    screen.value = eval(exp);
                    expression = screen.value.toString();
                } catch {
                    screen.value = "Error";
                    expression = "";
                }
                break;

            case "x!":
                expression = factorial(Number(expression)).toString();
                screen.value = expression;
                break;

            case "x^y":
                expression += "**";
                screen.value = expression;
                break;

            case "%":
                expression += "/100";
                screen.value = expression;
                break;

            default:
                if (value === "×") {
                    expression += "*";
                } else if (value === "÷") {
                    expression += "/";
                } else {
                    expression += value;
                }
                screen.value = expression;
        }
    });
});
