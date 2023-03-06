import '@/assets/style/App.css'
import Router from './router'
import { ConfigProvider } from 'antd'
// import zhCn from 'antd/lib/locale/zh_CN'
// import enUS from 'antd/lib/locale/en_US'

function App () {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#2b73af' } }}>
      <Router />
    </ConfigProvider>
  )
}

export default App
