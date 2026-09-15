function calculateInstallment() {
    
    const carPrice = parseFloat(document.getElementById('carPrice').value);
    const downPayment = parseFloat(document.getElementById('downPayment').value);
    const loanTermMonths = parseInt(document.getElementById('loanTerm').value); 

    if (isNaN(carPrice) || isNaN(downPayment) || isNaN(loanTermMonths)) {
        alert("يرجى إدخال جميع البيانات المطلوبة بشكل صحيح!");
        return;
    }

    if (downPayment >= carPrice) {
        alert("يجب أن تكون قيمة المقدم أقل من سعر السيارة!");
        return;
    }

    const remainingValue = carPrice - downPayment;

    
    const years = loanTermMonths / 12;
    let interestRate = 0;

    switch (years) {
        case 1:
            interestRate = 0.10; // 10%
            break;
        case 2:
            interestRate = 0.19; // 19%
            break;
        case 3:
            interestRate = 0.32; // 32%
            break;
        case 4:
            interestRate = 0.45; // 45%
            break;
        case 5:
            interestRate = 0.51; // 51%
            break;
        case 7:
            interestRate = 0.79; // 79%
            break;
        default:
            interestRate = 0.10; // قيمة افتراضية
    }

 
    const interestValue = remainingValue * interestRate;

    const totalInstallments = remainingValue + interestValue;

   
    const monthlyInstallment = totalInstallments / loanTermMonths;

    
    document.getElementById('interestOutput').textContent = (interestRate * 100) + "%";
    document.getElementById('monthlyOutput').textContent = monthlyInstallment.toLocaleString('ar-EG', { maximumFractionDigits: 2 }) + " ج.م";
}