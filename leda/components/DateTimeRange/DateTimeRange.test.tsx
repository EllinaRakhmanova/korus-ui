import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { DateTimeRange } from './index';
import { MonthsNames, WeekDayNames } from '../../src/Calendar/types';

const validName = 'test';
const validFormat = 'dd.MM.yyyy hh:mm';
const invalidFormat = 'yyyy-MM-dd hh:mm';
const validValue = '15.05.2020 10:10';
const invalidValue = '2010-10-10 10:10';
const customMonthNames: MonthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const customShortMonthNames: MonthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const customWeekDayNames: WeekDayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const customShortWeekDayNames: WeekDayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

/**
 * ВВ
 * Также как и в DateRange выводить предупреждения
 * Выводит сам компонет. На работу не влияет
 */

describe('DateTimeRange snapshots collection', () => {
  test('is DateTimeRange render right?', () => {
    const { container } = render(<DateTimeRange name={validName} />);

    expect(container.firstChild)
      .toMatchSnapshot();
  });
});
describe('DateTimeRange attributes test collection', () => {
  test('is DateTimeRange placeholder set right?', () => {
    const placeholder = ['от', 'до'];
    const { getAllByRole } = render(<DateTimeRange placeholder={['от', 'до']} />);

    expect(getAllByRole('textbox'))
      .toHaveLength(2);

    getAllByRole('textbox').forEach((input, index) => {
      expect(input)
        .toHaveAttribute('placeholder');

      expect(input)
        .toHaveProperty('placeholder', placeholder[index]);
    });
  });
  test('is DateTimeRange work right with minMax attributes?', () => {
    const min = new Date('01.02.2018 10:10');
    const max = new Date('05.25.2020 10:10');// mm-dd-YYYY
    const valueForCheck = '26';
    const { getAllByText } = render(<DateTimeRange value={['25.05.2020 10:10', '25.05.2020 10:10']} isOpen min={min} max={max} />);

    getAllByText(valueForCheck).forEach((el) => {
      expect(el)
        .toHaveClass('calendar-date-cell disabled-date');
    });
  });
  test('is DateTimeRange work right with isDisabled attributes?', () => {
    const onChange = jest.fn();
    const { container } = render(<DateTimeRange isDisabled value={['15.05.2020 10:10', '25.05.2020 10:10']} onChange={onChange} />);
    const iconA = container.querySelectorAll('.datepicker-icons-wrapper')[0];
    const iconB = container.querySelectorAll('.datepicker-icons-wrapper')[1];
    const inputA = container.querySelectorAll('input.datepicker-input')[0];
    const inputB = container.querySelectorAll('input.datepicker-input')[1];

    fireEvent.click(iconA);

    expect(inputA)
      .toHaveAttribute('disabled');

    fireEvent.click(iconB);

    expect(inputB)
      .toHaveAttribute('disabled');

    expect(onChange)
      .toHaveBeenCalledTimes(0);
  });
  test('is DateTimeRange work right with isOpen attributes?', () => {
    const onChange = jest.fn();
    const { container, rerender } = render(<DateTimeRange isOpen value={['15.05.2020', '25.05.2020']} onChange={onChange} />);
    const iconA = container.querySelectorAll('.datepicker-icons-wrapper')[0];
    const inputA = container.querySelectorAll('input.datepicker-input')[0];
    const popupA = container.querySelectorAll('.calendar-wrapper.visible')[0];
    const iconB = container.querySelectorAll('.datepicker-icons-wrapper')[1];
    const inputB = container.querySelectorAll('input.datepicker-input')[1];
    const popupB = container.querySelectorAll('.calendar-wrapper.visible')[1];

    expect(iconA)
      .toBeInTheDocument();

    expect(iconB)
      .toBeInTheDocument();

    expect(inputA)
      .toBeInTheDocument();

    expect(inputB)
      .toBeInTheDocument();

    expect(popupA)
      .toBeInTheDocument();

    expect(popupB)
      .toBeInTheDocument();

    rerender(<DateTimeRange value={['05.05.2020', '25.05.2020']} onChange={onChange} />);

    expect(container.querySelectorAll('.calendar-wrapper.visible')[0])
      .not
      .toBeDefined();

    expect(container.querySelectorAll('.calendar-wrapper.visible')[1])
      .not
      .toBeDefined();
  });
  test('is DateTimeRange work right with date format input?', () => {
    const onChange = jest.fn();
    const { container, rerender } = render(<DateTimeRange format={validFormat} value={['15.05.2020 10:10', '15.05.2020 10:10']} onChange={onChange} />);
    const inputA = container.querySelectorAll('input.datepicker-input')[0];
    const inputB = container.querySelectorAll('input.datepicker-input')[1];

    expect(inputA)
      .toHaveValue(validValue);

    expect(inputB)
      .toHaveValue(validValue);

    rerender(<DateTimeRange format={invalidFormat} value={['2010-10-10 10:10', '2010-10-10 10:10']} onChange={onChange} />);

    expect(inputA)
      .toHaveValue(invalidValue);

    expect(inputB)
      .toHaveValue(invalidValue);
  });
  test('is DateTimeRange working right with monthNames attribute?', () => {
    const date = new Date();
    const currentMonth = date.getMonth();
    const { container } = render(<DateTimeRange monthNames={customMonthNames} isOpen />);
    const calendar = container.querySelectorAll('.calendar-wrapper.visible')[0];
    const title = container.querySelector('.calendar-title');
    const titleMonth = title?.textContent?.split(' ')[0];

    expect(calendar)
      .toBeInTheDocument();

    expect(title)
      .toBeInTheDocument();

    expect(customMonthNames).toContain(titleMonth);

    expect(titleMonth).toBe(customMonthNames[currentMonth]);
  });
  test('is DateTimeRange working right with shortMonthNames attribute?', () => {
    const { container } = render(<DateTimeRange shortMonthNames={customShortMonthNames} isOpen />);
    const calendar = container.querySelectorAll('.calendar-wrapper.visible')[0];
    const title = calendar.querySelector('.calendar-title');

    fireEvent.click(title as Element);

    const monthCells = container.querySelectorAll('.calendar-month-year-cell');

    customShortMonthNames.forEach((monthName, index) => {
      expect(monthCells[index])
        .toBeInTheDocument();

      expect(monthCells[index].textContent)
        .toBe(monthName);
    });
  });
  test('is DateTimeRange working right with weekDayNames attribute?', () => {
    const { container } = render(<DateTimeRange weekDayNames={customWeekDayNames} isOpen />);
    const calendar = container.querySelectorAll('.calendar-wrapper.visible')[0];
    const weekDaysRow = calendar.querySelector('.calendar-week-days');
    const weekDaysCells = weekDaysRow?.querySelectorAll('.calendar-date-cell') as NodeListOf<Element>;

    customWeekDayNames.forEach((weekDayName, index) => {
      expect(weekDaysCells[index])
        .toBeInTheDocument();

      expect(weekDaysCells[index].getAttribute('title'))
        .toBe(weekDayName);
    });
  });
  test('is DateTimeRange working right with shortWeekDayNames attribute?', () => {
    const { container } = render(<DateTimeRange shortWeekDayNames={customShortWeekDayNames} isOpen />);
    const calendar = container.querySelectorAll('.calendar-wrapper.visible')[0];
    const weekDaysRow = calendar.querySelector('.calendar-week-days');
    const weekDaysCells = weekDaysRow?.querySelectorAll('.calendar-date-cell') as NodeListOf<Element>;

    customShortWeekDayNames.forEach((weekDayName, index) => {
      expect(weekDaysCells[index])
        .toBeInTheDocument();

      expect(weekDaysCells[index].textContent)
        .toBe(weekDayName);
    });
  });
});
describe('DateTimeRange event listeners test collection', () => {
  test('is DateTimeRange work right with onBlur event listener?', () => {
    const validDate = '05-05-2020 10:10';
    const validDateFormat = 'dd-MM-yyyy hh:mm';
    const onBlur = jest.fn();
    const { container } = render(<DateTimeRange name={validName} format={validDateFormat} value={['05-05-2020 10:10', '06-05-2020 10:10']} onBlur={onBlur} />);
    const input = container.querySelectorAll('input.datepicker-input')[0];

    fireEvent.blur(input);

    expect(input)
      .not
      .toHaveFocus();

    expect(onBlur)
      .toBeCalledTimes(1);

    expect(onBlur)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: 'test-from', // from First datePicker input [from, to]
          value: validDate,
        }),
      }));
  });
  test('is DateTimeRange work right with onChange event listener?', () => {
    const validValueA = '11.10.2010 10:10';
    const validValueB = '11.11.2010 10:10';
    const onChange = jest.fn();
    const { container } = render(<DateTimeRange format={validFormat} value={['10.10.2010 10:10', '10.10.2020 10:10']} name={validName} onChange={onChange} />);
    const inputA = container.querySelectorAll('input.datepicker-input')[0];
    const inputB = container.querySelectorAll('input.datepicker-input')[1];

    fireEvent.change(inputA, validValueA);

    userEvent.type(inputA, validValueA);

    expect(onChange)
      .toBeCalled();

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
        }),
      }));

    userEvent.type(inputB, validValueB);

    expect(onChange)
      .toBeCalled();

    expect(onChange)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: validName,
        }),
      }));
  });
  test('is DateTimeRange work right with onPressEnter event listener?', () => {
    const onEnterPress = jest.fn();
    const { container } = render(<DateTimeRange name={validName} value={['10.10.2010 10:10', '10.10.2020 10:10']} onEnterPress={onEnterPress} />);
    const inputA = container.querySelectorAll('input.datepicker-input')[0];
    const inputB = container.querySelectorAll('input.datepicker-input')[1];

    fireEvent.keyDown(inputA, {
      charCode: 13,
      code: 13,
      key: 'Enter',
      keyCode: 13,
    });

    fireEvent.keyDown(inputB, {
      charCode: 13,
      code: 13,
      key: 'Enter',
      keyCode: 13,
    });

    expect(onEnterPress)
      .toBeCalled();

    expect(onEnterPress)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: 'test-to',
          value: '10.10.2020 10:10',
        }),
      }));
  });
  test('is DateTimeRange work right with onFocus event listener?', () => {
    const onFocus = jest.fn();
    const { container } = render(<DateTimeRange name={validName} value={['10.10.2010 10:10', '10.10.2020 10:10']} onFocus={onFocus} />);
    const input = container.querySelectorAll('input.datepicker-input')[0];

    fireEvent.focus(input);

    expect(onFocus)
      .toHaveBeenCalled();

    expect(onFocus)
      .lastCalledWith(expect.objectContaining({
        component: expect.objectContaining({
          name: 'test-from',
          value: '10.10.2010 10:10',
        }),
      }));
  });
});
describe('DateTimeRange quality test collection', () => {
  test('is DateTimeRange render right if value set as String', () => {
    const dateValue = ['10.10.2010 10:10', '12.12.2010 10:10'];
    const { getAllByRole } = render(<DateTimeRange name={validName} value={['10.10.2010 10:10', '12.12.2010 10:10']} />);

    expect(getAllByRole('textbox'))
      .toHaveLength(2);

    getAllByRole('textbox').forEach((input, index) => {
      expect(input)
        .toHaveAttribute('value');

      expect(input)
        .toHaveValue(dateValue[index]);
    });
  });
  test('is DateTimeRange render right if value set as Date', () => {
    const dateValue = ['10.10.2010 10:10', '12.12.2010 10:10'];
    const { getAllByRole } = render(<DateTimeRange name={validName} value={[new Date('10.10.2010 10:10'), new Date('12.12.2010 10:10')]} />);

    expect(getAllByRole('textbox'))
      .toHaveLength(2);

    getAllByRole('textbox').forEach((input, index) => {
      expect(input)
        .toHaveAttribute('value');

      expect(input)
        .toHaveValue(dateValue[index]);
    });
  });
  test('is DateTimeRange render right if value set as Null', () => {
    const dateValue = ['', ''];
    const { getAllByRole } = render(<DateTimeRange name={validName} value={[null, null]} />);

    expect(getAllByRole('textbox'))
      .toHaveLength(2);

    getAllByRole('textbox').forEach((input, index) => {
      expect(input)
        .toHaveAttribute('value');

      expect(input)
        .toHaveValue(dateValue[index]);
    });
  });
});
