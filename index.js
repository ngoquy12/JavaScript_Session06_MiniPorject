let arr = []; // Mảng dùng chung cho toàn bộ chương trình
let isRunning = true;

while (isRunning) {
  // Hiển thị Menu chức năng
  let choice = prompt(
    "--- MENU QUẢN LÝ MẢNG --- \n" +
      "1. Nhập dãy số (cách nhau bởi dấu phẩy)\n" +
      "2. Hiển thị mảng hiện tại\n" +
      "3. Tìm giá trị lớn nhất (Max) và nhỏ nhất (Min)\n" +
      "4. Tính tổng các phần tử\n" +
      "5. Tìm kiếm phần tử\n" +
      "6. Đảo ngược mảng\n" +
      "7. Thoát chương trình\n\n" +
      "Nhập lựa chọn của bạn (1-7):"
  );

  switch (choice) {
    case "1":
      // Chức năng 1: Nhập dãy số
      let inputString = prompt("Nhập dãy số, ví dụ: 1,2,3,4");
      if (inputString) {
        // Sử dụng phương thức split để chuyển chuỗi thành mảng
        arr = inputString.split(",");
        // Chuyển đổi các phần tử từ chuỗi sang số để tính toán chính xác
        for (let i = 0; i < arr.length; i++) {
          arr[i] = Number(arr[i].trim());
        }
        alert("Đã nhập mảng thành công!");
      }
      break;

    case "2":
      // Chức năng 2: Hiển thị mảng
      if (arr.length === 0) {
        alert("Mảng hiện đang trống.");
      } else {
        let result = "";
        // Sử dụng vòng lặp for...of để duyệt giá trị
        for (let num of arr) {
          result += num + " - ";
        }
        // Cắt bỏ ký tự " - " thừa ở cuối chuỗi
        alert("Mảng hiện tại: " + result.slice(0, -3));
      }
      break;

    case "3":
      // Chức năng 3: Tìm Max/Min (Dùng kỹ thuật lính canh)
      if (arr.length === 0) {
        alert("Mảng trống, không thể tìm Max/Min.");
      } else {
        let max = arr[0];
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) max = arr[i];
          if (arr[i] < min) min = arr[i];
        }
        alert("Giá trị lớn nhất: " + max + "\nGiá trị nhỏ nhất: " + min);
      }
      break;

    case "4":
      // Chức năng 4: Tính tổng
      let sum = 0;
      for (let num of arr) {
        sum += num;
      }
      alert("Tổng các phần tử trong mảng là: " + sum);
      break;

    case "5":
      // Chức năng 5: Tìm kiếm phần tử
      let searchValue = Number(prompt("Nhập số cần tìm vị trí:"));
      let foundIndex = -1;
      // Sử dụng vòng lặp for truyền thống để lấy index
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchValue) {
          foundIndex = i;
          break; // Tìm thấy thì dừng vòng lặp
        }
      }
      if (foundIndex !== -1) {
        alert("Số " + searchValue + " nằm ở vị trí index: " + foundIndex);
      } else {
        alert("Không tìm thấy số " + searchValue + " trong mảng.");
      }
      break;

    case "6":
      // Chức năng 6: Đảo ngược mảng
      if (arr.length === 0) {
        alert("Mảng trống.");
      } else {
        arr.reverse(); // Sử dụng phương thức đảo ngược mảng
        alert("Mảng đã được đảo ngược!");
      }
      break;

    case "7":
      // Chức năng 7: Thoát
      alert("Cảm ơn bạn đã sử dụng chương trình!");
      isRunning = false;
      break;

    default:
      alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 7.");
      break;
  }
}
