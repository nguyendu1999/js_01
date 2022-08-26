// let toan=2;ly=3;hoa=4;
// let diemchung=(toan+ly+hoa)/3;
// console.log( "diem trung binh la: " ,diemchung +"diem");


// let a=2;b=3;c=4;
// let =b**2-4*a*c;
// let bien=(-b+Math.sqrt(b**2-4*a*c))/(2*a);
// console.log(bien);

// let xnha=1;ynha=2;xkmin=3;ykmin=4;
// let d=Math.sqrt(Math.pow(xkmin-xnha,2)+ Math.pow(ykmin-ynha,2));
// let s=Math.ceil(d)*8000;
// console.log("doan duong la: " , d);
// console.log("so tien: ",s +"vnd");

function quangduong(xnha,ynha,xkmin,ykmin){
    let d=Math.sqrt(Math.pow(xkmin-xnha,2)+ Math.pow(ykmin-ynha,2));
    console.log("doan duong la :", d +"km");
}

quangduong (4,5,6,7);