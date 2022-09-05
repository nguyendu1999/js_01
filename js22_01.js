console.log("==================");

console.log("bai tap so1")
console.log("\"i love you\"");

console.log("==================");

console.log("bai tap 2:");
function bai2() {
    let a=3;b=2; 
    console.log("cho nhập vào a=3 và b=2, vạy nếu a chia cho b thì bằng bao nhiêu");
    let hieu=a/b;
    console.log("kết quả cuối cùng là: ",hieu);
}
bai2();

console.log("==================");

console.log("bài tập 3:");
function bai3(){
    let a=3;b=2; 
    let tong=a+b;
    console.log("cho nhập vào a=3 và b=2, vạy nếu a cộng cho b thì bằng bao nhiêu.");
    console.log("Kết quả cuối cùng là: ",tong);
}
bai3();

console.log("==================");

console.log("bài tập 4:");
function bai4(){
    let j=32;
    let nhietdo=(5/9*(j-32));
    console.log("Nhập vào 32 , vạy nếu cho công thức C=5/9(F-30) thì kết quả bằng bao nhiêu.");
    console.log("Kết quả cuối cùng là: ",nhietdo);
}
bai4();

console.log("==================");

console.log("bài tập 5:");
function bai5(){
    let x=2; y=4;
    let tongbinhphuong=(x**2+y**2);
    console.log("cho nhâp vào x=2 và y=4, hãy tính tổng bình phương của 2 số nguyên đó.");
    console.log("kết quả cuối cùng là: ",tongbinhphuong);
}
bai5()

console.log("==================");

console.log("bài tập 6:");
function bai6(){
    let x=2;y=4;
    let binhphuong=((x+y)**2);
    console.log("cho nhâp vào x=2 và y=4, hãy tính bình phương tổng của 2 số nguyên đó.");
    console.log("Kết quả cuối cùng là:",binhphuong);
}
bai6();

console.log("==================");

console.log("bài tập 7:");
function bai7(){
    let i=2;m=4;n=16;
    let chiabaso=((i**2*m**2)/n);
    console.log("nhập vào 3 số nguyên i=2, m=4, n=16. Thực hiện phép chia 3 số, và cho biết kết quả");
    console.log("Kết quả cuối cùng là: ",chiabaso);
}
bai7();

console.log("==================");

console.log("bài tập 8:");
function bai8(){
    let toán=10;Lý=7;Hóa=5;Anh=4;
    let tongdiem=(toán+Lý+Hóa+Anh);
    let diemtrungbinh=(tongdiem/4)
    console.log("nhập vào điểm 4 môn học và tính điểm trung bình của các môn đó.");
    console.log("điểm trung bình của học viên là: ",diemtrungbinh);
}
bai8();

console.log("==================");

console.log("bài tập 9:");
function bai9(){
    let f=3;k=0;
    let chiavoikhong=(f/k);
    console.log("Cho phép nhập vào 2 biến dùng để lưu số nguyên: f=3,k=0. Hãy in ra màn hình kết quả phép tính: b/a")
    console.log(chiavoikhong);
}
bai9();

console.log("==================");

console.log("bài tập 10:");
function bai10(){
    let q=3;w=-1;e=-2
    let nghiem=(-(w)+Math.sqrt((w)**2-4*q*e));
    let bac2=(2*q);
    console.log("cho nhập vào 3 số nguyên, hãy tính nghiệm phương trình bậc 2.")
    console.log("Nghiệm bậc 2 của phương trình là: ",nghiem/bac2);
}
bai10();

console.log("==================");

console.log("bài tập 11:");
function bai11(){
    let t=4;o=2;
    let top=(Math.sqrt(t)+Math.abs(t));
    let buttom=(Math.sqrt(t**o));
    let S=(Math.abs(top)/Math.abs(buttom));
    console.log("nhập 2 số nguyên t=4 và o=2. Tìm S.")
    console.log("Kết quả cuối cùng là: ",S);
}
bai11();

console.log("==================");

console.log("bài tập 12:");
function bai12(){
    let mang=[1,2,3,4,5];
    console.log("Cho nhập vào một mảng. In ra màng hình số 5 của mảng")
    console.log(mang[4]);
}
bai12();
