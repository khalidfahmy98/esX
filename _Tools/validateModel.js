export default function validateModel(rules, values) {
    for (let field in rules) {
        for (let rule of rules[field]) {
            if (typeof rule === "function" && !rule(values[field])) {
                return false;
            }
        }
    }
    return true;
}

export { validateModel };
