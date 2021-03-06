const subjects = [
    "Artes",
    "Biologia",
    "Ciencias",
    "Educacao Fisica",
    "Fisica",
    "Geografia",
    "Historia",
    "Matematica",
    "Portuguese",
    "Quimica",
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terca-Feira",
    "Quarta-Feira",
    "Quimica-Feira",
    "Sexta-Feira",
    "Sabado",
]

//funcionalidades

function getSubject(subjectNumber){
    const position= +subjectNumber - 1
    return subjects[position]
}

function convertHourstoMinutes(time){
    const [hour, minutes] = time.split(":")
    return Number((hour *60)+ minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHourstoMinutes
}