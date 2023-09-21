import { KintoneApi } from '@/service/kintoneApi'
import { useState, useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

export default function App() {
  const getList = async () => {
    const kintoneClient = new KintoneApi()
    const result = await kintoneClient.getAllRecords()
    return result
  }
  const [lsit, setData] = useState(null);
  useEffect(() => {
    // 异步数据获取
    async function fetchData() {
      try {
        const response = await getList();
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); // 调用异步函数
  }, []);
  return (
    <div>
      <List>
        {lsit !== null && lsit.map(({ num, price, desc, title, thumb }, index) => (
          <ListItem sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            p: 2,
            minWidth: 300,
          }} key={index}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={thumb.value} />
            </ListItemAvatar>
            <ListItemText primary={title.value} secondary={desc.value} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
