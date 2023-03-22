import Form from 'react-bootstrap/Form';

const CustomSelectBox = ({label, optionItems, setRef, onBlurHandler}) => {
  return (
    <Form.Select aria-label="Default select example" ref={setRef} onBlur={(e) => onBlurHandler("", e)}>
      <option value="">{label}</option>
      {optionItems.length && optionItems.map((item, index) => (
        <option key={index} value={item.value}>{item.label}</option>
      )
      )}
    </Form.Select>
  );
}

export default CustomSelectBox;