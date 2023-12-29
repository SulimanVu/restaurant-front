
import Card from '@mui/material/Card';
import  Typography  from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import styles from './List/List.module.scss'
import { useState } from 'react';

export const Item = ({item}: any) => {

  const [ cart, setCart] = useState(0)

  const handleClick = (type: any) => {
    if(type === 'plus') {
      setCart((prev: number) => prev + 1)
    }
    if(type === 'minus') {
      setCart((prev: number) => prev - 1)
    }
  }

  return (
    <Card sx={{ maxWidth: '100%', mb: '20px', display: 'flex', height: '100px', position: 'relative', padding: '10px' }}>
        <img src="https://mui.com/static/images/cards/paella.jpg" alt="" />
        <CardContent >
          <Typography variant="body1" color="text.primary" className={styles.description} >
          {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.description}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
          </Typography>
        </CardContent>
        <CardContent className={styles.buttons}>
          <div className={styles.counter}>{cart}</div>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button className={styles.button} onClick={() => handleClick('plus')}>+</Button>
            <Button className={styles.button} onClick={() => handleClick('minus')}>-</Button>
          </ButtonGroup>
        </CardContent>
      </Card>
  )
}