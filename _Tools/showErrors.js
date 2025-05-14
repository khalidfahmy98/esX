export default async function ShowErrors(errors) {
    let errorMessages = "";
    for (const field in errors) {
        errorMessages += `${errors[field]}<br>`;
    }

    Swal.fire({
        icon: "error",
        title: "خطأ في البيانات",
        html: errorMessages,
        confirmButtonText: "حسنًا",
    });
}
