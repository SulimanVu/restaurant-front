import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

function PaymentForm() {
  const [isGiftChecked, setIsGiftChecked] = useState(false);

  const handleGiftCheckboxChange = (event) => {
    setIsGiftChecked(event.target.checked);
  };

  return (
    <Container maxWidth="sm" style={{ width: '50%'}}>
      <Typography variant="h4" gutterBottom>
        Оплата
      </Typography>
      <form action="обработчик_формы.php" method="post">
        <TextField
          label="Имя"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Фамилия"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isGiftChecked}
              onChange={handleGiftCheckboxChange}
            />
          }
          label="Подарок"
        />
        {isGiftChecked && (
          <TextField
            label="Адрес подарка"
            fullWidth
            margin="normal"
            required
          />
        )}
        <TextField
          label="Комментарий"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="payment-method-label">Способ оплаты</InputLabel>
          <Select
            labelId="payment-method-label"
            label="Способ оплаты"
            defaultValue=""
            required
          >
            <MenuItem value="">Выберите способ оплаты</MenuItem>
            <MenuItem value="credit-card">Кредитная карта</MenuItem>
            <MenuItem value="paypal">PayPal</MenuItem>
          </Select>
        </FormControl>
        <Box mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Оплатить
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default PaymentForm;
