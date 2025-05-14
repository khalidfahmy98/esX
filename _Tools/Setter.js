function SetValue(configs) {
    // console.log(configs);
    // console.log(typeof configs);
    if (typeof configs == "object" && configs !== undefined) {
        for (const key in configs) {
            if (document.getElementsByName(key)[0] !== undefined) {
                const input = document.getElementsByName(key)[0];
                // التحقق من أن نوع المدخل ليس checkbox
                if (input.type !== "checkbox") {
                    input.value = configs[key];
                }
            }
        }
    } else {
        console.error(Error("Setter Must be type of object"));
    }
}

export default SetValue;
