function countWord(input) {
    const Words = ['aw', 'aa', 'dd', 'ee', 'ow', 'oo', 'w'];
    let count = 0;
    
    for (let i = 0; i < input.length; i++) {
        // Kiểm tra xem ký tự hiện tại có trong mảng Words không nếu có tăng lên 1
        if (Words.includes(input[i])) {
            count++;
        }
        // Kiểm tra xem cặp ký tự hiện tại và ký tự tiếp theo có tạo thành từ mảng Words không
        // Nếu có tăng conut 1 và bỏ qua ký tự tiếp theo biến i lên 1
        if (i < input.length - 1) {
            const currentWord = input[i] + input[i+1]; // Lấy cặp ký tự
            if (Words.includes(currentWord)) {
                count++;
                i++; // Bỏ qua ký tự tiếp theo
            }
        }
    }
    
    return count;
}

const input = 'hfdawhwhcoomdd';
const result = countWord(input);
console.log("Output:", result);
