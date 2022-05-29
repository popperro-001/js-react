"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLang: function(plan) {
        let { languages } = plan.skills;
        let str = `Мне ${plan.age} и я владею языками:`;

        for (let value of languages) {
            str += ` ${value.toUpperCase()}`;
        }

        return str;
    }
};


function showExperience(plan) {
    let { exp } = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    let { programmingLangs } = plan.skills;
    let langStr = '';

    if (programmingLangs.length == 0) {
        return langStr;
    }

    for (let key in programmingLangs) {
        langStr += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return langStr.slice(0, langStr.length);
}

console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLang(personalPlanPeter));