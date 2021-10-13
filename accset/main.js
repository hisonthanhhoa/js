function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function saveTable() {
    var tenxe = document.getElementById('tenxe').value;
    var hinhanh = document.getElementById('hinhanh').value;
    var hang = document.getElementById('hang').value;
    var gia = document.getElementById('gia').value;
    var mota = document.getElementById('mota').value;
    var nguoilienhe = document.getElementById('nguoilienhe').value;
    var songuoilienhe = document.getElementById('songuoilienhe').value;
    var email = document.getElementById('email').value;
    if (tenxe == "") {
        printError("tener", "Vui lòng nhập tên xe");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(tenxe) === false) {
            printError("tener", "Tên Xe không chứa các ký tự này, nhập lại");
        } else {
            printError("tener", "");
            texer = false;
        }
    }
    if (hinhanh == "") {
        printError("imger", "Vui lòng nhập địa chỉ url của ảnh");
    } else {

    }
    if (hang == "") {
        printError("hanger", "Vui lòng chọn hãng xe ");
    } else {
        printError("hanger", "");
        hanger = false;
    }
    if (gia == "") {
        printError("giaer", "Nhập Giá của xe");
    } else {
        // Regular expression for basic email validation
        var regex = /^\d+(?:[.,]\d+)*$/gm;
        if (regex.test(gia) === false) {
            printError("giaer", "Giá không được âm ");
        } else {
            printError("giaer", "");
            giaer = false;
        }
    }
    if (mota == "") {
        printError("motaer", "Nhập vài mô tả cụ thể");
    }
    if (nguoilienhe == "") {
        printError("nguoilienheer", "Vui lòng nhập tên người liên hệ");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(nguoilienhe) === false) {
            printError("nguoilienheer", "Tên người không hợp lệ, vui lòng nhập lại");
        } else {
            printError("nguoilienheer", "");
            nguoilienheer = false;
        }
    }
    if (songuoilienhe == "") {
        printError("solienheer", "Vui lòng nhập số người liên hệ");
    } else {
        var regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
        if (regex.test(songuoilienhe) == false) {
            printError("solienheer", "Số người liên hệ không hợp đúng, vui lòng nhập lại");
        } else {
            printError("solienheer", "");
            solienheer = false;
        }
    }

    if (email == "") {
        printError("emailer", "Nhập địa chỉ email");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailer", "Có vẻ email vẫn sai vui lòng nhập lại");
        } else {
            printError("emailer", "");
            emailer = false;
        }
    }
    if (tenxe && hinhanh && hang && gia && mota & nguoilienhe & songuoilienhe && email) {
        var table = document.getElementById("table");
        var NewRow = table.insertRow(1);
        var x = "";
        var hinhanh = document.getElementById('hinhanh').value;
        var tenxe = document.getElementById('tenxe').value;
        var hang = document.getElementById('hangxe').value;
        var gia = document.getElementById('gia').value;
        var mota = document.getElementById('mota').value;
        var nguoilienhe = document.getElementById('nguoilienhe').value;
        var songuoilienhe = document.getElementById('songuoilienhe').value;
        var email = document.getElementById('email').value;

        var Col1 = NewRow.insertCell(0);
        var Col2 = NewRow.insertCell(1);
        var Col3 = NewRow.insertCell(2);
        var Col4 = NewRow.insertCell(3);
        var Col5 = NewRow.insertCell(4);
        var Col6 = NewRow.insertCell(5);
        var Col7 = NewRow.insertCell(6);
        var Col8 = NewRow.insertCell(7);
        var Col9 = NewRow.insertCell(8);

        Col1.innerHTML = x;
        Col2.innerHTML = hinhanh;
        Col3.innerHTML = tenxe;
        Col4.innerHTML = hang;
        Col5.innerHTML = gia;
        Col6.innerHTML = mota;
        Col7.innerHTML = nguoilienhe;
        Col8.innerHTML = songuoilienhe;
        Col9.innerHTML = email;

        for (var i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[0].innerHTML = i;
        }
        selectedRow();
    }

}