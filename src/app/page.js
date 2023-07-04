'use client'

import { useEffect, useState } from "react"

export const getCustomers = async () => {
  const url = process.env.TRAVEL_API
  const res = await fetch(`${url}/travel/customers`,
    // { next: { revalidate: 10 } }
    { cache: 'no-store' }
  )
  return res.json()
}

const CustomDowpdown = () => {
  const [dropdown, setDropdown] = useState(false)

  const handlerDropDown = () => {
    setDropdown(!dropdown)
  }

  console.log(dropdown)
  return (
    <div className="input-group">
      <div className={`input-group-btn ${dropdown ? 'open' : ''}`}>
        <button onClick={handlerDropDown} className="btn btn-default dropdown-toggle" type="button">
          Cliente(s) <span className="caret"></span>
        </button>
        <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`}>

          <li>
            <div href="#">
              <input type="checkbox" />
              <span className="lbl">Todos</span>
            </div>
          </li>

          <li className="divider"></li>
          <li>
            <div href="#">
              <input type="checkbox" />
              <span className="lbl"> Monday</span>
            </div>
          </li>

          <li>
            <div href="#">
              <input type="checkbox" />
              <span className="lbl"> Tuesday</span>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

const CustomDowpdown2 = () => {
  const [dropdown, setDropdown] = useState(false)
  const [checkboxes, setCheckboxes] = useState({
    '0': false,
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
  });
  console.log(checkboxes)

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    console.log(value)

    if (value === 'allCheck'){
      setCheckboxes((prevState) => ({
        ...prevState,
        '0': checked,
        '1': checked,
        '2': checked,
        '3': checked,
        '4': checked,
        '5': checked,
        allCheck: checked
      }));
    } else {
      setCheckboxes((prev) => ({
        ...prev,
        [value]: checked,
        allCheck: false,
      }) )
    } 
  }

  const handlerDropDown = () => {
    setDropdown(!dropdown)
  }


  const people = [
    {
      dk: '0',
      name: 'Creola Katherine Johnson',
    },
    {
      dk: '1',
      name: 'Mario José Molina-Pasquel Henríquez',
    },
    {
      dk: '3',
      name: 'Mohammad Abdus Salam',
    },
    {
      dk: '4',
      name: 'Percy Lavon Julian',
    },
    {
      dk: '5',
      name: 'Subrahmanyan Chandrasekhar',
    }
  ]

  const listItems = people.map(
    ({dk, name}) =>
      <li key={dk}>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value={dk} onClick={handleCheckboxChange} checked={checkboxes[dk]} />
          <span>{dk} {name}</span>
        </div>
      </li>
  );

  return (
    <div className="input-group">
      <div className={`input-group-btn ${dropdown ? 'open' : ''}`}>
        <button onClick={handlerDropDown} className="btn btn-default dropdown-toggle" type="button">
          Cliente(s) <span className="caret"></span>
        </button>
        <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`}>
          <li>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="allCheck" checked={checkboxes.allCheck} onClick={handleCheckboxChange}/>
              <span>Todos</span>
            </div>
            <div className="dropdown-divider"></div>
          </li>
          {listItems}
        </ul>
      </div>
    </div>
  )
}


export default async function Home() {

  //const customers = await getCustomers()

  return (
    <main>
      <CustomDowpdown2 />
    </main>
  )
}
