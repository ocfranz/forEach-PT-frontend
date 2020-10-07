import React, { useState } from "react";
import PropTypes from "prop-types";

import { SelectStyled, SelectOptionWrapper, SelectOption } from "./styles";
const CustomSelect = ({ list, onSelect }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectOptionIndex, setSelectOptionIndex] = useState(0);
  const handleOnClick = () => {
    setShowOptions(!showOptions);
  };
  const onOptionSelect = (index, typeId) => {
    setSelectOptionIndex(index);
    onSelect(typeId);
  };
  return (
    <SelectStyled onClick={handleOnClick}>
      <span>
        {list[selectOptionIndex] !== undefined
          ? list[selectOptionIndex].name
          : "Selecciona una opcion"}
      </span>
      <SelectOptionWrapper active={showOptions}>
        {list.map((item, index) => {
          return (
            <SelectOption
              key={item._id}
              onClick={() => onOptionSelect(index, item.typeId)}
            >
              {item.name}
            </SelectOption>
          );
        })}
      </SelectOptionWrapper>
    </SelectStyled>
  );
};

CustomSelect.propTypes = {
  list: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CustomSelect;
