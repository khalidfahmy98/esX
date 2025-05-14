class Getter {
    #names = {};

    GetValues(names) {
        if (Array.isArray(names) && names.length > 0) {
            for (const key of names) {
                const elements = document.getElementsByName(key);
                if (elements.length > 0) {
                    if (
                        $(elements[0]).hasClass("select2") &&
                        elements[0].multiple
                    ) {
                        this.#names[key] = $(elements[0]).val();
                    } else {
                        this.#names[key] = elements[0].value;
                    }
                }
            }
            return this.#names;
        } else {
            console.error(Error("Getter Must be type of array and not empty"));
        }
    }

    GetValue(key) {
        return this.#names[key];
    }
}

export default Getter;
