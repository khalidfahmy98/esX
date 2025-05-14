// استخدام القواعد للتحقق
export default function validateModel(rules, values) {
    for (let field in rules) {
        for (let rule of rules[field]) {
            if (typeof rule === "function" && !rule(values[field])) {
                return false;
            }
            // إضافة تحقق إضافي حسب الحاجة
        }
    }
    return true;
}

export { validateModel };
