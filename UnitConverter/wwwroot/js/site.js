const metricSelect = $("#metricSelect");
const imperialSelect = $("#imperialSelect");
const fromInput = $("#fromInput");
const toInput = $("#toInput");
const resultScreen = $("#resultScreen");

let decideConversionMethod = (value) => {
    let metricValue = metricSelect.val();
    let imperialValue = imperialSelect.val();

    let result = undefined;

    switch (metricValue) {
    case "meter":
        switch (imperialValue) {
        case "inch":
            result = meterToInch(value);
            break;
        case "foot":
            result = meterToFoot(value);
            break;
        case "yard":
            result = meterToYard(value);
            break;
        case "mile":
            result = meterToMile(value);
            break;
        default:
        }
    default:
    }

    return result;
};

let meterToInch = (x) => { return Number(x) * 39.3700; };
let meterToFoot = (x) => { return Number(x) * 3.2808; };
let meterToYard = (x) => { return Number(x) * 1.0936; };
let meterToMile = (x) => { return Number(x) * 0.0006; };

metricSelect.change(function () {

    let result;
    fromInput.val() !== "" ? result = decideConversionMethod(fromInput.val()) : result = "";

    toInput.text(result);
    resultScreen.text("Result is " + result);
});

imperialSelect.change(function () {

    let result;
    fromInput.val() !== "" ? result = decideConversionMethod(fromInput.val()) : result = "";

    toInput.text(result);
    resultScreen.text("Result is " + result);
});

