// tạo mãng rỗng để tập hợp các số user nhập
var listNumber = [];



function themSo() {
    //lấy số từ user nhập
    var number = document.getElementById("txtNumber").value * 1;

    // đẩy các số vào mãng
    listNumber.push(number)
    // in mãng ra

    document.getElementById("footer").innerHTML = listNumber;

};
function tongSoDuong() {
    /**
     * tạo biến tích lũy total = 0
     * duyệt mãng và kiểm tra
     * nếu > 0 => true => cộng dồn vào total
     * show kq ra thẻ span
     */
    var total = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            total += listNumber[i]
        }
    }
    var result = "Tổng các số dương là: " + total
    document.getElementById("soDuong").innerHTML = result
};
function demSoDuong() {
    /**
     * tạo biến đếm
     * duyệt mảng và kiểm tra phần tử có phải số dương
     * nếu > 0 => true => tắng biến đếm 1 đv
     * show kq
     */
    var dem = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            dem++
        }
    }
    var result = "Có " + dem + " số dương";
    document.getElementById("demDuong").innerHTML = result;
};
function soNhoNhat() {
    /**
     * cho phần tử đầu tiên là min
     * duyệt mãng từ vị trí i = 1
     * so sánh listNumber[i] < min
     *    => true => min = listNumber[i]
     */
    var min = listNumber[0];
    for (var i = 1; i < listNumber.length; i++) {
        if (min > listNumber[i]) {
            min = listNumber[i]
        }
    }
    var result = "Số nhỏ nhất là: " + min;
    document.getElementById("soNho").innerHTML = result
};
/**
 * tạo mãng rỗng để chứa số dương: arraySoDuong
 * duyệt mãng cũ để lấy số dương => đẩy và mãng mới
 * kiểm tra mãng mới có phần tử hay k? 
 * + nếu có => tìm số nhỏ nhất tương tự bài trên
 * + nếu không=> trả về thông báo k có số dương trong mảng
 */
function soDuongNhoNhat() {
    var arraySoDuong = [];
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            arraySoDuong.push(listNumber[i])
        };
    };
    var min = arraySoDuong[0]
    if (arraySoDuong.length > 0) {
        for (var j = 1; j < arraySoDuong.length; j++) {
            if (min > arraySoDuong[j]) {
                min = arraySoDuong[j]
            };
        };
    } else {
        alert("không cố số dương nào !")
    }
    var result = "Số dương nhỏ nhất là: " + min;
    document.getElementById("soDuongNho").innerHTML = result;
};

function soChanCuoiCung() {
    var soChan = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] % 2 == 0) {
            soChan = listNumber[i]
        }
    }
    var result = "Số chẵn cuối cùng là : " + soChan
    document.getElementById("soChanCuoi").innerHTML = result;
}
function doiViTri (){
    var viTri1 = document.getElementById("viTri1").value * 1;
    var viTri2 = document.getElementById("viTri2").value * 1;
        var giatriVitri1 = listNumber[viTri1]
        var giatriVitri2 = listNumber[viTri2]
        listNumber[viTri1] = giatriVitri2
        listNumber[viTri2] = giatriVitri1
        
        var result = "thứ tự sắp xếp là: " + listNumber
    document.getElementById("sapXepViTri").innerHTML = result
}

function sapXepTangDan() {
    for (var i = 0; i < listNumber.length - 1; i++) {
        for (var j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var tam = listNumber[i]
                listNumber[i] = listNumber[j]
                listNumber[j] = tam
            }
        }
    }
    var result = "thứ thự tăng dần là: " + listNumber
    document.getElementById("tangDan").innerHTML = result;
};


function soNTDauTien() {
    for (var i = 0; i < listNumber.length; i++) {
        //biến cờ hiệu
        var flag = true;
        // nếu listnumber[i] < 2 => k phải là snt
        if (listNumber[i] < 2) {
            flag = false;
            
        } else if (listNumber[i] == 2) {
            flag = true;
        
        } else if (listNumber[i] % 2 == 0) {
            flag = false;
        } else {
            // lập từ  3 tới tới listnumber[i] - 1 với bước nhảy j + 2
            for (j = 3; j < listNumber[i] - 1; j += 2) {
                if (listNumber[i] % j == 0) {
                    flag = false;
                    break;
                }
            }
           
        }
        // kiểm tra flag
        if (flag == true) {
            document.getElementById("soNT").innerHTML = "số nguyên tố đầu tiên là: " + listNumber[i]
            break;
        } else {
            document.getElementById("soNT").innerHTML = "trong dãy k có số nguyên tố"
        }
    }

};

function demSoNguyen (){
    var dem = 0;
    for (var i = 0; i < listNumber.length; i++){
       var num = listNumber[i]
       if (Number.isInteger(num) == true){
        dem++
       }
    }
    var result = "có " + dem + " số nguyên";
    document.getElementById("demSN").innerHTML = result;
};
function soSanhSo (){
    var demSoAm = 0;
    var demSoDuong = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            demSoDuong++
        } else if (listNumber[i] < 0) {
            demSoAm++
        }
    }
    if (demSoAm < demSoDuong) {
        document.getElementById("soSanh").innerHTML = " Số âm < số dương"
    } else if (demSoAm > demSoDuong) {
        document.getElementById("soSanh").innerHTML = " Số âm > số dương"
    } else {
        document.getElementById("soSanh").innerHTML = " Số âm = số dương"
    }
};

 

