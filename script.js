$(function () {
    calculate();
    $('input').on('change', calculate);
    $('select').on('change', calculate);
});

function calculate() {
    bmi();
    bmr();
    normalWeight();
    normalCarbs();
    normalProtein();
    normalFat();
    normalCalorie();
    normalBurnOff();
    ingredient();
}

function bmi() {
    let weight = $('#weight').val();
    let height = $('#height').val();
    if (weight > 0 && height > 0) {
        height = height / 100;
        let bmi = weight / (height * height);
        $('#bmi').html(bmi.toFixed(1));
    }
}

function bmr() {
    let weight = $('#weight').val();
    let height = $('#height').val();
    let age = $('#age').val();
    let gender = $('select[id="gender"]').val();
    if (weight > 0 && height > 0 && age > 0) {
        let bmr = 0;
        if (gender === '1') {
            // 男
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            // 女
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }
        $('#bmr').html(bmr.toFixed(1));
    }
}

function normalWeight() {
    let weight = $('#weight').val();
    let height = $('#height').val();
    if (weight > 0 && height > 0) {
        height = height / 100;
        let normalWeight = (height * height) * 22;
        let rangeLow = (height * height) * 18.5;
        let rangeHigh = (height * height) * 24;
        let range = '<small>（' + rangeLow.toFixed(1) + '～' + rangeHigh.toFixed(1) +'）</small>';
        $('#normalWeight').html(normalWeight.toFixed(1) + range);
    }
}

function normalCarbs() {
    let weight = $('#weight').val();
    if (weight > 0) {
        let rangeLow = 2 * weight;
        let rangeHigh = 3 * weight;
        let range = rangeLow.toFixed(1) + '～' + rangeHigh.toFixed(1);
        $('#normalCarbs').html(range);
    }
}

function normalProtein() {
    let weight = $('#weight').val();
    if (weight > 0) {
        let rangeLow = 1.5 * weight;
        let rangeHigh = 2.2 * weight;
        let range = rangeLow.toFixed(1) + '～' + rangeHigh.toFixed(1);
        $('#normalProtein').html(range);
    }
}

function normalFat() {
    let weight = $('#weight').val();
    if (weight > 0) {
        let normalFat = 1 * weight;
        $('#normalFat').html(normalFat.toFixed(1));
    }
}

function normalCalorie() {
    let weight = $('#weight').val();
    let carbsIncome = $('#carbsIncome').val();
    let proteinIncome = $('#proteinIncome').val();
    if (weight > 0 && carbsIncome > 0 && proteinIncome > 0) {
        let normalCalorie = carbsIncome * weight * 4 + proteinIncome * weight * 4 + 1 * weight * 9;
        $('#normalCalorie').html(normalCalorie.toFixed(1));
    }
}

function normalBurnOff() {
    let normalCalorie = $('#normalCalorie').html();
    let bmr = $('#bmr').html();
    let calorieDeficit = $('#calorieDeficit').val();
    if (normalCalorie > 0 && bmr > 0 && calorieDeficit > 0) {
        let normalBurnOff = normalCalorie - bmr + calorieDeficit * 1;
        $('#normalBurnOff').html(normalBurnOff.toFixed(1));
    }
}

function ingredient() {
    let amount = $('#amount').val();
    let normalCalorie = $('#normalCalorie').html();
    if (amount > 0 && normalCalorie > 0) {
        let ingredient = normalCalorie / 3 * amount * 3 / 4;
        let x = ingredient / 14.74 * 2;
        let y = x * 4 / 3;
        let z = x / 2;
        if (x > 1000) {
            x = x / 1000;
            x = x.toFixed(0) + 'kg';
        } else {
            x = x.toFixed(0) + 'g';
        }
        if (y > 1000) {
            y = y / 1000;
            y = y.toFixed(0) + 'kg';
        } else {
            y = y.toFixed(0) + 'g';
        }
        if (z > 1000) {
            z = z / 1000;
            z = z.toFixed(0) + 'kg';
        } else {
            z = z.toFixed(0) + 'g';
        }
        $('#chickenBreast').html(x);
        $('#chickenThighs').html(y + '<small>（去皮去骨约' + x + '）</small>');
        $('#mimcedBeef').html(x);
        $('#rice').html(z);
        $('#potato').html(x);
        $('#sweetPotato').html(x);
    }
}