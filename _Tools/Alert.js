function Alert(type, msg, fn = null) {
    if (type === "error") {
        Swal.fire({
            icon: "error",
            title: "خطأ",
            text: msg,
        });
    } else if (type === "success") {
        Swal.fire({
            icon: "success",
            title: "تمت",
            text: msg,
        });
    } else if (type === "confirm") {
        Swal.fire({
            title: "Are you sure?",
            text: msg,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do it!",
        }).then((result) => {
            if (result.isConfirmed && typeof fn === "function") {
                 fn(); // call the delete process function or whatver should it be
            }
        });
    }
}

export default Alert;
