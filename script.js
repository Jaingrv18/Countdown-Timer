const daysElement= document.querySelector(".days");
        const hoursElement= document.querySelector(".hours");
        const minutesElement= document.querySelector(".minutes");
        const secondsElement= document.querySelector(".seconds");
        const heading = document.querySelector("h1");
        const counterTimer = document.querySelector(".counterTimer");

        //converting seconds, minutes, hours, days in Millisecond
        const second  = 1000;   //in millisecond
        const minute = 60*second;
        const hour = 60*minute;
        const day = 24*hour;        //all things in milliseconds

        const timerFunc= ()=>{


            //genrating current date
            let now = new Date();
            let dd = String(now.getDate()).padStart(2, "0");
            let mm = String(now.getMonth()+1).padStart(2, "0");
            let yy = now.getFullYear();

            //taking target date from user
            const enterDay = prompt("Enter Day").padStart(2, "0");
            const enterMonth = prompt("Enter Month").padStart(2, "0");

            now = `${mm}/${dd}/${yy}`;
           // console.log(now);
            let target = `${enterMonth}/${enterDay}/${yy}`;
            //checking if targe date is for next year
            if(now>target){
                //console.log(`${enterMonth}/${enterDay}/${yy+1}`);
                target  = `${enterMonth}/${enterDay}/${yy+1}`;
                
            }

           const intervalId =  setInterval(() => {
            //converting target date in Millisecond
            const timer = new Date(target).getTime();
            //Taking current date in Millisecond
            const today = new Date().getTime();

            //Finding Difference target date and today's date
            const differnce = timer-today;

            //finding left days , hours, minutes, seconds
            const leftDay = Math.floor(differnce/day);
            const leftHour = Math.floor((differnce%day)/hour);
            const leftMin = Math.floor((differnce%hour)/minute);
            const leftSec = Math.floor((differnce%minute)/second);

            //showing timer in DOM
            daysElement.innerText  = leftDay;
            hoursElement.innerText = leftHour;
            minutesElement.innerText = leftMin;
            secondsElement.innerText = leftSec;

            //Stop set Interval after reaching target date
            if(differnce<0){
                counterTimer.style.display = "none";
                heading.innerText = "Time,s Up";
                clearInterval(intervalId);
            }

            }, 0);

        };

        timerFunc();
