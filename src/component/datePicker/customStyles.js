export const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '100%',
  }),

  control: (provided) => ({ // стилі для контейнеру інпуту-селекту
    ...provided,
    height: 50,
    width: '100%',
    border: '1px solid #000000',
    borderRadius: 30,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': {
      border: '1px solid #000000',
      boxShadow: 'none',
    },
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    paddingRight: '20px',
  }),

  indicatorSeparator: () => ({ display: 'none' }),

  // input,

  // loadingIndicator,
  
  menu: (provided) => ({  // стилі для контейнеру меню, що відкривається
    ...provided,
    background: 'rgba(255, 255, 255, 0.7)',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
    backdropFilter: 'blur(5px)',
    borderRadius: 20,
    overflow: 'hidden',
  }),

  // menuList,

  option: (provided, { isFocused, isSelected }) => ({   // стилі для кожної строки списку
    ...provided,
    borderTop: '1px solid rgba(218, 212, 212, 0.3)',
    borderBottom: '1px solid rgba(218, 212, 212, 0.3)',
    background: isFocused || isSelected ? 'rgba(218, 212, 212, 0.3)' : 'transparent',
    color: isFocused || isSelected ? '#4A56E2' : '#000000',
    cursor: 'pointer',
    padding: '14px 20px',
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: 'Circe, sans-serif',
    textTransform: 'capitalize',
  }),

  placeholder: (provided) => ({
    ...provided,
    color: '#000000',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  }),

  singleValue: (provided, {placeholder}) => ({
    ...provided,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#4A56E2',
  }),

  valueContainer: (provided) => ({    // стилі для значення в інпуті-селекті
    ...provided,
    padding: '0 0 0 20px',
    textTransform: 'capitalize',
  }),
}
