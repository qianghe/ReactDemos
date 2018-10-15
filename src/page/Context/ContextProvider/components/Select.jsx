import React from 'react'

const Select = ({ source, onChange, currentVal }) => (
    <select value={currentVal} onChange={e => onChange(e.target.value)}>
        {
            source.map((item, index)=> (
                <option
                    key={`theme_${index}`} 
                    value={item}
                >
                    {item}
                </option>
            ))
        }
    </select>
);

export default Select;