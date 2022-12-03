const dt = new Date();

console.log(dt);

console.dir(dt);

const todayDate = dt.getDate();

const currentMontH = dt.getMonth();

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

   console.log(getTheCurrentDay(currentday));