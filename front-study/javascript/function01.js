
//function 함수

function func01() {
    console.log("func01 호출");
}

func01();

const func02 = function() {
    console.log("func02 호출");
}

func02();
const func03 = () => {
    console.log("func03 호출");
}

func03();
//func303();

const func04 = ()=> {
    console.log("func04 호출");
}


func04();


function func05(a,b) {
    console.log(a + " " + b);
}

func05(10,20);
func05("A", "B");

const func06 = function(a,b) {
    console.log(a + " " + b);
}

func06(20, 30);

const func07 = function func007(a,b) {
    console.log(a + " " + b);
}

func07(50, 60);

const func08  = (x,y)=>{
    consnole.log(x + " " + y);
}
func08(90, 100);