const dt = new Date();

// console.log(dt);

console.dir(dt);

const todaytime = dt.getHours();
console.log(todaytime);
const todayminutes = dt.getMinutes();
console.log(todayminutes);


const todayDate = dt.getDate();
console.log(todayDate);

const currentMontH = dt.getMonth();
console.log(currentMontH);

const thisYear = dt.getFullYear();

const currentday = dt.getDay();

console.log(currentday);




const getTheCurrentDay = function(){

    switch(currentday){
    case 1 : return "mon";

    case 2 : return "tue";

    case 3 : return "wed";

    case 4 : return "thu";
    }
}

   todayay = getTheCurrentDay(currentday);
   console.log(todayay);



   const getTheCurrentMonth = function(){

    switch(currentMontH){
    case 1 : return "jan";

    case 2 : return "feb";

    case 3 : return "mar";

    case 4 : return "apr";

    case 5 : return "jan";

    case 6 : return "feb";

    case 7 : return "mar";

    case 8 : return "apr";
    }
}

   todaymonth = getTheCurrentMonth(currentMontH);
   console.log(todaymonth);

   let AM = 'AM';

   
const completeDate = todayay + " " +  todayDate + " " + todaymonth + " " + todaytime + ":" + todayminutes + AM 

console.log(completeDate);



 