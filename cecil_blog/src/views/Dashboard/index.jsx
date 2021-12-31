import React from 'react'
import Header from '../../components/Header'

const DashBoard = () => {
  const navList = [
    { path: '/', text: '首页' },
    {
      text: '侧丝滑', children: [
        { text: '111', path: '/' }
      ]
    }
  ]
  return (
    <div className="dashboard">
      <Header
        title="测试"
        logo="/"
        navList={navList}
      />
      111
    </div>
  )
}

export default DashBoard
