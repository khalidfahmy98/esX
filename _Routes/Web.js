class Web{

    #_routes;
    #_routeGroups = {
        // you can define here a specific object for your route group to be shared normally seperated not all routes
        // to reduce the latency of retrieving.
        tax: {
            list: "/accounts/taxes-list",
            create: "/accounts/new-ajax-taxes",
            delete: "/accounts/taxes-destroy",
            update: "/accounts/taxes-update",
        },
        branch: {
            list: "/accounts/branches-list",
            create: "/accounts/branches-store",
            delete: "/accounts/branches-delete",
            update: "/accounts/branches-update",
        },
        cashboxURL: {
            list: "/accounts/cashboxes-list",
            create: "/accounts/cashboxes-store",
            delete: "/accounts/cashboxes-delete",
            update: "/accounts/cashboxes-update",
        },

        quoteRequest: {
            list: "/accounts/quote-requests-list",
            create: "/accounts/quote-requests-store",
            delete: "/accounts/quote-requests-delete",
            update: "/accounts/quote-requests-update",
            updateStatus: "/accounts/quote-requests-update-status",
        },
        permission: {
            list: "/accounts/permission-list",
            create: "/accounts/permission-add",
            delete: "/accounts/permission-delete",
            update: "/accounts/permission-update",
        },
        quotationURL: {
            list: "/accounts/quotations-list",
            create: "/accounts/quotations-store",
            delete: "/accounts/quotations-delete",
            updateStatus: "/accounts/quotations-updateStatus",
            update: "/accounts/quotations-update",
        },
        transactionURL : {
            list: "/accounts/transactions-list",
            create: "/accounts/transactions-store",
            delete: "/accounts/transactions-delete",
            update: "/accounts/transactions-update",
        },
        ledgerURL: {
            list: "/accounts/ledger-list", // Route for fetching all ledger entries
            create: "/accounts/ledger-store", // Route for creating a new ledger entry
            delete: "/accounts/ledger-delete", // Route for deleting a ledger entry
            update: "/accounts/ledger-update", // Route for updating an existing ledger entry
        },

        serviceTypeURL: {
            list: "/accounts/service-types-list",
            create: "/accounts/service-types-store",
            delete: "/accounts/service-types-delete",
            update: "/accounts/service-types-update",
        },
        activityTypeURL: {
            list: "/accounts/activity-types-list",
            create: "/accounts/activity-types-store",
            delete: "/accounts/activity-types-delete",
            update: "/accounts/activity-types-update",
        },
        driverURL: {
            list: "/accounts/drivers-list",
            create: "/accounts/drivers-store",
            delete: "/accounts/drivers-delete",
            update: "/accounts/drivers-update",
        },
        roleURL: {
            list: "/accounts/roles-list",
            create: "/accounts/roles-store",
            delete: "/accounts/roles-delete",
            update: "/accounts/roles-update",
        },
        userURL: {
            list: "/accounts/users-list",
            create: "/accounts/users-store",
            delete: "/accounts/users-delete",
            update: "/accounts/users-update",
        },
        customerURL: {
            list: "/accounts/customers-list",
            create: "/accounts/customers-store",
            delete: "/accounts/customers-delete",
            update: "/accounts/customers-update",
        },
        supplierURL: {
            list: "/accounts/suppliers-list",
            create: "/accounts/suppliers-store",
            delete: "/accounts/suppliers-delete",
            update: "/accounts/suppliers-update",
        },
        shipmentURL: {
            create : "/accounts/shipments-create",
            list: "/accounts/shipments-list",
            delete: "/accounts/shipments-delete",
        },
        FreeshipmentURL: {
            create : "/accounts/free-shipments-create",
            list: "/accounts/free-shipments-list",
            update: "/accounts/free-shipments-update",
            delete: "/accounts/free-shipments-delete",
        },
        lastmileFeesURL: {
            list: "/accounts/lastmile-list",
            create: "/accounts/lastmile-store",
            delete: "/accounts/lastmile-delete",
            SetDefault : "/accounts/lastmile-default",
            CancelDefault : "/accounts/lastmile-cancel-default",
            PrimaryDefaultLastmileFee : "/accounts/lastmile-primary-default",

        },
        fulfillmentFeesURL: {
            list: "/accounts/fulfillment-list",
            create: "/accounts/fulfillment-store",
            delete: "/accounts/fulfillment-delete",
            // update  : "/fulfillement-update",
        },
        cityURL: {
            list: "/accounts/cities-list",
            create: "/accounts/cities-store",
            delete: "/accounts/cities-delete",
            update: "/accounts/cities-update",
        },
        countryURL: {
            list: "/accounts/countries-list",
            create: "/accounts/countries-store",
            delete: "/accounts/countries-delete",
            update: "/accounts/countries-update",
        },
        shipmentBillingURL: {
            list: "/accounts/shipmentbilling-list",
            create: "/accounts/shipmentbilling-store",
            delete: "/accounts/shipmentbilling-delete",
            update: "/accounts/shipmentbilling-update",
        },
        packagingChargeURL:{
            list: "/accounts/packagingcharge-list",
            create: "/accounts/packagingcharge-store",
            delete: "/accounts/packagingcharge-delete",
            update: "/accounts/packagingcharge-update",
        },
        receivingChargeURL:{
            list: "/accounts/receivinrcharge-list",
            create: "/accounts/receivinrcharge-store",
            delete: "/accounts/receivinrcharge-delete",
            update: "/accounts/receivinrcharge-update",
        },
        invoiceURL: {
            list: "/accounts/invoices-list",
            delete: "/accounts/invoices-delete",
            export: "/accounts/invoices-export-excel",
        },
        dailyStorageCostURL: {
            list: "/accounts/daily-storage-costs-list",
            listfilter: "/accounts/daily-storage-costs-listfilter",
            delete: "/accounts/daily-storage-costs-delete",
            export: "/accounts/daily-storage-costs-export-excel",
        },
        tracingSkuURL:{
            list: "/accounts/tracingsku-list",
            delete: "/accounts/tracingsku-delete",
        },

        returnSettingURL: {
            list: "/accounts/returnpercentage-list",
            create: "/accounts/returnpercentage-store",
            delete: "/accounts/returnpercentage-delete",
            update: "/accounts/returnpercentage-update",
        },

        financialAccountURL: {
            list: "/accounts/financial-accounts-list",
            create: "/accounts/financial-accounts-store",
            delete: "/accounts/financial-accounts-delete",
            update: "/accounts/financial-accounts-update",
        },

        receiptAnaylsisURL: {
            list: "/accounts/receipt-anaylsis-list",

        },
        paymentAnalysisURL: {
            list: "/accounts/payment-analysis-list",
        },

        adminURL:{
            list: "/admin/admin-list",
            create: "/admin/admin-store",
            delete: "/admin/admin-delete",
            update: "/admin/admin-update",
        },
        companyURL:{
            list: "/admin/company-list",
            create: "/admin/company-store",
            delete: "/admin/company-delete",
            update: "/admin/company-update",
        },
        AdminRoleURL:{
            list: "/admin/roles-list",
            create: "/admin/roles-store",
            delete: "/admin/roles-delete",
            update: "/admin/roles-update",
        },
        shipmentReportURL:{
            list: "/admin/shipments-report-list",
            listAccountShipments:"/admin/shipments-report-accountshipments_list",
        },
        AdminSubscriptionURL:{
            list: "/admin/subscribtion-list",
            create: "/admin/subscribtion-store",
            delete: "/admin/subscribtion-delete",
            update: "/admin/subscribtion-update",
        },
        LeadsURL:{
            list: "/accounts/leads-list",
            create: "/accounts/leads-store",
            delete: "/accounts/leads-delete",
            update: "/accounts/leads-update",
            toggle_status : "/accounts/leads-status",
        },
        LeadsCommentsUrl:{
            list: "/accounts/comments-list",
            create: "/accounts/comments-store",
        },
        LeadsNotesUrl:{
            list: "/accounts/notes-list",
            create: "/accounts/notes-store",
        },
        ContactInfoURL: {
            list: "/admin/contacts-list",
            create: "/admin/contacts-store",
            delete: "/admin/contacts-delete",
            update: "/admin/contacts-update",
        },
        SocialURL: {
            list: "/admin/socials-list",
            create: "/admin/socials-store",
            delete: "/admin/socials-delete",
            update: "/admin/socials-update",
        },
        SiteHeadingURL : {
            list: "/admin/heading-list",
            create: "/admin/heading-store",
            delete: "/admin/heading-delete",
            update: "/admin/heading-update",
        },
        SiteChildrenURL : {
            list: "/admin/children-list",
            create: "/admin/children-store",
            delete: "/admin/children-delete",
            update: "/admin/children-update",
        }
        // .. etc groups
    };

    constructor() {
        this.#_routes = this.#_routeGroups;
    }
    //fetching all routes available or registered
    GetAllRoutes(){
        return this.#_routes;
    }
    // by using this function you can get route group based on object key name
    GetRoutesGroup(RouteGroup){
        return this.#_routeGroups[RouteGroup];
    }


}
export  {
    Web
}
