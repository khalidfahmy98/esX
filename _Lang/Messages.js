// const locale = document.getElementById("checkLocale").value;
const locale = "en";
const     languages  = {
        activity : {
            en:{
                action_success : "Your Action Successfully Done !",
                action_failure : "Please Review Form Inputs",
                action_request_failure : "Error Happened while requesting to create",
                action_confirm_check : "Are you sure you want to proceed with this action ? ",
            },
            ar :{
                action_success : "تم تنفيذ المعـاملة بنجـاح ",
                action_failure : "نـرجو مـراجعة البيانات لاتمام المعاملة الخـاصة بالنشاط",
                action_request_failure : "حدث خطأ أثناء اتمام معاملة النشـاط  في خوادمنا",
                action_confirm_check : "هل أنت متأكد من متابعة تنفيذ تلك العملية ؟",

            }
        },

    };


export {
    languages,
    locale
}
