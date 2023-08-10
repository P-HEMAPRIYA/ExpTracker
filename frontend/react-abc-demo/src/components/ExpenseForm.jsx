import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function ExpenseForm({ onAddExpense }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('expense'); // Added type field
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title || isNaN(amount) || amount <= 0) {
            return;
        }

        const newExpense = {
            title,
            amount: parseFloat(amount),
            type, // Include the type field in the new expense object
            date,
            description,
        };

        onAddExpense(newExpense);
        setTitle('');
        setAmount(0);
        setType('expense'); // Reset type to 'expense'
        setDate('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Expense Title"
                variant="outlined"
                style={{ width: '400px', marginBottom: '10px', display: 'block'}}
                margin="normal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                label="Amount"
                type="number"
                variant="outlined"
                margin="normal"
                style={{ width: '400px', marginBottom: '10px', display: 'block'  }}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <Select
                label="Type"
                variant="outlined"
                style={{ width: '400px', marginBottom: '10px', display: 'block' }}
                margin="normal"
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <MenuItem value="expense">Expense</MenuItem>
                <MenuItem value="other">Other</MenuItem>
            </Select>
            <TextField
                label="Date"
                type="date"
                variant="outlined"
                margin="normal"
                style={{ width: '400px', marginBottom: '10px', display: 'block' }}
                InputLabelProps={{
                    shrink: true,
                }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <TextField
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                margin="normal"
                style={{ width: '400px', marginBottom: '10px', display: 'block'}}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
                Add Expense
            </Button>
        </form>
    );
}

export default ExpenseForm;
