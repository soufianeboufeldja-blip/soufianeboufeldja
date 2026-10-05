// Script file for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const cvBtn = document.getElementById('cvBtn');

    if (cvBtn) {
        cvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('يمكنك إضافة رابط السيرة الذاتية الخاص بك هنا لتنزيله بصفة PDF.');
        });
    }

    console.log("الموقع يعمل بنجاح!");
});
