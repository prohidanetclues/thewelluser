"use client";
import React from "react";
import { format } from "date-fns";
import Flatpickr from "react-flatpickr";
import { useSelector } from "react-redux";

export const FlatPickerSelectOnlyDateComponent = ({
  placeholderText = "Select Date",
  className = null,
  value = null,
  onChangeEvent = () => {},
  handleBlur = () => {},
  minDate = null,
  maxDate = null,
  id = null,
  name = null,
  enableSpecificDays = [],
  disableSpecificDays = null,
  isDisabled = false,
}) => {
  const GetGeneralSettingData = useSelector((state) => state.generalSettings);

  const { datePickerDefaultDateFormat } = GetGeneralSettingData.data;

  const handleDateChange = (selectedDates = null) => {
    if (selectedDates.length > 0) {
      const date = format(selectedDates[0], "yyyy-MM-dd");
      onChangeEvent(date);
    } else {
      onChangeEvent(null);
    }
  };

  const enableSpecificDaysFunction = () => {
    if (enableSpecificDays.length > 0) {
      return {
        enable: [
          function (date) {
            return enableSpecificDays.includes(date.getDay());
          },
        ],
      };
    }
    return null;
  };

  const disableSpecificDaysFunction = () => {
    if (disableSpecificDays) {
      return {
        disable: disableSpecificDays,
      };
    }
    return null;
  };
  return (
    <>
      <Flatpickr
        placeholder={placeholderText}
        className={className}
        id={id}
        name={name}
        value={value || null}
        disabled={isDisabled}
        onBlur={handleBlur}
        type="hidden" // Add when AltInput = True
        options={{
          altInput: true,
          altFormat: datePickerDefaultDateFormat, // User-friendly display format
          dateFormat: "Y-m-d", // Internal and callback date format
          minDate: minDate,
          maxDate: maxDate,
          onClose: handleDateChange,
          ...enableSpecificDaysFunction(),
          ...disableSpecificDaysFunction(),
        }}
      />
    </>
  );
};
