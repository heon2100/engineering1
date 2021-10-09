JotForm.newDefaultTheme = false;
JotForm.extendsNewTheme = false;
JotForm.newPaymentUIForNewCreatedForms = false;

JotForm.setCalculations([{
    "decimalPlaces": "2",
    "equation": "[((9.99*{5}\u002F100*{5}\u002F100*25)+(6.25*{5})-(4.92*{3})+{4})*{17}*{18}]",
    "ignoreHiddenFields": "0",
    "insertAsText": "0",
    "newCalculationType": "1",
    "operands": "5,3,4,17,18",
    "readOnly": "1",
    "replaceText": "",
    "resultField": "6",
    "showBeforeInput": "0",
    "showEmptyDecimals": "0",
    "useCommasForDecimals": "0"
}, {
    "decimalPlaces": "0",
    "equation": "[{5}*{5}*25*2\u002F10000]",
    "ignoreHiddenFields": "0",
    "insertAsText": "0",
    "newCalculationType": "1",
    "operands": "5",
    "readOnly": "0",
    "replaceText": "",
    "resultField": "11",
    "showBeforeInput": "0",
    "showEmptyDecimals": "0",
    "useCommasForDecimals": "0"
}, {
    "decimalPlaces": "0",
    "equation": "[({6}-{15})\u002F9]",
    "ignoreHiddenFields": "0",
    "insertAsText": "0",
    "newCalculationType": "1",
    "operands": "6,15",
    "readOnly": "0",
    "replaceText": "",
    "resultField": "13",
    "showBeforeInput": "0",
    "showEmptyDecimals": "0",
    "useCommasForDecimals": "0"
}, {
    "decimalPlaces": "0",
    "equation": "[({6}*0.45)\u002F4]",
    "ignoreHiddenFields": "0",
    "insertAsText": "0",
    "newCalculationType": "1",
    "operands": "6",
    "readOnly": "0",
    "replaceText": "",
    "resultField": "14",
    "showBeforeInput": "0",
    "showEmptyDecimals": "0",
    "useCommasForDecimals": "0"
}, {
    "decimalPlaces": "2",
    "equation": "[{11}*4+{14}*4]",
    "ignoreHiddenFields": "0",
    "insertAsText": "0",
    "newCalculationType": "1",
    "operands": "11,14",
    "readOnly": "0",
    "replaceText": "",
    "resultField": "15",
    "showBeforeInput": "0",
    "showEmptyDecimals": "0",
    "useCommasForDecimals": "0"
}]);
JotForm.clearFieldOnHide = "disable";
JotForm.submitError = "jumpToFirstError";

JotForm.init(function() {
    /*INIT-START*/
    if (window.JotForm && JotForm.accessible) $('input_3').setAttribute('tabindex', 0);
    JotForm.setInputTextMasking('input_3', '##');
    if (window.JotForm && JotForm.accessible) $('input_5').setAttribute('tabindex', 0);
    JotForm.alterTexts(undefined);
    /*INIT-END*/
});

JotForm.prepareCalculationsOnTheFly([null, {
    "name": "macrosCalories",
    "qid": "1",
    "text": "Macros, calories",
    "type": "control_head"
}, null, {
    "name": "age",
    "qid": "3",
    "subLabel": "Years",
    "text": "Age",
    "type": "control_textbox"
}, {
    "name": "sex",
    "qid": "4",
    "text": "Sex",
    "type": "control_radio"
}, {
    "name": "heightcm",
    "qid": "5",
    "subLabel": "cm",
    "text": "Height (cm)",
    "type": "control_textbox"
}, {
    "name": "calories",
    "qid": "6",
    "text": "Calories",
    "type": "control_calculation"
}, null, {
    "name": "ltpStyletextalign",
    "qid": "8",
    "text": "Calories {calories} kcal\nProtein {protein} g\nCabrohydrate {carbohydrates} g\nFat {fats13} g\n ",
    "type": "control_text"
}, null, null, {
    "name": "protein",
    "qid": "11",
    "text": "Protein",
    "type": "control_calculation"
}, null, {
    "name": "fats13",
    "qid": "13",
    "text": "Fats",
    "type": "control_calculation"
}, {
    "name": "carbohydrates",
    "qid": "14",
    "text": "Carbohydrates",
    "type": "control_calculation"
}, {
    "name": "xx",
    "qid": "15",
    "text": "xx",
    "type": "control_calculation"
}, null, {
    "name": "activityLevel",
    "qid": "17",
    "text": "Activity level",
    "type": "control_dropdown"
}, {
    "name": "goal",
    "qid": "18",
    "text": "Goal",
    "type": "control_radio"
}, {
    "name": "convertImperical",
    "qid": "19",
    "text": "Convert imperical units to metrical",
    "type": "control_widget"
}]);
setTimeout(function() {
    JotForm.paymentExtrasOnTheFly([null, {
        "name": "macrosCalories",
        "qid": "1",
        "text": "Macros, calories",
        "type": "control_head"
    }, null, {
        "name": "age",
        "qid": "3",
        "subLabel": "Years",
        "text": "Age",
        "type": "control_textbox"
    }, {
        "name": "sex",
        "qid": "4",
        "text": "Sex",
        "type": "control_radio"
    }, {
        "name": "heightcm",
        "qid": "5",
        "subLabel": "cm",
        "text": "Height (cm)",
        "type": "control_textbox"
    }, {
        "name": "calories",
        "qid": "6",
        "text": "Calories",
        "type": "control_calculation"
    }, null, {
        "name": "ltpStyletextalign",
        "qid": "8",
        "text": "Calories {calories} kcal\nProtein {protein} g\nCabrohydrate {carbohydrates} g\nFat {fats13} g\n ",
        "type": "control_text"
    }, null, null, {
        "name": "protein",
        "qid": "11",
        "text": "Protein",
        "type": "control_calculation"
    }, null, {
        "name": "fats13",
        "qid": "13",
        "text": "Fats",
        "type": "control_calculation"
    }, {
        "name": "carbohydrates",
        "qid": "14",
        "text": "Carbohydrates",
        "type": "control_calculation"
    }, {
        "name": "xx",
        "qid": "15",
        "text": "xx",
        "type": "control_calculation"
    }, null, {
        "name": "activityLevel",
        "qid": "17",
        "text": "Activity level",
        "type": "control_dropdown"
    }, {
        "name": "goal",
        "qid": "18",
        "text": "Goal",
        "type": "control_radio"
    }, {
        "name": "convertImperical",
        "qid": "19",
        "text": "Convert imperical units to metrical",
        "type": "control_widget"
    }]);
}, 20);