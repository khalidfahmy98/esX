const Swap = (obj1, obj2) => {
    for (const key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            // Swap the values
            obj1[key] = obj2[key];
        }
    }
    // console.log(obj1)
};

export default Swap;
