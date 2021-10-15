function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function saveTable() {
    var tenxe = document.getElementById("tenxe").value;
    var hinhanh = document.getElementById("hinhanh").value;
    var hang = document.getElementById("hang").value;
    var gia = document.getElementById("gia").value;
    var mota = document.getElementById("mota").value;
    var nguoilienhe = document.getElementById("nguoilienhe").value;
    var songuoilienhe = document.getElementById("songuoilienhe").value;
    var email = document.getElementById("email").value;
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
            printError(
                "solienheer",
                "Số người liên hệ không hợp đúng, vui lòng nhập lại"
            );

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
    if (
        tenxe &&
        hinhanh &&
        hang &&
        gia &&
        mota &&
        nguoilienhe &&
        songuoilienhe &&
        email
    ) {
        var tbodyRef = document.getElementById("table");

        var newRow = tbodyRef.insertRow(1);

        var x = tbodyRef.rows.length + 1;

        var Col1 = newRow.insertCell(0);
        var Col2 = newRow.insertCell(1);
        var Col3 = newRow.insertCell(2);
        var Col4 = newRow.insertCell(3);
        var Col5 = newRow.insertCell(4);
        var Col6 = newRow.insertCell(5);
        var Col7 = newRow.insertCell(6);
        var Col8 = newRow.insertCell(7);
        var Col9 = newRow.insertCell(8);

        var img = document.createElement("img");
        img.src = hinhanh;
        img.style = " width: 60px , hight: 40px";

        Col1.appendChild(document.createTextNode(x));
        Col2.appendChild(img);
        Col3.appendChild(document.createTextNode(tenxe));
        Col4.appendChild(document.createTextNode(hang));
        Col5.appendChild(document.createTextNode(gia));
        Col6.appendChild(document.createTextNode(mota));
        Col7.appendChild(document.createTextNode(nguoilienhe));
        Col8.appendChild(document.createTextNode(songuoilienhe));
        Col9.appendChild(document.createTextNode(email));
    }
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
    document.getElementById("myform").reset();
    hienthihang();
}

var table = document.getElementById("table"),
    rIndex;

function hienthihang() {
    var table = document.getElementById("table"),
        rIndex;


    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            rIndex = this.rowIndex;
            console.log(rIndex);

            document.getElementById("hinhanh").value = this.cells[1].innerHTML;
            document.getElementById("tenxe").value = this.cells[2].innerHTML;
            document.getElementById("hang").value = this.cells[3].innerHTML;
            document.getElementById("gia").value = this.cells[4].innerHTML;
            document.getElementById("mota").value = this.cells[5].innerHTML;
            document.getElementById("nguoilienhe").value = this.cells[6].innerHTML;
            document.getElementById("songuoilienhe").value = this.cells[7].innerHTML;
            document.getElementById("email").value = this.cells[8].innerHTML;

        };
    }

}

function search() {
    var search, filter, table, tr, td, i, txtValue;
    search = document.getElementById("search");
    filter = search.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}