var weekDays;
(function (weekDays) {
    weekDays[weekDays["Monday"] = 0] = "Monday";
    weekDays[weekDays["Tuesday"] = 1] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 2] = "Wednesday";
    weekDays[weekDays["Thursday"] = 3] = "Thursday";
    weekDays[weekDays["Friday"] = 4] = "Friday";
})(weekDays || (weekDays = {}));
for (let i = 0; i < 5; i++) {
    console.log(weekDays[i]);
}
console.log(weekDays[0]);
export {};
//# sourceMappingURL=ep1.js.map