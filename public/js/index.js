document.querySelector('#add-time').addEventListener('click', cloneField);

function cloneField() {
  const newFields = document.querySelector('.schedule-item').cloneNode(true);
  document.querySelector('.schedule-items').appendChild(newFields);
  const fields = newFields.querySelectorAll('input');
  fields.forEach((field) => {
    return (field.value = '');
  });
}
