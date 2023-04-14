(() => {
  const text = document.getElementById("text");
  const btnCheck = document.getElementById("js-btn-check-palindrome");

  if (!text || !btnCheck) return false;

  btnCheck.addEventListener("click", () => {
    // Kiểm tra chuỗi rỗng
    const isEmpty = /^\s*$/.test(text.value);
    // console.log(isEmpty);
    if (isEmpty) {
      alert("Please enter a valid string");
      return false;
    } else {
      const result = palindrome();

      if (result) {
        alert(text.value + " is the palindrome");
      } else {
        alert(text.value + " is not palindrome");
      }
    }
  });

  const palindrome = () => {
    // console.log(text.value);

    // chuyen chuoi thanh chu thuong, loai bo cac ky tu dat biet va khoang trang
    const regex = /[\W_]/g; // bieu thuc tim cac khoang trang, ky tu dat biet
    const str = text.value;
    const cleanStr = str.toLowerCase().replace(regex, ""); // chuyen thanh chu thuong va loai bo ky tu dat biet, khoang trang

    // dung vong lap kiem tra tinh doi xung cua chuoi

    const lenCleanStr = cleanStr.length;
    const lenHalfCleanStr = lenCleanStr / 2;

    for (let i = 0; i < lenHalfCleanStr; i++) {
      if (cleanStr[i] !== cleanStr[lenCleanStr - 1 - i]) return false;
    }

    return true;
  };
})();
