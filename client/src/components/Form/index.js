import React, { useState, useCallback, useEffect } from "react";

import { generateID } from "../../helpers/helpers";
const Form = () => {
  const [placeholder, setPlaceholder] = useState("income");
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    id: 0,
    type: 'income',
    value: 0,
    description: '',
    currency: '',
    time: new Date(),
  })
  // const item = {
  //   id: 1,
  //   type: 'income', // income || expense
  //   description: '',
  //   value: 500,
  //   currency: 'XAF', // XAF || EUR || USD,
  //   time: new Date()
  // }
  const handleFormChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // console.log('form: ', form)
  }
  // useCallback(() => {

  // })

  useEffect(() => {
    
  }, [form]);

  const handleAdd = (e) => {
    e.preventDefault();
    setForm({ ...form, id: new Date().getTime()})
    setData([...data, form]);
    console.log('data: ', data)
  }

  return (
    <div>
      <form>
        <select onChange={(e) => {
          setPlaceholder(e.target.value);
          console.log('e.target.value: ', e.target.value)
          handleFormChange(e);
        }}
          name="type"
        >
          <option value="income">+</option>
          <option value="expense">-</option>
        </select>
        <select onChange={handleFormChange} name="currency">
          <option value="XAF">XAF</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
        <input type="text" onChange={handleFormChange} name="value" value={form.value} placeholder={placeholder + ' value'} />
        <input type='text' onChange={handleFormChange} name="description" value={form.description} placeholder="short description" />
        <button onClick={handleAdd}>add</button>
      </form>
      <div>
        <div>
          <h3>Incomes</h3>
          <ul>
            {data.filter(item => item.type === 'income').map(item => <li key={item.id}>{`${item.value} - ${item.description}`}</li>)}
          </ul>
        </div>
        <div>
          <h3>Expenses</h3>
          <ul>
            {data.filter(item => item.type === 'expense').map(item => <li key={item.id}>{`${item.value} - ${item.description}`}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
