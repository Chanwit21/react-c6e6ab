import React, { useState } from 'react';

function FilterContainer(props) {
  const { transactionList, detectFilterTransaction } = props;
  const [searchText, setSearchText] = useState('');
  const [filterMonth, setFilterMonth] = useState('');
  const [filterYear, setFilterYear] = useState('');

  // ฟังก์ชั่นเอาไวจัดการกับ Filter return List Transaction ที่ผ่านการ Filter แล้ว
  function filterOutPut(searchText, filterMonth, filterYear) {
    if (searchText && !filterMonth && !filterYear) {
      const newTransactionList = [...transactionList];
      const arrayFilterText = newTransactionList.filter(item => {
        for (let key in item) {
          if (key !== 'id' && key !== 'month' && key !== 'year') {
            if (item[key].includes(searchText)) {
              return true;
            }
          }
        }
        return false;
      });
      return arrayFilterText;
    }

    if (!searchText && filterMonth && !filterYear) {
      const newTransactionList = [...transactionList];
      const arrayFilterMonth = newTransactionList.filter(
        item => item.month === filterMonth
      );
      return arrayFilterMonth;
    }

    if (!searchText && !filterMonth && filterYear) {
      const newTransactionList = [...transactionList];
      const arrayFilterYear = newTransactionList.filter(
        item => item.year === filterYear
      );
      return arrayFilterYear;
    }

    if (searchText && filterMonth && !filterYear) {
      const newTransactionList = [...transactionList];
      const arrayFilterMonth = newTransactionList.filter(
        item => item.month === filterMonth
      );
      const arrayFilterText = arrayFilterMonth.filter(item => {
        for (let key in item) {
          if (key !== 'id' && key !== 'month' && key !== 'year') {
            if (item[key].includes(searchText)) {
              return true;
            }
          }
        }
        return false;
      });
      return arrayFilterText;
    }

    if (searchText && !filterMonth && filterYear) {
      const newTransactionList = [...transactionList];
      const arrayFilterYear = newTransactionList.filter(
        item => item.year === filterYear
      );
      const arrayFilterText = arrayFilterYear.filter(item => {
        for (let key in item) {
          if (key !== 'id' && key !== 'month' && key !== 'year') {
            if (item[key].includes(searchText)) {
              return true;
            }
          }
        }
        return false;
      });
      return arrayFilterText;
    }

    if (!searchText && filterMonth && filterYear) {
      const newTransactionList = [...transactionList];
      const arrayFilterYear = newTransactionList.filter(
        item => item.year === filterYear
      );
      const arrayFilterMonth = arrayFilterYear.filter(
        item => item.month === filterMonth
      );
      return arrayFilterMonth;
    }

    if (searchText && filterMonth && filterYear) {
      const newTransactionList = [...transactionList];
      const arrayFilterMonth = newTransactionList.filter(
        item => item.month === filterMonth
      );
      const arrayFilterYear = arrayFilterMonth.filter(
        item => item.year === filterYear
      );
      const arrayFilterText = arrayFilterYear.filter(item => {
        for (let key in item) {
          if (key !== 'id' && key !== 'month' && key !== 'year') {
            if (item[key].includes(searchText)) {
              return true;
            }
          }
        }
        return false;
      });
      return arrayFilterText;
    }

    if (!(searchText && filterMonth && filterYear)) {
      const newTransactionList = [...transactionList];
      return newTransactionList;
    }
  }

  const handleInputSearchText = e => {
    // console.log(e.target.value);
    setSearchText(e.target.value);
    detectFilterTransaction(
      filterOutPut(e.target.value, filterMonth, filterYear)
    );
  };

  const handleSelectFilterMonth = e => {
    // console.log(e.target.value);
    setFilterMonth(e.target.value);
    detectFilterTransaction(
      filterOutPut(searchText, e.target.value, filterYear)
    );
  };

  const handleSelectFilterYears = e => {
    // console.log(e.target.value);
    setFilterYear(e.target.value);
    detectFilterTransaction(
      filterOutPut(searchText, filterMonth, e.target.value)
    );
  };

  function genListOfMonth(array) {
    const arrayMonth = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec'
    ];
    const monthNumber = [];
    for (let { month } of array) {
      if (!monthNumber.includes(month)) {
        monthNumber.push(month);
      }
    }
    monthNumber.sort((a, b) => a - b);
    // console.log(monthNumber);

    const result = [];
    for (let value of monthNumber) {
      result.push({ value, month: arrayMonth[+value - 1] });
    }
    return result;
  }

  // console.log(genListOfMonth(transactionList));

  function genListOfYears(array) {
    const result = [];
    for (let { year } of array) {
      if (!result.includes(year)) {
        result.push(year);
      }
    }
    result.sort((a, b) => a - b);
    return result;
  }

  const listOption = genListOfMonth(transactionList).map((val, index) => {
    return (
      <option value={val.value} key={index}>
        {val.month}
      </option>
    );
  });

  const yearsOption = genListOfYears(transactionList).map((val, index) => {
    return (
      <option value={val} key={index}>
        {val}
      </option>
    );
  });

  return (
    <div className="row g-3 mt-3">
      <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          placeholder="Enter to search"
          value={searchText}
          onChange={e => handleInputSearchText(e)}
        />
      </div>
      <div className="col-sm-3">
        <select
          className="form-select"
          value={filterMonth}
          onChange={e => handleSelectFilterMonth(e)}
        >
          <option value="">Filter Month</option>
          {listOption}
        </select>
      </div>
      <div className="col-sm-3">
        <select
          className="form-select"
          value={filterYear}
          onChange={e => handleSelectFilterYears(e)}
        >
          <option value="">Filter Year</option>
          {yearsOption}
        </select>
      </div>
    </div>
  );
}

export default FilterContainer;
