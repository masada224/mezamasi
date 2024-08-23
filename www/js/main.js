//値を受け取る
const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('value1');
 document.getElementById("kazu").innerText = value;
console.log('受け取った値:', value);

const date = new Date();
const today = date.getDate();
const currentMonth = date.getMonth();

function createCalendar(month) {
    const monthDays = ["日", "月", "火", "水", "木", "金", "土"];
    let calendarHTML = '<table class="calendar"><thead><tr>';

    for (let i = 0; i < 7; i++) {
        if (i === 0) {
            calendarHTML += `<th class="sun">${monthDays[i]}</th>`;
        } else if (i === 6) {
            calendarHTML += `<th class="sat">${monthDays[i]}</th>`;
        } else {
            calendarHTML += `<th>${monthDays[i]}</th>`;
        }
    }

    calendarHTML += '</tr></thead><tbody>';

    const daysInMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
    const firstDay = new Date(date.getFullYear(), month, 1).getDay();

    const daysInPrevMonth = new Date(date.getFullYear(), month, 0).getDate();

    let dayCount = 1;
    let prevDayCount = daysInPrevMonth - firstDay + 1;

    for (let i = 0; i < 6; i++) {
        calendarHTML += '<tr>';

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                calendarHTML += `<td class="mute">${prevDayCount}</td>`;
                prevDayCount++;
            } else if (dayCount > daysInMonth) {
                let nextMonthDayCount = dayCount - daysInMonth;
                calendarHTML += `<td class="mute">${nextMonthDayCount}</td>`;
                dayCount++;
            } else {
                // 今日の日付にclassを付ける
                if (dayCount === today && month === currentMonth) {
                    calendarHTML += `<td class="today">${dayCount}</td>`;
                } 
                // 日曜日にclassを付ける
                else if (j === 6) {
                    calendarHTML += `<td class="sat">${dayCount}</td>`;
                }
                //土曜日にclassをつける
                else if (j === 0) {
                    calendarHTML += `<td class="off">${dayCount}</td>`;
                } 
                //平日にclassをつける
                else {
                    calendarHTML += `<td class="on">${dayCount}</td>`;
                } 
                dayCount++;
            }
        }

        calendarHTML += '</tr>';

        if (dayCount - daysInMonth > 7) {
            break;
        }
    }

    calendarHTML += '</tbody></table>';

    return calendarHTML;
}

document.getElementById('calendar').innerHTML = createCalendar(currentMonth);

//メニュー用Java
document.querySelector('.hamburger').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.slide-menu').classList.toggle('active');
})

