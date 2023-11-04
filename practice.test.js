const { capitalize, reverse, calculator, caesarCipher } = require('./practice');

test("capitalize test", ()=> {
    expect(capitalize("ciao")).toBe("Ciao");
});

test("reverse test", ()=> {
    expect(reverse("ciao")).toBe("oaic");
});

test("calculator add", ()=> {
    expect(calculator.add(1, 2)).toBe(3);
});

test("calculator subtract", ()=> {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test("calculator multiply", ()=> {
    expect(calculator.multiply(5, 3)).toBe(15);
});

test("calculator divide", ()=> {
    expect(calculator.divide(15, 3)).toBe(5);
});

test("caesar cipher", ()=> {
    expect(caesarCipher("De Bello Gallico")).toBe("Ef Cfmmp Hbmmjdp");
});