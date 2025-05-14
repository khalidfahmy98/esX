function CustomerRow(customer) {
    const {
        id,
        company_name,
        account_holder_name,
        user_id,
        company_phone_number,
        alternative_phone_number,
        address,
        city_id,
        activity_type_id,
        account_number,
        IBAN,
        bank_name,
        email,
        shipping_account_number,
        created_at,
        city,
        activity_type,
    } = customer || {};

    const createAt = new Date(created_at || Date.now());
    const canEdit = JSON.parse(localStorage.getItem('permissions') || '[]').includes('update customer');
    const canDelete = JSON.parse(localStorage.getItem('permissions') || '[]').includes('destroy customer');

    return `<tr data-id="${id}">
              <td>
                <p class="text-xs font-weight-bold mb-0">${company_name || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${shipping_account_number || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${account_holder_name || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${company_phone_number || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${city?.name || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${activity_type?.name_en || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${email || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${createAt.toDateString()}</p>
              </td>
              <td class="align-middle text-center">
                  ${canEdit ? '<button class="edit-btn edit-action btn btn-xs btn-warning" id="openEdit"><i class="fa fa-edit"></i></button>' : ''}
                  ${canDelete ? '<button class="delete-btn delete-action btn btn-xs btn-danger"><i class="fa fa-times"></i></button>' : ''}
              </td>
            </tr>`;
}
function SupplierRow(supplier) {
    const {
        id,
        company_name,
        account_holder_name,
        user_id,
        company_phone_number,
        alternative_phone_number,
        address,
        city_id,
        activity_type_id,
        account_number,
        IBAN,
        bank_name,
        email,
        shipping_account_number,
        created_at,
        city,
        activity_type,
    } = supplier || {};

    const createAt = new Date(created_at || Date.now());
    const canEdit = JSON.parse(localStorage.getItem('permissions') || '[]').includes('update customer');
    const canDelete = JSON.parse(localStorage.getItem('permissions') || '[]').includes('destroy customer');

    return `<tr data-id="${id}">
              <td>
                <p class="text-xs font-weight-bold mb-0">${company_name || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${shipping_account_number || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${account_holder_name || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${company_phone_number || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${city?.name || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${activity_type?.name_en || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${email || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${createAt.toDateString()}</p>
              </td>
              <td class="align-middle text-center">
                  ${canEdit ? '<button class="edit-btn edit-action btn btn-xs btn-warning" id="openEdit"><i class="fa fa-edit"></i></button>' : ''}
                  ${canDelete ? '<button class="delete-btn delete-action btn btn-xs btn-danger"><i class="fa fa-times"></i></button>' : ''}
              </td>
            </tr>`;
}
function DriverRow(driver) {
    const {
        id,
        name,
        license_number,
        car_number,
        phone_1,
        phone_2,
        branch,
        gender,
        nationality,
        age,
        email,
        shipping_account_id,
        created_at,
    } = driver || {};

    const createAt = new Date(created_at || Date.now());
    const canEdit = JSON.parse(localStorage.getItem('permissions') || '[]').includes('update driver');
    const canDelete = JSON.parse(localStorage.getItem('permissions') || '[]').includes('destroy driver');

    return `<tr data-id="${id}">
              <td>
                <p class="text-xs font-weight-bold mb-0">${name || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${shipping_account_id || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${branch?.name_ar || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${license_number || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${car_number || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${phone_1 || 'not found'} ${phone_2 || 'not found'}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${email || 'not found'}</p>
              </td>
              <td class="align-middle text-center">
                  ${canEdit ? '<button class="edit-btn edit-action btn btn-xs btn-warning" id="openEdit"><i class="fa fa-edit"></i></button>' : ''}
                  ${canDelete ? '<button class="delete-btn delete-action btn btn-xs btn-danger"><i class="fa fa-times"></i></button>' : ''}
              </td>
            </tr>`;
}
function ActivityTypeRow(ActivityType) {
    const { id, name_en, name_ar, description, status, user_id } = ActivityType;
    const canEdit = JSON.parse(localStorage.getItem('permissions')).includes('update activitytype');
    const canDelete = JSON.parse(localStorage.getItem('permissions')).includes('destroy activitytype');
    return `<tr data-id="${id}">
    <td> <p class="text-xs font-weight-bold mb-0" data-name="name_en" >${name_en || 'not found'}</p> </td>
     <td> <p class="text-xs font-weight-bold mb-0" data-name="name_ar" >${name_ar || 'not found'}</p> </td>
      <td> <p class="text-xs font-weight-bold mb-0" data-name="description" >${description || 'not found'}</p> </td>
      <td> <p class="text-xs font-weight-bold mb-0" data-name="status">${status || 'not found'}</p> </td>
      <td class="align-middle text-center"> ${canEdit ? '<button class="edit-btn edit-action btn btn-xs btn-warning" id="openEdit"><i class="fa fa-edit"></i></button>' : ''}
      ${canDelete ? '<button class="delete-btn delete-action btn btn-xs btn-danger"><i class="fa fa-times"></i></button>' : ''} </td> </tr>`;
}
function ServiceTypeRow(ServiceType) {
    const { id, name_en, name_ar, description, status, user_id } = ServiceType;
    const canEdit = JSON.parse(localStorage.getItem('permissions')).includes('update servicetype');
    const canDelete = JSON.parse(localStorage.getItem('permissions')).includes('destroy servicetype');
    return `<tr data-id="${id}">
              <td>
                <p class="text-xs font-weight-bold mb-0">${name_en}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${name_ar}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${description}</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">${status}</p>
              </td>
              <td class="align-middle text-center">
                       ${canEdit ? '<button class="edit-btn edit-action btn btn-xs btn-warning" id="openEdit"><i class="fa fa-edit"></i></button>' : ''}
                       ${canDelete ? '<button class="delete-btn delete-action btn btn-xs btn-danger"><i class="fa fa-times"></i></button>' : ''}
              </td>
            </tr>`;
}

export { CustomerRow , SupplierRow  , DriverRow , ActivityTypeRow , ServiceTypeRow};
