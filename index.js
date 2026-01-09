// Khởi tạo mảng ban đầu
let arr = [10, 20, -30, 40, -50];

// Menu chương trình
let choice = 0;

while (choice !== 9) {
    // Hiển thị menu và nhận lựa chọn từ người dùng
    choice = parseInt(prompt(
        `Chọn chức năng:
        1. Thêm phần tử vào mảng
        2. Xóa phần tử khỏi mảng
        3. Tìm phần tử trong mảng
        4. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần
        5. Sắp xếp mảng theo thứ tự tùy chỉnh (Alphabet hoặc Giá trị tuyệt đối)
        6. Tính tổng các phần tử trong mảng
        7. Tính trung bình cộng của mảng
        8. Hiển thị mảng
        9. Thoát`
    ));

    switch (choice) {
        case 1: // Thêm phần tử vào mảng
            let newElement = parseInt(prompt("Nhập phần tử cần thêm vào mảng:"));
            arr.push(newElement); // Thêm phần tử vào cuối mảng
            alert(`Đã thêm phần tử ${newElement} vào mảng.`);
            break;

        case 2: // Xóa phần tử khỏi mảng
            let removeElement = parseInt(prompt("Nhập phần tử cần xóa khỏi mảng:"));
            let index = arr.indexOf(removeElement); // Tìm vị trí của phần tử trong mảng
            if (index !== -1) {
                arr.splice(index, 1); // Xóa phần tử tại vị trí tìm được
                alert(`Đã xóa phần tử ${removeElement} khỏi mảng.`);
            } else {
                alert(`Không tìm thấy phần tử ${removeElement} trong mảng.`);
            }
            break;

        case 3: // Tìm phần tử trong mảng
            let searchElement = parseInt(prompt("Nhập phần tử cần tìm trong mảng:"));
            if (arr.includes(searchElement)) { // Kiểm tra sự tồn tại của phần tử trong mảng
                alert(`Phần tử ${searchElement} có trong mảng.`);
            } else {
                alert(`Phần tử ${searchElement} không có trong mảng.`);
            }
            break;

        case 4: // Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần
            let sortOrder = prompt("Sắp xếp mảng theo thứ tự nào? (a - tăng dần, d - giảm dần):");
            if (sortOrder === 'a') {
                arr.sort((a, b) => a - b); // Sắp xếp theo thứ tự tăng dần
                alert("Mảng đã được sắp xếp theo thứ tự tăng dần.");
            } else if (sortOrder === 'd') {
                arr.sort((a, b) => b - a); // Sắp xếp theo thứ tự giảm dần
                alert("Mảng đã được sắp xếp theo thứ tự giảm dần.");
            } else {
                alert("Lựa chọn không hợp lệ.");
            }
            break;

        case 5: // Sắp xếp mảng theo thứ tự tùy chỉnh (Alphabet hoặc Giá trị tuyệt đối)
            let customSort = prompt("Sắp xếp mảng theo tiêu chí nào? (a - Alphabet, b - Giá trị tuyệt đối):");
            if (customSort === 'a') {
                arr.sort((a, b) => {
                    if (typeof a === 'string' && typeof b === 'string') {
                        return a.localeCompare(b); // Sắp xếp theo thứ tự chữ cái
                    } else {
                        return 0; // Trả về 0 nếu không phải chuỗi
                    }
                });
                alert("Mảng đã được sắp xếp theo thứ tự chữ cái.");
            } else if (customSort === 'b') {
                arr.sort((a, b) => Math.abs(a) - Math.abs(b)); // Sắp xếp theo giá trị tuyệt đối
                alert("Mảng đã được sắp xếp theo giá trị tuyệt đối.");
            } else {
                alert("Lựa chọn không hợp lệ.");
            }
            break;

        case 6: // Tính tổng các phần tử trong mảng
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i]; // Cộng dồn các phần tử trong mảng
            }
            alert("Tổng các phần tử trong mảng là: " + sum);
            break;

        case 7: // Tính trung bình cộng của mảng
            if (arr.length === 0) {
                alert("Mảng trống, không thể tính trung bình cộng.");
            } else {
                let sumForAverage = 0;
                for (let i = 0; i < arr.length; i++) {
                    sumForAverage += arr[i]; // Cộng dồn các phần tử trong mảng
                }
                let average = sumForAverage / arr.length; // Tính trung bình cộng
                alert("Trung bình cộng của mảng là: " + average);
            }
            break;

        case 8: // Hiển thị mảng
            alert("Mảng hiện tại: " + arr.join(", ")); // Hiển thị tất cả các phần tử trong mảng
            break;

        case 9: // Thoát
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ."); // Thông báo khi người dùng nhập lựa chọn sai
            break;
    }
}
