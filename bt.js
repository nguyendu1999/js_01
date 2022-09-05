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

// function quangduong(xnha,ynha,xkmin,ykmin){
//     let d=Math.sqrt(Math.pow(xkmin-xnha,2)+ Math.pow(ykmin-ynha,2));
//     let s=Math.ceil(quangduong)*8000;
//     console.log("doan duong la :", d +"km");
//     console.log("Tong tien cua ban la :", s +"Vnd");
// }

// quangduong (4,5,6,7);

// function tentuoi (){
//     let d="Nguyen Du";
//     let e="23";
//     console.log("toi ten" , d , "toi", e ,"tuoi");
// }

// tentuoi();
 
// function tinhdungsai(sochan){
//     if(sochan %2==0){
//         console.log(sochan,"Day la so chan");
//     }
//     else{
//         console.log(sochan,"day la so le");
//     }
// }

// tinhdungsai(4);
// tinhdungsai(5);
// tinhdungsai(29934);

// function kiemtranamnhuan(yeah){
//     if(yeah % 100==0){
//         if(yeah %400==0){
//             console.log(yeah , ":" ,"la nam nhaun");
//         }
//         else{
//             console.log(yeah , ":" ,"Khong phai nam nhuan");
//         }
//     }
//     else if(yeah % 4==0){
//         console.log(yeah ,":" ,"la nam nhuan");
//     }
//     else{
//         console.log(yeah , ":" ,"khong phai nam nhuan");
//     }
// }

// kiemtranamnhuan(1999);

// function khiemtranamnhuanhaykhong(yeah){
//     if(yeah % 100==0){
//         if (yeah % 400==0){
//             return true ;
//         }
//         else{
//             return false ;
//         }
//     }
//     else if (yeah % 4==0){
//         return true ;
//     }
//     else{
//         return flase ;
//     }
// }

// let tex=khiemtranamnhuanhaykhong(2010);

// if(tex){
//     console.log(tex ,": la nam nhuan");
// }
// else{
//     console.log(tex ,": khong phai nam nhuan");
// }

// console.log("tính diện tích")
// function dientich(chieudai,chieurong){
//     let tongdientich=chieudai*chieurong;
//     return tongdientich;
// }
// let dtnhapho=dientich(4,6);
// let dtmattien=dientich(5,7);

// let tongdt=dtnhapho+dtmattien;
// console.log("Tổng diện tích là: "+tongdt+"metVuong");

// console.log("kiểu dữ liệu object :thường dùng ở những đối tượng mang nhiều thuộc tính");
// let student={
//     name:"Nguyễn Du",
//     age:23 ,
//     Sothich: "đàn"
// };
 
// console.log("tui tên là: " ,student.name+"\ntui năm nay: ",student.age + "\n tui thích chơi:",student.Sothich);


let danhsachvieccanlam=[
    "luyện công","luyện thanh","luyện đàn"
];

console.log(danhsachvieccanlam[0]+"\n"+danhsachvieccanlam[1]+"\n"+danhsachvieccanlam[2]);
console.log("số lượng phần tử: " +danhsachvieccanlam.length);